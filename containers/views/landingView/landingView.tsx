import React, { Component } from "react";
import Particles from "react-particles-js";
import { LandingTypical } from "../../components";
import "./landingView.css";
import particleConfig from "./particleConfig";

const LandingView = () => {
  return (
    <div className="landing-container">
      <div className="particle-container">
        <Particles className="particle-effect" params={particleConfig} />
      </div>
      <div className="landing-content">
        <LandingTypical />
      </div>
    </div>
  );
};

export default LandingView;
