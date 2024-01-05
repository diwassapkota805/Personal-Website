import React from 'react'
import './home.css'
import profile from '../../assets/p.jpeg'
import { IoIosDocument } from 'react-icons/io';

const Home = () => {
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
        <p>I am a returning student working towards my master's in computer science having just finished my 2nd bachelor's degree with cum laude distinction at Colorado State University. Throughout my studies, I have been focusing on machine learning, artificial intelligence, cybersecurity, and software development. I am currently involve in cyber</p>
        <button className="resume">
          <IoIosDocument className='resume_icon'/>
          <a href="https://drive.google.com/file/d/1RZGJ8V2Q7aXVZK6Zxk7p5rYzV9YwM3Z-/view?usp=sharing" target="_blank" rel="noreferrer">Resume</a>

        </button>
      </div>
      <div className="home_right">
        <img src={profile} alt="" />
      </div>
    </div>
  )
}

export default Home;