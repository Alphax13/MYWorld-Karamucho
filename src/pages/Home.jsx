import { useState } from "react";
import FullscreenNav from "../components/Landing/FullscreenNav";
import BannerKV from "../components/Landing/BannerKV";
import Event from "../components/Landing/Event";

const Home = () => {

  return (
    <div className="landing min-h-screen m-0">
      <FullscreenNav />
      <BannerKV />
      <Event />
    </div>
  );
};

export default Home;
