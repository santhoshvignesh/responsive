import React from 'react';
import './Contact.css'; // Import the CSS file for styling

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <form className="contact-form">
        <div className="input-group">
          <input type="text" placeholder="Name" className="input-field" />
          <input type="email" placeholder="Email" className="input-field" />
          <input type="tel" placeholder="Phone" className="input-field" />
          <input type="text" placeholder="Company" className="input-field" />
        </div>
        <div className="input-group">
          <textarea placeholder="What are you looking for?" className="textarea-field" />
        </div>
        <div className="input-group">
          <textarea placeholder="Message" className="textarea-field" />
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
