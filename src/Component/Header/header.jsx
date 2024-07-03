import React from 'react';
import './header.css'; // Make sure to create and include your CSS file for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="row">
          <div className="brand-name">
            <a href="/" className="logo">Soumya Odugoudar</a>
          </div>
          <div className="ham-burger">
            <FontAwesomeIcon icon={faBars} />
          </div>
          <div className="navbar">
            <ul>
              <li><a href="#home" className="active">Home</a></li>
              <li><a className="btn" href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              {/* <li><a href="#hobbies">Hobbies</a></li> */}
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
