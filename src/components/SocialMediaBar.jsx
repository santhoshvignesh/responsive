import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'; 
import './SocialMediaBar.css'
const SocialMediaBar = () => {
  return (
    <div className="social-media-bar">
        <div className="social-media-links">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">
            <FontAwesomeIcon icon={faFacebook} className="social-icon" /> Facebook</a>

            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
            <FontAwesomeIcon icon={faLinkedin} className="social-icon" /> LinkedIn
            </a>

            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
            <FontAwesomeIcon icon={faTwitter} className="social-icon" /> Twitter
            </a>
    </div>
  </div>
  )
}

export default SocialMediaBar
