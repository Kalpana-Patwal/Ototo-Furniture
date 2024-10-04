import React, { useEffect, useRef, useState } from 'react';

const ProductDetail = ({ product }) => {
    const { name, image, price, description, size, material } = product;
    const productRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                    }
                });
            },
            {
                threshold: 0.1, // trigger when 10% of the item is visible
            }
        );

        if (productRef.current) {
            observer.observe(productRef.current);
        }

        return () => {
            if (productRef.current) {
                observer.unobserve(productRef.current);
            }
        };
    }, []);

    return (
        <div
            className={`product-detail ${isVisible ? 'pop-up' : ''}`}
            ref={productRef}
        >
            <div className="product-image">
                <img src={image} alt={name} />
                <div className="buttons">
                    <button className="buy-now">Buy Now</button>
                    <button className="add-to-cart">Add to Cart</button>
                </div>
            </div>
            <div className="product-info">
                <h2>{name}</h2>
                <p>{description}</p>
                <h4>Price: ${price}</h4>
                <p>Size: {size}</p>
                <p>Material: {material}</p>
            </div>
        </div>
    );
};

export default ProductDetail;
