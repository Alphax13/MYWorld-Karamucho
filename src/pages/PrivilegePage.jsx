import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar2 from "../components/Navbar2";
import { IoChevronBack } from "react-icons/io5";
import { usecoupon } from "../common/userSlice.js/userSlice";  // Import usecoupon action

const PrivilegePage = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { profile, customerinfo, isLoading, error} = useSelector((state) => state.user);
  const navigate = useNavigate();
  const product = location.state;

  console.log(product);

  useEffect(()=> {
    console.log(customerinfo);
  }, [customerinfo]);

  useEffect(() => {
    document.title = "MyPrivilege - MyMap ปิ้ง";
  }, []);

  const [redeemed, setRedeemed] = useState(product?.redeem_code);
  const [redeemCode, setRedeemCode] = useState(product?.redeem_code);
  const [showModal, setShowModal] = useState(false);
  const [isUsed, setIsUsed] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(null);

  const handleRedeem = () => {
    const generatedCode = `MYBOX${Math.floor(1000000000 + Math.random() * 9000000000)}`;
    setRedeemCode(generatedCode);
    setRedeemed(true);
  };

  const handleConfirm = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleUsePrivilege = async () => {
    try {
      const response = await dispatch(usecoupon({id:product.id}));

      if (response.payload) {
        setIsUsed(true);
        setShowModal(false);
      }
    } catch (error) {
      console.error("เกิดข้อผิดพลาดในการใช้สิทธิ์:", error);
      alert("เกิดข้อผิดพลาดในการใช้สิทธิ์ กรุณาลองใหม่อีกครั้ง");
    }
  };

  // ✅ ตั้งเวลานับถอยหลัง
  useEffect(() => {
    if (product?.expired_date) {
      const interval = setInterval(() => {
        const expiredDate = new Date(product?.expired_date).getTime();
        const now = new Date().getTime();
        const distance = expiredDate - now;

        if (distance <= 0) {
          clearInterval(interval);
          setTimeRemaining("หมดอายุ");
        } else {
          const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((distance % (1000 * 60)) / 1000);
          setTimeRemaining(`${hours}:${minutes}:${seconds}`);
        }
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [product?.expired_date]);

  if (!product) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <p className="text-gray-500 text-lg">ไม่พบข้อมูลสิทธิพิเศษ</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen m-0">
      <Navbar2 />

      <div className="bg-white w-full flex items-center justify-between px-4 py-2 shadow-md">
        <button onClick={() => navigate(-2)} className="flex items-center text-black">
          <IoChevronBack className="text-xl" />
        </button>
        <h2 className="text-center text-base font-semibold flex-1">รายละเอียดคูปอง</h2>
      </div>

      <div className="bg-[url('/images/paper2.png')] bg-cover bg-no-repeat p-6 flex justify-center items-center">
        <div className="shadow-md w-50 text-center border border-black m-4">
          <img src={'../images/mock.png'} alt={product?.selectedStore?.label} className="w-48 mx-auto" />
          <div className="bg-white m-0 p-1">
            <h2 className="text-xl font-bold text-gray-800 mt-3">{product?.selectedStore?.label}</h2>
            <p className="text-sm">{product?.selectedStore?.label}</p>
            <p className="text-xs mt-2">ปกติราคา {product.price} บาท</p>
          </div>
        </div>
      </div>

      <div className="p-6 text-left">
        <p className="text-black text-2xl">{product?.selectedStore?.label}</p>
        <p className="text-black text-lg">รายละเอียด</p>
        <span className="text-left text-gray-500 text-sm">
          Lorem ipsum dolor sit amet consectetur. Rutrum ullamcorper integer ultrices quam pellentesque etiam dignissim tristique suscipit.
        </span>
      </div>

      {/* ✅ แสดงโค้ด Redeem หรือ ปุ่มรับสิทธิ์ */}
      <div className="p-6 text-center">
        {redeemed ? (
          <div className="relative p-2">
            {/* ✅ ลายน้ำ "ใช้สิทธิ์แล้ว" (แสดงทับรหัส Redeem) */}
            {isUsed && (
              <div className="absolute inset-0 flex items-center justify-center bg-red-500/50 text-red-500 font-bold text-xl h-20 -rotate-15 backdrop-blur-xs z-20">
                ใช้สิทธิ์แล้ว
              </div>
            )}

            <div className={`p-4 text-center rounded-xl relative ${isUsed ? "bg-gray-400/25" : "bg-red-400/25"}`}>
              <p className="text-base">รหัสการแลกรับส่วนลด</p>
              <h2 className="text-xl font-bold">{redeemCode}</h2>
            </div>

            {/* ✅ แสดงเวลา Countdown */}
            <p className="text-xs text-red-500 mt-2">หมดอายุในเวลา : {timeRemaining}</p>

            {/* ✅ ปุ่มกดยืนยันที่ร้านค้า (ซ่อนเมื่อใช้สิทธิ์แล้ว) */}
            {!isUsed && (
              <button
                className={`w-full  text-white py-2 mt-4 rounded-lg shadow-lg ${timeRemaining === "หมดอายุ" ? 'bg-gray-300' : 'bg-[#28B7E1]'}`}
                onClick={handleConfirm} disabled={timeRemaining === "หมดอายุ"}
              >
                กดยืนยันที่ร้านค้า
              </button>
            )}

            <p className="text-sm text-gray-500 mt-3">
              แนะนำให้กดรับสิทธิ์เมื่ออยู่ที่ร้านแล้ว เพื่อป้องกันไม่ให้เสียสิทธิ์
              สามารถดูคูปองได้ที่เมนู{" "}
              <span className="text-blue-500 font-semibold cursor-pointer">คูปองของฉัน</span>
            </p>
          </div>
        ) : (
          <div>
            <p className="text-black text-xl font-bold">สิทธิ์คงเหลือ 12 สิทธิ์</p>
            <p className="text-gray-500 text-xs pt-2">
              จาก 100/เดือน จากจำนวนร้านที่เข้าร่วมรายการทั้งหมด
            </p>
            <button
              className="w-52 bg-[#28B7E1] text-white py-2 mt-4 rounded-lg shadow-lg"
              onClick={handleRedeem}
            >
              รับสิทธิ์
            </button>
            <p className="text-red-500 text-base pt-2">(เมื่อกดรับสิทธิ์ คูปองจะมีอายุ 48 ชั่วโมง)</p>
          </div>
        )}
      </div>

      {/* ✅ Modal ยืนยันสิทธิ์ */}
      {showModal && (
        <div className="fixed inset-0 bg-black/25 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80 text-center">
            <h2 className="text-lg font-bold text-black">ยืนยันรับสิทธิ์หรือไม่ ?</h2>
            <p className="text-sm text-gray-500 mt-2">
              แนะนำให้กดรับสิทธิ์เมื่ออยู่ที่ร้านแล้ว เพื่อป้องกันไม่ให้เสียสิทธิ์
              เนื่องจากรหัสมีอายุจำกัด
            </p>
            <div className="flex justify-between mt-4">
              <button
                className="w-[45%] py-2 border border-gray-400 text-gray-600 rounded-lg"
                onClick={handleCloseModal}
              >
                ยกเลิก
              </button>
              <button
                className="w-[45%] bg-[#28B7E1] text-white py-2 rounded-lg"
                onClick={handleUsePrivilege}
              >
                ยืนยัน
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PrivilegePage;
