import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetails.css';

const ProductDetails = () => {
    const { productID } = useParams();
    const [product, setProduct] = useState(null);  
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        fetch(`https://fakestoreapi.com/products/${productID}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Failed to fetch product details");
                }
                return response.json();
            })
            .then(data => {
                setProduct(data);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setError(err.message);
                setLoading(false);
            });
    }, [productID]); 

    if (loading) return <p>Loading product details...</p>;
    if (error) return <p>Error: {error}</p>;
    if (!product) return <p>Product not found.</p>; 

    return (
        <div className="product-details-container">
            <ul>            
                <li key={product.id}>
                    <img className="product-details-image" src={product.image} alt={product.title} />
                    <h2 className="product-details-title">{product.title}</h2>
                    <p className="product-details-price">Price🏷️: ₱{product.price}</p> 
                    <p>{product.description}</p>                       
                </li>                            
            </ul>
        </div>
    );
};

export default ProductDetails;
