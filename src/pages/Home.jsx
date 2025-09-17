import React, { useEffect } from "react";
import FullscreenNav from "../components/Landing/FullscreenNav";
import BannerKV from "../components/Landing/BannerKV";
import Event from "../components/Landing/Event";
import ProductSlider from "../components/Landing/ProductSlider";

const Home = () => {
  useEffect(() => {
    document.title = "Home - MyMap ปิ้ง";
  }, []);

  return (
    <div className="landing min-h-screen m-0">
      <FullscreenNav />
      <BannerKV />
      <Event />
      <ProductSlider />
    </div>
  );
};

export default Home;
