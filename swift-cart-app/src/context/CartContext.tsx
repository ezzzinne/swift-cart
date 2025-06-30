import { createContext, useContext, useReducer } from "react";

export interface CartItem {
    id: number;
    name: string;
    price: number;  
    quantity: number;
    image: string;
}

type State = {
    items: CartItem[];
    discount: number;
    total: number;
}

type Action =
    | { type: 'ADD_ITEM'; payload: CartItem }
    | { type: 'REMOVE_ITEM'; payload: number }
    | { type: 'UPDATE_QUANTITY'; payload: { id: number; quantity: number } }
    | { type: 'APPLY_DISCOUNT'; payload: number };

const initialState: State = {
    items: [],
    discount: 0,
    total: 0,
};

const CartContext = createContext<{
  state: State;
  dispatch: React.Dispatch<Action>;
}>({
  state: initialState,
  dispatch: () => null,
});

const cartReducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'ADD_ITEM':
            { const existingItem = state.items.find(item => item.id === action.payload.id);
            if (existingItem) {
                return {
                    ...state,
                    items: state.items.map(item =>
                        item.id === action.payload.id
                            ? { ...item, quantity: item.quantity + action.payload.quantity }
                            : item
                    ),
                    total: state.total + action.payload.price * action.payload.quantity,
                };
            } else {
                return {
                    ...state,
                    items: [...state.items, action.payload],
                    total: state.total + action.payload.price * action.payload.quantity,
                };
            } 
        };
        case 'REMOVE_ITEM':
            { const itemToRemove = state.items.find(item => item.id === action.payload);
            if (!itemToRemove) return state;
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload),
                total: state.total - itemToRemove.price * itemToRemove.quantity,
            }; }
        case 'UPDATE_QUANTITY':
            { const updatedItems = state.items.map(item =>
                item.id === action.payload.id ? { ...item, quantity: action.payload.quantity } : item
            );
            const updatedTotal = updatedItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
            return {
                ...state,
                items: updatedItems,
                total: updatedTotal,
            }; }
        case 'APPLY_DISCOUNT':
            return {
                ...state,
                discount: action.payload,
                total: state.total - action.payload,
            };
        default:
            return state;
    }
};

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    return (
        <CartContext.Provider value={{ state, dispatch }}>
            {children}
        </CartContext.Provider>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => useContext(CartContext);