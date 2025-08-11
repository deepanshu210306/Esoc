import React from 'react';
import EventsCarousel from '../Components/EventsCarousel';
import './EventsPage.css';

const EventsPage = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: "Fresher's Orientation",
      date: "Dec 15, 2023",
      location: "IIT Delhi Main Auditorium",
      image: "/events/upcoming.jpg",
      description: "Welcoming fresh sparks to Energy Engineering—fun, friendships, and the start of an electrifying journey!"
    },
    {
      id: 2,
      title: "Terra MUN",
      date: "Dec 22, 2023",
      location: "Block 5, Room 101",
      image: "/events/upcoming.jpg",
      description: "Terra MUN sparks global energy debates—lead, innovate, and unite for a sustainable future!"
    },
    {
      id: 3,
      title: "Fresher's party",
      date: "Jan 10, 2024",
      location: "Online (Zoom)",
      image: "/events/upcoming.jpg",
      description: "Dancing, laughter, and new bonds— the freshers party kicks off an unforgettable year!"
    },
  ];

  const pastEvents = [
    {
      id: 4,
      title: "Departmental Dinner 2025",
      date: "Apr 25, 2025",
      location: "Department of Energy Engineering",
      image: "/events/departmental-dinner-2025.jpg",
      description: " A night of laughter, awards, farewells, and unforgettable department memories."
    },
    {
      id: 5,
      title: "Joule Journal",
      date: "Feb 14, 2025",
      location: "Innovation Lab, IIT Delhi",
      image: "/events/joule-journal.png",
      description: "Your energy-packed dose of stories, tips, games, and campus buzz in one!"
    },
    {
      id: 6,
      title: "Podcast",
      date: "Aug 20, 2023",
      location: "Online (Zoom)",
      image:"/events/podcast.png",
      description: "Fresh podcast chats with experts diving into energy trends, innovation, and inspiring stories!"
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
