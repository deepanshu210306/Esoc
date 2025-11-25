import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';
import headerClip from './header_clip.mp4'; // local import (in src/ or same folder)

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-video-wrapper">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="hero-video"
          preload="metadata"
          poster="/poster-image.jpg" // optional poster
        >
          <source src={headerClip} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="hero-overlay" />

      <div className="hero-content">
        <h1 className="hero-title">ENERGY SOCIETY</h1>
        <h2 className="hero-subtitle">Indian Institute Of Technology, Delhi</h2>
        <p className="hero-tagline">
          A dynamic student-led initiative committed to driving awareness, innovation, and action in the energy sector. We bridge the gap between academia, industry, and policy to empower the next generation of energy leaders.
        </p>
      </div>
    </section>
  );
};

export default Hero;