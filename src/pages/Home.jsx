import React, { useState, useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import FullscreenNav from "../components/Landing/FullscreenNav";
import BannerKV from "../components/Landing/BannerKV";
import Event from "../components/Landing/Event";
import Howto from "../components/Landing/Howto";
import Location from "../components/Landing/Location";
import Scoreboard from "../components/Landing/Scorebroad";
import ProductSlider from "../components/Landing/ProductSlider";
import MobileMenu from "../components/Landing/MobileMenu";

const Home = ({onCheckin}) => {
  const { profile, customerinfo, isLoading, error} = useSelector((state) => state.user);

  console.log('profile :',profile)
  console.log('customerinfo :',customerinfo)

  return (
    <div className="landing min-h-screen m-0">
      {!customerinfo &&
      <>
      <BannerKV />
      <Event />
      <Howto /></>}
      <Location onCheckin={onCheckin} />
      <Scoreboard />
      {!customerinfo &&
      <><ProductSlider /></>}
      {customerinfo && <MobileMenu />}
    </div>
  );
};

export default Home;
