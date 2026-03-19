import React, { useState } from 'react';
import './ContactPage.css';
import linkedinIcon from '../Components/linkedin.svg';
import instagramIcon from '../Components/instagram.svg';
import youtubeIcon from '../Components/youtube.svg';

const contactChannels = [
  {
    id: 'seminars',
    title: 'Seminars & Guest Lectures',
    description:
      'Want Energy Society to host a talk, workshop, or seminar? Reach out with your proposed topic and preferred dates so we can coordinate with our team and faculty advisors.',
    
  },
  {
    id: 'recruitment',
    title: 'Recruitment & Collaborations',
    description:
      'Looking to collaborate with Energy Society or want to join the team? Recruitment happens in July-August and follows the hierarchy: Overall Coordinator → Coordinator → Executive. Send us a message with your interests and we will get back to you with next steps.',

  },
  {
    id: 'general',
    title: 'General Inquiries',
    description:
      'Have a general question about Energy Society, our events, or how to get involved? Drop us a line and we will reply as soon as possible.',
   
  },
];

const ContactPage = () => {
  const [contactTopic, setContactTopic] = useState('general');

  const handleContactUs = () => {
    const subject = `Energy Society Inquiry - ${contactChannels.find(c => c.id === contactTopic)?.title || 'General'}`;
    const body = `Hello Energy Society,\n\nI am reaching out regarding: ${contactTopic}.\n\n`;
    window.location.href = `mailto:energysoc@iitd.ac.in?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="contact-page">
      <header className="contact-header">
        <div className="container">
          <h1>Contact Us</h1>
          <p>
            We’re happy to hear from you. Select the category that best matches your query and reach out directly to the team.
          </p>
        </div>
      </header>

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
            <h3>One request, one email</h3>
            <p>Choose your topic and click “Email Us” to open your default email client with a pre-filled subject.</p>
            <div className="contact-action-controls">
              <select value={contactTopic} onChange={(e) => setContactTopic(e.target.value)}>
                {contactChannels.map((channel) => (
                  <option key={channel.id} value={channel.id}>{channel.title}</option>
                ))}
              </select>
              <button className="contact-action-btn" onClick={handleContactUs} type="button">
                Email Us
              </button>
            </div>
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
