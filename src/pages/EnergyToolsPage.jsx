import React from 'react';
import './EnergyToolsPage.css';

const EnergyToolsPage = () => {
  return (
    <div className="energy-tools-page">
      <div className="page-header resources-header">
        <div className="container">
          <h1 className="page-title">Energy <span>Tools</span></h1>
          <p className="page-subtitle">
            Explore a curated set of interactive tools for analyzing energy systems, emissions, and renewable potential.
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
          <h2 className="section-title">Energy Tools</h2>
          <div className="resources-grid">

            <div className="resource-card">
              <div className="resource-content">
                <span className="resource-badge">Carbon & Sustainability</span>
                <h3 className="resource-title">Emissions & Footprint</h3>
                <p className="resource-description">
                  Explore personal and household carbon emissions using globally recognized tools.
                </p>
                <div className="year-links">
                  <a href="https://www.carbonfootprint.com/calculator.aspx" target="_blank" rel="noreferrer" className="year-pill">
                    <span className="year-pill__cta">Carbon Calculator</span>
                  </a>
                  <a href="https://www.footprintcalculator.org/" target="_blank" rel="noreferrer" className="year-pill">
                    <span className="year-pill__cta">Global Footprint</span>
                  </a>
                  <a href="https://www.epa.gov/ghgemissions/carbon-footprint-calculator" target="_blank" rel="noreferrer" className="year-pill">
                    <span className="year-pill__cta">EPA Calculator</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="resource-card">
              <div className="resource-content">
                <span className="resource-badge">Solar & Renewables</span>
                <h3 className="resource-title">Resource Assessment</h3>
                <p className="resource-description">
                  Analyze solar and wind potential using industry-grade datasets and models.
                </p>
                <div className="year-links">
                  <a href="https://globalsolaratlas.info" target="_blank" rel="noreferrer" className="year-pill">
                    <span className="year-pill__cta">Solar Atlas</span>
                  </a>
                  <a href="https://pvwatts.nrel.gov/" target="_blank" rel="noreferrer" className="year-pill">
                    <span className="year-pill__cta">PVWatts</span>
                  </a>
                  <a href="https://globalwindatlas.info/" target="_blank" rel="noreferrer" className="year-pill">
                    <span className="year-pill__cta">Wind Atlas</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="resource-card">
              <div className="resource-content">
                <span className="resource-badge">Transport & Mobility</span>
                <h3 className="resource-title">Emission Comparison</h3>
                <p className="resource-description">
                  Compare emissions across transport modes including EVs and aviation.
                </p>
                <div className="year-links">
                  <a href="https://e-amrit.niti.gov.in/co2-calculator" target="_blank" rel="noreferrer" className="year-pill">
                    <span className="year-pill__cta">EV Calculator</span>
                  </a>
                  <a href="https://www.icao.int/environmental-protection/environmental-tools/icec" target="_blank" rel="noreferrer" className="year-pill">
                    <span className="year-pill__cta">Flight Emissions</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="resource-card">
              <div className="resource-content">
                <span className="resource-badge">Energy Systems</span>
                <h3 className="resource-title">Consumption & Grid Insights</h3>
                <p className="resource-description">
                  Evaluate energy consumption, building efficiency, and real-time grid intensity.
                </p>
                <div className="year-links">
                  <a href="https://hes.lbl.gov/" target="_blank" rel="noreferrer" className="year-pill">
                    <span className="year-pill__cta">Home Energy Saver</span>
                  </a>
                  <a href="https://www.electricitymaps.com/" target="_blank" rel="noreferrer" className="year-pill">
                    <span className="year-pill__cta">Electricity Maps</span>
                  </a>
                  <a href="https://www.websitecarbon.com/" target="_blank" rel="noreferrer" className="year-pill">
                    <span className="year-pill__cta">Website Carbon</span>
                  </a>
                </div>
              </div>
            </div>

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

export default EnergyToolsPage;
