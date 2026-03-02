import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

// Replace these with your actual EmailJS credentials:
// 1. Sign up at https://www.emailjs.com
// 2. Add a Gmail service → copy the Service ID
// 3. Create a template with variables: {{from_name}}, {{from_email}}, {{message}} → copy the Template ID
// 4. Go to Account → copy your Public Key
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    message: '',
  });
  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );
      alert('Thank you for your message! I will get back to you soon.');
      setFormData({ from_name: '', from_email: '', message: '' });
    } catch (err) {
      alert('Something went wrong. Please email me directly at kannanjayakumar101@gmail.com');
    } finally {
      setSending(false);
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
            </div>
          </div>

          <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group" hidden>
              <input name="bot-field" />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="from_name"
                placeholder="Your Name"
                value={formData.from_name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="from_email"
                placeholder="Your Email"
                value={formData.from_email}
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
            <button type="submit" className="btn btn-primary" disabled={sending}>
              {sending ? 'Sending...' : 'Send Message'}
            </button>
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
