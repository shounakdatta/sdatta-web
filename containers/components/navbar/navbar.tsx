import React from "react";
import { Link as ScrollLink } from "react-scroll";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Slide from "@material-ui/core/Slide";
import "./navbar.module.css";

const HideOnScroll = (props) => {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};

export default function Navbar() {
  return (
    <div>
      <HideOnScroll>
        <AppBar position="fixed" classes={{ root: "toolBarRoot" }}>
          <Toolbar className="toolBar">
            <div
              className="logo-container"
              style={{ height: 64, width: "50%" }}
            >
              <img
                src="/assets/sign.png"
                alt=""
                className="logo"
                style={{ height: "80%", margin: "20% 0%" }}
              />
            </div>
            <div className="link-container">
              <ScrollLink
                activeClass="active"
                to="aboutScroll"
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={0}
                duration={500}
                isDynamic={true}
                ignoreCancelEvents={false}
                className="navbar-link"
              >
                <Typography
                  variant="h6"
                  color="textPrimary"
                  classes={{ root: "toolBarText" }}
                >
                  About
                </Typography>
              </ScrollLink>
              <ScrollLink
                activeClass="active"
                to="experienceScroll"
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={0}
                duration={500}
                isDynamic={true}
                ignoreCancelEvents={false}
                className="navbar-link"
              >
                <Typography
                  variant="h6"
                  color="textPrimary"
                  classes={{ root: "toolBarText" }}
                >
                  Experience
                </Typography>
              </ScrollLink>
              <ScrollLink
                activeClass="active"
                to="projectScroll"
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={0}
                duration={500}
                isDynamic={true}
                ignoreCancelEvents={false}
                className="navbar-link"
              >
                <Typography
                  variant="h6"
                  color="textPrimary"
                  classes={{ root: "toolBarText" }}
                >
                  Projects
                </Typography>
              </ScrollLink>
            </div>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </div>
  );
}
