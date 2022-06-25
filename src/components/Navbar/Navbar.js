import React from "react";
import "./style.css";

export const Navbar = () => {
  return (
    <header className="header">
      <div className="left">
        <a href="/">
          <h2>UM</h2><h3>Developer</h3>
        </a>
      </div>
      
      <div className="right">
        <a href="/">
          <span className="right-e">Home</span>
        </a>
        <a href="#about">
          <span className="right-e">About</span>
        </a>
        <a href="#projects">
          <span className="right-e">Projects</span>
        </a>
        <a href="#contact">
          <span className="right-e">Contact</span>
        </a>
      </div>
    </header>
  );
};
