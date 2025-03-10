import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Home from "./pages/Home";
import BoxsetPage from "./pages/BoxsetPage";
import PrivilegePage from "./pages/PrivilegePage";
import CouponHistory from "./pages/CouponHistory";
import CheckInPage from "./pages/CheckInPage";
import CheckinPhoto from "./components/CheckIn/CheckinPhoto";
import CheckPoint from "./components/CheckPoint/CheckPoint";
import PonitPage from "./pages/PointPage";
import RegisterEvent from "./pages/RegisterEvent";
import { loginWithLine, getuser, setCustomerInfo } from "./common/userSlice.js/userSlice";

function App() {
  const dispatch = useDispatch();
 
  const { profile, customerinfo, isLoading, error } = useSelector((state) => state.user);
  const [isCheckinActive, setIsCheckinActive] = useState(false);
  

  const handleCheckin = () => {
    dispatch(loginWithLine());
  };


  const handleGetprofile =()=>{
    dispatch(getuser({ profile }));
  };

  console.log(customerinfo)

  useEffect(() => {
    const storedProfile = localStorage.getItem("profile");
    if (storedProfile) {
      try {
        const parsedProfile = JSON.parse(storedProfile);
        dispatch(setCustomerInfo(parsedProfile));
      } catch (error) {
        console.error("Failed to parse profile from localStorage:", error);
      }
    }
  }, [dispatch]);

  useEffect(() => {
    // ตรวจสอบว่า GTM ถูกโหลดหรือยัง
    if (window.dataLayer) {
      window.dataLayer.push({
        event: "page_view",
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);

  useEffect(() => {
    if (profile) {
      dispatch(getuser({ profile }));
    }
  }, [dispatch])


  return (
    <Router basename="/My-map">
      <Routes>
        <Route path="/" element={(customerinfo) && (customerinfo?.phone === null || customerinfo?.phone === "") ? <RegisterEvent /> : <Home onCheckin={handleCheckin} getprofile={handleGetprofile} />} /> {/*(customerinfo ) && (customerinfo?.phone === null || customerinfo?.phone === "") ? <RegisterEvent /> :  */}
        <Route path="/point" element={<PonitPage />} />
        <Route path="/boxset" element={<BoxsetPage />} />
        <Route path="/privilege/:id" element={<PrivilegePage />} />
        <Route path="/coupon-history" element={<CouponHistory />} />
        <Route path="/checkin" element={<CheckInPage />} />
        <Route path="/checkin-photo" element={<CheckinPhoto />} />
        <Route path="/checkpoint" element={<CheckPoint />} />
        <Route path="/RegisterEvent" element={<RegisterEvent />} />
      </Routes>
    </Router>
  );
}

export default App;
