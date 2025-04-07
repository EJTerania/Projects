import ProductList from "../ProductList/ProductList";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './Header.css'
import ProductDetails from "../ProductDetails/ProductDetails";
import Cart from "../Cart/Cart";
import { useState } from 'react';

const Header = () => {
  const [cart, setCart] = useState([]);  

    return (
        <div>               
            <Router>
                <nav className="nav-links">       
                    <Link to="/" className="btnList">🛍️Products</Link>        
                    <Link to="/cart">🛒Cart ({cart.length})</Link>
                </nav>    

                <Routes>
                    <Route path="/" element={<ProductList cart={cart} setCart={setCart} />} />
                    <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
                    <Route path="/product/:productID" element={<ProductDetails />} />
                </Routes>
            </Router>
        </div>
    )
}

export default Header;
