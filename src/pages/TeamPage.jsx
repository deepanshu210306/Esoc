import React, { useState, useEffect, useRef } from 'react';
import './TeamPage.css';

const TeamPage = () => {
  const [teamData, setTeamData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showPreviousTeam, setShowPreviousTeam] = useState(false);

  const sectionRefs = {
    faculty: useRef(null),
    panel: useRef(null),
    verticals: useRef(null),
    previousTeam: useRef(null)
  };

  useEffect(() => {
    if (!teamData) return;

    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -50px 0px',
      threshold: 0.1
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          
          // Handle staggered animation for cards within sections
          if (entry.target.classList.contains('animate-section')) {
            const cards = entry.target.querySelectorAll('.team-card');
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('animate-card');
              }, index * 100);
            });
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe sections
    Object.values(sectionRefs).forEach(ref => {
      if (ref.current) {
        observer.observe(ref.current);
      }
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

  const overallCoordinator = teamData.panelMembers.find(
    (member) => member.position.toLowerCase().includes('overall coordinator')
  );

  const panelOnlyMembers = teamData.panelMembers.filter(
    (member) => member !== overallCoordinator
  );

  const coordinatorsList = [];
  const executivesList = [];

  Object.entries(teamData.verticals).forEach(([key, vertical]) => {
    vertical.coordinators.forEach((member) => {
      coordinatorsList.push({ ...member, verticalKey: key });
    });
    vertical.executives.forEach((member) => {
      executivesList.push({ ...member, verticalKey: key });
    });
  });

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
                Department of Energy Science and Engineering, IIT Delhi. Leading research in sustainable energy systems and mentoring the next generation of energy professionals.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section ref={sectionRefs.panel} className="panel-section animate-section">
        <div className="container">
          <h2 className="section-title">Core Team</h2>

          {overallCoordinator && (
            <div className="core-subsection">
              <h3 className="core-subtitle">Overall Coordinator</h3>
              <div className="panel-grid core-oc-grid">
                <div className="team-card panel-card">
                  <div className="member-image">
                    <img src={overallCoordinator.image} alt={overallCoordinator.name} />
                    <div className="image-overlay"></div>
                  </div>
                  <div className="member-info">
                    <h3>{overallCoordinator.name}</h3>
                    <p className="member-position">{overallCoordinator.position}</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {panelOnlyMembers.length > 0 && (
            <div className="core-subsection">
              <h3 className="core-subtitle">Panel Members</h3>
              <div className="panel-grid">
                {panelOnlyMembers.map((member, index) => (
                  <div 
                    className="team-card panel-card" 
                    key={index}
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
          )}
        </div>
      </section>

      <section ref={sectionRefs.verticals} className="verticals-section animate-section">
        <div className="container">
          <h2 className="section-title">Coordinators</h2>

          <div className="team-grid">
            {coordinatorsList.map((member, index) => (
              <div className="team-card" key={index}>
                <div className="member-image">
                  <img src={member.image} alt={member.name} />
                  <div className="image-overlay"></div>
                </div>
                <div className="member-info">
                  <h3>{member.name}</h3>
                  <p className="member-position">{member.position}</p>
                  <span className="member-vertical-tag">
                    {verticalNames[member.verticalKey]}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="section-divider"></div>

          <h2 className="section-title section-title-secondary">Executives</h2>

          <div className="executive-grid">
            {executivesList.map((member, index) => (
              <div className="team-card executive-card" key={index}>
                <div className="member-image">
                  <img src={member.image} alt={member.name} />
                  <div className="image-overlay"></div>
                </div>
                <div className="member-info">
                  <h3>{member.name}</h3>
                  <p className="member-position">{member.position}</p>
                  <span className="member-vertical-tag">
                    {verticalNames[member.verticalKey]}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section ref={sectionRefs.previousTeam} className="previous-team-section animate-section">
        <div className="container">
          <div className="previous-team-header">
            <h2 className="section-title">Previous Team</h2>
            <div className="toggle-container">
              <label className="toggle-switch">
                <input
                  type="checkbox"
                  checked={showPreviousTeam}
                  onChange={(e) => setShowPreviousTeam(e.target.checked)}
                />
                <span className="toggle-slider"></span>
              </label>
              <span className="toggle-label">
                {showPreviousTeam ? 'Hide' : 'Show'} Previous Team
              </span>
            </div>
          </div>

          {teamData?.previousTeam && (
            <div className={`previous-team-content ${showPreviousTeam ? 'visible' : 'hidden'}`}>
              {teamData.previousTeam.oc && teamData.previousTeam.oc.length > 0 && (
                <div className="core-subsection">
                  <h3 className="core-subtitle">Overall Coordinator</h3>
                  <div className="panel-grid core-oc-grid">
                    {teamData.previousTeam.oc.map((member, index) => (
                      <div className="team-card panel-card" key={`prev-oc-${index}`}>
                        <div className="member-image">
                          <img 
                            src={member.image} 
                            alt={member.name} 
                            loading="eager"
                            decoding="async"
                          />
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
              )}

              {teamData.previousTeam.panelMembers && teamData.previousTeam.panelMembers.length > 0 && (
                <div className="core-subsection">
                  <h3 className="core-subtitle">Panel Members</h3>
                  <div className="panel-grid">
                    {teamData.previousTeam.panelMembers.map((member, index) => (
                      <div className="team-card panel-card" key={`prev-panel-${index}`}>
                        <div className="member-image">
                          <img 
                            src={member.image} 
                            alt={member.name} 
                            loading="eager"
                            decoding="async"
                          />
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
              )}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default TeamPage;