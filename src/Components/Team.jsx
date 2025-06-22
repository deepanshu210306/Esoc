import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './Team.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Deepanshu',
      des: 'Coordinator',
      image: 'https://imgs.search.brave.com/kLEKFsv59_cIT1bIia1xJ1e8pBuuyzblag8zNc8IGoE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9waG90/b3NodWxrLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvc2hpbmNo/YW4taW1hZ2VzLWhk/LmpwZw',
      testimonial: 'Hi i am Deepanshu .',
    },
    {
      id: 1,
      name: 'Deepanshu',
      des: 'Coordinator',
      image: 'https://imgs.search.brave.com/kLEKFsv59_cIT1bIia1xJ1e8pBuuyzblag8zNc8IGoE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9waG90/b3NodWxrLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvc2hpbmNo/YW4taW1hZ2VzLWhk/LmpwZw',
      testimonial: 'Hi i am Deepanshu .',
    },
    {
      id: 1,
      name: 'Deepanshu',
      des: 'Coordinator',
      image: 'https://imgs.search.brave.com/kLEKFsv59_cIT1bIia1xJ1e8pBuuyzblag8zNc8IGoE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9waG90/b3NodWxrLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvc2hpbmNo/YW4taW1hZ2VzLWhk/LmpwZw',
      testimonial: 'Hi i am Deepanshu .',
    },
    {
      id: 1,
      name: 'Deepanshu',
      des: 'Coordinator',
      image: 'https://imgs.search.brave.com/kLEKFsv59_cIT1bIia1xJ1e8pBuuyzblag8zNc8IGoE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9waG90/b3NodWxrLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvc2hpbmNo/YW4taW1hZ2VzLWhk/LmpwZw',
      testimonial: 'Hi i am Deepanshu .',
    },
    {
      id: 1,
      name: 'Deepanshu',
      des: 'Coordinator',
      image: 'https://imgs.search.brave.com/kLEKFsv59_cIT1bIia1xJ1e8pBuuyzblag8zNc8IGoE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9waG90/b3NodWxrLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvc2hpbmNo/YW4taW1hZ2VzLWhk/LmpwZw',
      testimonial: 'Hi i am Deepanshu .',
    },
    {
      id: 1,
      name: 'Deepanshu',
      des: 'Coordinator',
      image: 'https://imgs.search.brave.com/kLEKFsv59_cIT1bIia1xJ1e8pBuuyzblag8zNc8IGoE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9waG90/b3NodWxrLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvc2hpbmNo/YW4taW1hZ2VzLWhk/LmpwZw',
      testimonial: 'Hi i am Deepanshu .',
    },
    {
      id: 1,
      name: 'Deepanshu',
      des: 'Coordinator',
      image: 'https://imgs.search.brave.com/kLEKFsv59_cIT1bIia1xJ1e8pBuuyzblag8zNc8IGoE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9waG90/b3NodWxrLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvc2hpbmNo/YW4taW1hZ2VzLWhk/LmpwZw',
      testimonial: 'Hi i am Deepanshu .',
    },
    {
      id: 1,
      name: 'Deepanshu',
      des: 'Coordinator',
      image: 'https://imgs.search.brave.com/kLEKFsv59_cIT1bIia1xJ1e8pBuuyzblag8zNc8IGoE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9waG90/b3NodWxrLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvc2hpbmNo/YW4taW1hZ2VzLWhk/LmpwZw',
      testimonial: 'Hi i am Deepanshu .',
    },
    {
      id: 1,
      name: 'Deepanshu',
      des: 'Coordinator',
      image: 'https://imgs.search.brave.com/kLEKFsv59_cIT1bIia1xJ1e8pBuuyzblag8zNc8IGoE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9waG90/b3NodWxrLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvc2hpbmNo/YW4taW1hZ2VzLWhk/LmpwZw',
      testimonial: 'Hi i am Deepanshu .',
    },
  ];

  return (
    <section className="testimonials-section">
      <h1>Team Members</h1>
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        spaceBetween={30}
        slidesPerView={3}
        loop={true}
        className="testimonials-swiper"
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className="testimonial-card">
              <div className="card-inner">
                <div className="card-front">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="testimonial-image"
                  />
                  <h3>{testimonial.name}</h3>
                  <p className="testimonial-des">{testimonial.des}</p>
                </div>
                <div className="card-back">
                  <p>{testimonial.testimonial}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Navigation buttons */}
        <div className="swiper-button-prev custom-arrow"></div>
        <div className="swiper-button-next custom-arrow"></div>
      </Swiper>
    </section>
  );
};

export default Testimonials;