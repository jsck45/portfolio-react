import React from "react";
import "./About.css"; 

const About = () => {
  return (
    <div className="about-container">
      <h1>About Me</h1>
      <hr /> 
      <section className="resume">
        <div className="left-column">
          <h2>A bit about me</h2>
          <h2>Work history</h2>
          <h2>Skills</h2>
        </div>
        <div className="right-column">
          <p>
            Insert your description here. This is where you can talk about
            yourself and your background.
          </p>
          <p>
            Insert your work history here. You can list your previous jobs and
            experiences.
          </p>
          <p>
            Insert your skills and expertise here. You can list technical and
            soft skills.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
