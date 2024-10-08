import React, { useState, useEffect } from 'react';
import logo from '../../assets/logo.webp';
import './ShopNow.css';
import cart from '../../assets/cart.png';
import user from '../../assets/user.png';
import search_icon from '../../assets/Search.png';
import Furniture1 from '../../assets/Furniture1.jpg';
import Furniture2 from '../../assets/Furniture2.jpg';
import Furniture3 from '../../assets/Furniture3.jpg';

const ShopNow = () => {
  const [language, setLanguage] = useState('English');
  const [category, setCategory] = useState('All');
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      background: Furniture1,
      text: 'Luxury Tableware',
    },
    {
      background: Furniture2, 
      text: 'Cozy Comfort',
    },
    {
      background: Furniture3, 
      text: 'Relax & Unwind',
    },
  ];

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => 
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  return (
    <div>
      <nav>
        <ul className='ShopNow_list'>
          <li><img src={logo} alt="Logo" className="logo" /><h2>Ototo</h2></li>
          <li className="search-container">
            <input type="search" placeholder='Search Your Product' />
            <img src={search_icon} alt="Search" className="search-icon" />
            <select value={category} onChange={handleCategoryChange} className="category-dropdown">
              <option value="All">All</option>
              <option value="Furnace">Furnace</option>
              <option value="Tables">Tables</option>
              <option value="Chairs">Chairs</option>
              <option value="Sofa">Sofa</option>
              <option value="Study Table">Study Table</option>
            </select>
          </li>
          <li>
            <select value={language} onChange={handleLanguageChange} className="language-dropdown">
              <option value="English">English</option>
              <option value="Hindi">Hindi</option>
              <option value="Spanish">Spanish</option>
              <option value="French">French</option>
              <option value="German">German</option>
            </select>
          </li>
          <li className="user-cart-group">
            <img src={user} alt="User" className="user-icon" />
            <span className="add-cart"><img src={cart} alt="Cart" /></span>
          </li>
        </ul>
      </nav>

      <div className='carousel'>
        <div 
          className='carousel-inner'
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`carousel-item ${currentSlide === index ? 'active' : ''}`}
              style={{ 
                backgroundImage: `url(${slide.background})`,
                backgroundSize: '80% 350px',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                height: '50vh',
                width: '100%' 
              }}
            >
              <h1>{slide.text}</h1>
            </div>
          ))}
        </div>

        <button className='prev' onClick={prevSlide}>&#10094;</button>
        <button className='next' onClick={nextSlide}>&#10095;</button>
      </div>

    </div>
  );
};

export default ShopNow;
