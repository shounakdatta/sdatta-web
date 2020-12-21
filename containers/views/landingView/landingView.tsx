import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Particles from "react-particles-js";
import { FloatingPaper } from "../../components";
import "./landingView.css";
import particleConfig from "./particleConfig";

const LandingView = () => {
  return (
    <div className="landing-container">
      <div className="particle-container">
        <Particles className="particle-effect" params={particleConfig} />
      </div>
      <div className="landing-content">
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <div className="welcome-container">
              <Typography color="textPrimary" variant="h4">
                Welcome
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12}>
            <div className="welcome-container">
              <Typography
                color="textSecondary"
                variant="h5"
                classes={{ root: "welcome-sub-text" }}
              >
                Select a Quick Link Below
              </Typography>
            </div>
          </Grid>
        </Grid>
        <Grid container spacing={3} style={{ marginTop: "2%" }}>
          <Grid item xs={4}>
            <FloatingPaper>
              <div style={{ width: "90%", height: 300, padding: "5%" }}>
                <div
                  style={{
                    height: "60%",
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src="/sdev-logo.png"
                    alt=""
                    style={{ maxWidth: "90%", height: "100%" }}
                  />
                </div>
                <Typography
                  color="textPrimary"
                  variant="h6"
                  classes={{ root: "paper-header" }}
                >
                  About Me
                </Typography>
                <ul style={{ listStylePosition: "inside" }}>
                  <Typography color="textPrimary" variant="body1">
                    &#9889; Who am I
                  </Typography>
                  <Typography color="textPrimary" variant="body1">
                    &#9889; My Qualifications
                  </Typography>
                  <Typography color="textPrimary" variant="body1">
                    &#9889; My Aspirations
                  </Typography>
                </ul>
              </div>
            </FloatingPaper>
          </Grid>
          <Grid item xs={4}>
            <FloatingPaper>
              <div style={{ width: "90%", height: 300, padding: "5%" }}>
                <div
                  style={{
                    height: "60%",
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src="/experience4.jpg"
                    alt=""
                    style={{
                      maxWidth: "90%",
                      height: "100%",
                      borderRadius: 10,
                    }}
                  />
                </div>
                <Typography
                  color="textPrimary"
                  variant="h6"
                  classes={{ root: "paper-header" }}
                >
                  Work Experience
                </Typography>
                <ul style={{ listStylePosition: "inside" }}>
                  <Typography color="textPrimary" variant="body1">
                    &#9889; BMO Capital Markets
                  </Typography>
                  <Typography color="textPrimary" variant="body1">
                    &#9889; Secret Mission Software
                  </Typography>
                  <Typography color="textPrimary" variant="body1">
                    &#9889; Innovasium Digital
                  </Typography>
                </ul>
              </div>
            </FloatingPaper>
          </Grid>
          <Grid item xs={4}>
            <FloatingPaper>
              <div style={{ width: "90%", height: 300, padding: "5%" }}>
                <div
                  style={{
                    height: "60%",
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src="/projects2.png"
                    alt=""
                    style={{
                      maxWidth: "90%",
                      height: "100%",
                      borderRadius: 10,
                    }}
                  />
                </div>
                <Typography
                  color="textPrimary"
                  variant="h6"
                  classes={{ root: "paper-header" }}
                >
                  Projects
                </Typography>
                <ul style={{ listStylePosition: "inside" }}>
                  <Typography color="textPrimary" variant="body1">
                    &#9889; DoCD
                  </Typography>
                  <Typography color="textPrimary" variant="body1">
                    &#9889; Realitics
                  </Typography>
                  <Typography color="textPrimary" variant="body1">
                    &#9889; FoodSnap
                  </Typography>
                </ul>
              </div>
            </FloatingPaper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default LandingView;
