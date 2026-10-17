import React from 'react';
import './Kaushik_sir.css';

const FacultyCoordinator = () => {
  const coordinator = {
    name: 'Prof. Arihant Bhandari',
    description: 'Arihant Bhandari was a bachelor student at Indian Institute of Technology Kanpur (IITK) from 2009-2013. He got a patent and best B.Tech. project award for making an enhanced water purification system based on solar still. He also got a doctorate (Ph.D.) from IITK on simulation of electrochemical energy storage in Li-ion batteries. He was a postdoctoral research fellow (2019-2024) of the multiscale modelling project (batterymodel.co.uk)  of the Faraday Institution (faraday.ac.uk), a consortium of 27 UK universities and 50 companies for electrochemical energy storage research. There he developed theory and software tools for multiscale simulations and demonstrated its applications in designing better energy materials. He joined the department of Energy Science and Engineering at IIT Delhi in 2024. He is interested in multiscale simulations at electronic, atomistic, microscopic and macroscopic length and time scales. The research group is open to all interested in interdisciplinary research at the intersection of various subjects including engineering, physics, materials, chemistry and high-performance computing.',
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