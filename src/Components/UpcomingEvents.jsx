import React from 'react';
import './UpcomingEvents.css';

const UpcomingEvents = () => {
  const events = [
    {
      title: 'A B C ',
      date: 'August 1, 2025',
      location: 'LH 111, IIT Delhi',
      description: 'Join us to explore study opportunities and meet university representatives.',
      link: '#',
    },
    {
      title: 'A B C ',
      date: 'August 1, 2025',
      location: 'LH 111, IIT Delhi',
      description: 'Join us to explore study opportunities and meet university representatives.',
      link: '#',
    },
    {
      title: 'A B C ',
      date: 'August 1, 2025',
      location: 'LH 111, IIT Delhi',
      description: 'Join us to explore study opportunities and meet university representatives.',
      link: '#',
    },
  ];

  return (
    <section className="upcoming-events">
      <h2>Upcoming Events</h2>
      <div className="events-container">
        {events.map((event, index) => (
          <a href={event.link} key={index} className="event-card">
            <div className="event-icon">[Icon or image]</div>
            <div className="event-content">
              <h3>{event.title}</h3>
              <p className="event-meta">{event.date} | {event.location}</p>
              <p className="event-description">{event.description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default UpcomingEvents;