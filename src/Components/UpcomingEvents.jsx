import React from 'react';
import './UpcomingEvents.css';
import logocom from './logo.svg';

const UpcomingEvents = () => {
  const events = [
    {
      title: 'IntelliSmart Collaboration',
      date: 'Date to be decided',
      location: 'Venue to be decided',
      description: 'Stay tuned for our upcoming collaboration event with IntelliSmart. Details will be updated soon.',
      icon: logocom
    },
  ];

  return (
    <section className="upcoming-events">
      <h2>Upcoming Events</h2>
      <div className="events-container">
        {events.map((event, index) => (
          <div key={index} className="event-card">
            <img src={event.icon} alt={`${event.title} Logo`} className="event-icon" />
            <div className="event-content">
              <h3>{event.title}</h3>
              <div className="event-meta">{`${event.date} | ${event.location}`}</div>
              <p className="event-description">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UpcomingEvents;