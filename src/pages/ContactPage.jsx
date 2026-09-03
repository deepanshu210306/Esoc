import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './ContactPage.css';
import linkedinIcon from '../Components/linkedin.svg';
import instagramIcon from '../Components/instagram.svg';
import youtubeIcon from '../Components/youtube.svg';

const contactChannels = [
  {
    id: 'Seminars',
    title: 'Seminars & Guest Lectures',
    description:
      'Want Energy Society to host a talk, workshop, or seminar? Reach out with your proposed topic and preferred dates so we can coordinate with our team and faculty advisors.',
    
  },
  {
    id: 'Recruitment',
    title: 'Recruitment & Collaborations',
    description:
      'Looking to collaborate with Energy Society or want to join the team? Recruitment happens in July-August and follows the hierarchy: Overall Coordinator → Coordinator → Executive. Send us a message with your interests and we will get back to you with next steps.',

  },
  {
    id: 'General',
    title: 'General Inquiries',
    description:
      'Have a general question about Energy Society, our events, or how to get involved? Drop us a line and we will reply as soon as possible.',
   
  },
];

const ContactPage = () => {
  const [contactTopic, setContactTopic] = useState('general');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleContactUs = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    setStatus('');

    const templateParams = {
      from_name: name,
      from_email: email,
      topic: contactTopic,
      message: message,
      to_email: 'energysociety@iitd.ac.in',
    };

    try {
      await emailjs.send(
        'service_6x5cojk', 
        'template_chyzr5h', 
        templateParams,
        'EKPEa8mRlQ2_TfvQ5' 
      );

      setStatus('Your message was sent successfully. Thank you!');
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error('EmailJS error:', error);
      setStatus('Unable to send message. Please try again later.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="contact-page">
      <div className="page-header events-header">
        <div className="container">
          <h1 className="page-title">Contact <span>Us</span></h1>
          <p className="page-subtitle">
            We’re happy to hear from you. Select the category that best matches your query and reach out directly to the team.
          </p>
        </div>
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
        </div>
      </div>

      <section className="contact-cards">
        <div className="container">
          <div className="cards-grid">
            {contactChannels.map((channel) => (
              <div key={channel.id} className="contact-card">
                <h2>{channel.title}</h2>
                <p>{channel.description}</p>
                <p className="contact-email">{channel.email}</p>
              </div>
            ))}
          </div>

          <div className="contact-notes">
            <p>
              Want us to connect with a specific faculty member? Mention their name in your message and we will forward your request.
            </p>
          </div>

          <div className="contact-action">
            <h2 className="section-title">Send us a message</h2>
            <p className="contact-form-intro">
              Fill out the form below and we'll get back to you as soon as possible.
            </p>

            <form className="contact-form" onSubmit={handleContactUs}>
              <div className="contact-form-grid">
                <div className="contact-form-row">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div className="contact-form-row">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div className="contact-form-row">
                  <label htmlFor="topic">Topic *</label>
                  <select id="topic" value={contactTopic} onChange={(e) => setContactTopic(e.target.value)}>
                    <option value="general">General Inquiry</option>
                    <option value="seminars">Seminars & Guest Lectures</option>
                    <option value="recruitment">Recruitment & Collaborations</option>
                  </select>
                </div>

                <div className="contact-form-row contact-form-row-full">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us how we can help you..."
                    rows="6"
                    required
                  />
                  <p className="contact-form-note">
                    Add your email and contact number at the end of your message
                  </p>
                </div>
              </div>

              <div className="contact-form-actions">
                <button className="contact-submit-btn" type="submit" disabled={submitting}>
                  {submitting ? (
                    <>
                      <span className="btn-spinner"></span>
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>
                {status && (
                  <div className={`contact-status ${status.includes('successfully') ? 'success' : 'error'}`}>
                    {status}
                  </div>
                )}
              </div>
            </form>
          </div>

          <div className="social-links">
            <h3>Follow us</h3>
            <div className="social-icons">
              <a href="https://www.linkedin.com/company/energyiitd/" target="_blank" rel="noopener noreferrer">
                <img src={linkedinIcon} alt="LinkedIn" className="social-img" />
              </a>
              <a href="https://www.instagram.com/energy_iitd/" target="_blank" rel="noopener noreferrer">
                <img src={instagramIcon} alt="Instagram" className="social-img" />
              </a>
              <a href="https://www.youtube.com/@EnergySocietyIITD" target="_blank" rel="noopener noreferrer">
                <img src={youtubeIcon} alt="YouTube" className="social-img" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
