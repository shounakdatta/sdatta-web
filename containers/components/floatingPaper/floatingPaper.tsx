import React from "react";
import Paper from "@material-ui/core/Paper";
import Fade from "@material-ui/core/Fade";
import styles from "./floatingPaper.module.css";

const FloatingPaper = (props) => {
  const { children, colored = false, gridPos = 1, customCss = {} } = props;
  return (
    <Fade in={true} timeout={gridPos * 500}>
      <div className="floatingPaperFadeChild" style={{ ...customCss }}>
        <Paper classes={{ root: styles["root" + (colored ? "Colored" : "")] }}>
          <div
            className={
              styles["floating" + (colored ? "Colored" : "") + "ChildContainer"]
            }
          >
            {children}
          </div>
        </Paper>
      </div>
    </Fade>
  );
};

export default FloatingPaper;
