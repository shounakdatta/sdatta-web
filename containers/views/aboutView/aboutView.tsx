import React from "react";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { LandingProfileImg, FloatingPaper } from "../../components";
import "./aboutView.module.css";

const AboutView = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <LandingProfileImg />
          </Grid>
          <Grid item xs={8}>
            {/* <FloatingPaper>
              
            </FloatingPaper> */}
            <Typography
              color="primary"
              variant="h4"
              classes={{ root: "paper-header" }}
            >
              About Me
            </Typography>
            <Typography color="primary" variant="h6" className="paper-text">
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
