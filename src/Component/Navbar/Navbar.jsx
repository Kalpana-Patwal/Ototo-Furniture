import React, { useState } from 'react';
import logo from '../../assets/logo.webp';
import close from '../../assets/close.png';
import Menu from '../../assets/menu.png';
import './Navbar.css';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate=useNavigate();
  
  const CategoryHandler=()=>{
    navigate('/shopnow')
  }
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="navbar">
      <img src={logo} alt="Logo" />
      

      <div className="navbar-content large-menu">
        <ul>
          <li>Home</li>
          <li onClick={CategoryHandler}>Category</li>
          <li>Stores</li>
          <li>Contact</li>
          <li>Login/SignUp</li>
        </ul>
      </div>

      <div className="menu-icon">
        <img src={Menu} alt="Menu" onClick={toggleSidebar} />
      </div>

    
      <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <ul>
          <li><a onClick={toggleSidebar}><img src={close} alt="Close" /></a></li> {/* Close Icon */}
          <li>Home</li>
          <li onClick={CategoryHandler}>Category</li>
          <li>Stores</li>
          <li>Contact</li>
          <li>Login/SignUp</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
