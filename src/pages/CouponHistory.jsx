import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch , useSelector } from "react-redux";
import { allCoupon } from "../common/userSlice.js/userSlice";
import Navbar from "../components/Navbar";
import { IoChevronBack } from "react-icons/io5";

const CouponHistory = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { profile, customerinfo, isLoading, error} = useSelector((state) => state.user);
  const allCouponData =useSelector((state)=> state.user.allCouponsData)

  useEffect(()=>{
    if(customerinfo){
      dispatch(allCoupon({customerid:customerinfo?.customer_id}))
    }
  },[dispatch , customerinfo])

  // ✅ Mockup ข้อมูลคูปอง
  const [coupons, setCoupons] = useState([
    {
      id: 1,
      code: "MYBOX001",
      store: "ย่างเนย ลาดพร้าว",
      date: "2024-02-24 12:30",
      expireTime: new Date().getTime() + 48 * 60 * 60 * 1000, // 48 ชม. นับจากตอนที่แลก
      status: "active",
      logo: "images/logo.png",
      image: "images/iconboxset.png",
      title: "แลก 15,000 COIN",
      description: "รับ My Box Set หมูกะทะ ฟรี 1 ชิ้น",
    },
    {
      id: 2,
      code: "MYBOX002",
      store: "ชาบูชิ รัชดา",
      date: "2024-02-22 15:45",
      status: "used",
      logo: "images/logo.png",
      image: "images/iconboxset.png",
      title: "แลก 20,000 COIN",
      description: "รับ My Box Set พิเศษ ฟรี 1 ชิ้น",
    },
    {
      id: 3,
      code: "MYBOX003",
      store: "BBQ Plaza รัชดา",
      date: "2024-02-20 18:00",
      status: "expired",
      logo: "images/logo.png",
      image: "images/iconboxset.png",
      title: "แลก 25,000 COIN",
      description: "รับ My Box Set VIP ฟรี 1 ชิ้น",
    },
  ]);

  const countdownTimer = (expireTime) => {
    const now = new Date().getTime();
    const distance = expireTime - now;

    if (distance > 0) {
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      return `${hours} ชั่วโมง ${minutes} นาที`;
    } else {
      return "หมดอายุแล้ว";
    }
  };

  // ✅ อัปเดตเวลาถอยหลังทุกๆ วินาที
  useEffect(() => {
    const interval = setInterval(() => {
      setCoupons((prevCoupons) =>
        prevCoupons.map((coupon) =>
          coupon.status === "active"
            ? { ...coupon, remainingTime: countdownTimer(coupon.expireTime) }
            : coupon
        )
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="bg-white w-full flex items-center justify-between px-4 py-2 shadow-md">
        <button onClick={() => navigate(-1)} className="flex items-center text-black">
          <IoChevronBack className="text-xl" />
        </button>
        <h2 className="text-center text-base font-semibold flex-1">ประวัติคูปอง</h2>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {allCouponData.length > 0 ? (
          allCouponData.map((coupon) => (
            <div
              key={coupon.id}
              className="relative flex items-center rounded-lg shadow-lg overflow-hidden 
                         bg-[url('images/pattern.png')] bg-cover bg-no-repeat bg-center  p-4"
            >
              {/* Overlay สีเทา เมื่อคูปองถูกใช้ หรือ หมดอายุ */}
              {coupon.status !== "active" && (
                <div className="absolute inset-0 bg-gray-400/50 flex items-center justify-center">
                  
                </div>
              )}

              <div className="flex justify-center items-center flex-[20%]">
                <img src={coupon.logo} alt="Logo" className="h-10 w-10 object-contain" />
              </div>
              <div className="flex justify-center items-center flex-[20%]">
                <img src={coupon.image} alt={coupon.title} className="h-28 object-contain" />
              </div>

              <div className="flex-[80%] pl-4 leading-[1.5]">
                <h2 className="text-base font-bold text-black">{coupon.title}</h2>
                <p className="text-black text-sm">{coupon.description}</p>
                <p className="text-black text-sm">ร้าน: {coupon.store}</p>
                <p className="text-gray-500 text-sm">แลกเมื่อ: {coupon.date}</p>
                <span className="text-black font-bold text-sm">
                    {coupon.status === "used" ? `ใช้สิทธิ์แล้ว ${coupon.code}` : coupon.status === "expired" ? "หมดอายุ" : ""}
                </span>


                {/* เวลาถอยหลังสำหรับคูปอง Active */}
                {coupon.status === "active" && (
                  <p className="text-red-500 text-xs mt-2">หมดอายุใน: {coupon.remainingTime}</p>
                )}
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 mt-6">ไม่มีประวัติคูปอง</p>
        )}
      </div>
    </div>
  );
};

export default CouponHistory;
