import React, { useState, useEffect, useRef } from 'react';
import './TeamPage.css';

const TeamPage = () => {
  const [teamData, setTeamData] = useState(null);
  const [loading, setLoading] = useState(true);

  const sectionRefs = {
    faculty: useRef(null),
    panel: useRef(null),
    verticals: useRef(null)
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    Object.values(sectionRefs).forEach(ref => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    document.querySelectorAll('.team-card').forEach(card => {
      observer.observe(card);
    });

    return () => {
      observer.disconnect();
    };
  }, [teamData]);

  useEffect(() => {
    fetch('/team/Data.json')
      .then(response => response.json())
      .then(data => {
        setTeamData(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error loading team data:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading team information...</p>
      </div>
    );
  }

  if (!teamData) {
    return <div className="error">Unable to load team data. Please try again later.</div>;
  }

  const verticalNames = {
    designOps: "Design & Operations",
    outreachMarketing: "Outreach & Marketing",
    events: "Events",
    adminFinance: "Admin & Finance"
  };

  return (
    <div className="team-page">
      <div className="page-header team-header">
        <div className="container">
          <h1 className="page-title">Our <span>Team</span></h1>
          <p className="page-subtitle">
            Meet the dedicated individuals who make Energy Society at IIT Delhi a dynamic and impactful organization. 
            Our team works tirelessly to promote energy awareness, research, and innovation.
          </p>
        </div>

        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
        </div>
      </div>

      <section ref={sectionRefs.faculty} className="faculty-section animate-section">
        <div className="container">
          <h2 className="section-title">Faculty Coordinator</h2>
          <div className="faculty-card">
            <div className="faculty-image">
              <img src={teamData.facultyCoordinator.image} alt={teamData.facultyCoordinator.name} />
              <div className="image-overlay"></div>
            </div>
            <div className="faculty-info">
              <h3>{teamData.facultyCoordinator.name}</h3>
              <p className="faculty-position">{teamData.facultyCoordinator.position}</p>
              <p className="faculty-bio">
                Department of Energy Engineering, IIT Delhi. Leading research in sustainable energy systems and mentoring the next generation of energy professionals.
              </p>
              {/* <div className="faculty-social">
                <a href="#" className="social-icon"><i className="fa fa-linkedin"></i></a>
                <a href="#" className="social-icon"><i className="fa fa-envelope"></i></a>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      <section ref={sectionRefs.panel} className="panel-section animate-section">
        <div className="container">
          <h2 className="section-title">Panel members</h2>
          <div className="team-grid panel-grid">
            {teamData.panelMembers.map((member, index) => (
              <div 
                className="team-card" 
                key={index}
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="member-image">
                  <img src={member.image} alt={member.name} />
                  <div className="image-overlay"></div>
                </div>
                <div className="member-info">
                  <h3>{member.name}</h3>
                  <p className="member-position">{member.position}</p>
                  {/* <div className="member-social">
                    <a href="#" className="social-link"><i className="fa fa-linkedin"></i></a>
                    <a href="#" className="social-link"><i className="fa fa-envelope"></i></a>
                  </div> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section ref={sectionRefs.verticals} className="verticals-section animate-section">
        <div className="container">
          <h2 className="section-title">Our Verticals</h2>

          {Object.entries(teamData.verticals).map(([key, vertical], verticalIndex) => (
            <div className="vertical-block" key={key}>
              <h3 className="vertical-title">{verticalNames[key]}</h3>
              <div className="vertical-members">
                <div className="coordinators">
                  <h4>Coordinators</h4>
                  <div className="team-grid small-grid">
                    {vertical.coordinators.map((member, index) => (
                      <div 
                        className="team-card small-card" 
                        key={index}
                        style={{animationDelay: `${(verticalIndex * 0.1) + (index * 0.05)}s`}}
                      >
                        <div className="member-image">
                          <img src={member.image} alt={member.name} />
                          <div className="image-overlay"></div>
                        </div>
                        <div className="member-info">
                          <h3>{member.name}</h3>
                          <p className="member-position">{member.position}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="executives">
                  <h4>Executives</h4>
                  <div className="team-grid small-grid">
                    {vertical.executives.map((member, index) => (
                      <div 
                        className="team-card small-card" 
                        key={index}
                        style={{animationDelay: `${(verticalIndex * 0.1) + (index * 0.05)}s`}}
                      >
                        <div className="member-image">
                          <img src={member.image} alt={member.name} />
                          <div className="image-overlay"></div>
                        </div>
                        <div className="member-info">
                          <h3>{member.name}</h3>
                          <p className="member-position">{member.position}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default TeamPage;
