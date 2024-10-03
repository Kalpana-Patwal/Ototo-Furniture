import React from 'react';
import './Products.css';
import ProductDetail from '../ProductDetail'; 
import Product1 from '../../assets/Product1.jpg'
import Product2 from '../../assets/Product2.jpg'
import Product3 from '../../assets/Product3.jpg'
import Product4 from '../../assets/Product4.jpg'
import Product5 from '../../assets/Product5.jpg'
import Product6 from '../../assets/Product6.jpg'
import Product7 from '../../assets/Product7.jpg'
import Product8 from '../../assets/Product8.jpg'

const Products = () => {
 
  const products = [
    {
      name: 'Rack',
      image: Product1,
      price: 120,
      description: 'A stylish wooden rack for storage.',
      size: '120x60x40 cm',
      material: 'Wood',
    },
    {
      name: 'Lounge',
      image: Product2,
      price: 90,
      description: 'Compact shoe cabinet with multiple shelves.',
      size: '100x50x30 cm',
      material: 'Wood',
    },
    {
      name: 'Sitting Area',
      image:Product3,
      price: 250,
      description: 'Spacious almirah for all your clothes.',
      size: '180x90x50 cm',
      material: 'Metal',
    },
    {
        name: 'Dinning',
        image:Product4,
        price: 120,
        description: 'A stylish wooden rack for storage.',
        size: '120x60x40 cm',
        material: 'Wood',
      },
      {
        name: 'Almirah',
        image: Product5,
        price: 90,
        description: 'Compact shoe cabinet with multiple shelves.',
        size: '100x50x30 cm',
        material: 'Wood',
      },
      {
        name: 'Cabinet',
        image: Product6,
        price: 250,
        description: 'Spacious almirah for all your clothes.',
        size: '180x90x50 cm',
        material: 'Metal',
      },
      {
        name: 'Lunch',
        image: Product7,
        price: 90,
        description: 'Compact shoe cabinet with multiple shelves.',
        size: '100x50x30 cm',
        material: 'Wood',
      },
      {
        name: 'Coffee Dates',
        image:Product8,
        price: 250,
        description: 'Spacious almirah for all your clothes.',
        size: '180x90x50 cm',
        material: 'Metal',
      },
  ];

  return (
    <div className="products-list">
      {products.map((product, index) => (
        <ProductDetail key={index} product={product} />
      ))}
    </div>
  );
};

export default Products;
