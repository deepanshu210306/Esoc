import React from 'react';
import './Footer.css';
import logo from './logo.svg';
import linkedinIcon from './linkedin.svg';
import instagramIcon from './instagram.svg';
import youtubeIcon from './youtube.svg';
import IITDlogo from './IITDelhi.svg';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Left - Two Logos Horizontally */}
        <div className="footer-left">
          <div className="logo-with-text">
            <img src={IITDlogo} alt="IITD logo" className="footer-logo" />
            <p className="footer-title">IIT Delhi</p>
          </div>
          <div className="logo-with-text">
            <img src={logo} alt="Energy Society Logo" className="footer-logo" />
            <p className="footer-title">Energy Society</p>
          </div>
        </div>

        {/* Center - Address and Contact */}
        <div className="footer-center">
          <h3>Address & Contact</h3>
          <p className="footer-info">Room No. 235, Block-5</p>
          <p className="footer-info">Department of Energy Engineering</p>
          <p className="footer-info">Indian Institute of Technology Delhi, Hauz Khas, New Delhi-110016</p>
          <p className="footer-info">Phone: +91-XXXXXXXXXX</p>
        </div>

        {/* Right - Social Media Section */}
        <div className="footer-right">
          <h4 className="social-heading">Connect With Us</h4>
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

      {/* Bottom Footer Line */}
      <div className="footer-bottom">
        <p>Made with ❤️ by Deepanshu</p>
        <p>© 2025 Energy Society, IIT Delhi. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;