import { useState, useEffect } from 'react';
import './EnergyJobsPage.css';

const EnergyJobsPage = () => {
  const [jobs] = useState([
    {
      id: 1,
      title: "Graduate Engineer Trainee - Heavy Engineering",
      company: "ISGEC Heavy Engineering",
      location: "On-site",
      type: "Full-time",
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
      title: "Graduate Engineer Trainee - Electronics",
      company: "Bajaj Auto / Chetak Ltd",
      location: "On-site",
      type: "Full-time",
      category: "Electronics Engineering",
      experience: "Entry Level",
      salary: "₹6,00,000 - ₹9,00,000/year",
      salaryNum: 750000,
      description: "In this GET role, you will work on embedded electronics for automotive systems, including ECU validation, sensor integration, and component-level troubleshooting. Responsibilities include schematic review, testing of control modules, and coordination with firmware teams for product release cycles.",
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
    }
  ]);

  const [filteredJobs, setFilteredJobs] = useState(jobs);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [experienceFilter, setExperienceFilter] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [sortBy, setSortBy] = useState('recent');

  const jobsPerPage = 6;

  const getCompanyInitials = (company) => {
    return company.split(' ').map(word => word[0]).join('').substring(0, 2).toUpperCase();
  };

  const filterJobs = () => {
    const filtered = jobs.filter(job => {
      const matchesSearch = !searchTerm ||
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchesType = !typeFilter || job.type === typeFilter;
      const matchesLocation = !locationFilter || job.location === locationFilter;
      const matchesExperience = !experienceFilter || job.experience === experienceFilter;
      const matchesCategory = !categoryFilter || job.category === categoryFilter;

      return matchesSearch && matchesType && matchesLocation && matchesExperience && matchesCategory;
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
    setCurrentPage(1);
  };

  useEffect(() => {
    filterJobs();
  }, [searchTerm, typeFilter, locationFilter, experienceFilter, categoryFilter, sortBy]);

  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);
  const startIdx = (currentPage - 1) * jobsPerPage;
  const endIdx = startIdx + jobsPerPage;
  const jobsToShow = filteredJobs.slice(startIdx, endIdx);

  const changePage = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const viewJob = (jobId) => {
    const job = jobs.find(j => j.id === jobId);
    alert(`Viewing job: ${job.title}\n\nCompany: ${job.company}\nLocation: ${job.location}\nSalary: ${job.salary}\n\nThis would open a detailed job view page with:\n- Full job description\n- Requirements & qualifications\n- Benefits & perks\n- Application form\n\nClick "Apply Now" to submit your application!`);
  };

  const renderPagination = () => {
    if (totalPages <= 1) return null;

    const pages = [];
    if (currentPage > 1) {
      pages.push(
        <button key="prev" className="page-btn" onClick={() => changePage(currentPage - 1)}>
          ← Prev
        </button>
      );
    }

    for (let i = 1; i <= totalPages; i++) {
      if (i === 1 || i === totalPages || (i >= currentPage - 1 && i <= currentPage + 1)) {
        pages.push(
          <button
            key={i}
            className={`page-btn ${i === currentPage ? 'active' : ''}`}
            onClick={() => changePage(i)}
          >
            {i}
          </button>
        );
      } else if (i === currentPage - 2 || i === currentPage + 2) {
        pages.push(<span key={i} className="page-btn">...</span>);
      }
    }

    if (currentPage < totalPages) {
      pages.push(
        <button key="next" className="page-btn" onClick={() => changePage(currentPage + 1)}>
          Next →
        </button>
      );
    }

    return pages;
  };

  return (
    <div className="energy-jobs-page">
      <div className="container">
        <div className="filters-section">
          <div className="search-bar">
            <input
              type="search"
              className="search-input"
              placeholder="Search jobs by title, company, or keywords..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="filters-grid">
            <div className="filter-group">
              <label htmlFor="typeFilter">Job Type</label>
              <select
                id="typeFilter"
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value)}
              >
                <option value="">All Types</option>
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Contract">Contract</option>
                <option value="Internship">Internship</option>
              </select>
            </div>
            <div className="filter-group">
              <label htmlFor="locationFilter">Location</label>
              <select
                id="locationFilter"
                value={locationFilter}
                onChange={(e) => setLocationFilter(e.target.value)}
              >
                <option value="">All Locations</option>
                <option value="Remote">Remote</option>
                <option value="Hybrid">Hybrid</option>
                <option value="On-site">On-site</option>
              </select>
            </div>
            <div className="filter-group">
              <label htmlFor="experienceFilter">Experience</label>
              <select
                id="experienceFilter"
                value={experienceFilter}
                onChange={(e) => setExperienceFilter(e.target.value)}
              >
                <option value="">All Levels</option>
                <option value="Entry Level">Entry Level</option>
                <option value="Mid Level">Mid Level</option>
                <option value="Senior Level">Senior Level</option>
              </select>
            </div>
            <div className="filter-group">
              <label htmlFor="categoryFilter">Specialization</label>
              <select
                id="categoryFilter"
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
              >
                <option value="">All Specializations</option>
                <option value="Solar Energy">Solar Energy</option>
                <option value="Wind Energy">Wind Energy</option>
                <option value="Power Systems">Power Systems</option>
                <option value="Energy Storage">Energy Storage</option>
                <option value="Grid Integration">Grid Integration</option>
                <option value="Nuclear Energy">Nuclear Energy</option>
                <option value="Hydropower">Hydropower</option>
              </select>
            </div>
          </div>
        </div>

        <div className="stats-bar">
          <div className="job-count">
            Showing {filteredJobs.length} job{filteredJobs.length !== 1 ? 's' : ''}
          </div>
          <div className="sort-controls">
            <label htmlFor="sortBy">Sort by:</label>
            <select
              id="sortBy"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="recent">Most Recent</option>
              <option value="salary-high">Salary: High to Low</option>
              <option value="salary-low">Salary: Low to High</option>
              <option value="title">Title: A-Z</option>
            </select>
          </div>
        </div>

        <div className="jobs-grid">
          {jobsToShow.length === 0 ? (
            <div className="no-jobs">
              <h3>No jobs found</h3>
              <p>Try adjusting your filters or search terms</p>
            </div>
          ) : (
            jobsToShow.map(job => (
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

        <div className="pagination">
          {renderPagination()}
        </div>
      </div>
    </div>
  );
};

export default EnergyJobsPage;