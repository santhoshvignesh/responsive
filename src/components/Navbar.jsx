import React from 'react';
import { Link } from 'react-router-dom';
// Import FontAwesome components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'; // Import specific icons
import './Navbar.css'; // For styling the navigation bar

function NavBar() {
  return (
    <>
      {/* Social Media Bar */}
      <div className="social-media-bar">
        <div className="social-media-links">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">
            <FontAwesomeIcon icon={faFacebook} className="social-icon" /> Facebook
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
            <FontAwesomeIcon icon={faLinkedin} className="social-icon" /> LinkedIn
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
            <FontAwesomeIcon icon={faTwitter} className="social-icon" /> Twitter
          </a>
        </div>
      </div>

      {/* Header (Navbar) */}
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
    </>
  );
}

export default NavBar;
