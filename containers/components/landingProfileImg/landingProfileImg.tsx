import React from "react";
import "./landingProfileImg.module.css";

const LandingProfileImg = (props) => {
  const { imgPath, alt } = props;
  return (
    <div className="profile-img-container">
      <img
        className="image"
        src={imgPath ?? "/shounak.jpg"}
        alt={alt ?? "Shounak's Profile Picture"}
      />
    </div>
  );
};

export default LandingProfileImg;
