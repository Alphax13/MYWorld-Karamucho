import React,{ useState, useEffect } from "react";
import { useDispatch , useSelector } from "react-redux";
import { LuUserPen } from "react-icons/lu";
import { GrMapLocation } from "react-icons/gr";
import { RiCoupon3Line } from "react-icons/ri";
import { PiCoinsDuotone } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

const MobileMenu = () => {
  const { profile, customerinfo, isLoading, error } = useSelector((state) => state.user);
  const [active, setActive] = useState(0);
  const navigate = useNavigate();

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white shadow-lg rounded-lg flex md:hidden z-100">
      <button
        className={`flex flex-col items-center justify-center rounded-lg border-2 border-[#28B7E1] py-3 flex-1 ${active === 1 ? "bg-[#28B7E1] text-white font-bold" : "text-[#28B7E1]"
          }`}
        onClick={() => (customerinfo) && (customerinfo?.phone === null || customerinfo?.phone === "") ? navigate("/RegisterEvent") :navigate("/point")} // ไปหน้า PonitPage
      >
        <span className="text-lg"><LuUserPen /></span>
        <span className="text-sm text-black font-bold">สมัครสมาชิก</span>
      </button>

      <button
        className={`flex flex-col items-center justify-center rounded-lg border-2 border-[#28B7E1] py-3 flex-1 ${active === 2 ? "bg-[#28B7E1] text-white font-bold" : "text-[#28B7E1]"
          }`}
        onClick={() => navigate("/CheckPoint")}
      >
        <span className="text-lg"><GrMapLocation /></span>
        <span className="text-sm text-black font-bold">Check-in</span>
      </button>

      <button
        className={`flex flex-col items-center justify-center rounded-lg border-2 border-[#28B7E1] py-3 flex-1 ${active === 3 ? "bg-[#28B7E1] text-white font-bold" : "text-[#28B7E1]"
          }`}
        onClick={() => navigate("/coupon-history")}
      >
        <span className="text-lg"><RiCoupon3Line /></span>
        <span className="text-sm text-black font-bold">คูปอง</span>
      </button>

      <button
        className={`flex flex-col items-center justify-center rounded-lg border-2 border-[#28B7E1] py-3 flex-1 ${active === 4 ? "bg-[#28B7E1] text-white font-bold" : "text-[#28B7E1]"
          }`}
        onClick={() => window.open("https://myworld-virtual-store.com/", "_blank", "noopener noreferrer")}
      >
        <span className="text-lg"><PiCoinsDuotone /></span>
        <span className="text-sm text-black font-bold">ล่า COINS</span>
      </button>
    </div>
  );
};

export default MobileMenu;
