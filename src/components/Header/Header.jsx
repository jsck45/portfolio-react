import React from "react";
import Typewriter from "typewriter-effect";
import "./Header.css";
import headerImage from "../../assets/header-image2.png"; // Import your image file

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <img
              src={headerImage} // Use the imported image
              alt="Image"
              className="img-fluid" // Make the image responsive
            />
          </div>
          <div className="col-md-6">
            <div className="intro-section">
              <h1 className="intro-title">Hi, I'm Carol 👋</h1>
              <br />
              <div className="typewriter-container">
                <Typewriter
                  options={{
                    strings: ["Web Developer", "React Enthusiast", "Lifelong Learner"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
