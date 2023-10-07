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
      <p className="snippet-text col-lg-6">
         Former dentist and interior designer now thriving as a front-end web developer, seamlessly blending creativity and precision to create visually captivating and user-friendly websites. My unique background informs my approach, prioritizing aesthetics and user experience.
      <br />
      <br/>
        <a
        href="/carol-kim-cv.pdf"
          download="ck-resume.pdf"
        >
          <button className="resume-button">          Download Resume
</button>

        </a>
      </p>

    </div>
  );
};

export default AboutSnippet;
