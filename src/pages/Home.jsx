import { useState } from "react";
import FullscreenNav from "../components/Landing/FullscreenNav";
import BannerKV from "../components/Landing/BannerKV";
import Event from "../components/Landing/Event";
import Howto from "../components/Landing/Howto";
import Location from "../components/Landing/Location";
import Scoreboard from "../components/Landing/Scorebroad";
import ProductSlider from "../components/Landing/ProductSlider";
import MobileMenu from "../components/Landing/MobileMenu";

const Home = () => {

  return (
    <div className="landing min-h-screen m-0">
      <FullscreenNav />
      <BannerKV />
      <Event />
      <Howto />
      <Location />
      <Scoreboard />
      <ProductSlider />
      <MobileMenu />
    </div>
  );
};

export default Home;
