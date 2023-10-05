import React from "react";
import Project from "../../components/Project/Project"; 
import "./Portfolio.css";

const Portfolio = ({ addMarginTop }) => {
  const projectsData = [
    { id: 1, title: "Project 1", description: "Description 1" },
    { id: 2, title: "Project 2", description: "Description 2" },
    { id: 3, title: "Project 3", description: "Description 3" },
    { id: 4, title: "Project 4", description: "Description 4" },
    { id: 5, title: "Project 5", description: "Description 5" },
    { id: 6, title: "Project 6", description: "Description 6" },
  ];

  return (
    <div className={`portfolio ${addMarginTop ? "with-margin-top" : ""}`}>
    {/* <div> */}
        <br/>
        <div className="content" > 
        <h2 className="mb-5 text-start">projects</h2>
        <hr />
        <br />
      <div className="row mt-4">
        {projectsData.map((project) => (
          <div key={project.id} className="col-lg-6 project-card">
            <Project title={project.title} description={project.description} />
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Portfolio;
