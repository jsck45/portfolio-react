import React from "react";
import "./Footer.css"

const Footer = () => {
  return (
    <div className="footer menu_footer d-flex flex-column flex-md-row justify-content-md-center align-items-md-center w-100 p-3">
      <div className="d-flex">
        <a href="https://linkedin.com/in/carol-js-kim" target="_blank" rel="noopener noreferrer" className="mx-2">LinkedIn</a>
        <a href="https://github.com/jsck45" target="_blank" rel="noopener noreferrer" className="mx-2">Github</a>
        <a href="https://stackoverflow.com/users/22682012/carol-kim" target="_blank" rel="noopener noreferrer" className="mx-2">Stack Overflow</a>
      </div>
    </div>
  );
};

export default Footer;
