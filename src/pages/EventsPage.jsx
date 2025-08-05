import React from 'react';
import EventsCarousel from '../Components/EventsCarousel';
import './EventsPage.css';

const EventsPage = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: "Energy Innovation Summit 2023",
      date: "Dec 15, 2023",
      location: "IIT Delhi Main Auditorium",
      image: "/team/dummy.jpg",
      description: "Join us for a day of innovation and networking with industry leaders and researchers in renewable energy."
    },
    {
      id: 2,
      title: "Renewable Energy Workshop",
      date: "Dec 22, 2023",
      location: "Block 5, Room 101",
      image: "/team/dummy.jpg",
      description: "Hands-on workshop on solar panel installation and efficiency optimization."
    },
    {
      id: 3,
      title: "Energy Policy Debate",
      date: "Jan 10, 2024",
      location: "Online (Zoom)",
      image: "/team/dummy.jpg",
      description: "A panel discussion on the future of energy policy in India and global implications."
    },
  ];

  const pastEvents = [
    {
      id: 4,
      title: "Carbon Capture Technologies Symposium",
      date: "Oct 5, 2023",
      location: "Department of Energy Engineering",
      image: "/team/dummy.jpg",
      description: "A symposium discussing latest advancements in carbon capture technologies."
    },
    {
      id: 5,
      title: "Sustainable Energy Hackathon",
      date: "Sept 15-17, 2023",
      location: "Innovation Lab, IIT Delhi",
      image: "/team/dummy.jpg",
      description: "48-hour hackathon focused on software solutions for energy conservation."
    },
    {
      id: 6,
      title: "Nuclear Energy: Myths & Facts",
      date: "Aug 20, 2023",
      location: "Lecture Hall Complex",
      image:"/team/dummy.jpg",
      description: "Educational seminar on nuclear energy technology and safety."
    },
  ];

  return (
    <div className="events-page">
      <div className="page-header events-header">
        <div className="container">
          <h1 className="page-title">Our <span>Events</span></h1>
          <p className="page-subtitle">
            Energy Society at IIT Delhi hosts various events throughout the academic year, 
            ranging from technical workshops and seminars to industry interactions and competitions.
            Join us to expand your knowledge and network in the energy sector.
          </p>
        </div>
        
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
        </div>
      </div>

      <section className="upcoming-events">
        <div className="container">
          <h2 className="section-title">Upcoming Events</h2>
          <EventsCarousel events={upcomingEvents} />
        </div>
      </section>

      <section className="past-events">
        <div className="container">
          <h2 className="section-title">Past Events</h2>
          <EventsCarousel events={pastEvents} />
        </div>
      </section>
    </div>
  );
};

export default EventsPage;
