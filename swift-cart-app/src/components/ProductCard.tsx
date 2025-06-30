import React from 'react';
import type { Product } from "../app/productsApi";
import { useCart } from "../context/CartContext";
import Cart from "../assets/cart-icon.svg";
import Star from '../assets/star.svg';
import EmptyStar from '../assets/empty-star.svg';

interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const { dispatch } = useCart();
    const [added, setAdded] = React.useState<boolean>(false);

    const handleAddToCart = () => {
        dispatch({ type: 'ADD_ITEM', payload: { ...product, quantity: 1 } });
        setAdded(true);
        setTimeout(() => setAdded(false), 1500);
    };

    return (
        <section className="product-card">
            <div>
              <img src={product.image} alt={product.name} className="product-image" />   
            </div>
            <h5 className="product-name">{product.name}</h5>
            <div className="stars">
                <img src={Star} alt="star" />
                <img src={Star} alt="star" />
                <img src={Star} alt="star" />
                <img src={Star} alt="star" />
                <img src={EmptyStar} alt="empty star" />
            </div>
            <h5 className="product-description">{product.description}</h5>
            <section className="price-container">
                <h5 className="price">${product.price.toFixed(2)}</h5>
                <div className="add-to-cart">
                    <button className="icon-button" onClick={handleAddToCart}>
                        <img src={Cart} alt="" />
                    </button>
                    {added && <span className="feedback">Added!</span>}
                </div>
            </section>
            
        </section>
    );
};

export default ProductCard;