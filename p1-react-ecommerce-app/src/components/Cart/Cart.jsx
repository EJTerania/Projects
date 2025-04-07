import { Link } from 'react-router-dom';
import './Cart.css'

const Cart = ({ cart, setCart }) => {

    const removeFromCart = (index) => {
        setCart(cart.filter((_, i) => i !== index));
    };

    return (
        <div className="cart-page">
            <h2>🛒 Your Cart</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <ul>
                    {cart.map((item, index) => (
                        <li key={index}>
                            <img src={item.image} alt={item.title} width="50" />
                            <p>{item.title}</p>
                            <p>Price: ₱{item.price}</p>
                            <button onClick={() => removeFromCart(index)}>Remove</button>
                        </li>
                    ))}
                </ul>
            )}
            <Link to="/">⬅️ Back to Products</Link>
        </div>
    );
};

export default Cart;
