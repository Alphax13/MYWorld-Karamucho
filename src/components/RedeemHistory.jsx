import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const RedeemHistory = () => {
  const navigate = useNavigate();

  // ✅ Mockup ข้อมูลคูปอง
  const [coupons, setCoupons] = useState([
    {
      id: 2,
      code: "MYBOX002",
      store: "ชาบูชิ รัชดา",
      date: "2024-02-22 15:45",
      status: "used",
      logo: "/images/logo.png",
      image: "/images/iconboxset.png",
      title: "แลก 20,000 COIN",
      description: "รับ My Box Set พิเศษ ฟรี 1 ชิ้น",
    },
    {
      id: 3,
      code: "MYBOX003",
      store: "BBQ Plaza รัชดา",
      date: "2024-02-20 18:00",
      status: "expired",
      logo: "/images/logo.png",
      image: "/images/iconboxset.png",
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
    <div className=" bg-gray-100/25">

      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {coupons.length > 0 ? (
          coupons.map((coupon) => (
            <div
            key={coupon.id}
            className="relative flex items-center rounded-lg shadow-lg overflow-hidden 
                       bg-[url('/images/pattern.png')] bg-cover bg-no-repeat bg-center"
          >
            {/* Overlay สีเทา เมื่อคูปองถูกใช้ หรือ หมดอายุ */}
            {coupon.status !== "active" && (
              <div className="absolute inset-0 bg-gray-400/50 flex items-center justify-center">
                
              </div>
            )}

            <div className="flex justify-center items-center flex-[30%]">
              <img src={coupon.logo} alt="Logo" className="h-10 w-10 object-contain" />
            </div>
            <div className="flex justify-center items-center flex-[40%]">
              <img src={coupon.image} alt={coupon.title} className="h-28 object-contain" />
            </div>

            <div className="flex-[80%] pl-4">
              <h2 className="text-base font-simibold text-black">{coupon.title}</h2>
              <p className="text-black text-sm">{coupon.description}</p>
              <p className="text-black text-xs">ร้าน: {coupon.store}</p>
              <p className="text-gray-500 text-xs">แลกเมื่อ: {coupon.date}</p>
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

export default RedeemHistory;
