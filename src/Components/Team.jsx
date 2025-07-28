import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './Team.css';

const Team = () => {
  // Array of team members using image URLs. Easily extendable.
  const teamMembers = [
    {
      name: 'Deepanshu',
      position: 'Coordinator',
      image: 'https://imgs.search.brave.com/kLEKFsv59_cIT1bIia1xJ1e8pBuuyzblag8zNc8IGoE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9waG90/b3NodWxrLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvc2hpbmNo/YW4taW1hZ2VzLWhk/LmpwZw',
      testimonial: 'Hi, I am Deepanshu, leading the team to new heights in the energy sector.',
    },
    {
      name: 'Member Two',
      position: 'Co-Coordinator',
      image: 'https://imgs.search.brave.com/kLEKFsv59_cIT1bIia1xJ1e8pBuuyzblag8zNc8IGoE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9waG90/b3NodWxrLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvc2hpbmNo/YW4taW1hZ2VzLWhk/LmpwZw',
      testimonial: 'Passionate about renewable energy and innovation.',
    },
    {
      name: 'Member Three',
      position: 'Events Head',
      image: 'https://imgs.search.brave.com/kLEKFsv59_cIT1bIia1xJ1e8pBuuyzblag8zNc8IGoE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9waG90/b3NodWxrLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvc2hpbmNo/YW4taW1hZ2VzLWhk/LmpwZw',
      testimonial: 'Organizing impactful events to foster energy awareness.',
    },
    {
      name: 'Member Four',
      position: 'Tech Head',
      image: 'https://imgs.search.brave.com/kLEKFsv59_cIT1bIia1xJ1e8pBuuyzblag8zNc8IGoE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9waG90/b3NodWxrLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvc2hpbmNo/YW4taW1hZ2VzLWhk/LmpwZw',
      testimonial: 'Leveraging technology to solve energy challenges.',
    },
    {
      name: 'Member Five',
      position: 'Design Head',
      image: 'https://imgs.search.brave.com/kLEKFsv59_cIT1bIia1xJ1e8pBuuyzblag8zNc8IGoE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9waG90/b3NodWxrLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvc2hpbmNo/YW4taW1hZ2VzLWhk/LmpwZw',
      testimonial: 'Creating compelling visuals to communicate our mission.',
    },
  ];

  return (
    <section className="team-section">
      <h1>Meet The Team</h1>
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: '.swiper-button-next-custom',
          prevEl: '.swiper-button-prev-custom',
        }}
        spaceBetween={30}
        loop={true}
        className="team-swiper"
        // Responsive breakpoints for the slider
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 20 },
          768: { slidesPerView: 2, spaceBetween: 30 },
          1024: { slidesPerView: 3, spaceBetween: 30 },
        }}
      >
        {teamMembers.map((member, index) => (
          <SwiperSlide key={index}>
            <div className="team-card">
              <div className="card-inner">
                {/* Front of the card with image and position */}
                <div className="card-front">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="team-image"
                  />
                  <h3>{member.name}</h3>
                  <p className="team-position">{member.position}</p>
                </div>
                {/* Back of the card with the testimonial */}
                <div className="card-back">
                  <p>{member.testimonial}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
      {/* Custom Navigation Buttons */}
      <div className="swiper-button-prev-custom custom-arrow"></div>
      <div className="swiper-button-next-custom custom-arrow"></div>
    </section>
  );
};

export default Team;
