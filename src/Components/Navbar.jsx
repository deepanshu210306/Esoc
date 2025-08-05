import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import './Navbar.css';
import logoImage from '../assets/logo.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const location = useLocation();

  // Scroll styling effect
  useEffect(() => {
    const handleScrollStyle = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScrollStyle);
    return () => window.removeEventListener('scroll', handleScrollStyle);
  }, []);

  // Hide-on-scroll logic
  useEffect(() => {
    const handleScrollVisibility = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    const handleMouseMove = (e) => {
      if (e.clientY < 60) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScrollVisibility);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScrollVisibility);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [lastScrollY]);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''} ${isVisible ? 'visible' : 'hidden'}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src={logoImage} alt="Energy Society Logo" className="logo-img" />
        </Link>

        <ul className="nav-menu">
          <li className="nav-item">
            <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/events" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
              Events
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/resources" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
              Resources
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/team" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
              Team
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
