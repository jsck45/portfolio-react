import React from "react";
import "./Portfolio.css";

const Portfolio = ({ addMarginTop }) => {
  const projectsData = [
    {
      id: 1,
      title: "travel gem explorer",
      description: "Description 1",
      image: '/images/travelgem.jpg',
      link: "https://travelgem-explorer-6412c66d7631.herokuapp.com/",
    },
    {
      id: 2,
      title: "marvel character browser",
      description: "Description 2",
      image: '/images/marvel.jpg',
      link: "https://j-d-garwood.github.io/Marvel-Character-Browser/",
    },
    {
      id: 3,
      title: "weather dashboard",
      description: "Description 3",
      image: '/images/weatherdashboard.jpg',
      link: "https://jsck45.github.io/weather-dashboard/",
    },
    {
      id: 4,
      title: "coding quiz",
      description: "Description 4",
      image: '/images/codequiz.png',
      link: "https://jsck45.github.io/codequiz/",
    },
    {
      id: 5,
      title: "work day scheduler",
      description: "Description 5",
      image: '/images/scheduler.png',
      link: "https://jsck45.github.io/work-day-scheduler/",
    },
    {
      id: 6,
      title: "just another text editor",
      description: "Description 6",
      image: '/images/jate.jpg',
      link: "https://whispering-caverns-85289-05388e280591.herokuapp.com/",
    },
  ];
         

  return (
    <div className={`portfolio ${addMarginTop ? "with-margin-top" : ""}`}>
      <div className="content">
        <h2 className="mb-5 text-start">projects</h2>
        <hr />
        
        <div className="row">
          {projectsData.map((project) => (
            <div className="col-lg-6" key={project.id}>
              <div className="card">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={project.image}
                  alt={project.title}
                  id="image"
                />
                                  <h4 className="title-spacing">{project.title}</h4>

                                  </a>

                <div className="project-details">
                  <p>{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;