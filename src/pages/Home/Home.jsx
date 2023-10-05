import React from "react";
import Header from "../../components/Header/Header";
import Contact from "../../pages/Contact/Contact"; 
import Portfolio from "../../pages/Portfolio/Portfolio"; 
import "./Home.css"

const Home = () => {

  return (
<div className="content">
  <div className="header">
      <Header />
      </div>
      <div className="portfolio">
     <Portfolio />
     </div>
     <div className="contact">
     <Contact />
     </div>
    </div>
  );
};

export default Home;