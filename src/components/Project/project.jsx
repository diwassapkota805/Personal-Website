import React from 'react'
import './project.css'
import ProjectItem from '../../smallerComponents/projectItem'
import  projects from '../../data/projectData'

import "./project.css"
const Project = () => {
  return (
    <div className='project'>
      <h1 className="project-title">Projects</h1>
      <p className="project-description">See my <a href="https://github.com/diwassapkota805">Github&gt;</a> for actual details on the following projects. </p>
      <div className="project-list">
        {projects.map((project, idx) => {
          console.log(project.github_link);
          return (
            <ProjectItem
              id={idx}
              name={project.title}
              image= {project.image}
              description= {project.description}
              githubLink={project.github_link}
            />
          );
        })}
      </div>
    </div>
  )
}

export default Project;