import React from 'react';
import './UpcomingEvents.css';
import logocom from './logo.svg';


const UpcomingEvents = () => {
  const events = [
    {
      title: 'Freshers Orientation ',
      date: 'September 1, 2025',
      location: 'LH 111, IIT Delhi',
      description: 'The First session for freshers is here !!.',
      link: '#',
    },
    // {
    //   title: 'A B C ',
    //   date: 'August 1, 2025',
    //   location: 'LH 111, IIT Delhi',
    //   description: 'Join us to explore study opportunities and meet university representatives.',
    //   link: '#',
    // },
    // {
    //   title: 'A B C ',
    //   date: 'August 1, 2025',
    //   location: 'LH 111, IIT Delhi',
    //   description: 'Join us to explore study opportunities and meet university representatives.',
    //   link: '#',
    // },
  ];

  return (
    <section className="upcoming-events">
      <h2>Upcoming Events</h2>
      <div className="events-container">
        {events.map((event, index) => (
          <a href={event.link} key={index} class="event-card">
  <img src={logocom} alt="Event Logo" class="event-icon" />
  
  <div class="event-content">
    <h3>Freshers Orientation</h3>
    <div class="event-meta">September 1, 2025| LH 111, IIT Delhi</div>
    <p class="event-description">
     The First session for freshers is here !!!
    </p>
  </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default UpcomingEvents;