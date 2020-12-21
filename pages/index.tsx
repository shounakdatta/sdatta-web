import { NextPage } from "next";
import { ThemeProvider } from "@material-ui/core/styles";
import { LandingView } from "../containers/views";
import { Navbar } from "../containers/components";
import theme from "./theme";
import "../static/index.css";

const Home: NextPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="home-container">
        <Navbar />
        <LandingView />
      </div>
    </ThemeProvider>
  );
};

export default Home;
