import React, { Component } from "react";
import Particles from "react-particles-js";
import "./landingView.css";
import particleConfig from "./particleConfig";

const LandingView = () => {
  return (
    <div className="landing-container">
      <Particles className="particle-container" params={particleConfig} />
    </div>
  );
};

export default LandingView;
