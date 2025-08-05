import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './EventsCarousel.css';

const EventsCarousel = ({ events }) => {
  const swiperRef = useRef(null);

  useEffect(() => {
    const swiperInstance = swiperRef.current?.swiper;
    
    // Pause autoplay when user hovers over carousel
    const handleMouseEnter = () => {
      if (swiperInstance && swiperInstance.autoplay) {
        swiperInstance.autoplay.stop();
      }
    };
    
    const handleMouseLeave = () => {
      if (swiperInstance && swiperInstance.autoplay) {
        swiperInstance.autoplay.start();
      }
    };
    
    const swiperEl = swiperRef.current;
    
    if (swiperEl) {
      swiperEl.addEventListener('mouseenter', handleMouseEnter);
      swiperEl.addEventListener('mouseleave', handleMouseLeave);
    }
    
    return () => {
      if (swiperEl) {
        swiperEl.removeEventListener('mouseenter', handleMouseEnter);
        swiperEl.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <div className="events-carousel">
      <Swiper
        ref={swiperRef}
        spaceBetween={30}
        centeredSlides={false}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        className="mySwiper"
      >
        {events.map((event) => (
          <SwiperSlide key={event.id}>
            <div className="event-card">
              <div className="event-image">
                <img src={event.image || '/images/events/default.jpg'} alt={event.title} />
                <div className="event-date">{event.date}</div>
              </div>
              <div className="event-content">
                <h3 className="event-title">{event.title}</h3>
                <div className="event-location">
                  <i className="fas fa-map-marker-alt"></i> {event.location}
                </div>
                <p className="event-description">{event.description}</p>
                <button className="event-button">View Details</button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default EventsCarousel;
