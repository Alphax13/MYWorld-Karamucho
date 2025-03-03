import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getrestaurant, Redeemcoupon } from "../common/userSlice.js/userSlice";

const BoxCard = ({ selectedStore, selectedBranch, couponId }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { profile, customerinfo } = useSelector((state) => state.user);
  const [showModal, setShowModal] = useState(false);

  // State for form data
  const [formData, setFormData] = useState({
    customer_id: customerinfo?.customer_id || "",
    coupon_id: couponId[0] || "",
    branch_id: selectedBranch?.value || "",  // Ensure it defaults to empty string
    restaurant_id: selectedStore?.value || "",  // Ensure it defaults to empty string
  });

  console.log(formData);

  // Effect to update formData when selectedStore or selectedBranch changes
  useEffect(() => {
    if (selectedStore && selectedBranch) {
      setFormData({
        customer_id: customerinfo?.customer_id || "",
        coupon_id: couponId[0] || "",
        branch_id: selectedBranch?.value || "",
        restaurant_id: selectedStore?.value || "",
      });
    }
  }, [selectedStore, selectedBranch, customerinfo, couponId]);
  useEffect(() => {
    dispatch(getrestaurant());
  }, [dispatch]);

  const handleRedeem = () => {
    setShowModal(true); // แสดง Modal เมื่อผู้ใช้กดปุ่มแลกรางวัล
  };

  const handleCloseModal = () => {
    setShowModal(false); // ปิด Modal เมื่อผู้ใช้กด "ยกเลิก"
  };

  const handleUsePrivilege = async () => {
    try {
      // ส่งข้อมูล formData ไปยัง action Redeemcoupon
      const response = await dispatch(Redeemcoupon(formData));
      
      // ตรวจสอบผลลัพธ์จาก response
      if (response.payload?.id) {
        const redeemData = {
          redeem_code: response.payload.redeem_code,
          expired_date: response.payload.expired_date,
          id:response.payload.id,
          selectedStore,
        };

        // นำข้อมูลไปที่หน้า /privilege
        navigate(`/privilege/${selectedStore?.value}`, { state: redeemData });
        setShowModal(false); // ปิด Modal หลังจากการแลกรางวัลสำเร็จ
      } else {
        alert("เกิดข้อผิดพลาดในการแลกรางวัล กรุณาลองใหม่อีกครั้ง");
      }
    } catch (error) {
      console.error("เกิดข้อผิดพลาดในการแลกรางวัล:", error);
      alert("เกิดข้อผิดพลาดในการแลกรางวัล กรุณาลองใหม่อีกครั้ง");
    }
  };

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {selectedStore && selectedBranch ? (
        <div
          className="flex items-center rounded-lg shadow-lg relative overflow-hidden bg-[url('images/pattern.png')] bg-cover bg-no-repeat bg-center"
        >
          <div className="flex justify-center items-center flex-[20%]">
            <img src="images/logo.png" alt="Logo" className="h-10 w-10 object-contain" />
          </div>

          <div className="flex justify-center items-center flex-[20%]">
            <img
              src={selectedStore?.image_url ? selectedStore?.image_url : 'images/mock.png'}
              alt={selectedStore?.label}
              className="h-28 object-contain"
            />
          </div>

          <div
            className="flex-[65%] pl-4 cursor-pointer"
            onClick={handleRedeem} // เปลี่ยน onClick ให้เรียก handleRedeem
          >
            <h2 className="text-lg font-bold text-black">ร้าน {selectedStore?.label}</h2>
            <p className="text-black text-sm">สาขา {selectedBranch?.label}</p>
          </div>
        </div>
      ) : (
        <p className="text-center text-gray-500 col-span-3">กรุณาเลือกร้านค้า</p>
      )}

      {/* แสดง Modal เมื่อ showModal เป็น true */}
      {showModal && (
        <div className="fixed inset-0 bg-black/25 flex justify-center items-center z-20">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80 text-center">
            <h2 className="text-lg font-bold text-black">ยืนยันการแลกหรือไม่ ?</h2>
            <div className="flex justify-between mt-4">
              <button
                className="w-[45%] py-2 border border-gray-400 text-gray-600 rounded-lg"
                onClick={handleCloseModal} // ปิด Modal
              >
                ยกเลิก
              </button>
              <button 
                className="w-[45%] bg-[#28B7E1] text-white py-2 rounded-lg"
                onClick={handleUsePrivilege} // ยืนยันแลกรางวัล
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

export default BoxCard;
