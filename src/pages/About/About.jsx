import "./About.css";

const About = () => {
  return (
    <div className="resume-container">
      <h2>resume</h2>
      <br />
      <hr />
      <br />
      <div className="resume">
        <div className="section">
          <div className="left-column">
            <h2>summary</h2>
          </div>
          <div className="right-column">
            <p>
              Dedicated Front-End Developer with a background in dentistry and
              interior design. Strong problem-solving abilities, creativity, and
              attention to detail. Committed to mastering evolving web
              technologies. Eager to excel in front-end development and deliver
              outstanding digital solutions.
            </p>
          </div>
        </div>

        <div className="section">
          <div className="left-column">
            <h2>skills</h2>
          </div>
          <div className="right-column skills">
            <div className="skills-pair">
              <div className="skills-left">
                <p>Front-End</p>
              </div>
              <div className="skills-right">
                <p>HTML, CSS, JavaScript, jQuery, Bootstrap, React.js </p>
              </div>
            </div>
            <div className="skills-pair">
              <div className="skills-left">
                <p>Back-End</p>
              </div>

              <div className="skills-right">
                <p>Express.js, Node.js, MongoDB, MySQL, Sequelize</p>
              </div>
            </div>
            <div className="skills-pair">
              <div className="skills-left">
                <p>Version Control</p>
              </div>
              <div className="skills-right">
                <p>Git</p>
              </div>
            </div>
          </div>
        </div>

        <div className="section">
          <div className="left-column">
            <h2>education</h2>
          </div>
          <div className="right-column">
            <p>
              Certificate in Full Stack Web Development <br />
              University of Sydney | 2023
            </p>
          </div>
        </div>

        <div className="section">
          <div className="left-column">
            <h2>work history</h2>
          </div>
          <div className="right-column">
            <p className="experience" id="ex-1">
              Dentist — Sydney <br /> <hr />
              2015 - present <br />{" "}
            </p>
            <br/>
            <ul>
              <li>
                Led and managed a team in a high-pressure dental practice,
                fostering strong teamwork and collaboration.
              </li>
              <li>
                Cultivated enduring relationships with patients, consistently
                earning 5-star Google reviews.
              </li>
              <li>
                Delivered dental care to up to 20 patients daily, showcasing
                exceptional organizational and time management capabilities.
              </li>
              <li>
                Thrived in an unpredictable healthcare environment, adapting to
                diverse challenges and multitasking effectively.
              </li>
              <li>
                Demonstrated meticulous attention to detail in patient care,
                ensuring precision and accuracy.
              </li>
            </ul>
            <hr />
            <p className="experience">
              Interior Designer — Medibuilt, Sydney <br /> <hr />
              Jul 2021 - Jul 2022 <br />{" "}
            </p>
            <br/>
            <ul>
              <li>
                Achieved successful project management, ensuring on-time
                completion for 26 diverse interior design projects within a year
              </li>
              <li>
                Fostered strong client relationships by actively listening to
                their needs, translating their visions into outstanding design
                solutions.
              </li>
              <li>
                Collaborated seamlessly with suppliers and trades, paying
                meticulous attention to detail in sourcing materials and
                coordinating deliveries.
              </li>
              <li>
                Crafted unique and visually captivating interior spaces,
                leveraging a passion for creativity and aesthetics, and refining
                design elements to ensure both functionality and aesthetic
                appeal.
              </li>
            </ul>
            
          </div>
          
          
        </div>
        <div className="button-section">
     <a href="/carol-kim-cv.pdf" download="ck-resume.pdf">
           <button className="download-button">Download Resume</button>
         </a>
         </div>
      </div>
     
    </div>
     

  );
};

export default About;
