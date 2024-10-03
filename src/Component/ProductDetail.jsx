import React from 'react';

const ProductDetail = ({ product }) => {
    const { name, image, price, description, size, material } = product;

    return (
        <div className="product-detail">
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
