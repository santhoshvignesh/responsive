import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 

function NavBar() {
  return (
      <nav className="navbar">
        <div className="navbar-logo">
          <img src="/photos/Synergy Logo.png" alt="Synergy Logo" />
        </div>
        <ul className="navbar-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li className="services-dropdown">
            <Link to="/services">Services</Link>
            <div className="dropdown-dashboard">
              <div className="dropdown-item">
                <Link to="/services/web-development">Web Development</Link>
              </div>
              <div className="dropdown-item">
                <Link to="/services/mobile-development">Mobile Development</Link>
              </div>
              <div className="dropdown-item">
                <Link to="/services/seo-services">SEO Services</Link>
              </div>
            </div>
          </li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </nav>
  );
}

export default NavBar;
