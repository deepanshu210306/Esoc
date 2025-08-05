import React from 'react';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="page-header about-header">
        <div className="container">
          <h1 className="page-title">About <span>Us</span></h1>
          <p className="page-subtitle">
            Energy Society at IIT Delhi is a student-led organization dedicated to promoting awareness,
            innovation, and action in the field of energy. We aim to bridge the gap between academia,
            industry, and policy to create a sustainable energy future.
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
                To foster a community of energy enthusiasts who collaborate to address the pressing energy
                challenges of our time through education, research, and outreach activities.
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
              Founded in 2018, the Energy Society of IIT Delhi began as a small group of passionate students 
              interested in addressing energy challenges. Over the years, we've grown into a vibrant community 
              of students, faculty, and industry professionals working together to promote sustainable energy 
              solutions.
            </p>
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h3>2018</h3>
                  <p>Energy Society officially founded at IIT Delhi</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h3>2019</h3>
                  <p>First annual Energy Summit hosted on campus</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h3>2021</h3>
                  <p>Launched virtual workshop series during pandemic</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h3>2023</h3>
                  <p>Expanded to include industry partnerships and internship programs</p>
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
