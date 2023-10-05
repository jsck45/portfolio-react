import React from "react";
import "./Project.css";

const Project = ({ title, description }) => {
  return (
    <div className="project">
      <img className="project-image"
  src="https://via.placeholder.com/600x400" 
  alt="Project Image"
      />
      <br />
      {/* <h3>{title}</h3> */}
      {/* <p>{description}</p> */}
      
      <a href="#" target="_blank" rel="noopener noreferrer">
        <h3>{title}</h3>
      </a>
    </div>
  );
};

export default Project;
