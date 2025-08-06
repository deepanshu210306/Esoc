import { Link } from 'react-router-dom';
import './HomeSections.css';

const HomeSections = () => {
  const sections = [
    {
      id: 1,
      title: "About Us",
      description: "Learn about our mission, vision, and the impact we're making in the energy sector.",
      link: "/about",
      image: "/about-us.jpeg",
    },
    {
      id: 2,
      title: "Events",
      description: "Discover our upcoming and past events focused on energy innovation and networking.",
      link: "/events",
      image: "/events.jpg",
    },
    {
      id: 3,
      title: "Resources",
      description: "Access valuable resources, publications, and learning materials for energy enthusiasts.",
      link: "/resources",
      image: "/resources.webp",
    },
    {
      id: 4,
      title: "Meet Our Team",
      description: "Get to know the dedicated individuals working behind Energy Society at IIT Delhi.",
      link: "/team",
      image: "/meet-our-team.jpeg",
    },
  ];

  return (
    <section className="home-sections">
      <div className="container">
        <h2 className="section-title">Explore <span>Energy Society</span></h2>
        <div className="sections-grid">
          {sections.map((section) => (
            <div className="section-card" key={section.id}>
              <div className="section-image">
                <img src={section.image} alt={section.title} />
              </div>
              <div className="section-content">
                <h3>{section.title}</h3>
                <p>{section.description}</p>
                <Link to={section.link} className="btn-outline">
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeSections;
