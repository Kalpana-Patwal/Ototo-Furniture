import React, { useState, useEffect } from 'react';
import logo from '../../assets/logo.webp';
import './ShopNow.css';
import cart from '../../assets/cart.png';
import user from '../../assets/user.png';
import search_icon from '../../assets/Search.png';
import Furniture1 from '../../assets/Furniture1.jpg';
import Furniture2 from '../../assets/Furniture2.jpg';
import Furniture3 from '../../assets/Furniture3.jpg';
import ShopChair1 from '../../assets/ShopChair1.png'
import ShopChair9 from '../../assets/ShopChair9.png'
import ShopChair5 from '../../assets/ShopChair5.png'
import ShopChair6 from '../../assets/ShopChair6.png'
import ShopChair8 from '../../assets/ShopChair8.png'
import ShopSofa1 from '../../assets/ShopSofa1.jpg'
import ShopSofa2 from '../../assets/ShopSofa2.jpg'
import ShopSofa3 from '../../assets/ShopSofa3.jpg'
import ShopSofa4 from '../../assets/ShopSofa4.jpg'
import ShopSofa5 from '../../assets/ShopSofa5.jpg'
import ShopSofa6 from '../../assets/ShopSofa6.jpg'
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
        <div className="nav2">
          <ul className="second-nav">
            <li>Living Room</li>
            <li>Bed Room</li>
            <li>Dining Room</li>
            <li>Study Room</li>
            <li>Luxury Furniture</li>
            <li>Home Decor</li>
          </ul>
        </div>
        
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
            <div className="text">
            <h4>Our Products</h4>
            <p>Explore our entire range of distinctive furniture design</p>
            </div>
          
      <div className="Chairs">
          <div className="Chairsbg">
            <div className="chair-card">
              <img src={ShopChair1} alt="Chair 1" />
              <p>Elegance Recliner</p>
              <p>Price -$120</p>
            </div>
            <div className="chair-card">
          <img src={ShopChair6} alt="Chair 2" />
          <p>Nordic Lounge Chair</p>
          <p>Price -$510</p>
            </div>
            <div className="chair-card">
          <img src={ShopChair9} alt="Chair 2" />
          <p>Vintage Rocking Chair</p>
          <p>Price -$580</p>
            </div>
            <div className="chair-card">
          <img src={ShopChair8} alt="Chair 2" />
          <p>Ergonomic Mesh Chair</p>
          <p>Price -$650</p>
            </div>
            <div className="chair-card">
          <img src={ShopChair6} alt="Chair 2" />
          <p>Coastal Rattan Chair </p>
          <p>Price -$170</p>
            </div>
            <div className="chair-card">
          <img src={ShopChair5} alt="Chair 2" />
          <p>Luxury Velvet Armchair</p>
          <p>Price -$420</p>
            </div>  
          </div>  
      </div>

    


      <div className="Chairs">
          <div className="Chairsbg">
            <div className="chair-card">
              <img src={ShopSofa1} alt="Chair 1" />
              <p>Classic Leather Couch</p>
              <p>Price -$820</p>
            </div>
            <div className="chair-card">
              <img src={ShopSofa2} alt="Chair 1" />
              <p> Sleeper Sofa</p>
              <p>Price -$680</p>
            </div>
            <div className="chair-card">
              <img src={ShopSofa3} alt="Chair 1" />
              <p>Elegant Velvet Chaise</p>
              <p>Price -$520</p>
            </div>
            <div className="chair-card">
              <img src={ShopSofa4} alt="Chair 1" />
              <p> Modern Sofa</p>
              <p>Price -$780</p>
            </div>
            <div className="chair-card">
              <img src={ShopSofa5} alt="Chair 1" />
              <p>Urban Luxe Sectional</p>
              <p>Price -$350</p>
            </div>
            <div className="chair-card">
              <img src={ShopSofa6} alt="Chair 1" />
              <p>Opulence Corner Sofa</p>
              <p>Price -$220</p>
            </div>
          </div>
      </div>

      <div className="Chairs">
          <div className="Chairsbg">
            <div className="chair-card">
              <img src={ShopChair1} alt="Chair 1" />
              <p>Elegance Recliner</p>
              <p>Price -$120</p>
            </div>
            <div className="chair-card">
          <img src={ShopChair6} alt="Chair 2" />
          <p>Nordic Lounge Chair</p>
          <p>Price -$510</p>
            </div>
            <div className="chair-card">
          <img src={ShopChair9} alt="Chair 2" />
          <p>Vintage Rocking Chair</p>
          <p>Price -$580</p>
            </div>
            <div className="chair-card">
          <img src={ShopChair8} alt="Chair 2" />
          <p>Ergonomic Mesh Chair</p>
          <p>Price -$650</p>
            </div>
            <div className="chair-card">
          <img src={ShopChair6} alt="Chair 2" />
          <p>Coastal Rattan Chair </p>
          <p>Price -$170</p>
            </div>
            <div className="chair-card">
          <img src={ShopChair5} alt="Chair 2" />
          <p>Luxury Velvet Armchair</p>
          <p>Price -$420</p>
            </div>  
          </div>  
      </div>


    </div>
  );
};

export default ShopNow;
