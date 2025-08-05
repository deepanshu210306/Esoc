import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';
import headerClip from './header_clip.mp4';

const Hero = () => {
  return (
    <section id="home" className="hero">
      {/* Wrapper for the video to ensure it's in the background */}
      <div className="hero-video-wrapper">
        <video
          autoPlay
          muted
          loop
          playsInline // Important for autoplay on mobile browsers
          className="hero-video"
        >
          <source src={headerClip} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      
      {/* Overlay for text readability */}
      <div className="hero-overlay"></div>
      
      {/* Content that appears over the video */}
      <div className="hero-content">
        <h1 className="hero-title">ENERGY SOCIETY</h1>
        <h2 className="hero-subtitle">Indian Institute Of Technology, Delhi</h2>
        <p className="hero-tagline">
          A dynamic student-led initiative committed to driving awareness, innovation, and action in the energy sector. We bridge the gap between academia, industry, and policy to empower the next generation of energy leaders.
        </p>
        {/* <div className="hero-buttons">
          <Link to="/about" className="btn btn-primary">Learn More</Link>
          <Link to="/events" className="btn btn-yellow">Our Events</Link>
        </div> */}
      </div>
    </section>
  );
};

export default Hero;