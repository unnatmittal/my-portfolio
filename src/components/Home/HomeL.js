import React from "react";
import "./style.css";
import Typed from "react-typed";

export const HomeL = () => {
  return (
    <div className="home-l">
      <div className="box">
        <div className="underline"></div>
        <h1 className="heading">
          I'm <p>Unnat Mittal</p>
        </h1>
        <Typed
          className="typed"
          strings={[
            "Web Designer",
            "Web Developer",
            "App Developer",
            "Software Programmer",
          ]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
      </div>
    </div>
  );
};
