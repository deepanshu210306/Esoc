import { useEffect, useState } from 'react';
import './Navbar.css';
import logocom from './logo.svg';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

  const navigate = useNavigate();

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
      if (e.clientY < 60) {
        // Show navbar if cursor is within 60px from the top
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

  // Hamburger menu state and toggle function have been removed.

  return (
    <nav className={`navbar ${isVisible ? 'visible' : 'hidden'}`}>
      <div className="logo">
        <Link to="/  ">
          <img src={logocom} alt="Energy Soc Logo" />
        </Link>
      </div>
      
      {/* The nav links are now always visible */}
      <ul className="nav-links">
        <li onClick={()=>{navigate("/")}}>Home</li>
        <li onClick={()=>{navigate("/team")}}>Team</li>
        <li >Contact</li>
        <li>FAQs</li>
      </ul>
    </nav>
  );
};

export default Navbar;