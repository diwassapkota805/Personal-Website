import React, { useRef, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';
import './navbar.css';

const Navbar = () => {
  const navRef = useRef();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleNavBar = () => {
    navRef.current.classList.toggle("navbar-responsive");
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    navRef.current.classList.remove("navbar-responsive");
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="navbar-container">
      <div className='navbar'>
        <div className="navbar-logo">
          D.S
        </div>
        <div className="navbar-menu" ref={navRef}>
          <p><Link activeClass='active' to='home' spy='true' smooth={true} offset={-100} duration={100} className='menu-item' onClick={closeMobileMenu}>Home</Link></p>
          <p><Link activeClass='active' to='about' spy='true' smooth={true} offset={-100} duration={100} className='menu-item' onClick={closeMobileMenu}>About</Link></p>
          <p><Link activeClass='active' to='skill' spy='true' smooth={true} offset={-100} duration={100} className='menu-item' onClick={closeMobileMenu}>Skills</Link></p>
          <p><Link activeClass='active' to='project' spy='true' smooth={true} offset={-100} duration={100} className='menu-item' onClick={closeMobileMenu}>Projects</Link></p>
          <button className="navbar-menu-btn">
            <a href="#contact" onClick={closeMobileMenu}>Contact</a>
          </button>
          <button className="navbar-btn navbar-close-btn" onClick={toggleNavBar}>
            <FaTimes />
          </button>
        </div>
        <button className="navbar-btn" onClick={toggleNavBar}>
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </div>
  );
}

export default Navbar;
