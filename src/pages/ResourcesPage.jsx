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
        link: "https://csciitd-my.sharepoint.com/personal/es1230560_iitd_ac_in/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fes1230560%5Fiitd%5Fac%5Fin%2FDocuments%2F23ES1%20Resources%2FSemester%203&ga=1",
        description: "ESL100, ESL260, ESL261, ESL220, MCL140, HUL213"
      },
      {
        id: 2,
        title: "Semester 4",
        type: "Resources Drive",
        instructor: "Dr. Priya Sharma",
        link: "https://csciitd-my.sharepoint.com/personal/es1230560_iitd_ac_in/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fes1230560%5Fiitd%5Fac%5Fin%2FDocuments%2F23ES1%20Resources%2FSemester%204&ga=1",
        description: "APL105, ESL200, ESL262, HUL272, MLL100, SBL100"
      },
      {
        id: 3,
        title: "Semester 5",
        type: "Resources Drive",
        instructor: "Prof. Rajiv Mishra",
        link: "https://csciitd-my.sharepoint.com/personal/es1221792_iitd_ac_in/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fes1221792%5Fiitd%5Fac%5Fin%2FDocuments%2FShreyans%20Singh%27s%20Acad%20Drive%2Fsem%205&ga=1",
        description: "CVL100, ESL263, ESL280, ESL341, ESL370, MCL242"
      },
      {
        id: 4,
        title: "Semester 6",
        type: "Resources Drive",
        instructor: "Prof. Rajiv Mishra",
        link: "https://csciitd-my.sharepoint.com/personal/es1210186_iitd_ac_in/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fes1210186%5Fiitd%5Fac%5Fin%2FDocuments%2FResources%20ES1%2FSEM%206&ga=1",
        description: "ESL352, ESL361, ESL371, ESL373, ESP260, ESP300"
      },
      {
        id: 5,
        title: "Semester 7",
        type: "Resources Drive",
        instructor: "Prof. Rajiv Mishra",
        link: "https://csciitd-my.sharepoint.com/personal/es1210186_iitd_ac_in/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fes1210186%5Fiitd%5Fac%5Fin%2FDocuments%2FResources%20ES1%2FSEM%207&ga=1",
        description: "ESL372, ESL390, ESL400, HUL316, RDL770, RDL771"
      },
      {
        id: 6,
        title: "Semester 8",
        type: "Resources Drive",
        instructor: "Prof. Rajiv Mishra",
        link: "#",
        description: "Will be available soon."
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

      {/* <section className="resources-section">
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
      </section> */}

      <section className="resources-section alt-bg">
        <div className="container">
          <h2 className="section-title">Btech Resources</h2>
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
