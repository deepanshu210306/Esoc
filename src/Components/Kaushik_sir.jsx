import React from 'react';
import './Kaushik_sir.css';

const FacultyCoordinator = () => {
  const coordinator = {
    name: 'Prof. Kaushik Saha',
    description: 'I am currently an Associate Professor at the Department of Energy Science and Engineering (formerly known as the Centre for Energy Studies), IIT Delhi. I joined Indian Institute of Technology Delhi in 2018 as an Assistant Professor. I secured my Master of Science degree at the University of Connecticut, USA. I got my doctoral degree from the University of Waterloo, Canada. After completion of my doctoral studies, I pursued my postdoctoral research at Argonne National Laboratory, USA. I have been working on different aspects of Energy & Environment with a specific focus on multiphase flows, utilization of alternative fuels, and waste management. I also have been working as an Associate Editor of International Journal of Green Energy (Taylor & Francis) since July of 2020.',
  };

  return (
    <div className="faculty-container">
      <h1>Our Faculty Coordinator</h1>
      <div className="faculty-card">
        <div className="faculty-name">
          <h2>{coordinator.name}</h2>
        </div>
        <div className="faculty-description">
          <p>{coordinator.description}</p>
        </div>
      </div>
    </div>
  );
};

export default FacultyCoordinator;