import { useState, useEffect } from 'react';
import './EnergyJobsPage.css';

const EnergyJobsPage = () => {
  const [jobs] = useState([
    {
      id: 1,
      title: "Senior Power Systems Engineer",
      company: "Energy Industry",
      location: "Remote",
      type: "Full-time",
      category: "Power Systems",
      experience: "Senior Level",
      salary: "₹18,00,000 - ₹30,00,000/year",
      salaryNum: 2400000,
      description: "Plan, model, and optimize power system designs for large renewable installations. Ensure system reliability, balance loads, and coordinate with grid operators to meet compliance and stability requirements.",
      tags: ["Power Systems", "Grid Integration", "ETAP", "PSS/E"],
      posted: "2 days ago",
      datePosted: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000)
    },
    {
      id: 2,
      title: "Solar PV Design Engineer",
      company: "Energy Industry",
      location: "Hybrid",
      type: "Full-time",
      category: "Solar Energy",
      experience: "Mid Level",
      salary: "₹10,00,000 - ₹16,00,000/year",
      salaryNum: 1300000,
      description: "Develop PV system layouts, perform detailed site assessments, and optimize energy yield for rooftop and utility-scale solar projects. Collaborate with civil, electrical, and procurement teams to align design with project budgets and timelines.",
      tags: ["Solar PV", "PVsyst", "AutoCAD", "System Design"],
      posted: "1 week ago",
      datePosted: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
    },
    {
      id: 3,
      title: "Wind Turbine Service Engineer",
      company: "Energy Industry",
      location: "On-site",
      type: "Full-time",
      category: "Wind Energy",
      experience: "Entry Level",
      salary: "₹6,00,000 - ₹10,00,000/year",
      salaryNum: 800000,
      description: "Inspect, maintain, and troubleshoot wind turbine mechanical and electrical systems to maximize uptime and safety. Conduct inspections at height, diagnose faults, and implement corrective actions while following strict safety protocols.",
      tags: ["Wind Turbines", "SCADA", "Mechanical", "Safety"],
      posted: "3 days ago",
      datePosted: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000)
    },
    {
      id: 4,
      title: "Energy Storage Systems Engineer",
      company: "Energy Industry",
      location: "Remote",
      type: "Full-time",
      category: "Energy Storage",
      experience: "Senior Level",
      salary: "₹15,00,000 - ₹25,00,000/year",
      salaryNum: 2000000,
      description: "Design and integrate battery storage systems, manage energy flows, and support control strategies for grid stability. Work with power electronics, thermal management, and energy management software to ensure reliable, efficient operation.",
      tags: ["BESS", "Battery Systems", "Power Electronics", "Energy Management"],
      posted: "5 days ago",
      datePosted: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000)
    },
    {
      id: 5,
      title: "Grid Integration Specialist",
      company: "Energy Industry",
      location: "Hybrid",
      type: "Contract",
      category: "Grid Integration",
      experience: "Mid Level",
      salary: "₹12,00,000 - ₹18,00,000/year",
      salaryNum: 1500000,
      description: "Coordinate interconnection studies, assess grid impacts, and support compliance with grid codes and utility requirements. Prepare technical reports, work with utilities, and resolve technical issues during project permitting and approval.",
      tags: ["Grid Code", "Interconnection", "Utilities", "Compliance"],
      posted: "1 day ago",
      datePosted: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000)
    },
    {
      id: 6,
      title: "Renewable Energy Project Engineer",
      company: "Energy Industry",
      location: "On-site",
      type: "Full-time",
      category: "Solar Energy",
      experience: "Mid Level",
      salary: "₹11,00,000 - ₹17,00,000/year",
      salaryNum: 1400000,
      description: "Coordinate project schedules, oversee commissioning, and ensure constructability for renewable energy installations. Liaise with vendors, monitor site progress, and ensure quality control through handover.",
      tags: ["Project Management", "Solar", "Construction", "Quality Control"],
      posted: "4 days ago",
      datePosted: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000)
    },
    {
      id: 7,
      title: "Electrical Design Engineer - Substations",
      company: "Energy Industry",
      location: "Hybrid",
      type: "Full-time",
      category: "Power Systems",
      experience: "Senior Level",
      salary: "₹14,00,000 - ₹22,00,000/year",
      salaryNum: 1800000,
      description: "Create substation electrical designs, single-line diagrams, and protection schemes for renewable energy collection systems. Collaborate with civil/structural teams and ensure compliance with electrical standards and safety guidelines.",
      tags: ["Substation Design", "Electrical", "Protection", "SLD"],
      posted: "1 week ago",
      datePosted: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
    },
    {
      id: 8,
      title: "Renewable Energy Analyst",
      company: "Energy Industry",
      location: "Remote",
      type: "Full-time",
      category: "Energy Storage",
      experience: "Entry Level",
      salary: "₹5,00,000 - ₹8,00,000/year",
      salaryNum: 650000,
      description: "Analyze generation data, build financial models, and support feasibility studies for renewable energy portfolios. Generate insights from performance data and provide recommendations for optimization and investment decisions.",
      tags: ["Data Analysis", "Financial Modeling", "Python", "Excel"],
      posted: "2 days ago",
      datePosted: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000)
    },
    {
      id: 9,
      title: "Transmission Line Engineer",
      company: "Energy Industry",
      location: "On-site",
      type: "Full-time",
      category: "Power Systems",
      experience: "Senior Level",
      salary: "₹16,00,000 - ₹26,00,000/year",
      salaryNum: 2100000,
      description: "Design transmission routes, perform line sizing and tower spotting, and develop engineering documentation for high-voltage systems. Coordinate with land surveyors and regulatory agencies to ensure alignment with environmental and permitting requirements.",
      tags: ["Transmission", "HV Lines", "Tower Design", "Civil"],
      posted: "6 days ago",
      datePosted: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000)
    },
    {
      id: 10,
      title: "Energy Engineer Intern",
      company: "Energy Industry",
      location: "Hybrid",
      type: "Internship",
      category: "Solar Energy",
      experience: "Entry Level",
      salary: "₹25,000 - ₹40,000/month",
      salaryNum: 390000,
      description: "Assist engineering teams with calculations, documentation, and site support while learning renewable energy project workflows. Support design reviews, prepare technical reports, and help track project deliverables.",
      tags: ["Internship", "Learning", "Project Support", "Engineering"],
      posted: "3 days ago",
      datePosted: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000)
    },
    {
      id: 11,
      title: "SCADA Engineer - Renewable Energy",
      company: "Energy Industry",
      location: "Remote",
      type: "Contract",
      category: "Wind Energy",
      experience: "Mid Level",
      salary: "₹13,00,000 - ₹19,00,000/year",
      salaryNum: 1600000,
      description: "Implement and maintain SCADA systems, configure data acquisition, and support operational monitoring for renewable plants. Develop dashboards, troubleshoot communications, and ensure data integrity for operational decision-making.",
      tags: ["SCADA", "HMI", "PLC", "Communication"],
      posted: "5 days ago",
      datePosted: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000)
    },
    {
      id: 12,
      title: "Nuclear Power Plant Engineer",
      company: "Energy Industry",
      location: "On-site",
      type: "Full-time",
      category: "Nuclear Energy",
      experience: "Senior Level",
      salary: "₹20,00,000 - ₹35,00,000/year",
      salaryNum: 2750000,
      description: "Support nuclear plant operations with system monitoring, maintenance planning, and safety compliance activities. Assist in configuration management, regulatory reporting, and coordination of maintenance teams.",
      tags: ["Nuclear", "Safety", "Reactor Systems", "Compliance"],
      posted: "1 week ago",
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
                  </div>
                </div>

                <p className="job-description">{job.description}</p>
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