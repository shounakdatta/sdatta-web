import React, { useState } from "react";
import { Element } from "react-scroll";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import ReactCardCarousel from "react-card-carousel";
import { FloatingPaper } from "../../components";
import { ProjectConfig } from "./projectConfig";
import styles from "./projectView.module.css";

const ProjectView = () => {
  let carouselRef;
  const [projIndex, setProjIndex] = useState(0);
  return (
    <Element name="projectScroll">
      <div className={styles.projContainer}>
        <div className={styles.projContent}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography
                color="primary"
                variant="h4"
                classes={{ root: styles.projHeader }}
              >
                Projects
              </Typography>
            </Grid>
          </Grid>
          <Grid
            container
            spacing={10}
            classes={{ root: styles.projContentRoot }}
          >
            <Grid
              item
              lg={7}
              md={6}
              sm={12}
              xs={12}
              classes={{ root: styles.projTextRoot }}
            >
              <div>
                {ProjectConfig.map((proj, pindex) => {
                  return (
                    projIndex == pindex &&
                    proj.description.map((text, tindex) => (
                      <Typography
                        color="primary"
                        variant="h6"
                        className={styles.projText}
                        key={`project-text-${pindex}-${tindex}`}
                      >
                        {text}
                      </Typography>
                    ))
                  );
                })}
              </div>
            </Grid>
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
                    setProjIndex(carouselRef.getCurrentIndex())
                  }
                >
                  {ProjectConfig.map((config, index) => {
                    const {
                      floatingPaperCss,
                      img,
                      imgContainerCss,
                      paperHeader,
                      paperSubHeader,
                    } = config;
                    return (
                      <FloatingPaper
                        key={"proj-paper-" + index}
                        colored={false}
                        customCss={floatingPaperCss}
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
                          align="center"
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
          </Grid>
        </div>
      </div>
    </Element>
  );
};

export default ProjectView;
