import React from 'react';
import EventsCarousel from '../Components/EventsCarousel';
import './EventsPage.css';

const EventsPage = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: "ES Magazine launch",
      date: "Date to be decided",
      location: "Venue to be decided",
      image: "/events/upcoming.jpg",
      description: "The launch of the department’s magazine, showcasing student achievements, creative work, experiences, and highlights from the academic year."
    },
     {
      id: 1,
      title: "Alumni meet 50th ",
      date: "Date to be decided",
      location: "Venue to be decided",
      image: "/events/upcoming.jpg",
      description: "A special interaction with department alumni as part of the 50th anniversary celebrations, bringing together students, faculty, and alumni to share experiences and reflect on the department’s journey."
    },
     {
      id: 1,
      title: "Merchandise release",
      date: "Date to be decided",
      location: "Venue to be decided",
      image: "/events/upcoming.jpg",
      description: "The official launch of departmental merchandise, including exclusive hoodies, jackets, and other memorabilia for students and faculty."
    },
     {
      id: 1,
      title: "Industrial Vist",
      date: "Date to be decided",
      location: "Venue to be decided",
      image: "/events/upcoming.jpg",
      description: "A one-day visit to an industrial facility, providing students with first-hand exposure to industrial operations, processes, technologies, and workplace practices."
    },
     {
      id: 1,
      title: "Wri Collab",
      date: "Date to be decided",
      location: "Venue to be decided",
      image: "/events/upcoming.jpg",
      description: "Collaboration with industry"
    },
     {
      id: 1,
      title: "Plant Visit ",
      date: "Date to be decided",
      location: "Venue to be decided",
      image: "/events/upcoming.jpg",
      description: "A one-day educational visit to a plant, allowing students to observe real-world processes and gain practical insight into industrial systems and operations."
    },
     {
      id: 1,
      title: "Department trailer",
      date: "Date to be decided",
      location: "Venue to be decided",
      image: "/events/upcoming.jpg",
      description: "A creative video introducing the department and its society, highlighting its culture, activities, achievements, people, and student life"
    },
     {
      id: 1,
      title: "Guest Lecture",
      date: "Date to be decided",
      location: "Venue to be decided",
      image: "/events/upcoming.jpg",
      description: "An expert talk by an invited speaker, providing students with valuable insights into a specialized field, emerging developments, and real-world applications."
    },
     {
      id: 1,
      title: "Coffee with prof",
      date: "Date to be decided",
      location: "Venue to be decided",
      image: "/events/upcoming.jpg",
      description: "An informal discussion with a professor, creating an open platform for students to interact, ask questions, and discuss academics, careers, research, and other aspects of student life."
    },
     {
      id: 1,
      title: "Hackathon",
      date: "Date to be decided",
      location: "Venue to be decided",
      image: "/events/upcoming.jpg",
      description: "A hands-on, problem-solving event conducted as part of Tryst, challenging participants to develop innovative solutions through teamwork, creativity, and technology."
    },
    {
      id: 1,
      title: "Sports day",
      date: "Date to be decided",
      location: "Venue to be decided",
      image: "/events/upcoming.jpg",
      description: "A fun-filled departmental sports event featuring a range of games and activities designed to encourage teamwork, friendly competition, and interaction among students."
    },
    {
      id: 1,
      title: "OCS Intern Session",
      date: "Date to be decided",
      location: "Venue to be decided",
      image: "/events/upcoming.jpg",
      description: "A guidance session focused on preparing for internship opportunities through OCS, covering the recruitment process, preparation strategies, applications, and useful resources."
    },
    {
      id: 1,
      title: "Department Dinner",
      date: "Date to be decided",
      location: "Venue to be decided",
      image: "/events/upcoming.jpg",
      description: "A farewell gathering for graduating seniors and the outgoing team, celebrating their contributions and providing an opportunity for the department to come together and create lasting memories."
    },
  ];

  const completedEvents = [
    {
      id: 3,
      title: "Freshers(Departmental Orientation)",
      date: "22/23 July 2026",
      location: "IIT Delhi",
      image: "/events/freshers-dep-orientation.jpg",
      description: "An introductory session for first-year students covering the department, its academic environment, societies, and various opportunities available to them.",
      // link: "https://www.instagram.com/p/DQQipTUEzYX/?img_index=1"
    },
    {
      id: 4,
      title: "Tour of Stalls",
      date: "July 25, 2026",
      location: "Lecture Hall Complex (LHC)",
      image: "/events/tour-of-stalls-2026.jpg",
      description: "An interactive event at LHC introducing freshers to our society through engaging activities, games, and informal interactions.",
      link: "https://www.instagram.com/p/DcLKrZ2lwRW/?img_index=1"
    },
    {
      id: 5,
      title: "Research seminar",
      date: "Aug 20, 2026",
      location: "V-343",
      image: "/events/pragya.jpg",
      description: "An insightful lecture by Dr. Pragya Berwal Singh, offering students exposure to contemporary research and perspectives from academia.",
      link: "https://www.instagram.com/p/DcMHPKDTSLE/"
    },
    {
      id: 3,
      title: "Freshers Orientation",
      date: "Sep 9, 2026",
      location: "LH 413.5",
      image: "/events/freshers-orientation.jpg",
      description: "An informal, post-curfew orientation session introducing freshers to the department and society, followed by the announcement of the Freshers’ Party.",
      link: "https://www.instagram.com/p/DdDldG3TSSW/"
    },
     {
      id: 5,
      title: "MathWorks MATLAB Simulink collaboration",
      date: "Sep 22, 2026",
      location: "V-343",
      image: "/events/mathworks.jpg",
      description: "A guest lecture in collaboration with MathWorks, introducing students to MATLAB and Simulink and their applications in engineering, research, and industry.",
      link: "https://www.instagram.com/p/DddxuMGT8ly/"
    },
    {
      id: 4,
      title: "Schneider Electric Hackathon launch",
      date: "Sep 23, 2026",
      location: "LH 111",
      image: "/events/schneider-2026.jpg",
      description: "An interactive event with Schneider electric marking the launch of their national hackathon ",
      link: "https://www.instagram.com/p/DdhHJWhTauW/"
    },
    {
      id: 5,
      title: "INOX collab",
      date: "Sep 24, 2026",
      location: "LH 421",
      image: "/events/INOX.jpg",
      description: "Collaboration with industry",
      link: "https://www.instagram.com/p/Ddpd9hETQt3/"
    },
    {
      id: 4,
      title: "Freshers Party",
      date: "Oct 7, 2026",
      location: "Tizoe Club",
      image: "/events/party-2026.jpg",
      description: "A dedicated welcome celebration for first-year students, providing an opportunity to unwind, interact with peers, and become a part of the departmental community.",
      link: "https://www.instagram.com/p/DeEOD8eSh05/"
    },
    
  ];

  const pastEvents = [
    {
      id: 6,
      title: "Tour of Stalls",
      date: "2025",
      location: "IIT Delhi",
      image: "/events/Tour of stalls.jpg",
      description: "A guided tour of society stalls showcasing initiatives, projects, and opportunities for students.",
      link: "https://www.instagram.com/p/DQQipTUEzYX/?img_index=1"
    },
    {
      id: 7,
      title: "Departmental Dinner 2025",
      date: "Apr 25, 2025",
      location: "Department of Energy Engineering",
      image: "/events/departmental-dinner-2025.jpg",
      description: " A night of laughter, awards, farewells, and unforgettable department memories.",
      link: "https://www.instagram.com/p/DLkD5SFzpqO/?img_index=1"
    },
    {
      id: 8,
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

       <section className="completed-events">
        <div className="container">
          <h2 className="section-title">Completed Events</h2>
          <EventsCarousel events={completedEvents} />
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
