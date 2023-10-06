import React from "react";
import "./Project.css";

const Project = ({ title, description, image, link }) => {
  
  return (
    <div className="project">
      
      <h3>{title}</h3>
      <br />     
      <a href={link} target="_blank" rel="noopener noreferrer">
      <img className="project-image"
          src={image}
          alt="Project Image"
      />      </a>
            <p>{description}</p>

    </div>
  );
};

export default Project;
