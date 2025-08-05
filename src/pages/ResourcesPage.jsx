import React from 'react';
import './ResourcesPage.css';

const ResourcesPage = () => {
  const resources = {
    publications: [
      {
        id: 1,
        title: "Energy Transition in India: Pathways and Challenges",
        authors: "Dr. Sharma, K., et al.",
        year: "2023",
        link: "#",
        description: "A comprehensive analysis of India's energy transition landscape and future roadmap."
      },
      {
        id: 2,
        title: "Renewable Energy Integration: Case Studies from IIT Delhi",
        authors: "Prof. Kumar, A., Dr. Singh, R.",
        year: "2022",
        link: "#",
        description: "Research findings from renewable energy integration projects at IIT Delhi campus."
      },
      {
        id: 3,
        title: "Smart Grid Technologies for Urban Energy Management",
        authors: "Gupta, S., Patel, M., Prof. Kaushik",
        year: "2022",
        link: "#",
        description: "Analysis of smart grid implementation in urban settings with focus on Delhi NCR."
      },
    ],
    educationalMaterials: [
      {
        id: 1,
        title: "Semester 3",
        type: "Resources Drive",
        instructor: "Prof. Sanjay Kumar",
        link: "#",
        description: "ESL100, ESL260, ESL261, ESL220,"
      },
      {
        id: 2,
        title: "Semester 4",
        type: "Resources Drive",
        instructor: "Dr. Priya Sharma",
        link: "#",
        description: "Comprehensive guide to various energy storage technologies and their applications."
      },
      {
        id: 3,
        title: "Semester 5",
        type: "Resources Drive",
        instructor: "Prof. Rajiv Mishra",
        link: "#",
        description: "Overview of energy policies, regulations, and governance structures in India."
      },
      {
        id: 4,
        title: "Semester 6",
        type: "Resources Drive",
        instructor: "Prof. Rajiv Mishra",
        link: "#",
        description: "Overview of energy policies, regulations, and governance structures in India."
      },
      {
        id: 5,
        title: "Semester 7",
        type: "Resources Drive",
        instructor: "Prof. Rajiv Mishra",
        link: "#",
        description: "Overview of energy policies, regulations, and governance structures in India."
      },
      {
        id: 6,
        title: "Semester 8",
        type: "Resources Drive",
        instructor: "Prof. Rajiv Mishra",
        link: "#",
        description: "Overview of energy policies, regulations, and governance structures in India."
      },
    ],
    
  };

  return (
    <div className="resources-page">
      <div className="page-header resources-header">
        <div className="container">
          <h1 className="page-title">Our <span>Resources</span></h1>
          <p className="page-subtitle">
            Explore our curated collection of resources designed to enhance your knowledge and understanding 
            of energy systems, sustainability, and cutting-edge technologies in the energy sector.
          </p>
        </div>
        
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
        </div>
      </div>

      <section className="resources-section">
        <div className="container">
          <h2 className="section-title">Publications</h2>
          <div className="resources-grid">
            {resources.publications.map(item => (
              <div className="resource-card" key={item.id}>
                <div className="resource-content">
                  <h3 className="resource-title">{item.title}</h3>
                  <p className="resource-meta">{item.authors} • {item.year}</p>
                  <p className="resource-description">{item.description}</p>
                  <a href={item.link} className="resource-link">Read Publication</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="resources-section alt-bg">
        <div className="container">
          <h2 className="section-title">Semester Resources</h2>
          <div className="resources-grid">
            {resources.educationalMaterials.map(item => (
              <div className="resource-card" key={item.id}>
                <div className="resource-content">
                  <span className="resource-badge">{item.type}</span>
                  <h3 className="resource-title">{item.title}</h3>
                  {/* <p className="resource-meta">Instructor: {item.instructor}</p> */}
                  <p className="resource-description">{item.description}</p>
                  <a href={item.link} className="resource-link">Access Materials</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <section className="resources-section">
        <div className="container">
          <h2 className="section-title">Tools & Calculators</h2>
          <div className="resources-grid">
            {resources.tools.map(item => (
              <div className="resource-card" key={item.id}>
                <div className="resource-content">
                  <span className="resource-badge">{item.platform}</span>
                  <h3 className="resource-title">{item.title}</h3>
                  <p className="resource-meta">Developed by: {item.developer}</p>
                  <p className="resource-description">{item.description}</p>
                  <a href={item.link} className="resource-link">Use Tool</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default ResourcesPage;
