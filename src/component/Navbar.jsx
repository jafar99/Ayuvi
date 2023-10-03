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


  const scrollToBlogSection = () => {
    const targetSection = document.getElementById('blog'); // ID of the "Blogs" section
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToHomeSection = () => {
    const targetSection = document.getElementById('home'); // ID of the "Blogs" section
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  };


  const scrollToAboutUseSection = () => {
    const targetSection = document.getElementById('about'); // ID of the "Blogs" section
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  };


  const scrollToBenifitUseSection = () => {
    const targetSection = document.getElementById('benefit'); // ID of the "Blogs" section
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToExpertUseSection = () => {
    const targetSection = document.getElementById('expert'); // ID of the "Blogs" section
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
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
              <a onClick={scrollToHomeSection} className="nav-links">Home</a>
            </li>
            <li className="nav-item">
              <a  onClick={scrollToAboutUseSection} className="nav-links">About Us</a>
            </li>
          
            <li className="nav-item">
              <a  onClick={scrollToBenifitUseSection} className="nav-links">Key Benefits</a>
            </li>
            <li className="nav-item">
              <a  onClick={scrollToExpertUseSection} className="nav-links">Experts</a>
            </li>
            <li className="nav-item">
              <a  onClick={scrollToBlogSection} className="nav-links">Blogs</a>
            </li>
            
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
