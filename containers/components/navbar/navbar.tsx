import React, { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Drawer from "@material-ui/core/SwipeableDrawer";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import PersonIcon from "@material-ui/icons/Person";
import InboxIcon from "@material-ui/icons/Inbox";
import WorkIcon from "@material-ui/icons/Work";
import BuildIcon from "@material-ui/icons/Build";
import MailIcon from "@material-ui/icons/Mail";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import Slide from "@material-ui/core/Slide";
import "./navbar.module.css";
import { Twitter } from "@material-ui/icons";

const HideOnScroll = (props) => {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};

const getDrawerIcons = (index, props) => {
  switch (index) {
    case 0:
      return <PersonIcon {...props} />;
    case 1:
      return <WorkIcon {...props} />;
    case 2:
      return <BuildIcon {...props} />;
    case 3:
      return <MailIcon {...props} />;
    case 4:
      return <LinkedInIcon {...props} />;
    case 5:
      return <GitHubIcon {...props} />;
    case 6:
      return <TwitterIcon {...props} />;
  }
};

export default function Navbar() {
  const [mobileView, setMobileView] = useState(false);
  const [showDrawer, setDrawerView] = useState(false);

  useEffect(() => {
    function updateSize() {
      setMobileView(window.innerWidth <= 450);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const ScrollLinkParent = (props) => {
    const { target, drawer = false, children } = props;
    return (
      <ScrollLink
        activeClass="active"
        to={target}
        spy={true}
        smooth={true}
        hashSpy={true}
        offset={-50}
        duration={500}
        isDynamic={true}
        ignoreCancelEvents={false}
        className={drawer ? "drawer-link" : "navbar-link"}
      >
        {children}
      </ScrollLink>
    );
  };

  const list = () => (
    <div>
      <List>
        {[
          ["About Me", "aboutScroll"],
          ["Work Experience", "experienceScroll"],
          ["Projects", "projectScroll"],
        ].map(([text, id], index) => (
          <ScrollLinkParent target={id} drawer={true}>
            <ListItem button key={text}>
              <ListItemIcon>
                {getDrawerIcons(index, { style: { color: "ffffff" } })}
              </ListItemIcon>
              <ListItemText
                primary={text}
                primaryTypographyProps={{ color: "textPrimary" }}
              />
            </ListItem>
          </ScrollLinkParent>
        ))}
      </List>
      <Divider classes={{ root: "drawer-divider" }} />
      <List>
        {[
          ["Email", "mailto:shounak14datta@gmail.com"],
          ["LinkedIn", "https://www.linkedin.com/in/shounakdatta/"],
          ["Github", "https://github.com/shounakdatta"],
          ["Twitter", "https://twitter.com/datta_shounak"],
        ].map(([text, link], index) => (
          <a href={link} className="drawer-a-link">
            <ListItem button key={text}>
              <ListItemIcon>
                {getDrawerIcons(index + 3, { style: { color: "ffffff" } })}
              </ListItemIcon>
              <ListItemText
                primary={text}
                primaryTypographyProps={{ color: "textPrimary" }}
              />
            </ListItem>
          </a>
        ))}
      </List>
    </div>
  );

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
            {!mobileView && (
              <div className="link-container">
                <ScrollLinkParent target="aboutScroll">
                  <Typography
                    variant="h6"
                    color="textPrimary"
                    classes={{ root: "toolBarText" }}
                  >
                    About
                  </Typography>
                </ScrollLinkParent>
                <ScrollLinkParent target="experienceScroll">
                  <Typography
                    variant="h6"
                    color="textPrimary"
                    classes={{ root: "toolBarText" }}
                  >
                    Experience
                  </Typography>
                </ScrollLinkParent>
                <ScrollLinkParent target="projectScroll">
                  <Typography
                    variant="h6"
                    color="textPrimary"
                    classes={{ root: "toolBarText" }}
                  >
                    Projects
                  </Typography>
                </ScrollLinkParent>
              </div>
            )}
            {mobileView && (
              <div className="menu-button-container">
                <IconButton onClick={() => setDrawerView(true)}>
                  <MenuIcon style={{ color: "#ffffff" }} />
                </IconButton>
                <Drawer
                  anchor="right"
                  open={showDrawer}
                  onOpen={() => setDrawerView(true)}
                  onClose={() => setDrawerView(false)}
                  classes={{ paper: "drawer-root" }}
                >
                  {list()}
                </Drawer>
              </div>
            )}
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </div>
  );
}
