import React from "react";
import MailIcon from "@material-ui/icons/Mail";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import Typography from "@material-ui/core/Typography";
import "./footerView.module.css";

const FooterView = () => {
  return (
    <div className="footer-container">
      <Typography
        color="textPrimary"
        variant="h6"
        classes={{ root: "footer-text" }}
        align="center"
      >
        &#169; Shounak Datta
      </Typography>
      <div className="footer-link-container">
        <a className="footer-link" href="mailto:shounak14datta@gmail.com">
          <MailIcon style={{ height: 25, color: "#ffffff" }} />
        </a>
        <a
          className="footer-link"
          href="https://www.linkedin.com/in/shounakdatta/"
        >
          <LinkedInIcon style={{ height: 25, color: "#ffffff" }} />
        </a>
        <a className="footer-link" href="https://github.com/shounakdatta">
          <GitHubIcon style={{ height: 25, color: "#ffffff" }} />
        </a>
        <a className="footer-link" href="https://twitter.com/datta_shounak">
          <TwitterIcon style={{ height: 25, color: "#ffffff" }} />
        </a>
      </div>

      {/* <Grid container spacing={2}>
        <Grid item lg={4} md={4} sm={12} xs={12}>
          <Typography
            color="textPrimary"
            variant="h5"
            classes={{ root: "footer-header" }}
            align="center"
          >
            Email
          </Typography>
          <a
            href={"mailto:shounak14datta@gmail.com"}
            className="footer-text-link"
          >
            <Typography
              color="textPrimary"
              variant="h6"
              classes={{ root: "footer-text" }}
              align="center"
            >
              shounak14datta@gmail.com
            </Typography>
          </a>
        </Grid>
        <Grid item lg={4} md={4} sm={12} xs={12}>
          <Typography
            color="textPrimary"
            variant="h5"
            classes={{ root: "footer-header" }}
            align="center"
          >
            Address
          </Typography>
          <Typography
            color="textPrimary"
            variant="h6"
            classes={{ root: "footer-text" }}
            align="center"
          >
            Toronto, ON
          </Typography>
        </Grid>
        <Grid item lg={4} md={4} sm={12} xs={12}>
          <Typography
            color="textPrimary"
            variant="h5"
            classes={{ root: "footer-header" }}
            align="center"
          >
            Social
          </Typography>
          <Grid container spacing={1} justify="center">
            <Grid item xs={4} classes={{ root: "left-social" }}>
              <a href="https://www.linkedin.com/in/shounakdatta/">
                <img
                  src="/assets/linkedin-white.png"
                  alt=""
                  style={{ height: 30 }}
                />
              </a>
            </Grid>
            <Grid item xs={4} classes={{ root: "center-social" }}>
              <a href="https://github.com/shounakdatta">
                <img
                  src="/assets/github-white.png"
                  alt=""
                  style={{ height: 30 }}
                />
              </a>
            </Grid>
            <Grid item xs={4} classes={{ root: "right-social" }}>
              <a href="https://twitter.com/datta_shounak">
                <img
                  src="/assets/twitter-white.png"
                  alt=""
                  style={{ height: 30 }}
                />
              </a>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
     */}
    </div>
  );
};

export default FooterView;
