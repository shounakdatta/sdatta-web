import { NextPage } from "next";
import { ThemeProvider } from "@material-ui/core/styles";
import {
  LandingView,
  AboutView,
  ExperienceView,
  ProjectView,
  FooterView,
} from "../containers/views";
import { Navbar } from "../containers/components";
import theme from "./theme";
import "../public/css/index.css";

const Home: NextPage = () => {
  return (
    <ThemeProvider theme={theme}>
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
