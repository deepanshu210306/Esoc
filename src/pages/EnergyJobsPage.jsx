import { useState, useEffect } from 'react';
import './EnergyJobsPage.css';

const EnergyJobsPage = () => {
  const [jobs] = useState([
    // --- PLACEMENTS ---
    {
      id: 1,
      title: "Graduate Engineer Trainee - Heavy Engineering",
      company: "ISGEC Heavy Engineering",
      location: "On-site",
      type: "Full-time",
      placementType: "placement",
      category: "Heavy Engineering",
      experience: "Entry Level",
      salary: "₹5,00,000 - ₹8,00,000/year",
      salaryNum: 650000,
      description: "As a GET in heavy engineering at ISGEC, you will support design, manufacturing and quality assurance for boilers, heat exchangers, and structural equipment. This involves drawing reviews, process documentation, shop floor coordination, and learning fabrication standards for mechanical and pressure systems.",
      alumni: "Dev Jai Shree Choudhary (2025 passout)",
      linkedin: "",
      tags: ["Mechanical", "Fabrication", "Quality", "Project Support"],
      posted: "1 day ago",
      datePosted: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000)
    },
    {
      id: 2,
      title: "Electrical Founding Engineer",
      company: "Blinq Mobility",
      location: "On-site",
      type: "Full-time",
      placementType: "placement",
      category: "Electronics Engineering",
      experience: "Entry Level",
      salary: "₹6,00,000 - ₹9,00,000/year",
      salaryNum: 750000,
      description: "Pure hardware startup related to field of energy sustainability. Making mirco EV cars with swappable batteries to make EV adoption the obvious choice in India",
      alumni: "Anees Ahmed Khan (2025 passout)",
      linkedin: "https://www.linkedin.com/in/anees-ahmed-khan-01300b267/",
      tags: ["Embedded", "ECU", "Testing", "Automotive"],
      posted: "2 days ago",
      datePosted: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000)
    },
    {
      id: 3,
      title: "Graduate Engineer Trainee / Solar Engineer",
      company: "Hero Future Energies",
      location: "Hybrid",
      type: "Full-time",
      placementType: "placement",
      category: "Solar Energy",
      experience: "Entry Level",
      salary: "₹6,50,000 - ₹10,00,000/year",
      salaryNum: 825000,
      description: "As a GET/Solar Engineer you will support PV plant engineering, perform yield analysis, assist in commissioning and operations for utility-scale solar projects. Tasks include module layout design, energy modeling, plant performance monitoring, and site troubleshooting.",
      alumni: "Abhishek Tank (2025 passout)",
      linkedin: "https://www.linkedin.com/in/abhishek-tank-647627249/",
      tags: ["PV Design", "PVsyst", "Commissioning", "O&M"],
      posted: "3 days ago",
      datePosted: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000)
    },
    {
      id: 4,
      title: "Graduate Engineer Trainee - Electrical",
      company: "SLnko Energy",
      location: "Remote/On-site",
      type: "Full-time",
      placementType: "placement",
      category: "Electrical Engineering",
      experience: "Entry Level",
      salary: "₹5,50,000 - ₹8,50,000/year",
      salaryNum: 700000,
      description: "GET Electrical at SLnko Energy includes supporting design of low-voltage and medium-voltage power distribution, conducting load calculations, preparing electrical schematics, and assisting with procurement and testing activities. You will also learn safety practices for field installation and commissioning.",
      alumni: "Shreya Hiremath (2026 passout)",
      linkedin: "",
      tags: ["Power Distribution", "AutoCAD", "Testing", "Safety"],
      posted: "4 days ago",
      datePosted: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000)
    },
    {
      id: 5,
      title: "Control Systems Engineer",
      company: "Sharang Shakti Private Limited",
      location: "On-site",
      type: "Full-time",
      placementType: "placement",
      category: "Control Systems",
      experience: "Entry Level",
      salary: "₹6,00,000 - ₹10,00,000/year",
      salaryNum: 800000,
      description: "Design, configure, and troubleshoot PLC/SCADA systems for industrial automation projects. Work on control logic development, sensor integration, and commissioning of automated processes in manufacturing and energy systems.",
      alumni: "JaiRam GnanaVadivel (2026 passout)",
      linkedin: "http://linkedin.com/in/jairam-gnanavadivel-665176250/",
      tags: ["PLC", "SCADA", "Automation", "Control Logic"],
      posted: "5 days ago",
      datePosted: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000)
    },
    {
      id: 6,
      title: "Graduate Engineer Trainee",
      company: "HexaClimate",
      location: "Hybrid",
      type: "Full-time",
      placementType: "placement",
      category: "Sustainability Engineering",
      experience: "Entry Level",
      salary: "₹5,50,000 - ₹8,50,000/year",
      salaryNum: 700000,
      description: "As a trainee at HexaClimate, you will support project execution for climate-tech and energy efficiency solutions, including data collection, system modeling, and pilot deployments. Gain experience in green building systems, renewable energy integration, and sustainability reporting.",
      alumni: "Khushee Binwal (2026 passout)",
      linkedin: "https://www.linkedin.com/in/khushee-binwal/",
      tags: ["Sustainability", "Data Modeling", "Project Support", "Renewables"],
      posted: "6 days ago",
      datePosted: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000)
    },
    {
      id: 7,
      title: "Electrical Design Engineer",
      company: "Shinmei Industry",
      location: "On-site",
      type: "Full-time",
      placementType: "placement",
      category: "Electrical Design",
      experience: "Entry Level",
      salary: "₹6,00,000 - ₹9,50,000/year",
      salaryNum: 775000,
      description: "Develop electrical schematics, single-line diagrams, and panel layouts for industrial electrical installations. Coordinate with mechanical, civil, and procurement teams to finalize designs and support design reviews and compliance checks.",
      alumni: "Dinesh P.G (2026 passout)",
      linkedin: "https://www.linkedin.com/in/dinesh-pg-9748a5259/",
      tags: ["Electrical CAD", "SLD", "Design Review", "Compliance"],
      posted: "7 days ago",
      datePosted: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
    },

    // --- INTERNS ---
    {
      id: 8,
      title: "Foreign Research Intern",
      company: "KTH Sweden",
      location: "On-site / Remote",
      type: "Internship",
      placementType: "intern",
      category: "Research",
      experience: "Intern",
      salary: "Stipend",
      salaryNum: 0,
      description: "Foreign research internship focusing on advanced engineering and technology systems at KTH Royal Institute of Technology, Sweden.",
      alumni: "Shashank (2027 passout)",
      linkedin: "",
      tags: ["Research", "Foreign Internship", "KTH"],
      posted: "Recently",
      datePosted: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000)
    },
    {
      id: 9,
      title: "Foreign Research Intern",
      company: "EPFL Switzerland",
      location: "On-site / Remote",
      type: "Internship",
      placementType: "intern",
      category: "Research",
      experience: "Intern",
      salary: "Stipend",
      salaryNum: 0,
      description: "Foreign research internship at EPFL Switzerland contributing to cutting-edge scientific and engineering research.",
      alumni: "Chahak Shah (2027 passout)",
      linkedin: "https://www.linkedin.com/in/chahak-shah/",
      tags: ["Research", "Foreign Internship", "EPFL"],
      posted: "Recently",
      datePosted: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000)
    },
    {
      id: 10,
      title: "Intern",
      company: "HexaClimate",
      location: "Hybrid",
      type: "Internship",
      placementType: "intern",
      category: "Sustainability Engineering",
      experience: "Intern",
      salary: "Stipend",
      salaryNum: 0,
      description: "Internship focused on climate-tech, energy efficiency solutions, and sustainability modeling.",
      alumni: "Ashutosh Raj (2027 passout)",
      linkedin: "https://www.linkedin.com/in/ashutosh-raj-431a2b280/",
      tags: ["Sustainability", "Climate-Tech", "Internship"],
      posted: "Recently",
      datePosted: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000)
    },
    {
      id: 11,
      title: "Intern",
      company: "HexaClimate",
      location: "Hybrid",
      type: "Internship",
      placementType: "intern",
      category: "Sustainability Engineering",
      experience: "Intern",
      salary: "Stipend",
      salaryNum: 0,
      description: "Internship focused on climate-tech, energy efficiency solutions, and sustainability modeling.",
      alumni: "Sarthak Garg (2027 passout)",
      linkedin: "https://www.linkedin.com/in/sarthakgarg05/",
      tags: ["Sustainability", "Climate-Tech", "Internship"],
      posted: "Recently",
      datePosted: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000)
    },
    {
      id: 12,
      title: "Intern",
      company: "Battery Smart",
      location: "Hybrid",
      type: "Internship",
      placementType: "intern",
      category: "EV / Battery Tech",
      experience: "Intern",
      salary: "Stipend",
      salaryNum: 0,
      description: "Working on battery swapping networks and electric vehicle ecosystem operational support and data analysis.",
      alumni: "Disha Singla (2027 passout)",
      linkedin: "https://www.linkedin.com/in/disha-singla-84373428b/",
      tags: ["EV", "Battery Tech", "Operations"],
      posted: "Recently",
      datePosted: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000)
    }
  ]);

  // Use "placement" or "intern" as the active tab state
  const [activeTab, setActiveTab] = useState('placement');
  const [filteredJobs, setFilteredJobs] = useState([]);
  
  // Existing filter states (kept in case you add search bars later)
  const [searchTerm, setSearchTerm] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [experienceFilter, setExperienceFilter] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [sortBy, setSortBy] = useState('recent');

  const filterJobs = () => {
    const filtered = jobs.filter(job => {
      // First, filter by the active Tab (Placement vs Intern)
      if (job.placementType !== activeTab) return false;

      // Then apply other optional filters
      const matchesSearch = !searchTerm ||
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchesLocation = !locationFilter || job.location === locationFilter;
      const matchesExperience = !experienceFilter || job.experience === experienceFilter;
      const matchesCategory = !categoryFilter || job.category === categoryFilter;

      return matchesSearch && matchesLocation && matchesExperience && matchesCategory;
    });

    // Sort jobs
    const sorted = [...filtered].sort((a, b) => {
      switch(sortBy) {
        case 'recent':
          return b.datePosted - a.datePosted;
        case 'salary-high':
          return b.salaryNum - a.salaryNum;
        case 'salary-low':
          return a.salaryNum - b.salaryNum;
        case 'title':
          return a.title.localeCompare(b.title);
        default:
          return 0;
      }
    });

    setFilteredJobs(sorted);
  };

  // Re-run the filter whenever the tab or any other criteria changes
  useEffect(() => {
    filterJobs();
  }, [activeTab, searchTerm, locationFilter, experienceFilter, categoryFilter, sortBy]);

  return (
    <div className="energy-jobs-page">
      <div className="page-header jobs-header">
        <div className="container">
          <h1 className="page-title">Our <span>Alumni</span></h1>
          <p className="page-subtitle">
            Connect with alumni working in the energy sector. Explore career opportunities and learn from their experiences 
            as they share insights about their professional journeys and growth in the energy industry.
          </p>
        </div>
        
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
        </div>
      </div>

      <div className="container">
        
        {/* NEW TOGGLE BUTTONS */}
        <div className="type-toggle-container">
          <button 
            className={`type-toggle-btn ${activeTab === 'placement' ? 'active' : ''}`}
            onClick={() => setActiveTab('placement')}
          >
            Placements
          </button>
          <button 
            className={`type-toggle-btn ${activeTab === 'intern' ? 'active' : ''}`}
            onClick={() => setActiveTab('intern')}
          >
            Interns
          </button>
        </div>

        <div className="jobs-grid">
          {filteredJobs.length === 0 ? (
            <div className="no-jobs">
              <h3>No alumni found</h3>
              <p>Check back soon for more alumni profiles</p>
            </div>
          ) : (
            filteredJobs.map(job => (
              <div key={job.id} className="job-card">
                <div className="job-header">
                  <div className="job-title-section">
                    <h2 className="job-title">{job.title}</h2>
                    <p className="company-name">{job.company}</p>
                  </div>
                </div>

                <p className="job-description">{job.description}</p>
                <p className="job-alumni">Alumni: {job.alumni}</p>
                {job.linkedin && (
                  <p className="job-linkedin">
                    LinkedIn: <a href={job.linkedin} target="_blank" rel="noopener noreferrer">{job.linkedin}</a>
                  </p>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default EnergyJobsPage;