import "./Portfolio.css";

const Portfolio = ({ addMarginTop }) => {
  const projectsData = [
    {
      id: 1,
      title: "travel gem explorer",
      github: "https://github.com/jsck45/travel-gem-explorer",
      image: "/images/travelgem.jpg",
      link: "https://travelgem-explorer-6412c66d7631.herokuapp.com/",
      description:
        "An interactive full-stack application allowing users to explore and share travel destinations while engaging in discussions through comments.",
      technology:
        "Node.js, Express, JavaScript, Handlebars, MySQL, Sequelize, Passport.js.",
    },
    {
      id: 2,
      title: "marvel character browser",
      github: "https://github.com/jsck45/Marvel-Character-Browser",
      image: "/images/marvel.jpg",
      link: "https://j-d-garwood.github.io/Marvel-Character-Browser/",
      description:
        "Front-end application leveraging third-party APIs, enabling users to search for Marvel characters, access their Wikipedia-sourced descriptions, and explore a catalog of featured Marvel comics.",
      technology: "JavaScript, Tailwind CSS, Wikipedi and Marvel APIs.",
    },
    {
      id: 3,
      title: "weather dashboard",
      github: "https://github.com/jsck45/weather-dashboard",
      image: "/images/weatherdashboard.jpg",
      link: "https://jsck45.github.io/weather-dashboard/",
      description:
        "Weather application which customizes forecasts based on user-provided location input and retrieves real-time weather data from OpenWeatherMap API.",
      technology: "JavaScript, Bootstrap, OpenWeatherMap API.",
    },
    {
      id: 4,
      title: "coding quiz",
      github: "https://github.com/jsck45/codequiz",
      image: "/images/codequiz.png",
      link: "https://jsck45.github.io/codequiz/",
      description:
        "A timed coding quiz with multiple-choice questions, running in the browser and featuring dynamically updated HTML and CSS driven by JavaScript.",
      technology: "HTML, CSS, JavaScript.",
    },
    {
      id: 5,
      title: "work day scheduler",
      github: "https://github.com/jsck45/work-day-scheduler",
      image: "/images/scheduler.png",
      link: "https://jsck45.github.io/work-day-scheduler/",
      description:
        "A dynamic calendar app for saving daily events to localStorage with real-time HTML and CSS updates.",
      technology: "HTML, CSS, JavaScript, JQuery.",
    },
    {
      id: 6,
      title: "just another text editor",
      github: "https://github.com/jsck45/pwa-text-editor",
      image: "/images/jate.jpg",
      link: "https://whispering-caverns-85289-05388e280591.herokuapp.com/",
      description:
        "A browser-based text editor with PWA capabilities, incorporating data persistence for offline functionality.",
      technology: "Node.js, Express, JavaScript, Webpack, Babel, Workbox.",
    },
    {
      id: 7,
      title: "tl-dr",
      github: "https://github.com/jsck45/tl-dr",
      image: "/images/tldr.png",
      link: "https://tl-dr-00224c165de8.herokuapp.com/",
      description: "Forum style app with OpenAI summarisation capabilities.",
      technology: "MongoDB, Express, React, Node.js, JavaScript.",

    },
  ];

  return (
    <div className={`portfolio ${addMarginTop ? "with-margin-top" : ""}`}>
      <div className="content">
        <h2 className="mb-5 text-start">projects</h2>
        <hr />
        <br />
        <div className="row">
          {projectsData.map((project) => (
            <div className="col-lg-6" key={project.id}>
              <div className="card">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={project.image} alt={project.title} id="image" />
                  <div className="project-title">
                    <h4 className="title-spacing">{project.title}</h4>
                  </div>
                </a>

                <div className="project-link">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    github repo
                  </a>
                </div>

                <div className="project-text">
                  <p>{project.description}</p>
                  <p>
                    <strong>created with</strong> {project.technology}
                  </p>{" "}
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
