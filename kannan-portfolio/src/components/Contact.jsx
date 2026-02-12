import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const submitData = new URLSearchParams({
      'form-name': 'contact',
      name: formData.name,
      email: formData.email,
      message: formData.message,
    }).toString();

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: submitData,
      });
      if (response.ok) {
        alert('Thank you for your message! I will get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert('Something went wrong. Please email me directly at kannanjayakumar101@gmail.com');
      }
    } catch (err) {
      alert('Something went wrong. Please email me directly at kannanjayakumar101@gmail.com');
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="contact-subtitle">
          Have a project in mind? Let's work together to create something amazing!
        </p>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="info-item">
              <div className="info-icon">📧</div>
              <div>
                <h3>Email</h3>
                <p>kannanjayakumar101@gmail.com</p>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon">📱</div>
              <div>
                <h3>Phone</h3>
                <p>604-842-0681</p>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon">📍</div>
              <div>
                <h3>Location</h3>
                <p>Vancouver, Canada</p>
              </div>
            </div>
            <div className="social-links">
              <a href="https://github.com/KannanJay101" target="_blank" rel="noopener noreferrer" className="social-link">
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/kannan-jayakumar-4a79b3258/" target="_blank" rel="noopener noreferrer" className="social-link">
                LinkedIn
              </a>
              {/* <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
                Twitter
              </a> */}
            </div>
          </div>

          <form className="contact-form" name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={handleSubmit}>
            <input type="hidden" name="form-name" value="contact" />
            <div className="form-group" hidden>
              <input name="bot-field" />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
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
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
        
        <div className="contact-profile">
          <img src="/Kannanpfp.JPG" alt="Kannan Jayakumar" className="contact-profile-img" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
