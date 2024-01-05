import React from 'react'
import './navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useRef } from 'react';


const Navbar = () => {

  const navRef = useRef();

  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav");
  }

  return (

    <div className="container">
      <div className='navbar'>
        <div className="navbar_logo">
            D.S
        </div>
        
        <div className="navbar_desktopMenu" ref={navRef}>
            <p><a href="#home">Home</a></p>
            <p><a href="#about">About</a></p>
            <p><a href="#skill">Skill</a></p>
            <p><a href="#projects">Project</a></p>

            <button className="navbar_desktopMenu_btn">
                <a href="#contact">Contact</a>
            </button>
            <button className="navbar_btn navbar_close_btn" onClick={showNavBar}>
              <FaTimes/>
            </button>
        </div> 
        <button className="navbar_btn" onClick={showNavBar}>
          <FaBars/>
        </button>
      </div>
    </div>
    
    
  )
}

export default Navbar;