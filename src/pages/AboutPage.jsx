import React from 'react';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="page-header about-header">
        <div className="container">
          <h1 className="page-title">About <span>Us</span></h1>
          <p className="page-subtitle">
            Energy Society at IIT Delhi is a student-led initiative focused on advancing knowledge, innovation, 
            and real-world application in the energy sector. We aim to bridge the gap between academia, industry, 
            and policy by creating platforms for learning, collaboration, and impactful action.

          </p>
        </div>
        
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
        </div>
      </div>

      <section className="mission-section">
        <div className="container">
          <div className="mission-content">
            <div className="mission-text">
              <h2 className="section-title">Our Mission</h2>
              <p>
                To build a community of energy-driven students and professionals who collaborate to address real-world 
                energy challenges through technical learning, interdisciplinary projects, and industry engagement.

              </p>
              {/* <h2 className="section-title">Our Vision</h2>
              <p>
                To become a leading student organization that empowers the next generation of energy leaders
                and contributes to the transition towards a sustainable, efficient, and equitable energy system.
              </p> */}
            </div>
            {/* <div className="mission-image">
              <img src="/team/dummy.jpg" alt="Energy Society Mission" />
            </div> */}
          </div>
        </div>
      </section>

      <section className="history-section">
        <div className="container">
          <h2 className="section-title">Our History</h2>
          <div className="history-content">
            <p>
              Founded in 2023, the Energy Society at IIT Delhi evolved from the Energy Forum into a structured platform for students passionate about energy systems and sustainability. What began as a small initiative 
              has grown into an active community driving discussions, collaborations, and projects across technical, policy, and industrial domains.
            </p>
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h3>2023</h3>
                  <p>Originated from the Energy Forum at IIT Delhi, bringing together students interested in energy and sustainability.</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h3>2024</h3>
                  <p>Organized guest lectures and engagements with industry leaders, expanding outreach and learning opportunities.</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h3>2025</h3>
                  <p>Collaborated with Intellismart and launched the official Energy Society website to broaden impact and accessibility.</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* <section className="join-section">
        <div className="container">
          <h2 className="section-title">Join Us</h2>
          <p>
            We welcome students from all disciplines who are passionate about energy and sustainability. 
            Whether you're interested in renewable energy, policy, technology, or outreach, there's a place 
            for you in the Energy Society.
          </p>
          <button className="join-button">Get Involved</button>
        </div>
      </section> */}
    </div>
  );
};

export default AboutPage;