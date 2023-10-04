import React from "react";

const Project = ({ title, description }) => {
  return (
    <div className="project">
      <img
        src="https://via.placeholder.com/300x200" 
        alt="Project Image"
      />
      <h3>{title}</h3>
      <p>{description}</p>
      
      <a href="#" target="_blank" rel="noopener noreferrer">
        View Project
      </a>
    </div>
  );
};

export default Project;
