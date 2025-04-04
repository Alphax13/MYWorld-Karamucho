import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LuUserPen } from "react-icons/lu";
import { GrMapLocation } from "react-icons/gr";
import { RiCoupon3Line } from "react-icons/ri";
import { PiCoinsDuotone } from "react-icons/pi";
import { RiMapPinTimeLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { loginWithLine , getuser } from "../../common/userSlice.js/userSlice";

const MobileMenu = ({ onCheckin }) => {
  const dispatch = useDispatch();
  const { profile, customerinfo } = useSelector((state) => state.user);
  const [active, setActive] = useState(0);
  const navigate = useNavigate();

  const handleNavigate = (page) => {
    setActive(page);
  
    if (!profile) {
      onCheckin(true);
      switch (page) {
        case 1:
          navigate(`?page=RegisterEvent`);
          break;
        case 2:
          navigate(`?page=CheckPoint`);
          break;
        case 3:
          navigate(`?page=point`);
          break;
        case 5:
          navigate(`?page=CheckPoint`);
          break;
        default:
          break;
      }
    } else if (customerinfo && (!customerinfo?.phone || !customerinfo?.first_name)) {
      navigate("/RegisterEvent");
    } else {
      switch (page) {
        case 1:
          navigate("/RegisterEvent");
          break;
        case 2:
          navigate("/checkin");
          break;
        case 3:
          navigate("/point");
          break;
        case 4:
          window.location.href = "https://myworld-virtual-store.com/";
          break;
        case 5:
          navigate("/CheckPoint");
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
        onClick={() => handleNavigate(1)}
      >
        <span className="text-lg"><LuUserPen /></span>
        <span className="text-[13px] text-black font-bold">สมัครสมาชิก</span>
      </button>

      <button
        className={`flex flex-col items-center justify-center rounded-lg border-2 border-[#28B7E1] py-3 flex-1 ${active === 2 ? "bg-[#28B7E1] text-white font-bold" : "text-[#28B7E1]"}`}
        onClick={() => handleNavigate(2)}
      >
        <span className="text-lg"><GrMapLocation /></span>
        <span className="text-[13px] text-black font-bold">Check-in</span>
      </button>

      <button
        className={`flex flex-col items-center justify-center rounded-lg border-2 border-[#28B7E1] py-3 flex-1 ${active === 3 ? "bg-[#28B7E1] text-white font-bold" : "text-[#28B7E1]"}`}
        onClick={() => handleNavigate(3)}
      >
        <span className="text-lg"><RiCoupon3Line /></span>
        <span className="text-[13px] text-black font-bold">คูปอง</span>
      </button>

      <button
        className={`flex flex-col items-center justify-center rounded-lg border-2 border-[#28B7E1] py-3 flex-1 ${active === 4 ? "bg-[#28B7E1] text-white font-bold" : "text-[#28B7E1]"}`}
        onClick={() => handleNavigate(4)}
      >
        <span className="text-lg"><PiCoinsDuotone /></span>
        <span className="text-[13px] text-black font-bold">ล่า COINS</span>
      </button>
      <button
        className={`flex flex-col items-center justify-center rounded-lg border-2 border-[#28B7E1] py-3 flex-1 ${active === 5 ? "bg-[#28B7E1] text-white font-bold" : "text-[#28B7E1]"}`}
        onClick={() => handleNavigate(5)}
      >
        <span className="text-lg"><RiMapPinTimeLine /></span>
        <span className="text-[13px] text-black font-bold">ประวัติ <br/> Check-in</span>
      </button>
    </div>
  );
};

export default MobileMenu;
