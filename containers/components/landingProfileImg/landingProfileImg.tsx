import React from "react";
import "./landingProfileImg.css";

const LandingProfileImg = () => {
  return (
    <div className="profile-img-container">
      <img
        className="image"
        src="/shounak.jpg"
        alt="Shounak's Profile Picture"
      />
      {/* <img
        className="shadow"
        src="/shounak.jpg"
        alt="Shounak's Profile Reflection"
      /> */}
    </div>
  );
};

export default LandingProfileImg;
