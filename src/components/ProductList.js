import React from 'react';
import ProductCard from './ProductCard';

export default function ProductList() {
    const products = [
        {
            imageSrc: './images/pottery3.jpg',
            productName: 'Comic Vase',
            price: '200€',
            description: 'Beautiful handcrafted vase with a comic theme for your home decor.',
        },
        {
            imageSrc: './images/pottery2.jpg',
            productName: 'Collection',
            price: '250€',
            description: 'Elegant collection for the exquisite taste.',
        },
        {
            imageSrc: './images/pottery4.jpg',
            productName: 'Beautiful bowl',
            price: '100€',
            description: 'Perfect bowl for adding a touch of class to your living room.',
        },
    ];

    return (
        <div className="product-list">
            {products.map((product, index) => (
                <ProductCard
                    key={index}
                    imageSrc={product.imageSrc}
                    productName={product.productName}
                    price={product.price}
                    description={product.description}
                />
            ))}
        </div>
    );
}
