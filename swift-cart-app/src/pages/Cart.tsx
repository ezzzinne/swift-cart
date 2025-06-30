import { useState } from "react";
import { useCart } from "../context/CartContext";

const Cart = () => {
    const { state, dispatch } = useCart();
    const [ coupon, setCoupon ] = useState("");

    const totalItems = state.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const discountAmount = totalItems * state.discount;
    const discountedTotal = totalItems - discountAmount;

    const applyCoupon = () => {
        const couponRegex = /^powerlabsx$/i;
        if (couponRegex.test(coupon.trim())) {
            dispatch({ type: "APPLY_DISCOUNT", payload: 0.132 });
            setCoupon("");
        } else {
            alert("Invalid coupon code");
        }
    };

    const updateQuantity = (id: number, quantity: number) => {
        if (quantity < 1) {
            alert("Quantity must be at least 1");
            return;
        }
        dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } });
    };

    return ( 
        <section className="cart-page">
            <div className="cart-container">
                <h2>Order Summary</h2>

                {state.items.length === 0 ? (
                    <p className="empty-cart">🛒 Your cart is empty.</p>
                ) : (
                    state.items.map(item => (
                        <div key={item.id} className="cart-item">
                            <img src={item.image} alt={item.name} />
                            <div className="cart-item-info">
                                <h3>{item.name}</h3>
                                <p>Price: ${item.price.toFixed(2)} x {item.quantity}</p>
                            </div>
                            <div className="cart-actions">
                                <button
                                    onClick={() =>
                                    dispatch({
                                        type: "UPDATE_QUANTITY",
                                        payload: { id: item.id, quantity: item.quantity + 1 },
                                    })
                                    }
                                >+</button>
                                <button
                                    onClick={() =>
                                    updateQuantity(item.id, item.quantity - 1)
                                    }
                                >-</button>
                                <button onClick={() => dispatch({ type: "REMOVE_ITEM", payload: item.id })}>Remove</button>
                            </div>
                        </div>
                    )
                ))
                }   
            </div>

            {state.items.length > 0 && (
                <>
                    <hr />
                    <div className="discount-section">
                        <input
                            type="text"
                            value={coupon}
                            onChange={e => setCoupon(e.target.value)}
                            placeholder="Enter coupon code"
                        />
                        <button onClick={applyCoupon}>Apply Coupon</button>
                    </div>
                    <div className="total-box">
                        <p><strong>Subtotal:</strong> ${totalItems.toFixed(2)}</p>
                        {state.discount > 0 && (
                            <p><strong>Discount (13.2%):</strong> -${discountAmount.toFixed(2)}</p>
                        )}
                        <p><strong>Total:</strong> ${discountedTotal.toFixed(2)}</p>
                        <button className="checkout-button">Proceed to Checkout</button>
                    </div>
                </>
            )}
            
        </section>
    )

};

export default Cart;
