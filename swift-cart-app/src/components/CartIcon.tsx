import { useCart } from "../context/CartContext"
import { Link } from "react-router-dom";
import Cart from "../assets/cart-icon.svg";

const CartIcon = () => {
  const { state } = useCart();
  const totalItems = state.items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Link to="/cart" className="cart-icon-container">
      <img src={Cart} alt="" className="cart-icon" />
      {totalItems > 0 && <span className="badge">{totalItems}</span>}
    </Link>
  );
};

export default CartIcon;
