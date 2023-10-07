import { useRef, useEffect, useState } from "react";
import Project from "../../components/Project/Project";
import "./PortfolioScroll.css";

const PortfolioScroll = ({ addMarginTop }) => {
  const projectsData = [
    {
      id: 1,
      title: "travel gem explorer",
      description: "Description 1",
      image: "/images/travelgem.jpg",
      link: "https://travelgem-explorer-6412c66d7631.herokuapp.com/",
    },
    {
      id: 2,
      title: "marvel character browser",
      description: "Description 2",
      image: "/images/marvel.jpg",
      link: "https://j-d-garwood.github.io/Marvel-Character-Browser/",
    },
    {
      id: 3,
      title: "weather dashboard",
      description: "Description 3",
      image: "/images/weatherdashboard.jpg",
      link: "https://jsck45.github.io/weather-dashboard/",
    },
    {
      id: 4,
      title: "coding quiz",
      description: "Description 4",
      image: "/images/codequiz.png",
      link: "https://jsck45.github.io/codequiz/",
    },
    {
      id: 5,
      title: "work day scheduler",
      description: "Description 5",
      image: "/images/scheduler.png",
      link: "https://jsck45.github.io/work-day-scheduler/",
    },
    {
      id: 6,
      title: "just another text editor",
      description: "Description 6",
      image: "/images/jate.jpg",
      link: "https://whispering-caverns-85289-05388e280591.herokuapp.com/",
    },
  ];

  const horizontalScrollContainerRef = useRef(null);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  let autoScrollTimer;
  const autoScrollInterval = 30;
  const scrollSpeed = 2;

  useEffect(() => {
    const container = horizontalScrollContainerRef.current;

    const handleScroll = () => {
      if (!isAutoScrolling) {
        setIsAutoScrolling(true);
        resetAutoScrollTimer();
      }
    };

    container.addEventListener("scroll", handleScroll);

    startAutoScroll();

    return () => {
      container.removeEventListener("scroll", handleScroll);
      clearInterval(autoScrollTimer);
    };
  }, [isAutoScrolling]);

  const startAutoScroll = () => {
    autoScrollTimer = setInterval(() => {
      if (horizontalScrollContainerRef.current && isAutoScrolling) {
        const container = horizontalScrollContainerRef.current;
        container.scrollLeft += scrollSpeed;
        if (
          container.scrollLeft >=
          container.scrollWidth - container.clientWidth
        ) {
          container.scrollLeft = 0;
        }
      }
    }, autoScrollInterval);
  };

  const resetAutoScrollTimer = () => {
    clearInterval(autoScrollTimer);
    startAutoScroll();
  };

  const handleMouseEnter = () => {
    setIsAutoScrolling(false);
    clearInterval(autoScrollTimer);
  };

  const handleMouseLeave = () => {
    setIsAutoScrolling(true);
    resetAutoScrollTimer();
  };

  return (
    <div className={` ${addMarginTop ? "with-margin-top" : ""}`}>
      <div className="content">
        <div className="heading">
          <h2 className="text-start">projects</h2>
          <br />
          <hr className="scroll" />
        </div>

        <div
          className="horizontal-scroll-container"
          ref={horizontalScrollContainerRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {projectsData.map((project) => (
            <div className="horizontal-render-container" key={project.id}>
              <div className="project-card">
                <Project
                  image={project.image}
                  link={project.link}
                  className="project-image"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioScroll;
