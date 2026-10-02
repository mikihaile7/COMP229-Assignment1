// src/pages/Contact.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Contact() {
  const navigate = useNavigate();

  // State capturing contact form fields
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    contactNumber: '',
    emailAddress: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Prompt displaying captured user information before redirecting
    alert(`Thank you, ${formData.firstName}! Your message has been captured.\n\nRedirecting to Home Page.`);
    navigate('/');
  };

  return (
    <section className="page-container contact-page">
      <h2>Contact Me</h2>
      <div className="contact-grid">
        {/* Contact Information Panel */}
        <div className="contact-panel">
          <h3>Get In Touch</h3>
          <p><strong>Email:</strong> mhaile2@my.centennialcollege.ca</p>
          <p><strong>Location:</strong> Toronto, ON, Canada</p>
        </div>

        {/* Interactive Contact Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" name="firstName" required value={formData.firstName} onChange={handleChange} />
          </div>

          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" name="lastName" required value={formData.lastName} onChange={handleChange} />
          </div>

          <div className="form-group">
            <label htmlFor="contactNumber">Contact Number</label>
            <input type="tel" id="contactNumber" name="contactNumber" required value={formData.contactNumber} onChange={handleChange} />
          </div>

          <div className="form-group">
            <label htmlFor="emailAddress">Email Address</label>
            <input type="email" id="emailAddress" name="emailAddress" required value={formData.emailAddress} onChange={handleChange} />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="4" required value={formData.message} onChange={handleChange}></textarea>
          </div>

          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  );
}