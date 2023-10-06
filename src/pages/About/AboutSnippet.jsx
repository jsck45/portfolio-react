import React from "react";
import "./About.css";

const AboutSnippet = () => {
  return (
    <div className="about-container">
      <br />
      <h2 className="text-start">about me</h2>
      <br />
      <hr />  
      <br />
      <p className="snippet-text col-lg-7">
         Former dentist and interior designer now thriving as a front-end web developer, seamlessly blending creativity and precision to craft visually captivating and user-friendly websites. My unique background informs my approach, prioritizing aesthetics and user experience.
      </p>
      <br />
      <div className=" download-button">
        <a
          href="/path-to-your-resume.pdf" 
          className="btn btn-primary"
          download
        >
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default AboutSnippet;
