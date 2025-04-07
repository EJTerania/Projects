import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ProductList.css';

const ProductList = ({ cart, setCart }) => {  
    const [products, setProducts] = useState([]);
    const [searchQuery, setSearchQuery] = useState(""); 
    const [selectedCategory, setSelectedCategory] = useState(""); 

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => setProducts(data));
    }, []);

    const filteredProducts = products.filter((product) => 
        product.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
        (selectedCategory === "" || product.category === selectedCategory)
    );

    const addToCart = (product) => {
        setCart([...cart, product]);
    };

    return (
        <div className='product-list-container'>
            <div className="search-container">
                <input
                    type="text"
                    placeholder="Search item"
                    className="search-box"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>

            <div className="category-dropdown">               
                <select 
                    value={selectedCategory} 
                    onChange={(e) => setSelectedCategory(e.target.value)}>
                    <option value="">All Categories</option>
                    <option value="men's clothing">Men's Clothing</option>
                    <option value="jewelery">Jewelry</option>
                    <option value="electronics">Electronics</option>
                    <option value="women's clothing">Women's Clothing</option>
                </select>
            </div>

            <ul>
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                        <li key={product.id}>
                            <img className="product-list-image" src={product.image} alt={product.title} />
                            <Link to={`/product/${product.id}`} id="product-list-link">
                                <p className="product-list-title">{product.title}</p>
                            </Link>
                            <p className="product-list-price">Price🏷️: ₱{product.price}</p>
                            <button onClick={() => addToCart(product)}>Add to Cart</button>
                        </li>
                    ))
                ) : (
                    <div className="no-products">No products found.</div> 
                )}
            </ul>
        </div>
    );
}

export default ProductList;
