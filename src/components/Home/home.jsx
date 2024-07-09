import React from 'react'
import './home.css'
import profile from '../../assets/profile.png'
import { IoIosDocument } from 'react-icons/io';
import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

const Home = () => {
  const handleButtonClick = (link) => {
    window.open(link, "_blank")
  }
  return (
    <div className='home'>
      <div className="home_left">
        <h2>
          I'm Diwas, a
          <br />
          <span className='text-theme'>
            Computer Science Student
          </span>
        </h2>
        <p>I am a passionate technology enthusiast pursuing my undergraduate degree in Computer Science at the University of Texas at Arlington. Throughout my academic journey, I have dedicated my focus to cutting-edge fields such as machine learning, artificial intelligence, cybersecurity, and software development. Currently, I am actively seeking internship opportunities to apply my skills in a practical setting and further enhance my learning experience</p>
        <button className="resume">
          <IoIosDocument className='resume_icon'/>
          <a href="https://drive.google.com/file/d/1OJQ7ojQ_KPSfZHqLVWUa4zDhl7xuIi-_/view?usp=sharing" target="_blank" rel="noreferrer">Resume</a>

        </button>
      </div>
      <div className="home_right">
        <div className="image-container">
          <img src={profile} alt="" />
        </div>
        
      </div>
    </div>
  )
}


export default Home;