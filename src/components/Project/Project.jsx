import React from "react";

const Project = () => {
  return (
    <div className="project">
      <img
        src="https://via.placeholder.com/300x200" 
        alt="Project Image"
      />
      <h3>Project Title</h3>
      <p>Project Description goes here.</p>
      <ul>
        <li>Feature 1</li>
        <li>Feature 2</li>
        <li>Feature 3</li>
      </ul>
      <a href="#" target="_blank" rel="noopener noreferrer">
        View Project
      </a>
    </div>
  );
};

export default Project;
