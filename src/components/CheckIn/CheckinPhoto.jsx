import React from 'react';
import { useLocation } from 'react-router-dom'; // import useLocation เพื่อรับข้อมูลจากหน้าอื่น
import { IoChevronBack } from "react-icons/io5";

const CheckinPhoto = () => {
  const location = useLocation(); // รับข้อมูลจากหน้า CheckInPage
  const { store, branch } = location.state || {}; // ดึงข้อมูลร้านและสาขา

  return (
    
    <div className="checkin-container p-6 flex flex-col items-center">
      <img src="/images/top.png" alt="Top Banner" className="fixed-top" />
      <div className="branch-box">
        <div className="logo-container">
          <img src="/images/LogoMymap.png" alt="Logo" className="logo" />
        </div>
        <div className="bg-gray-300 w-full flex items-center justify-between px-4 py-2 shadow-md p-0">
          <button onClick={() => navigate(-1)} className="flex items-center text-black">
              <IoChevronBack className="text-xl" />
          </button>
                  <h2 className="text-center text-base font-semibold flex-1">รายละเอียดคูปอง</h2>
            </div>
      <p className="bg-gray-300 w-full flex items-center justify-between px-4 py-2 shadow-md p-0">ร้าน: {store}</p>
      <p >สาขา: {branch}</p>
      <p>กรุณาอัปโหลดภาพถ่ายเพื่อเสร็จสิ้นการเช็คอิน</p>
      </div>

      {/* เพิ่มฟอร์มสำหรับการอัปโหลดภาพถ่าย */}
    </div>
  );
};

export default CheckinPhoto;
