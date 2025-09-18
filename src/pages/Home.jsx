import React, { useEffect } from "react";
import FullscreenNav from "../components/Landing/FullscreenNav";
import BannerKV from "../components/Landing/BannerKV";
import Join from "../components/Landing/join";
import Event from "../components/Landing/Event";
import RoadshowSchedule from "../components/Landing/RoadshowSchedule";
import ProductSlider from "../components/Landing/ProductSlider";

const Home = () => {
  useEffect(() => {
    document.title = "Home - MY WORLD x คารามูโจ้";
  }, []);

  return (
    <div className="landing min-h-screen m-0">
      <FullscreenNav />
      <BannerKV />
      <Event />
      <Join />
      <RoadshowSchedule />
      <ProductSlider />
    </div>
  );
};

export default Home;
