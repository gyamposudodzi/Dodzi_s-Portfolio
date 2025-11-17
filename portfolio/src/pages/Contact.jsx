// src/pages/Contact.jsx
import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="contact-container">
      <div className="contact-content">
        <h2 className="section-title">CONNECT WITH THE FUTURE</h2>
        
        <div className="contact-methods">
          <div className="contact-method">
            <div className="method-icon">@</div>
            <h3>Email</h3>
            <p>gyamposu@gmail.com</p>
          </div>
          
          <div className="contact-method">
            <div className="method-icon">#</div>
            <h3>Social</h3>
            <div className="social-links">
              <span>GitHub</span>
              <span>LinkedIn</span>
              <span>Twitter</span>
            </div>
          </div>
          
          <div className="contact-method">
            <div className="method-icon">+</div>
            <h3>Collaborate</h3>
            <p>Available for innovative projects</p>
          </div>
        </div>
        
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input 
              type="text" 
              name="name"
              placeholder="Your Name" 
              className="form-input" 
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input 
              type="email" 
              name="email"
              placeholder="Your Email" 
              className="form-input" 
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <textarea 
              name="message"
              placeholder="Your Vision" 
              className="form-input"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-button">
            <span>Send Message</span>
            <div className="button-trail"></div>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;