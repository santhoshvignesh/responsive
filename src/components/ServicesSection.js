import React from 'react';
import './ServicesSection.css'; // Importing the CSS file for styling

const ServicesSection = () => {
  return (
    <div className="services-section">
      {/* About Synergy Section */}
      <div className="about-synergy-section">
        <h2>About Synergyworld Management Malaysia</h2>
        <p>
          At Synergyworld Management Malaysia, we deliver innovative business management solutions
          designed to streamline operations and promote growth. With our expert team, we leverage 
          cutting-edge technology to provide efficient services, helping businesses excel in today's 
          competitive landscape.
        </p>
      </div>

      {/* Horizontal Rule */}
      <hr className="custom-hr" />

      {/* Services Section */}
      <h2 className="section-title">Our Services</h2>
      <div className="services-container">
        <div className="service-box">
          <h3>Management System Consulting</h3>
          <p>
            Our management consulting helps businesses implement effective quality, environmental,
            and safety systems. Services include ISO 9001, ISO 14001, and ISO 45001 certifications.
            Enhance compliance, efficiency, and risk management with our tailored solutions.
          </p>
        </div>
        <div className="service-box">
          <h3>Audit Management Consulting</h3>
          <p>
            We offer comprehensive audit management services to ensure compliance with industry
            standards and regulations. From planning to reporting, we streamline the audit process,
            providing actionable insights for ISO certifications and operational improvements.
          </p>
        </div>
        <div className="service-box">
          <h3>Energy Management Consulting</h3>
          <p>
            Optimize your energy usage with our ISO 50001 energy management consulting. We help
            businesses develop energy-efficient strategies, reduce costs, and minimize their
            environmental impact, driving sustainability and operational savings.
          </p>
        </div>
        <div className="service-box">
          <h3>Social Responsibility Consulting</h3>
          <p>
            Promote ethical and sustainable practices with our ISO 26000 Social Responsibility
            Management consulting. We guide businesses in adopting responsible practices that
            benefit society, improve brand reputation, and meet stakeholder expectations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
