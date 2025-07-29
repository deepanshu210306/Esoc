import React, { useState, useEffect } from 'react';
import './Team.css';
import team from "../../Data.json"

// --- Reusable Components ---

// A single static team member card
const TeamCard = ({ image, name, position }) => (
  <div className="team-card-static">
    {/* Assumes images are in the 'public' folder */}
    <img src={image} alt={name} className="team-image" />
    <h3 className="team-name">{name}</h3>
    <p className="team-position">{position}</p>
  </div>
);

// A component for a specific vertical (e.g., Design & Operations)
const VerticalSection = ({ title, coordinators, executives }) => (
  <div className="vertical-section">
    <h3 className="vertical-title">{title}</h3>
    <div className="vertical-subsection">
      <h4>Coordinators</h4>
      <div className="team-grid">
        {coordinators.map((member, index) => (
          <TeamCard key={`coord-${index}`} {...member} />
        ))}
      </div>
    </div>
    <div className="vertical-subsection">
      <h4>Executives</h4>
      <div className="team-grid">
        {executives.map((member, index) => (
          <TeamCard key={`exec-${index}`} {...member} />
        ))}
      </div>
    </div>
  </div>
);

// --- Main Team Component ---

const Team = () => {
  const [teamData, setTeamData] = useState(team);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from the JSON file located in the public directory
    fetch('/data.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => setTeamData(data))
      .catch((error) => {
        console.error("Failed to fetch team data:", error);
        setError(error);
      });
  }, []); // The empty dependency array ensures this effect runs only once

  if (error) {
    return <div className="team-page-message">Error loading team data. Please try again later.</div>;
  }

  if (!teamData) {
    return <div className="team-page-message">Loading team...</div>;
  }

  return (
    <section className="team-page">
      <div className="container">
        <h1 className="team-page-title">Meet The Team</h1>

        {/* Faculty Coordinator Section */}
        {teamData.facultyCoordinator && (
          <div className="team-category">
            <h2 className="team-category-title">Faculty Coordinator</h2>
            <div className="team-grid single-card-grid">
              <TeamCard {...teamData.facultyCoordinator} />
            </div>
          </div>
        )}

        {/* Panel Members Section */}
        {teamData.panelMembers && (
          <div className="team-category">
            <h2 className="team-category-title">Overall Coordinator & Panel Members</h2>
            <div className="team-grid">
              {teamData.panelMembers.map((member, index) => (
                <TeamCard key={index} {...member} />
              ))}
            </div>
          </div>
        )}
        
        {/* Verticals Sections */}
        {teamData.verticals && (
          <>
            <VerticalSection title="Design & Operations" {...teamData.verticals.designOps} />
            <VerticalSection title="Outreach & Marketing" {...teamData.verticals.outreachMarketing} />
            <VerticalSection title="Events" {...teamData.verticals.events} />
            <VerticalSection title="Admin & Finance" {...teamData.verticals.adminFinance} />
          </>
        )}
      </div>
    </section>
  );
};

export default Team;