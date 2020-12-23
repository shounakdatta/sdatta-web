import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import ReactCardCarousel from "react-card-carousel";
import { FloatingPaper } from "../../components";
import { ProjectConfig } from "./projectConfig";
import "./projectView.module.css";

const ProjectView = () => {
  let carouselRef;
  const [projIndex, setProjIndex] = useState(0);
  return (
    <div className="proj-container">
      <div className="proj-content">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography
              color="primary"
              variant="h4"
              classes={{ root: "proj-header" }}
            >
              Projects
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={10} classes={{ root: "proj-content-root" }}>
          <Grid
            item
            lg={7}
            md={6}
            sm={12}
            xs={12}
            classes={{ root: "proj-text-root" }}
          >
            <div>
              {ProjectConfig.map((proj, index) => {
                return (
                  projIndex == index &&
                  proj.description.map((text) => (
                    <Typography
                      color="primary"
                      variant="h6"
                      className="proj-text"
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
            classes={{ root: "carousel-root" }}
          >
            <div className="carousel-container">
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
                afterChange={() => setProjIndex(carouselRef.getCurrentIndex())}
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
                        className="floating-image-container"
                        style={imgContainerCss}
                      >
                        <img
                          src={img.src}
                          alt={img.alt}
                          className="floating-image"
                        />
                      </div>
                      <Typography
                        color="primary"
                        variant="h6"
                        classes={{ root: "carousel-header" }}
                      >
                        {paperHeader}
                      </Typography>
                      <Typography
                        color="secondary"
                        variant="body1"
                        align="center"
                        classes={{ root: "carousel-header" }}
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
  );
};

export default ProjectView;
