import React, { useState } from 'react';
import logo from '../../assets/logo.webp';
import './ShopNow.css';
import cart from '../../assets/cart.png';
import user from '../../assets/user.png';
import search_icon from '../../assets/Search.png';

const ShopNow = () => {
  const [language, setLanguage] = useState('English');
  const[Category,setCategory]=useState('All');


  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  const handleCategoryChange=(e)=>{
    setCategory(e.target.value);
  }
  return (
    <div>
      <nav>
        <ul className='ShopNow_list'>
          <li><img src={logo} alt="Logo" className="logo" /><h2>Ototo</h2></li>
          <li className="search-container">
            <input type="search" placeholder='Search Your Product' />
            <img src={search_icon} alt="Search" className="search-icon" />

            <select  value={Category}  onChange={handleCategoryChange} className="category-dropdown">
              <option value="All">All</option>
              <option value="Furnace">Furnace</option>
              <option value="Tables">Tables</option>
              <option value="Chairs">Chairs</option>
              <option value="Sofa">Sofa</option>
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
            <span className="add-to-cart">Add To Cart <img src={cart} alt="Cart" /></span>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default ShopNow;
