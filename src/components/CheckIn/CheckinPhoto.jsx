import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'; 
import { useDispatch , useSelector } from 'react-redux';
import { upload } from '../../common/userSlice.js/userSlice';
import { IoChevronBack } from "react-icons/io5";
import { HiOutlinePhoto } from "react-icons/hi2";
import { FaLocationDot } from "react-icons/fa6";
import moment from "moment"; // วันที่และเวลา

const CheckinPhoto = () => {
  const location = useLocation(); 
  const dispatch = useDispatch()
  const navigate = useNavigate(); 
  const { store, branch, img } = location.state || {}; 

  const [selectedImage, setSelectedImage] = useState(null); 
  const [selectedImage2, setSelectedImage2] = useState(null); 
  const [modalConfirm, setModalConfirm] = useState(false); // Modal ยืนยัน
  const [modalSuccess, setModalSuccess] = useState(false); // Modal แสดงผล Check-in

  const handleImageChange = (e) => {
    const file = e.target.files[0]; 
    if (file && file.type.startsWith('image/')) { 
      setSelectedImage(URL.createObjectURL(file)); 
      setSelectedImage2(file); 
    } else {
      alert("กรุณาเลือกไฟล์ภาพเท่านั้น");
    }
  };

  console.log(selectedImage2)

  const handleCheckin = () => {
    setModalConfirm(true); // เปิด Modal ยืนยัน Check-in
    
  };

  const handleConfirmCheckin = () => {
    const formData = new FormData();
    formData.append('file', selectedImage2); // ไฟล์รูปภาพ
    // formData.append('customer_id', 'Ue4e4d43f756e05e22ee71f09d5ff65cd');
    // formData.append('restaurant_id', mockBranches[selectedStore]?.id);
    // formData.append('branch_id', branchdata.find((branch) => branch.name === selectedBranch)?.branch_id);

    // เรียก dispatch ของ action upload
    dispatch(upload(formData));
    setModalConfirm(false); // ปิด Modal ยืนยัน
    setModalSuccess(true); // เปิด Modal แสดงผล Check-in
  };

  const handleCloseModal = () => {
    setModalConfirm(false); 
    setModalSuccess(false);
    navigate('/checkpoint'); 
  };
  
  const currentDate = moment().format("DD MMM YYYY เวลา HH:mm น."); 

  return (
    <div className="checkin-container p-6 flex flex-col items-center">
      <img src="/images/top.png" alt="Top Banner" className="fixed-top" />

      <div className="branch-box z-10">
        <div className="logo-container">
          <img src="/images/LogoMymap.png" alt="Logo" className="logo" />
        </div>
        
        <div className="bg-gray-300 w-full flex items-center justify-between px-4 py-2 shadow-md">
          <button onClick={() => navigate(-1)} className="flex items-center text-black">
            <IoChevronBack className="text-xl" />
          </button>
          <h2 className="text-center text-base font-semibold flex-1">รายละเอียด</h2>
        </div>

        {/* แสดงภาพที่ได้รับจาก state */}
        {img && <img src={img} alt={`${store} ${branch}`} className="w-[50%]" />}

        <p className="bg-gray-300 w-full flex items-center justify-between px-4 py-2 shadow-md">{store} {branch}</p>

        {/* ส่วนสำหรับการอัปโหลดรูปภาพ */}
        <div className="flex flex-col items-center m-4 bg-[#28B7E1]/10 w-[85%]">
          <label htmlFor="doc" className="flex items-center rounded-lg border border-[#28B7E1] border-dashed cursor-pointer w-full">
            {!selectedImage && (
              <div className="space-y-2 w-full flex flex-col items-center justify-center p-5">
                <HiOutlinePhoto className="text-6xl text-[#28B7E1]" />
                <span className="text-sm text-gray-500">ถ่าย/อัปโหลดรูป เพื่อ Check-in</span>
              </div>
            )}
            {selectedImage && (
              <img src={selectedImage} alt="Selected Preview" className="w-[100%] h-50 object-cover rounded-md" />
            )}
            <input 
              type="file" 
              id="doc" 
              name="doc" 
              accept="image/*" 
              hidden 
              onChange={handleImageChange}
            />
          </label>
        </div>

        <button 
          className="checkin-button w-full mb-5 bg-gradient-to-r from-[#004A5D] to-[#009BC3] text-white px-4 py-2 rounded-lg border border-[#28B7E1] shadow-md hover:from-[#003D4C] hover:to-[#008BB0] transition duration-300"
          onClick={handleCheckin} 
        >
          Check-in
        </button>
      </div>

      {/* Modal ยืนยัน Check-in */}
      {modalConfirm && (
        <div className="modal-overlay fixed inset-0 bg-gray-500/50 bg-opacity-50 flex items-center justify-center z-60">
          <div className="modal-content bg-white p-6 rounded-lg shadow-lg w-4/5 max-w-md">
            <h2 className="text-center text-xl font-semibold mb-4">ยืนยัน Check-in ใช่หรือไม่ ?</h2>
            <div className="flex justify-between mb-4">
              <button
                className="bg-white border border-black px-4 py-2 rounded-lg w-30 font-bold"
                onClick={handleCloseModal} 
              >
                ยกเลิก
              </button>
              <button
                className="bg-[#28B7E1] text-white px-4 py-2 rounded-lg w-30 font-bold"
                onClick={handleConfirmCheckin}
              >
                ยืนยัน
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal แสดงผลการ Check-in */}
      {modalSuccess && (
        <div className="modal-overlay fixed inset-0 bg-gray-500/50 bg-opacity-50 flex items-center justify-center z-50">
          <div className="modal-content bg-white p-6 rounded-lg shadow-lg w-4/5 max-w-md">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-[#00F508] flex items-center justify-center">
                <FaLocationDot className="text-5xl text-white" />
                  
              </div>
            </div>
            <h2 className="text-center text-xl font-semibold mb-2">Check-in แล้ว</h2>
            <p className="text-center mb-4">{currentDate}</p>
            <p className="text-center text-gray-600">{store} {branch}</p>
            <button
              className="bg-gray-300 px-4 py-2 rounded-lg w-full mt-4"
              onClick={handleCloseModal}
            >
              Close
            </button>
          </div>
        </div>
      )}

      <div className="absolute bottom-0 -translate-x-1/3 -translate-y-10 flex flex-col items-center">
        <img src="/images/element.png" alt="Extra Element" className="w-60 z-0" />
      </div>
      <div className="fixed-bottom w-full">
        <img src="/images/bottom.png" alt="Bottom" className="w-full z-50" />
      </div>
    </div>
  );
};

export default CheckinPhoto;
