// src/pages/Contact.jsx
import React, { useState } from 'react';
import '../Styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
      alert('Message sent successfully!');
    }, 2000);
  };

  return (
    <div className="contact-container split-contact">
      <div className="contact-info">
        <div className="contact-header">
          <div className="contact-badge">GET IN TOUCH</div>
          <h2 className="contact-title">
            Let's Build Something <span className="accent-text">Amazing</span> Together
          </h2>
          <p className="contact-description">
            Have a project in mind? Let's discuss how we can turn your ideas into reality. 
            I'm always excited to work on innovative projects and collaborate with passionate people.
          </p>
        </div>

        <div className="contact-details">
          <div className="contact-item">
            <div className="contact-icon">📧</div>
            <div className="contact-detail">
              <h4>Email</h4>
              <p>gyamposu@gmail.com</p>
              <span className="contact-subtext">I'll reply within 24 hours</span>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon">💼</div>
            <div className="contact-detail">
              <h4>Availability</h4>
              <p>Open for Projects</p>
              <span className="contact-subtext">Full-time & contract work</span>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon">🌍</div>
            <div className="contact-detail">
              <h4>Location</h4>
              <p>Remote Worldwide</p>
              <span className="contact-subtext">Available for global projects</span>
            </div>
          </div>
        </div>

        <div className="social-connect">
          <h4>Follow My Journey</h4>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/dodzigyamposu/" className="social-link">
              <span className="social-icon">💼</span>
              <span>LinkedIn</span>
            </a>
            <a href="https://github.com/gyamposudodzi" className="social-link">
              <span className="social-icon">🐙</span>
              <span>GitHub</span>
            </a>
            <a href="https://x.com/gyamposu_dodzi?t=51yCMamkEA5oV5xtjw86mQ&s=09" className="social-link">
              <span className="social-icon">🐦</span>
              <span>Twitter</span>
            </a>
          </div>
        </div>
      </div>

      <div className="contact-form-section">
        <div className="form-container">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-header">
              <h3>Send a Message</h3>
              <p>Let's start a conversation about your project</p>
            </div>

            <div className="form-fields">
              <div className="form-row">
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
                    placeholder="Email Address" 
                    className="form-input" 
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <select 
                  name="subject"
                  className="form-input" 
                  value={formData.subject}
                  onChange={handleChange}
                  required
                >
                  <option value="">What's this about?</option>
                  <option value="web-development">Web Development</option>
                  <option value="automation">Automation</option>
                  <option value="ai-ml">AI/ML Project</option>
                  <option value="consulting">Consulting</option>
                  <option value="other">Just saying hello!</option>
                </select>
              </div>

              <div className="form-group">
                <textarea 
                  name="message"
                  className="form-input textarea" 
                  rows="4"
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
            </div>

            <button 
              type="submit" 
              className={`submit-button ${isSubmitting ? 'submitting' : ''}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <div className="loading-spinner"></div>
                  Sending...
                </>
              ) : (
                <>
                  <span>Send Message</span>
                  <div className="button-icon">✈</div>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;