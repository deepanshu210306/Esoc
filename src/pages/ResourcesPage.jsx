import React from 'react';
import './ResourcesPage.css';

const ResourcesPage = () => {
  const semesterResources = [
    {
      id: 1,
      title: "Semester 3",
      type: "Resources Drive",
      description: "ESL100, ESL260, ESL261, ESL220, MCL140, HUL213",
      yearLinks: [
        {
          year: "2022",
          link: "https://csciitd-my.sharepoint.com/personal/es1230560_iitd_ac_in/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fes1230560%5Fiitd%5Fac%5Fin%2FDocuments%2F23ES1%20Resources%2FSemester%203&ga=1",
          status: "available"
        },
        {
          year: "2023",
          link: "https://csciitd-my.sharepoint.com/personal/es1230560_iitd_ac_in/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fes1230560%5Fiitd%5Fac%5Fin%2FDocuments%2F23ES1%20Resources%2FSemester%203&viewid=9d4f2e47%2Ddb36%2D4c57%2D86f2%2D488be72a54a4&ga=1",
          status: "available"
        }
      ]
    },
    {
      id: 2,
      title: "Semester 4",
      type: "Resources Drive",
      description: "APL105, ESL200, ESL262, HUL272, MLL100, SBL100",
      yearLinks: [
        {
          year: "2022",
          link: "https://csciitd-my.sharepoint.com/personal/es1230560_iitd_ac_in/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fes1230560%5Fiitd%5Fac%5Fin%2FDocuments%2F23ES1%20Resources%2FSemester%204&ga=1",
          status: "available"
        },
        {
          year: "2023",
          link: "https://csciitd-my.sharepoint.com/personal/es1230560_iitd_ac_in/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fes1230560%5Fiitd%5Fac%5Fin%2FDocuments%2F23ES1%20Resources%2FSemester%204&viewid=9d4f2e47%2Ddb36%2D4c57%2D86f2%2D488be72a54a4&ga=1",
          status: "available"
        }
      ]
    },
    {
      id: 3,
      title: "Semester 5",
      type: "Resources Drive",
      description: "CVL100, ESL263, ESL280, ESL341, ESL370, MCL242",
      yearLinks: [
        {
          year: "2022",
          link: "https://csciitd-my.sharepoint.com/personal/es1221792_iitd_ac_in/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fes1221792%5Fiitd%5Fac%5Fin%2FDocuments%2FShreyans%20Singh%27s%20Acad%20Drive%2Fsem%205&ga=1",
          status: "available"
        },
        {
          year: "2023",
          link: "https://csciitd-my.sharepoint.com/personal/es1230560_iitd_ac_in/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fes1230560%5Fiitd%5Fac%5Fin%2FDocuments%2F23ES1%20Resources%2FSemester%205&viewid=9d4f2e47%2Ddb36%2D4c57%2D86f2%2D488be72a54a4&ga=1",
          status: "available"
        }
      ]
    },
    {
      id: 4,
      title: "Semester 6",
      type: "Resources Drive",
      description: "ESL352, ESL361, ESL371, ESL373, ESP260, ESP300",
      yearLinks: [
        {
          year: "2022",
          link: "https://csciitd-my.sharepoint.com/personal/es1210186_iitd_ac_in/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fes1210186%5Fiitd%5Fac%5Fin%2FDocuments%2FResources%20ES1%2FSEM%206&ga=1",
          status: "available"
        },
        {
          year: "2023",
          link: "https://csciitd-my.sharepoint.com/personal/es1230560_iitd_ac_in/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fes1230560%5Fiitd%5Fac%5Fin%2FDocuments%2F23ES1%20Resources%2FSemester%206&viewid=9d4f2e47%2Ddb36%2D4c57%2D86f2%2D488be72a54a4&ga=1",
          status: "available"
        }
      ]
    },
    {
      id: 5,
      title: "Semester 7",
      type: "Resources Drive",
      description: "ESL372, ESL390, ESL400, HUL316, RDL770, RDL771",
      yearLinks: [
        {
          year: "2022",
          link: "https://csciitd-my.sharepoint.com/personal/es1210186_iitd_ac_in/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fes1210186%5Fiitd%5Fac%5Fin%2FDocuments%2FResources%20ES1%2FSEM%207&ga=1",
          status: "available"
        },
        {
          year: "2023",
          link: "#",
          status: "coming-soon"
        }
      ]
    },
    {
      id: 6,
      title: "Semester 8",
      type: "Resources Drive",
      description: "Capstone, electives and final-year resources",
      yearLinks: [
        { year: "2022", link: "#", status: "coming-soon" },
        { year: "2023", link: "#", status: "coming-soon" }
      ]
    },
  ];

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

      <section className="resources-section alt-bg">
        <div className="container">
          <h2 className="section-title">Btech Resources</h2>
          <div className="resources-grid">
            {semesterResources.map((item, index) => (
              <div
                className="resource-card"
                key={item.id}
                style={{ "--item-index": index }}
              >
                <div className="resource-content">
                  <span className="resource-badge">{item.type}</span>
                  <h3 className="resource-title">{item.title}</h3>
                  <p className="resource-description">{item.description}</p>
                  <div className="year-links">
                    {item.yearLinks.map((yearItem) => (
                      <a
                        key={yearItem.year}
                        href={yearItem.status === "coming-soon" ? undefined : yearItem.link}
                        className={`year-pill ${yearItem.status === "coming-soon" ? "disabled" : ""}`}
                        target={yearItem.status === "coming-soon" ? "_self" : "_blank"}
                        rel="noreferrer"
                      >
                        <span className="year-pill__year">{yearItem.year}</span>
                        <span className="year-pill__cta">
                          {yearItem.status === "coming-soon" ? "Coming soon" : "View resources"}
                        </span>
                      </a>
                    ))}
                  </div>
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
