import React from 'react';
import './Footer.css'; // Ensure this is correct with matching case!

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <ul className="footer-links">
          <li><a href="/privacy-policy">Privacy Policy</a></li>
          <li><a href="/terms-of-service">Terms of Service</a></li>
          <li><a href="/contact-us">Contact Us</a></li>
        </ul>
        <p>© 2024 Your Company Name. All rights reserved.</p>
        <div className="social-media">
          <a href="https://www.facebook.com" target="_blank" rel="noreferrer">Facebook</a>
          <a href="https://www.twitter.com" target="_blank" rel="noreferrer">Twitter</a>
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
