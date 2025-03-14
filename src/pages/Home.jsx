import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FullscreenNav from "../components/Landing/FullscreenNav";
import BannerKV from "../components/Landing/BannerKV";
import Event from "../components/Landing/Event";
import Howto from "../components/Landing/Howto";
import Location from "../components/Landing/Location";
import Scoreboard from "../components/Landing/Scorebroad";
import ProductSlider from "../components/Landing/ProductSlider";
import MobileMenu from "../components/Landing/MobileMenu";
import JoinStore from "../components/Landing/joinstore";
import { useNavigate, useLocation } from "react-router-dom"
import { loginWithLine } from "../common/userSlice.js/userSlice";

const Home = ({ onCheckin ,getprofile}) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const { profile, customerinfo, isLoading, error } = useSelector((state) => state.user);
  const [checkpage, setCheckpage] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    // ดึง rawCheck จาก URL
    let rawCheck = params.get("page");
    
    // ถ้าใน URL ไม่มี ให้ลองดึงจาก localStorage
    if (!rawCheck) {
      rawCheck = localStorage.getItem("rawCheck");
    }
  
    // ตรวจสอบว่า rawCheck และ profile ถูกตั้งค่าหรือยัง
    if (rawCheck && !customerinfo) {
      localStorage.setItem("rawCheck", rawCheck);
      dispatch(loginWithLine());
    } else if (rawCheck && customerinfo) {
      setCheckpage(rawCheck);
      console.log("ไปหน้า", rawCheck);
      navigate(`/${rawCheck}`);
    }
  }, [location.search, profile, dispatch, navigate]);

  useEffect(() => {
    if (profile) {
      localStorage.removeItem("rawCheck");
    }
  }, [profile]);
  
  useEffect(() => {
    document.title = "Home - MyMap ปิ้ง";
  }, []);

  console.log('profile :', profile)
  console.log('customerinfo :', customerinfo)

  return (
    <div className="landing min-h-screen m-0">

      {!customerinfo &&
        <>
          <FullscreenNav onCheckin={onCheckin} />
          <BannerKV />
          <Event />
        </>
        }
        
      <Location onCheckin={onCheckin} getprofile={getprofile} />
      <Scoreboard />
      {!customerinfo && 
        <>
          <Howto onCheckin={onCheckin}/>
          <JoinStore onCheckin={onCheckin}/>
        </>
      }

      <MobileMenu onCheckin={onCheckin}/>
      {!customerinfo && <>
        <ProductSlider />
      </>}
    </div>
  );
};

export default Home;
