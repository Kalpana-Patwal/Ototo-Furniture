import React from 'react';
import './Footer.css';
import fb from '../../assets/fb.png'
import yt from '../../assets/yt.png'
import twitter from '../../assets/twitter.png'
import Insta from '../../assets/insta.png'

const Footer = () => {
  return (
    <>
      <div className="main-footer">
        <div className="footer-row">
          <div className="footer-heading">
            <h2>Ototo</h2>
          </div>

          <div className="footer-stores">
            <h4>Stores</h4>
            <ul className="footer-list">
              <li>Mumbai</li>
              <li>Varanasi</li>
              <li>Karnataka</li>
              <li>Delhi</li>
              <li>Gurugram</li>
              <li>Sikkim</li>
              <li>Himachal Pradesh</li>
              <li>Lucknow</li>
              <li>Uttar Pradesh</li>
              <li>Jaipur</li>
            </ul>
          </div>

          <div className="footer-categories">
            <h4>Categories</h4>
            <ul className="footer-list">
              <li>Alloys</li>
              <li>Woods</li>
              <li>Mica</li>
              <li>Plywood</li>
              <li>Metals</li>
              <li>Sandalwood</li>
            </ul>
          </div>

          <div className="footer-extras">
            <div className="social-links">
              <h4>Follow Us</h4>
              <div className="icons">
                <a href="#" className="icon fb"><img src={fb}alt="" /></a>
                <a href="#" className="icon insta"><img src={Insta} alt="" /></a>
                <a href="#" className="icon yt"><img src={yt} alt="" /></a>
                <a href="#" className="icon twitter"><img src={twitter} alt="" /></a>
              </div>
            </div>

            <div className="newsletter">
              <h4>Subscribe to our Newsletter</h4>
              <form>
                <input type="email" placeholder="Enter your email" className="email-input" />
                <button type="submit" className="subscribe-btn">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
