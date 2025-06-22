import React from 'react';
import './footer.css';
import logo from './logo.svg';
import phoneIcon from './icon.svg'; // Replace with appropriate icons


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Left - Two Logos Horizontally */}
        <div className="footer-left">
          <div className="logo-with-text">
            <img src={logo} alt="Energy Society Logo 1" className="footer-logo" />
            <p className="footer-title">IIT Delhi</p>
          </div>
          <div className="logo-with-text">
            <img src={logo} alt="Energy Society Logo 2" className="footer-logo" />
            <p className="footer-title">Energy Society</p>
          </div>
        </div>

        {/* Center - Address and Phone */}
        <div className="footer-center">
          <p className="footer-info">Indian Institute of Technology Delhi</p>
          <p className="footer-info">Hauz Khas, New Delhi - 110016</p>
          <p className="footer-info">Phone: +91-9876543210</p>
        </div>

        {/* Right - Social Media Section */}
        <div className="footer-right">
          <h4 className="social-heading">Connect With Us</h4>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src={phoneIcon} alt="Facebook" className="social-img" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img src={phoneIcon} alt="Twitter" className="social-img" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src={phoneIcon} alt="Instagram" className="social-img" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Footer Line */}
      <div className="footer-bottom">
        <p>Made with ❤️ by Deepanshu</p>
        <p>© 2025 Energy Society, IIT Delhi</p>
      </div>
    </footer>
  );
};

export default Footer;
