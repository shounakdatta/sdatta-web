import { NextPage } from "next";
import { LandingView } from "../containers/views";
import "../static/index.css";

const Home: NextPage = () => {
  return (
    <div className="home-container">
      <LandingView />
    </div>
  );
};

export default Home;
