import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import theme from "../../../pages/theme";
import "./navbar.module.css";

export default function Navbar() {
  return (
    <div>
      <AppBar
        position="absolute"
        color="transparent"
        classes={{ root: "toolBarRoot" }}
      >
        <Toolbar className="toolBar">
          <Typography
            variant="h6"
            color="textPrimary"
            classes={{ root: "toolBarText" }}
          >
            Home
          </Typography>
          <div className="logo-container" style={{ height: 64 }}>
            <img
              src="/assets/sign.png"
              alt=""
              className="logo"
              style={{ height: "80%", margin: "20% 0%" }}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
