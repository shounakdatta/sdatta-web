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
        <meta name="description" content="Who is Shounak? Why do I care? What is he up to?"/>
        <meta name="keywords" content="Shounak, Datta, Software, Engineering, Developer"/>
        <meta property="og:title" content="Shounak Datta"/>
        <meta property="og:image" content="/assets/sdev-logo.png"/>
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
