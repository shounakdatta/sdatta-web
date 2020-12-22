import { NextPage } from "next";
import { ThemeProvider } from "@material-ui/core/styles";
import { LandingView, AboutView } from "../containers/views";
import { Navbar } from "../containers/components";
import theme from "./theme";
import "../static/index.css";

const Home: NextPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="home-container">
        <Navbar />
        <LandingView />
        <AboutView />
      </div>
    </ThemeProvider>
  );
};

export default Home;
