import React from 'react';
import './UpcomingEvents.css';
import logocom from './logo.svg';

const UpcomingEvents = () => {
  const events = [
    {
      title: 'Freshers Orientation',
      date: 'September 1, 2025',
      location: 'LH 111, IIT Delhi',
      description: 'The first session for all incoming freshers is here! Come and learn about the society.',
      link: '#',
      icon: logocom
    },
    // {
    //   title: 'Another Event',
    //   date: 'October 15, 2025',
    //   location: 'Online',
    //   description: 'Join us for our next big event. More details to follow soon.',
    //   link: '#',
    //   icon: logocom
    // },
  ];

  return (
    <section className="upcoming-events">
      <h2>Upcoming Events</h2>
      <div className="events-container">
        {events.map((event, index) => (
          <a href={event.link} key={index} className="event-card">
            <img src={event.icon} alt={`${event.title} Logo`} className="event-icon" />
            <div className="event-content">
              <h3>{event.title}</h3>
              <div className="event-meta">{`${event.date} | ${event.location}`}</div>
              <p className="event-description">{event.description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default UpcomingEvents;