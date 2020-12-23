import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import ReactCardCarousel from "react-card-carousel";
import { FloatingPaper } from "../../components";
import { ExperienceConfig } from "./experienceConfig";
import "./experienceView.module.css";

const ExperienceView = () => {
  let carouselRef;
  const [expIndex, setExpIndex] = useState(0);
  return (
    <div className="exp-container">
      <div className="exp-back-tint">
        <div className="exp-content">
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography
                color="textPrimary"
                variant="h4"
                classes={{ root: "exp-header" }}
              >
                Work Experience
              </Typography>
            </Grid>
          </Grid>
          <Grid container spacing={5} classes={{ root: "exp-content-root" }}>
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
                  afterChange={() => setExpIndex(carouselRef.getCurrentIndex())}
                >
                  {ExperienceConfig.map((config) => {
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
            <Grid item lg={7} md={6} sm={12} xs={12}>
              <ul className="exp-list">
                {ExperienceConfig.map((exp, index) => {
                  return (
                    expIndex == index &&
                    exp.expText.map((text) => (
                      <Typography
                        color="textPrimary"
                        variant="h6"
                        className="exp-text"
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
  );
};

export default ExperienceView;
