import React from "react";
import styles from "./landingProfileImg.module.css";
import Fade from "@material-ui/core/Fade";

const LandingProfileImg = (props) => {
  const { imgPath, alt } = props;
  return (
    <div className={styles.profileImgContainer}>
      <Fade in={true} timeout={500}>
        <img
          className={styles.profileImg}
          src={imgPath ?? "/assets/shounak.jpg"}
          alt={alt ?? "Shounak's Profile Picture"}
        />
      </Fade>
    </div>
  );
};

export default LandingProfileImg;
