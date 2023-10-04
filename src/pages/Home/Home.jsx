import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Navigation from "../../components/Navigation/Navigation"; 
import Project from "../../components/Project/Project"; 

const Home = () => {

  const projectsData = [
    { id: 1, title: "Project 1", description: "Description 1" },
    { id: 2, title: "Project 2", description: "Description 2" },
    { id: 3, title: "Project 3", description: "Description 3" },
    { id: 4, title: "Project 4", description: "Description 4" },
    { id: 5, title: "Project 5", description: "Description 5" },
    { id: 6, title: "Project 6", description: "Description 6" },
  ];

  return (
<>
      <Navigation />
      <Header />

     <div className="container">
        <div className="row">
          {projectsData.map((project) => (
            <div key={project.id} className="col-lg-6">
              <Project
                title={project.title}
                description={project.description}
              />
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;