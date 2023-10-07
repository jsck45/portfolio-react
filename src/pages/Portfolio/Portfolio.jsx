import React from "react";
import "./Portfolio.css";

const Portfolio = ({ addMarginTop }) => {
  const projectsData = [
    {
      id: 1,
      title: "travel gem explorer",
      github: "https://github.com/jsck45/travel-gem-explorer",
      image: '/images/travelgem.jpg',
      link: "https://travelgem-explorer-6412c66d7631.herokuapp.com/",
    },
    {
      id: 2,
      title: "marvel character browser",
      github: "https://github.com/jsck45/Marvel-Character-Browser",
      image: '/images/marvel.jpg',
      link: "https://j-d-garwood.github.io/Marvel-Character-Browser/",
    },
    {
      id: 3,
      title: "weather dashboard",
      github: "https://github.com/jsck45/weather-dashboard",
      image: '/images/weatherdashboard.jpg',
      link: "https://jsck45.github.io/weather-dashboard/",
    },
    {
      id: 4,
      title: "coding quiz",
      github: "https://github.com/jsck45/codequiz",
      image: '/images/codequiz.png',
      link: "https://jsck45.github.io/codequiz/",
    },
    {
      id: 5,
      title: "work day scheduler",
      github: "https://github.com/jsck45/work-day-scheduler",
      image: '/images/scheduler.png',
      link: "https://jsck45.github.io/work-day-scheduler/",
    },
    {
      id: 6,
      title: "just another text editor",
      github: "https://github.com/jsck45/pwa-text-editor",
      image: '/images/jate.jpg',
      link: "https://whispering-caverns-85289-05388e280591.herokuapp.com/",
    },
  ];
         

  return (
    <div className={`portfolio ${addMarginTop ? "with-margin-top" : ""}`}>
      <div className="content">
        <h2 className="mb-5 text-start">projects</h2>
        <hr />
        <br/>
        <div className="row">
          {projectsData.map((project) => (
           <div className="col-lg-6" key={project.id}>
           <div className="card">

             <a href={project.link} target="_blank" rel="noopener noreferrer">
               <img src={project.image} alt={project.title} id="image" />
               <div className="project-title">
                 <h4 className="title-spacing">{project.title}</h4>
               </div>
               </a>

               <div className="project-link">
                 <a href={project.github} target="_blank" rel="noopener noreferrer">
                   github repo
                 </a>
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