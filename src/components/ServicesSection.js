import React from 'react';
import './ServicesSection.css'; // Importing the CSS file for styling

const ServicesSection = () => {
  return (
    <div className="services-section">
      <h2 className="section-title">Our Services</h2>
      <div className="services-container">
        <div className="service-box">
          <h3>Service 1</h3>
          <p>Description of the first service offered.</p>
        </div>
        <div className="service-box">
          <h3>Service 2</h3>
          <p>Description of the second service offered.</p>
        </div>
        <div className="service-box">
          <h3>Service 3</h3>
          <p>Description of the third service offered.</p>
        </div>
        <div className="service-box">
          <h3>Service 4</h3>
          <p>Description of the fourth service offered.</p>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
