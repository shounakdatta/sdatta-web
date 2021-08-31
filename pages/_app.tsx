import { NextPage } from "next";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/core/styles";
import {
  LandingView,
  AboutView,
  ExperienceView,
  ProjectView,
  FooterView,
} from "../containers/views";
import { Navbar } from "../containers/components";
import theme from "../theme";
import "./index.css";

const Home: NextPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <link
          rel="shortcut icon"
          href="/assets/Favicon.ico"
          type="image/x-icon"
        />
        <title>Shounak Datta</title>
        <meta
          name="description"
          content="Who is Shounak? What is he up to? Why do I care?"
        />
        <meta
          name="keywords"
          content="Shounak, Datta, Software, Engineer, Developer"
        />
        <meta property="og:title" content="Shounak Datta" />
        <meta
          name="image"
          property="og:image"
          content="/assets/sdev-logo.png"
        />
        <meta name="twitter:image:src" content="/assets/sdev-logo.png"></meta>
      </Head>
      <div className="home-container">
        <Navbar />
        <LandingView />
        <AboutView />
        <ExperienceView />
        <ProjectView />
        <FooterView />
      </div>
    </ThemeProvider>
  );
};

export default Home;
