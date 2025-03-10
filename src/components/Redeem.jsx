import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { allCoupon } from "../common/userSlice.js/userSlice";
import Navbar from "../components/Navbar";
import { IoChevronBack } from "react-icons/io5";

const redeem = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { profile, customerinfo, isLoading, error } = useSelector((state) => state.user);
  const allCouponData = useSelector((state) => state.user.allCouponsData);

  // สร้าง state สำหรับเก็บข้อมูลคูปอง
  const [coupons, setCoupons] = useState([]);

  useEffect(() => {
    if (customerinfo) {
      dispatch(allCoupon({ customerid: customerinfo?.customer_id }));
    }
  }, [dispatch, customerinfo]);

  // ฟังก์ชันที่ใช้ในการนับถอยหลัง
  const countdownTimer = (expireTime) => {
    const now = new Date().getTime();
    const distance = expireTime - now;

    if (distance > 0) {
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      return `${hours}:${minutes}:${seconds}`;
    } else {
      return "หมดอายุแล้ว";
    }
  };

  // ✅ อัปเดตเวลาถอยหลังทุกๆ วินาที
  useEffect(() => {
    if (allCouponData.length > 0) {
      setCoupons(allCouponData);
    }

    const interval = setInterval(() => {
      setCoupons((prevCoupons) =>
        prevCoupons.map((coupon) =>
          coupon.is_used === false
            ? { ...coupon, remainingTime: countdownTimer(new Date(coupon.expired_date).getTime()) }
            : coupon
        )
      );
    }, 1000);

    return () => clearInterval(interval);
  }, [allCouponData]);

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
      selectedStore: {
        label: coupon.coupon?.name,
      }
    };

    navigate(`/privilege/${coupon.id}`, { state: redeemData });
  };

  return (
    <div className=" bg-gray-100 overflow-auto h-[50vh]">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 ">
        {coupons.length > 0 ? (
          coupons
            .filter((coupon) => coupon.is_used === false && !isCouponExpired(coupon.expired_date))
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
                  <div className="flex justify-center items-center flex-[45%]">
                    <img src="images/promotioncard.png" alt={coupon.title} className="h-28 object-contain" />
                  </div>

                  <div className="flex-[80%] pl-4 leading-[1.5]">
                    <h2 className="text-base font-bold text-black">{coupon.coupon?.name}</h2>
                    <p className="text-black text-sm">{coupon.coupon?.detail}</p>
                    <p className="text-black text-sm">ร้าน: {coupon.restaurant?.name}</p>
                    <p className="text-gray-500 text-sm">แลกเมื่อ: {formatDateToThai(coupon.created_at)}</p> {/* แปลงเวลาเป็นเวลาของไทย */}
                    <span className="text-black font-bold text-xs">
                      {coupon.is_used === true
                        ? `ใช้สิทธิ์แล้ว ${coupon.redeem_code}`
                        : isExpired
                          ? "หมดอายุ"
                          : `หมดอายุใน: ${coupon.remainingTime}`}
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

export default redeem;
