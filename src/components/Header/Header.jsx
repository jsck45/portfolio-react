import Typewriter from "typewriter-effect";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <img
              src='/images/header.png' 
              alt="Image"
              className="img-fluid" 
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
