import React from "react";
import Typical from "react-typical";
import styles from "./landingTypical.module.css";

const headerSteps = [
  "Hey!",
  2000,
  "Thanks for stopping by.",
  2000,
  "I'm still building the site rn 😅",
  2000,
  "Check back in a few days?",
];

const LandingTypical = () => {
  return (
    <div className={styles.landingTypicalHeader}>
      <Typical wrapper="h1" steps={headerSteps} />
    </div>
  );
};

export default LandingTypical;
