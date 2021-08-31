import React, { useState } from "react";
import { Element } from "react-scroll";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import ReactCardCarousel from "react-card-carousel";
import { FloatingPaper } from "../../components";
import { ExperienceConfig } from "./experienceConfig";
import styles from "./experienceView.module.css";

const ExperienceView = () => {
  let carouselRef;
  const [expIndex, setExpIndex] = useState(0);
  return (
    <Element name="experienceScroll">
      <div className={styles.expContainer}>
        <div className={styles.expBackTint}>
          <div className={styles.expContent}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Typography
                  color="textPrimary"
                  variant="h4"
                  classes={{ root: styles.expHeader }}
                >
                  Work Experience
                </Typography>
              </Grid>
            </Grid>
            <Grid
              container
              spacing={5}
              classes={{ root: styles.expContentRoot }}
            >
              <Grid
                item
                lg={5}
                md={6}
                sm={12}
                xs={12}
                classes={{ root: styles.carouselRoot }}
              >
                <div className={styles.carouselContainer}>
                  <ReactCardCarousel
                    autoplay={true}
                    autoplay_speed={10000}
                    spread="narrow"
                    alignment={
                      (typeof window !== "undefined" && window.innerWidth) > 500
                        ? "horizontal"
                        : "vertical"
                    }
                    ref={(Carousel) => (carouselRef = Carousel)}
                    afterChange={() =>
                      setExpIndex(carouselRef.getCurrentIndex())
                    }
                  >
                    {ExperienceConfig.map((config, eIndex) => {
                      const {
                        floatingPaperCss,
                        img,
                        imgContainerCss,
                        paperHeader,
                        paperSubHeader,
                      } = config;
                      return (
                        <FloatingPaper
                          colored={false}
                          customCss={floatingPaperCss}
                          key={`exp-paper-${eIndex}`}
                        >
                          <div
                            className={styles.floatingImageContainer}
                            style={imgContainerCss}
                          >
                            <img
                              src={img.src}
                              alt={img.alt}
                              className={styles.floatingImage}
                            />
                          </div>
                          <Typography
                            color="primary"
                            variant="h6"
                            classes={{ root: styles.carouselHeader }}
                          >
                            {paperHeader}
                          </Typography>
                          <Typography
                            color="secondary"
                            variant="body1"
                            classes={{ root: styles.carouselHeader }}
                          >
                            {paperSubHeader}
                          </Typography>
                        </FloatingPaper>
                      );
                    })}
                  </ReactCardCarousel>
                </div>
              </Grid>
              <Grid
                item
                lg={7}
                md={6}
                sm={12}
                xs={12}
                classes={{ root: styles.expTextRoot }}
              >
                <ul className={styles.expList}>
                  {ExperienceConfig.map((exp, eIndex) => {
                    return (
                      expIndex == eIndex &&
                      exp.expText.map((text, tindex) => (
                        <Typography
                          color="textPrimary"
                          variant="h6"
                          className={styles.expText}
                          key={`exp-paper-${eIndex}-${tindex}`}
                        >
                          <li>{text}</li>
                        </Typography>
                      ))
                    );
                  })}
                </ul>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default ExperienceView;
