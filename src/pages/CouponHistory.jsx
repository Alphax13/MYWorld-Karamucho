import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { allCoupon , getuser } from "../common/userSlice.js/userSlice";
import Navbar from "../components/Navbar";
import { IoChevronBack } from "react-icons/io5";

const CouponHistory = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { profile, customerinfo, isLoading, error } = useSelector((state) => state.user);
  const allCouponData = useSelector((state) => state.user.allCouponsData);

  useEffect(() => {
        if(!profile){
          navigate('/point');
        }
        if (!customerinfo) {
          dispatch(getuser({ profile }));
        }else if (!customerinfo?.first_name){
          navigate('/RegisterEvent', { state: { from: '/coupon-history' } });
        }
        if (customerinfo) {
          dispatch(allCoupon({ customerid: customerinfo?.customer_id }));
        }
      }, [dispatch, customerinfo, profile]);

    useEffect(() => {
      document.title = "MyCouponHistory - MyMap ปิ้ง";
    }, []);
    console.log(profile ,customerinfo)

  // ฟังก์ชันที่ใช้ในการนับถอยหลัง
  const countdownTimer = (expireTime) => {
    const now = new Date().getTime();
    const distance = expireTime - now;

    if (distance > 0) {
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      return `${hours} ชั่วโมง ${minutes} นาที ${seconds} วินาที`;
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
            ? { ...coupon, remainingTime: countdownTimer(new Date(coupon.expired_date).getTime()) }
            : coupon
        )
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // ฟังก์ชันแปลงเวลาเป็นเวลาของไทย
  const formatDateToThai = (dateString) => {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      timeZone: "Asia/Bangkok", // ใช้เวลาในโซนกรุงเทพฯ (Asia/Bangkok)
    };
    const date = new Date(dateString);
    return date.toLocaleString("th-TH", options);
  };

  // ฟังก์ชันตรวจสอบคูปองหมดอายุหรือไม่
  const isCouponExpired = (expiredDate) => {
    const now = new Date().getTime();
    const expireTime = new Date(expiredDate).getTime();
    return expireTime < now;
  };

  // ฟังก์ชันสำหรับการคลิกคูปองและนำข้อมูลไปยังหน้า Privilege
  const handleCouponClick = (coupon) => {
    const redeemData = {
      redeem_code: coupon.redeem_code,
      expired_date: coupon.expired_date,
      id: coupon.id,
      selectedStore:{
        label:coupon.coupon?.name,
      }
    };

    navigate(`/privilege/${coupon.id}`, { state: redeemData });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="bg-white w-full flex items-center justify-between px-4 py-2 shadow-md">
        <button onClick={() => navigate('/point')} className="flex items-center text-black">
          <IoChevronBack className="text-xl" />
        </button>
        <h2 className="text-center text-base font-semibold flex-1">ประวัติคูปอง</h2>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {allCouponData.length > 0 ? (
        allCouponData
          .filter((coupon) => coupon.is_used === true || isCouponExpired(coupon.expired_date)) // กรองเฉพาะคูปองที่ใช้แล้วหรือหมดอายุ
          .map((coupon) => {
            const isExpired = isCouponExpired(coupon.expired_date);

            return (
              <div
                key={coupon.id}
                className="relative flex items-center rounded-lg shadow-lg overflow-hidden 
                         bg-[url('/images/pattern.png')] bg-cover bg-no-repeat bg-center  p-4"
                onClick={() => coupon.is_used === true || isExpired ? '' : handleCouponClick(coupon)} // เมื่อคลิกคูปอง
              >
                {(coupon.is_used === true || isExpired) && (
                  <div className="absolute inset-0 bg-gray-400/50 flex items-center justify-center">
                    {/* <span className="text-white font-bold">หมดอายุหรือยังไม่ได้ใช้</span> */}
                  </div>
                )}

                <div className="flex justify-center items-center flex-[30%]">
                  <img src="images/promotioncard.png" alt={coupon.title} className="h-28 object-contain" />
                </div>

                <div className="h-20 border-l border-black"></div>

                <div className="flex-[90%] pl-4 leading-[1.5]">
                  <h2 className="text-base font-bold text-black">{coupon.coupon?.name}</h2>
                  <p className="text-black text-sm">{coupon.coupon?.detail}</p>
                  <p className="text-black text-sm">ร้าน: {coupon.restaurant?.name}</p>
                  <p className="text-gray-500 text-sm">แลกเมื่อ: {formatDateToThai(coupon.created_at)}</p>
                  <p className="text-gray-500 text-sm">เหลือราคา 100 บาท</p> 
                  <span className="text-red-500 font-bold text-sm">
                    {/* แสดงข้อความตามสถานะของคูปอง */}
                    {coupon.is_used === true
                      ? `ใช้สิทธิ์แล้ว ${coupon.redeem_code}`
                      : isExpired
                      ? "หมดอายุ"
                      : ""}
                  </span>

                  {/* เวลาถอยหลังสำหรับคูปอง Active */}
                  {coupon.status === "active" && (
                    <p className="text-red-500 text-xs mt-2">หมดอายุใน: {coupon.remainingTime}</p>
                  )}
                </div>
              </div>
            );
          })
        ) : (
          <p className="text-center text-gray-500 mt-6">ไม่มีประวัติคูปอง</p>
        )}
      </div>
    </div>
  );
};

export default CouponHistory;
