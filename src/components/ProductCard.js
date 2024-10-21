import React, { useEffect, useState } from "react";
import '../styles/productcard.css'
export default function ProductCard({ imageSrc, productName, price, description }) {
    // Lazy Load these, probably done in another component but still!
    // Add another style based on if the product is sold.
    const [aspectRatio, setAspectRatio] = useState('landscape');
    // Replace this with your actual image source
    // const imageSrc = './images/pottery3.jpg';
    // const imageSrc2 = './images/pottery2.jpg';
    useEffect(() => {
        const img = new Image();
        img.src = imageSrc;

        img.onload = () => {
            // Determine aspect ratio
            const width = img.width;
            const height = img.height;
            if (width < height) {
                setAspectRatio('portrait');
            } else {
                setAspectRatio('landscape');
            }
        };
    }, [imageSrc]);
    return(
        <div className={`product-card ${aspectRatio}`}>
            <h2 className={`product-name`}>{productName}</h2>
            {aspectRatio === 'portrait' ? (
                <img
                    src={imageSrc}
                    alt={`Vase`}
                    className={`product-image`}
                />
            ) : (
                <div className="product-image-container">
                    <img
                        src={imageSrc}
                        alt={`Vase`}
                        className={`product-image`}
                    />
                </div>
            )}
            <div className="product-info">
                {/*<h2 className="product-name">{productName}</h2>*/}
                <p className="product-price">{price}</p>
                <p className="product-description">{description}</p>
                <button className="add-to-cart-button">Add to Cart</button>
            </div>
        </div>
    );
}