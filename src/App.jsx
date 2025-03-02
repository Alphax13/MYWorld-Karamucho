import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
import { loginWithLine, getuser, resetState, setCustomerInfo } from "./common/userSlice.js/userSlice";


function App() {
  const dispatch = useDispatch();
  const { profile, customerinfo, isLoading, error } = useSelector((state) => state.user);
  const [isCheckinActive, setIsCheckinActive] = useState(false);

  const handleCheckin = () => {
    setIsCheckinActive(!isCheckinActive);
  };

  console.log(customerinfo)

  useEffect(() => {
    // ตรวจสอบว่า profile และ customerinfo อยู่ใน localStorage หรือไม่
    const storedProfile = localStorage.getItem("profile");
    const storedCustomerInfo = localStorage.getItem("customerinfo");

    // ตรวจสอบว่า profile จาก localStorage มีค่าหรือไม่
    if (storedProfile && !profile) { // ไม่ให้ overwrite ถ้ามี profile ใน Redux แล้ว
      try {
        const parsedProfile = JSON.parse(storedProfile);
        dispatch(setCustomerInfo(parsedProfile)); // นำข้อมูลจาก localStorage มาใส่ใน Redux state
      } catch (error) {
        console.error("Failed to parse profile from localStorage:", error);
      }
    }

    // if (storedCustomerInfo && !customerinfo) {
    //   try {
    //     const parsedCustomerInfo = JSON.parse(storedCustomerInfo);
    //     dispatch(setCustomerInfo(parsedCustomerInfo));
    //   } catch (error) {
    //     console.error("Failed to parse customerinfo from localStorage:", error);
    //   }
    // }

    if (isCheckinActive || !profile) {
      dispatch(loginWithLine());
    }

    if (profile && !customerinfo) {
      dispatch(getuser({ profile }));
      console.log('customerinfo')
    }

  }, [dispatch, profile, isCheckinActive, customerinfo]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home onCheckin={handleCheckin} />} />
        <Route path="/point" element={<PonitPage />} />
        <Route path="/boxset" element={<BoxsetPage />} />
        <Route path="/privilege/:id" element={<PrivilegePage />} />
        <Route path="/coupon-history" element={<CouponHistory />} />
        <Route path="/checkin" element={<CheckInPage />} />
        <Route path="/checkin-photo" element={<CheckinPhoto />} />
        <Route path="/checkpoint" element={<CheckPoint />} />
      </Routes>
    </Router>
  );
}

export default App;
