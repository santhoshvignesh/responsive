import React, { useEffect, useState } from 'react';
import './ServicesSection.css'; // Importing the CSS file for styling

const ServicesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // For About section images
  const content = [
    {
      heading: 'Enhancing Your Business Strategy',
      paragraph:
        "In today's rapidly evolving market, businesses need to adapt and innovate constantly. Our solutions are designed to empower your organization by streamlining processes, improving efficiency, and fostering a culture of continuous improvement."
    },
    {
      heading: 'Transforming Ideas into Action',
      paragraph:
        "We believe that every great idea deserves a chance to be realized. Our consulting services are tailored to guide you through the implementation phase, ensuring that your vision becomes a reality."
    },
    {
      heading: 'Driving Sustainable Growth',
      paragraph:
        "Sustainability is at the heart of what we do. We work with businesses to integrate sustainable practices that not only benefit the environment but also enhance your company's bottom line."
    }
  ];

  // Images for each service box
  const serviceImages = [
    '/images/asian-architect-woman-2023-11-27-04-53-37-utc.jpg',
    '/images/cheerful-professional-architect-showing-thumbs-up-2023-11-27-05-29-05-utc.jpg',
    '/images/shot-of-a-young-female-holding-a-piggy-bank-again-2023-11-27-05-06-56-utc.jpg',
    '/images/studio-shot-of-a-handsome-and-happy-young-man-posi-2023-11-27-04-49-41-utc.jpg'
  ];

  // Images for the About section
  const aboutImages = [
    '/images/pexels-fauxels-3184632.jpg',
    '/images/pexels-serpstat-177219-572056.jpg',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % content.length);
    }, 3000); // Change content every 3 seconds

    return () => clearInterval(interval);
  }, [content.length]);

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % aboutImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(imageInterval);
  }, [aboutImages.length]);

  return (
    <div className="services-section">
      {/* Image with Content */}
      <div className="image-container">
        <img 
          src={aboutImages[currentImageIndex]} 
          alt="Synergyworld Management Malaysia" 
          className="about-image" 
        />
        <div className="overlay">
          <h3 className="overlay-heading">{content[currentIndex].heading}</h3>
          <p className="overlay-paragraph">{content[currentIndex].paragraph}</p>
        </div>
      </div>

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
        {['Management System Consulting', 'Audit Management Consulting', 'Energy Management Consulting', 'Social Responsibility Consulting'].map((service, index) => (
          <div className="service-box" key={index}>
            <div className="service-image-container">
              <img 
                src={serviceImages[index]} 
                alt={service} 
                className="service-image"
              />
              <div className="service-overlay">
                <h3>{service}</h3>
                <p>
                  {index === 0 && "Our management consulting helps businesses implement effective quality, environmental, and safety systems. Services include ISO 9001, ISO 14001, and ISO 45001 certifications. Enhance compliance, efficiency, and risk management with our tailored solutions."}
                  {index === 1 && "We offer comprehensive audit management services to ensure compliance with industry standards and regulations. From planning to reporting, we streamline the audit process, providing actionable insights for ISO certifications and operational improvements."}
                  {index === 2 && "Optimize your energy usage with our ISO 50001 energy management consulting. We help businesses develop energy-efficient strategies, reduce costs, and minimize their environmental impact, driving sustainability and operational savings."}
                  {index === 3 && "Promote ethical and sustainable practices with our ISO 26000 Social Responsibility Management consulting. We guide businesses in adopting responsible practices that benefit society, improve brand reputation, and meet stakeholder expectations."}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
