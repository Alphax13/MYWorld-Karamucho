import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { upload, checkin } from '../../common/userSlice.js/userSlice';
import { IoChevronBack } from "react-icons/io5";
import { HiOutlinePhoto } from "react-icons/hi2";
import { FaLocationDot } from "react-icons/fa6";
import moment from "moment"; // วันที่และเวลา

const CheckinPhoto = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const { store, branch, image_url } = location.state || {};
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedImage2, setSelectedImage2] = useState(null);
  const [modalConfirm, setModalConfirm] = useState(false); // Modal ยืนยัน
  const [modalSuccess, setModalSuccess] = useState(false); // Modal แสดงผล Check-in
  const [errorMessage, setErrorMessage] = useState(''); // Error message state
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    document.title = "Checkin Photo";
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      setSelectedImage(URL.createObjectURL(file));
      setSelectedImage2(file);
    } else {
      alert("กรุณาเลือกไฟล์ภาพเท่านั้น");
    }
  };


  console.log(location.state.store)

  const handleCheckin = () => {
    setModalConfirm(true); // เปิด Modal ยืนยัน Check-in
  };

  const handleConfirmCheckin = async () => {
    setIsSubmitting(true);
    const formData = new FormData();
    formData.append('file', selectedImage2);

    try {
      // Upload image
      const uploadResponse = await dispatch(upload(formData));
      if (uploadResponse && uploadResponse.payload.url) {
        // Once the image is uploaded, update the state with the URL
        const updatedLocationState = {
          ...location.state,
          image_url: uploadResponse.payload.url,
        };

        // Dispatch checkin action
        console.log(updatedLocationState)
        const checkinResponse = await dispatch(checkin(updatedLocationState));

        // Handle success or error from checkin
        if (checkinResponse.error) {
          if (checkinResponse.error.message === "You already check in") {
            setErrorMessage("ท่านได้เช็คอินร้านหรือสาขานี้ไปแล้ว");
            setModalConfirm(false);
            setModalSuccess(false);
          } else {
            setErrorMessage("ท่านได้เช็คอินร้านหรือสาขานี้ไปแล้ว");
            setModalConfirm(false);
            setModalSuccess(false);
          }
        } else {
          setModalConfirm(false);
          setModalSuccess(true);
        }
      }
    } catch (error) {
      setErrorMessage("เกิดข้อผิดพลาดในการอัปโหลดหรือเช็คอิน");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCloseModal = () => {
    setModalConfirm(false);
    setModalSuccess(false);
    navigate('/CheckPoint');
    setTimeout(() => {
      window.location.reload();
    }, 100);
  };
  const handleCloseModal2 = () => {
    setModalConfirm(false);
    setModalSuccess(false);
    navigate('/point');
    setTimeout(() => {
      window.location.reload();
    }, 100);
  };

  const currentDate = moment().format("DD MMM YYYY เวลา HH:mm น.");

  return (
    <div className="checkin-container p-6 flex flex-col items-center">
      <img src="images/top.png" alt="Top Banner" className="fixed-top" />

      <div className="branch-box z-10">
        <div className="logo-container2">
          <img src="images/LogoMymap.png" alt="Logo" className="logo" />
        </div>

        <div className="bg-gray-300 w-full flex items-center justify-between px-4 py-2 shadow-md">
          <button onClick={() => navigate(-1)} className="flex items-center text-black">
            <IoChevronBack className="text-xl" />
          </button>
          <h2 className="text-center text-base font-semibold flex-1">รายละเอียด</h2>
        </div>

        {/* แสดงภาพร้านจาก API */}
        {image_url && <img src={image_url} alt={`${store} ${branch}`} className="w-[50%] my-3 rounded-lg shadow-md" />}

        <p className="bg-gray-300 w-full flex items-center justify-between px-4 py-2 shadow-md">
          {store} - {branch}
        </p>
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

        {errorMessage && (
          <div className="text-red-500 text-sm mb-2">{errorMessage}</div>
        )}

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
            {isSubmitting && <p className='mx-auto text-center mb-2 text-red-400'>กรุณารอสักครู่ระบบกำลังตรวจสอบ</p>}
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
                disabled={isSubmitting}
              >
                {isSubmitting ? "กำลังบันทึก..." : "ยืนยัน"}
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
            <h2 className="text-center mb-2">ไปล่าแต้มรับ</h2>
            <div className="flex justify-center mb-1">
              <p className="text-center text-xl font-semibold">ส่วน</p>
              <p className="text-center text-xl font-semibold text-[#BD2A30]">ลด 100 บาท</p>
            </div>
            <button
              className="text-center my-1 p-3 w-full rounded-3xl bg-sky-500 shadow-md hover:bg-sky-700 text-white font-bold text-2xl"
              onClick={handleCloseModal2}
            >
              คลิกเลย
            </button>
            <button
              className="px-4 py-2 rounded-lg w-full"
              onClick={handleCloseModal}
            >
              ปิดหน้าต่าง
            </button>
          </div>
        </div>
      )}

      <div className="absolute bottom-0 -translate-x-1/3 -translate-y-10 flex flex-col items-center">
        <img src="images/element.png" alt="Extra Element" className="w-60 z-0" />
      </div>
      <div className="fixed-bottom w-full">
        <img src="images/bottom.png" alt="Bottom" className="w-full z-50" />
      </div>
    </div>
  );
};

export default CheckinPhoto;
