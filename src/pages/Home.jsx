import React, { useState, useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import FullscreenNav from "../components/Landing/FullscreenNav";
import BannerKV from "../components/Landing/BannerKV";
import Event from "../components/Landing/Event";
import Howto from "../components/Landing/Howto";
import Location from "../components/Landing/Location";
import Scoreboard from "../components/Landing/Scorebroad";
import ProductSlider from "../components/Landing/ProductSlider";
import { loginWithLine } from "../common/userSlice.js/userSlice";
import MobileMenu from "../components/Landing/MobileMenu";

const Home = () => {
  const dispatch = useDispatch();
  const { profile, customerinfo, isLoading, error } = useSelector((state) => state.user);
  const [isCheckinActive, setIsCheckinActive] = useState(false);

  const handleCheckin = () => {
    setIsCheckinActive(!isCheckinActive);
  };

  // useEffect(()=>{
  //   if(isCheckinActive = true && !profile){
  //     dispatch(loginWithLine())
  //   }
  // },[dispatch , isCheckinActive ,profile])

  return (
    <div className="landing min-h-screen m-0">
      <FullscreenNav />
      <BannerKV />
      <Event />
      <Howto />
      <Location onCheckin={handleCheckin}  />
      <Scoreboard />
      <ProductSlider />
      <MobileMenu />
    </div>
  );
};

export default Home;
