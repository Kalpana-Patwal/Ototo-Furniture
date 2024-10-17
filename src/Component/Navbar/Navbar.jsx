import React, { useState } from 'react';
import logo from '../../assets/logo.webp';
import close from '../../assets/close.png';
import Menu from '../../assets/menu.png';
import './Navbar.css';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const LoginHandler = () => {
    navigate('/login');
  };

  const CategoryHandler = () => {
    navigate('/shopnow');
  };

  const HomeHandler = () => {
    navigate('/');
  };

  const scrollToFooter = () => {
    
    const footerElement = document.getElementById('foot');
    console.log(footerElement); 
    if (footerElement) {
      footerElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="navbar">
      <img src={logo} alt="Logo" />

      <div className="navbar-content large-menu">
        <ul>
          <li onClick={HomeHandler}>Home</li>
          <li onClick={CategoryHandler}>Category</li>
          <li onClick={scrollToFooter}>Stores</li>
          <li onClick={scrollToFooter}>Contact</li>
          <li onClick={LoginHandler}>Login/SignUp</li>
        </ul>
      </div>

      <div className="menu-icon">
        <img src={Menu} alt="Menu" onClick={toggleSidebar} />
      </div>

      <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <ul>
          <li>
            <a onClick={toggleSidebar}>
              <img src={close} alt="Close" />
            </a>
          </li>
          <li onClick={HomeHandler}>Home</li>
          <li onClick={CategoryHandler}>Category</li>
          <li>Stores</li>
          <li onClick={scrollToFooter}>Contact</li>
          <li onClick={LoginHandler}>Login/SignUp</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
