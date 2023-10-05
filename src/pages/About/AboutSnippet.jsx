import React from "react";
import "./About.css";

const AboutSnippet = () => {
  return (
    <div>
      <br />
      <h2 className="text-start">About Me</h2>
      <br />
      <hr />
      <p className="snippet-text col-lg-8">
        Creative and adaptable, my unique background in dentistry and interior
        design has prepared me for a seamless transition into the dynamic world
        of web development. I aspire to excel as a Front-End Developer,
        combining the precision from my dental background with a creative flair
        to craft seamless user experiences.
      </p>
      <div className="d-flex justify-content-end">
        <a
          href="/path-to-your-resume.pdf" // Replace with the actual path to your resume file
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
