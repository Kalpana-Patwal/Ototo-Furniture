import React from 'react'
import logo from '../../assets/logo.webp'
import './Navbar.css'
const Navbar = () => {
  return (
  
    <div className="navbar" id="nav">
      
        <img src={logo} alt=""/>
      
      <div className="navbar-content">
        <ul>
            <li>Home</li>
            <li>Category</li>
            <li>Stores</li>
            <li>Contact</li>
        </ul>
      </div>

      
    </div>
  )
}

export default Navbar
