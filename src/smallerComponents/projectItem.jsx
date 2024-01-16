import React from "react";
import { FaGithub } from "react-icons/fa";

function ProjectItem({ image, name, id, description, githubLink}) {

  return (
    <div className="project-item">
        <div className="project-overview">
            <div style={{ backgroundImage: `url(${image})` }} className="bg-image" />
            <h1>{name}</h1>
        </div>
      
      <div className="project-details">
        <h1 className="project-details-title">{name}</h1>
        <p className="description">{description}</p>
        <div className="project-links">
          <a href= {githubLink} target="_blank" rel="noopener noreferrer">
            <FaGithub className="github-logo"/>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectItem;
