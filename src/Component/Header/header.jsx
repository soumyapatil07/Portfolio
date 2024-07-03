import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './Header.css'; // Ensure you create the corresponding CSS file

const Header = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleToggle = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <header>
      <div className="container">
        <div className="row">
          <div className="brand-name">
            <a href="/" className="logo">Soumya Odugoudar</a>
          </div>
          <div className="ham-burger" onClick={handleToggle}>
            <FontAwesomeIcon icon={faBars} />
          </div>
          <div className={`navbar ${showNavbar ? 'show' : ''}`}>
            <ul>
              <li><a href="#home" className="active">Home</a></li>
              <li><a className="btn" href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

