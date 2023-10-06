import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer menu_footer d-flex flex-column flex-md-row justify-content-md-center align-items-center w-100 p-3">
      <div className="d-flex">
        <a
          href="https://linkedin.com/in/carol-js-kim"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-2"
        >
          <i className="fa fa-linkedin icon"></i> 
        </a>
        <a
          href="https://github.com/jsck45"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-2"
        >
          <i className="fa fa-github icon"></i> 
        </a>
        <a
          href="https://stackoverflow.com/users/22682012/carol-kim"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-2"
        >
          <i className="fa fa-stack-overflow icon"></i> 
        </a>
      </div>
    </div>
  );
};

export default Footer;
