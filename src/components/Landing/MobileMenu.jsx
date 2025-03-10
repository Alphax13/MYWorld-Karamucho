import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LuUserPen } from "react-icons/lu";
import { GrMapLocation } from "react-icons/gr";
import { RiCoupon3Line } from "react-icons/ri";
import { PiCoinsDuotone } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

const MobileMenu = ({ onCheckin }) => {
  const { profile, customerinfo } = useSelector((state) => state.user);
  const [active, setActive] = useState(0);
  const navigate = useNavigate();

  const handleNavigate = (page) => {
    // Set active state based on selected page
    setActive(page);

    // Navigate to the appropriate page based on profile and customerinfo
    if (!profile) {
      onCheckin(true);
    } else if (customerinfo && (customerinfo.first_name === null || customerinfo.first_name === "")) {
      navigate("/RegisterEvent");
    } else {
      switch (page) {
        case 1:
          navigate("/point");
          break;
        case 2:
          navigate("/CheckPoint");
          break;
        case 3:
          navigate("/coupon-history");
          break;
        case 4:
          window.open("https://myworld-virtual-store.com/", "_blank", "noopener noreferrer");
          break;
        default:
          break;
      }
    }
  };

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white shadow-lg rounded-lg flex md:hidden z-100">
      <button
        className={`flex flex-col items-center justify-center rounded-lg border-2 border-[#28B7E1] py-3 flex-1 ${active === 1 ? "bg-[#28B7E1] text-white font-bold" : "text-[#28B7E1]"}`}
        onClick={() => handleNavigate(1)} // Navigates to PointPage
      >
        <span className="text-lg"><LuUserPen /></span>
        <span className="text-sm text-black font-bold">สมัครสมาชิก</span>
      </button>

      <button
        className={`flex flex-col items-center justify-center rounded-lg border-2 border-[#28B7E1] py-3 flex-1 ${active === 2 ? "bg-[#28B7E1] text-white font-bold" : "text-[#28B7E1]"}`}
        onClick={() => handleNavigate(2)} // Navigates to CheckPoint
      >
        <span className="text-lg"><GrMapLocation /></span>
        <span className="text-sm text-black font-bold">Check-in</span>
      </button>

      <button
        className={`flex flex-col items-center justify-center rounded-lg border-2 border-[#28B7E1] py-3 flex-1 ${active === 3 ? "bg-[#28B7E1] text-white font-bold" : "text-[#28B7E1]"}`}
        onClick={() => handleNavigate(3)} // Navigates to CouponHistory
      >
        <span className="text-lg"><RiCoupon3Line /></span>
        <span className="text-sm text-black font-bold">คูปอง</span>
      </button>

      <button
        className={`flex flex-col items-center justify-center rounded-lg border-2 border-[#28B7E1] py-3 flex-1 ${active === 4 ? "bg-[#28B7E1] text-white font-bold" : "text-[#28B7E1]"}`}
        onClick={() => handleNavigate(4)} // Opens the external COINS link
      >
        <span className="text-lg"><PiCoinsDuotone /></span>
        <span className="text-sm text-black font-bold">ล่า COINS</span>
      </button>
    </div>
  );
};

export default MobileMenu;
