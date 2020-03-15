import React, { Component } from "react";
import Particles from "react-particles-js";
import { LandingTypical, LandingProfileImg } from "../../components";
import "./landingView.css";
import particleConfig from "./particleConfig";

const LandingView = () => {
  return (
    <div className="landing-container">
      <div className="particle-container">
        <Particles className="particle-effect" params={particleConfig} />
      </div>
      <div className="landing-content">
        <div className="content-half">
          <LandingTypical />
        </div>
        <div className="content-half">
          <LandingProfileImg />
        </div>
      </div>
    </div>
  );
};

export default LandingView;
