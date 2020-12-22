import React from "react";
import Paper from "@material-ui/core/Paper";
import "./floatingPaper.module.css";

const FloatingPaper = (props) => {
  const { children, colored = false, gridPos = 1 } = props;
  return (
    <div className={"floating-paper" + gridPos}>
      <Paper classes={{ root: "root" + (colored ? "-colored" : "") }}>
        <div
          className={
            "floating-" + (colored ? "colored-" : "") + "child-container"
          }
        >
          {children}
        </div>
      </Paper>
    </div>
  );
};

export default FloatingPaper;
