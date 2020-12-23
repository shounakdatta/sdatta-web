import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { LandingProfileImg } from "../../components";
import "./aboutView.module.css";

const AboutView = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <Grid container spacing={3}>
          <Grid item lg={4} md={6} sm={12} xs={12}>
            <LandingProfileImg />
          </Grid>
          <Grid item lg={8} md={6} sm={12} xs={12}>
            <Typography
              color="primary"
              variant="h4"
              classes={{ root: "about-header" }}
            >
              About Me
            </Typography>
            <Typography color="primary" variant="h6" className="about-text">
              Problems and solutions go hand in hand. <br />
              It is my passion to bring them together. I innovate. <br />
              <br />
              Hey! Thanks for dropping by. <br />
              <br />
              My name is Shounak. I am a Computer Engineering student at the
              University of Waterloo and an aspiring Software Engineer. Over the
              years, I’ve had the opportunity to work on a number of incredible
              projects that have allowed me to grow as an individual. <br />
              <br />I hope you’ll enjoy viewing my projects as much as I enjoyed
              working on them.
            </Typography>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default AboutView;
