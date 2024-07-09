import React from 'react'
import './skill.css'

const Skill = () => {
  return (
    <div className='skill'>
      <div className="skill-title">
        <h1>Skills</h1>
      </div>
      <div className="skill-container">
        <div className="skill-section languages">
            <h3 className="title">Languages</h3>
            <div className="skill-items">
              <p className="language">Java</p>
              <p className="language">C</p>
              <p className="language">JavaScript</p>
              <p className="language">Python</p>
              <p className="language">C++</p>
              <p className="language">C#</p>
              <p className="language">HTML/CSS</p>
              <p className="language">SQL</p>
              <p className="language">Arm Assembly</p>
            </div>
        </div>
        <div className="skill-section databases">
          <h3 className="title">Databases/Data Storage</h3>
          <div className="skill-items">
            <p className="database">MySQL</p>
            <p className="database">MongoDB</p>
          </div>
        </div>
        <div className="skill-section technologies-frameworks">
          <h3 className="title">Technologies/Frameworks</h3>
          <div className="skill-items">
            <p className="technology">ReactJs</p>
            <p className="technology">ExpressJS</p>
            <p className="technology">REST APIs</p>
            <p className="technology">JUnit</p>
            <p className="technology">Git</p>
            <p className="technology">TCP/IP</p>
            <p className="technology">Pandas</p>
            <p className="technology">NumPY</p>
          </div>
          
        </div>
        <div className="skill-section tools">
          <h3 className="title">Tools</h3>

          <div className="skill-items">
            <p className="tool">VS Code</p>
            <p className="tool">IntelliJ</p>
            <p className="tool">Android Studio</p>
            <p className="tool">GitHub</p>
            <p className="tool">Postman API</p>
            <p className="tool">Unity</p>
            <p className="tool">Jupyter</p>
            <p className="tool">Linux</p>
            <p className="tool">Firebase</p>
            <p className="tool">Docker</p>
            <p className="tool">Wireshark</p>
            <p className="tool">Vim</p>
            <p className="tool">Figma</p>
          </div>
         
        </div>
      </div>
    </div>
  )
}

export default Skill;