import React, { useRef, useEffect } from "react";
import Project from "../../components/Project/Project";
import "./Portfolio.css";
import travelGem from "../../assets/travelgem.jpg";
import marvel from "../../assets/marvel.jpg";
import weatherDashboard from "../../assets/weatherdashboard.jpg";
import codeQuiz from "../../assets/codequiz.png";
import scheduler from "../../assets/scheduler.png";
import jate from "../../assets/jate.jpg";

const Portfolio = ({ addMarginTop }) => {
  
  const projectsData = [
    {
      id: 1,
      title: "travel gem explorer",
      description: "Description 1",
      image: travelGem, 
      link: "https://travelgem-explorer-6412c66d7631.herokuapp.com/",
    },
    {
      id: 2,
      title: "marvel character browser",
      description: "Description 2",
      image: marvel,
      link: "https://j-d-garwood.github.io/Marvel-Character-Browser/",
    },
    {
      id: 3,
      title: "weather dashboard",
      description: "Description 3",
      image: weatherDashboard,
      link: "https://jsck45.github.io/weather-dashboard/",
    },
    {
      id: 4,
      title: "coding quiz",
      description: "Description 4",
      image: codeQuiz,
      link: "https://jsck45.github.io/codequiz/",
    },
    {
      id: 5,
      title: "work day scheduler",
      description: "Description 5",
      image: scheduler,
      link: "https://jsck45.github.io/work-day-scheduler/",
    },
    {
      id: 6,
      title: "just another text editor",
      description: "Description 6",
      image: jate,
      link: "https://whispering-caverns-85289-05388e280591.herokuapp.com/",
    },
  ];

  const horizontalScrollContainerRef = useRef(null);

  useEffect(() => {
    const container = horizontalScrollContainerRef.current;

    const handleScroll = () => {
      container.style.animation = "none"; 
    };

    container.addEventListener("scroll", handleScroll);

    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`portfolio ${addMarginTop ? "with-margin-top" : ""}`}>
      <div className="content">
        <h2 className="mb-5 text-start">portfolio</h2>
        <hr />
       
        <div
          className="horizontal-scroll-container"
          ref={horizontalScrollContainerRef}
        >
          {projectsData.map((project) => (
            <div className="horizontal-render-container" key={project.id}>
              <div className="project-card">
                <Project image={project.image} link={project.link}/>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
