import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send, CheckCircle2 } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }
  };

  return (
    <div className="contact-page">
      <div className="container" style={{ paddingTop: '60px' }}>
        <div className="contact-header animate-fade-in-up">
          <h1 style={{ color: 'var(--text-dark)' }}>Get in Touch</h1>
          <p>
            Whether you have a question about a property, need market insights, or want to explore listing with us, our team is ready to help.
          </p>
        </div>

        <div className="contact-content animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <div className="contact-info">
            <h3>Contact Information</h3>
            <p>Fill out the form and our team will get back to you within 24 hours.</p>

            <div className="contact-methods">
              <div className="contact-method">
                <MapPin className="contact-method-icon" size={24} />
                <div>
                  <h4>Headquarters</h4>
                  <span>100 Luxury Lane, Suite 500<br/>Beverly Hills, CA 90210</span>
                </div>
              </div>

              <div className="contact-method">
                <Phone className="contact-method-icon" size={24} />
                <div>
                  <h4>Phone</h4>
                  <span>+1 (800) 555-0199<br/>Mon-Fri 9am-6pm PST</span>
                </div>
              </div>

              <div className="contact-method">
                <Mail className="contact-method-icon" size={24} />
                <div>
                  <h4>Email</h4>
                  <span>hello@havenlyestates.com<br/>support@havenlyestates.com</span>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            {submitted ? (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', textAlign: 'center', color: 'var(--text-dark)' }}>
                <CheckCircle2 size={64} color="var(--primary)" style={{ marginBottom: '1rem' }} />
                <h3>Message Sent!</h3>
                <p style={{ color: 'var(--text-muted)' }}>Thank you for reaching out. We will get back to you shortly.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe" 
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com" 
                    required 
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can we help you?" 
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here..." 
                    required 
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary contact-submit">
                  Send Message <Send size={18} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
