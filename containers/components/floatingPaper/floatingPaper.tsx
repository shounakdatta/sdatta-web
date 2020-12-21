import React from "react";
import Paper from "@material-ui/core/Paper";
import "./floatingPaper.module.css";

const FloatingPaper = (props) => {
  const { children } = props;
  return (
    <div className="floating-paper">
      <Paper classes={{ root: "root" }}>{children}</Paper>
    </div>
  );
};

export default FloatingPaper;
