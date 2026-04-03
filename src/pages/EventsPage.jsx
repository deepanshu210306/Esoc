import React from 'react';
import EventsCarousel from '../Components/EventsCarousel';
import './EventsPage.css';

const EventsPage = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: "Department Dinner 2026",
      date: "Date to be decided",
      location: "Venue to be decided",
      image: "/events/upcoming.jpg",
      description: "The annual Department Dinner brings together students, faculty, and alumni for an evening of celebration, networking, and memories. With awards, performances, and heartfelt moments, it’s a perfect way to unwind and strengthen the Energy Engineering community."
    },
  ];

  const pastEvents = [
    {
      id: 3,
      title: "Tour of Stalls",
      date: "2025",
      location: "IIT Delhi",
      image: "/events/Tour of stalls.jpg",
      description: "A guided tour of society stalls showcasing initiatives, projects, and opportunities for students.",
      link: "https://www.instagram.com/p/DQQipTUEzYX/?img_index=1"
    },
    {
      id: 4,
      title: "Departmental Dinner 2025",
      date: "Apr 25, 2025",
      location: "Department of Energy Engineering",
      image: "/events/departmental-dinner-2025.jpg",
      description: " A night of laughter, awards, farewells, and unforgettable department memories.",
      link: "https://www.instagram.com/p/DLkD5SFzpqO/?img_index=1"
    },
    {
      id: 5,
      title: "Fresher's Orientation",
      date: "Sep 3, 2025",
      location: "LH 422",
      image: "/events/freshers-orientation.png",
      description: "Welcoming fresh sparks to Energy Engineering—fun, friendships, and the start of an electrifying journey!",
      link: "https://www.instagram.com/p/DPRhegyk6I5/?img_index=1"
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
