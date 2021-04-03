import React from "react";
import "./Landing.css";
import flash from "./../../assets/hero.png";

const Landing = () => {
  return (
    <div className="landing-container">
      <div className="landing-left">
        <h1 className="landing-header">Can You Type...</h1>
        <div className="typewriter-container">
          <h1>Fast?</h1>
          <h1>Correct?</h1>
          <h1>Quick?</h1>
        </div>
      </div>
      <div className="landing-left">
        <img src={flash} alt="flash" className="flash-image" />
      </div>
    </div>
  );
};

export default Landing;
