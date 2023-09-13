import React, { useState } from 'react';
import '../style/Nav.css';
import logo from '../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className={`navbar ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
        <div className="navbar-container">
          <div className="navbar-logo">
            <img src={logo} alt="logo" className="logo" />
          </div>
          <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? (
              <FontAwesomeIcon icon={faTimes} /> // "times" icon when the mobile menu is open
            ) : (
              <FontAwesomeIcon icon={faBars} /> // "bars" icon when the mobile menu is closed
            )}
          </button>
          <ul className={`nav-menu ${isMobileMenuOpen ? 'nav-menu-mobile' : ''}`}>
            <li className="nav-item">
              <a href="/" className="nav-links">Home</a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-links">About Us</a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-links">How It Works</a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-links">Key Benefitss</a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-links">Diabetes Care</a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-links">Blogs</a>
            </li>
            
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
