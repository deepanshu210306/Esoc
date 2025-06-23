import { useEffect, useState } from 'react';
import './Navbar.css';
import logocom from './logo.svg';

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down and past 100px
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    const handleMouseMove = (e) => {
      if (e.clientY < 50) {
        // Show navbar if cursor is within 50px from the top
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [lastScrollY]);

  return (
    <nav className={`navbar ${isVisible ? 'visible' : 'hidden'}`}>
      <div className="logo">
        <img src={logocom} alt="Energy soc Logo" />
      </div>
      <ul className="nav-links">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>More</li>
      </ul>
    </nav>
  );
};

export default Navbar;
