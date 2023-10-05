import React from "react";
import Header from "../../components/Header/Header";
import Contact from "../../pages/Contact/Contact"; 
import Portfolio from "../../pages/Portfolio/Portfolio"; 
import AboutSnippet from "../../pages/About/AboutSnippet"
import "./Home.css"

const Home = () => {

  return (
<div className="content">
  <div className="header">
      <Header />
      </div>
      <div className="about">
      <AboutSnippet />
     </div>
           <Portfolio addMarginTop={false} />
     
     <div className="contact">
     <Contact />
     </div>
    </div>
  );
};

export default Home;