import React from "react";
import { Link as ScrollLink } from "react-scroll";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Particles from "react-particles-js";
import { FloatingPaper } from "../../components";
import styles from "./landingView.module.css";
import particleConfig from "./particleConfig";

const LandingView = () => {
  return (
    <div className={styles.landingContainer}>
      <div className={styles.particleContainer}>
        <Particles className={styles.particleEffect} params={particleConfig} />
      </div>
      <div className={styles.landingContent}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <div className={styles.welcomeTitleContainer}>
              <Typography color="textPrimary" variant="h4">
                Welcome
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12}>
            <div className={styles.welcomeSubtitleContainer}>
              <Typography
                color="textSecondary"
                variant="h5"
                classes={{ root: styles.welcomeSubText }}
              >
                Select a Quick Link Below
              </Typography>
            </div>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={3}
          justify="center"
          className={styles.quickLinkContainer}
        >
          <Grid item lg={4} md={4} sm={4} xs={10}>
            <ScrollLink
              activeClass="active"
              to="aboutScroll"
              spy={true}
              smooth={true}
              hashSpy={true}
              offset={0}
              duration={500}
              isDynamic={true}
              ignoreCancelEvents={false}
            >
              <FloatingPaper colored={true} gridPos={1}>
                <div className={styles.floatingImageContainer}>
                  <img
                    src="/assets/sdev-logo.png"
                    alt=""
                    className={styles.floatingImage}
                  />
                </div>
                <Typography
                  color="textPrimary"
                  variant="h6"
                  classes={{ root: styles.paperHeader }}
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
              </FloatingPaper>
            </ScrollLink>
          </Grid>
          <Grid item lg={4} md={4} sm={4} xs={10}>
            <ScrollLink
              activeClass="active"
              to="experienceScroll"
              spy={true}
              smooth={true}
              hashSpy={true}
              offset={0}
              duration={500}
              isDynamic={true}
              ignoreCancelEvents={false}
            >
              <FloatingPaper colored={true} gridPos={2}>
                <div className={styles.floatingImageContainer}>
                  <img
                    src="/assets/experience4.jpg"
                    alt=""
                    className={styles.floatingImage}
                  />
                </div>
                <Typography
                  color="textPrimary"
                  variant="h6"
                  classes={{ root: styles.paperHeader }}
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
              </FloatingPaper>
            </ScrollLink>
          </Grid>
          <Grid item lg={4} md={4} sm={4} xs={10}>
            <ScrollLink
              activeClass="active"
              to="projectScroll"
              spy={true}
              smooth={true}
              hashSpy={true}
              offset={0}
              duration={500}
              isDynamic={true}
              ignoreCancelEvents={false}
            >
              <FloatingPaper colored={true} gridPos={3}>
                <div className={styles.floatingImageContainer}>
                  <img
                    src="/assets/projects2.png"
                    alt=""
                    className={styles.floatingImage}
                  />
                </div>
                <Typography
                  color="textPrimary"
                  variant="h6"
                  classes={{ root: styles.paperHeader }}
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
              </FloatingPaper>
            </ScrollLink>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default LandingView;
