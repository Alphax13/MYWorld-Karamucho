import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateinfo } from "../common/userSlice.js/userSlice";
import { IoGiftSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

function RegisterEvent() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { profile, customerinfo, isLoading, error } = useSelector(
    (state) => state.user
  );

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [formData, setFormData] = useState({
    customer_id: customerinfo?.customer_id || "",
    phone: "",
    first_name: "",
    last_name: "",
    email: "",
    birthdate: "",
  });

  const [errors, setErrors] = useState({
    phone: "",
    first_name: "",
    last_name: "",
    email: "",
    birthdate: "",
  });

  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    let valid = true;
    const newErrors = {};

    if (!formData.phone) {
      newErrors.phone = "กรุณากรอกเบอร์โทรศัพท์";
      valid = false;
    }

    if (!formData.first_name) {
      newErrors.first_name = "กรุณากรอกชื่อ";
      valid = false;
    }

    if (!formData.last_name) {
      newErrors.last_name = "กรุณากรอกนามสกุล";
      valid = false;
    }

    if (!formData.email) {
      newErrors.email = "กรุณากรอกอีเมล";
      valid = false;
    }

    if (!formData.birthdate) {
      newErrors.birthdate = "กรุณากรอกวันเกิด";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async () => {
    if (validateForm()) {
      setLoading(true);

      try {
        const response = await dispatch(updateinfo(formData));
        if (response?.payload) {
          setIsModalVisible(false);
          setLoading(false);
          navigate("//");
        } else {
          setLoading(false);
          setErrorMessage("เกิดข้อผิดพลาดในการบันทึกข้อมูล");
        }
      } catch (error) {
        setLoading(false);
        setErrorMessage("เกิดข้อผิดพลาดในการบันทึกข้อมูล");
      }
    }
  };

  useEffect(() => {
    if (customerinfo?.phone === null || customerinfo?.phone === "") {
      setIsModalVisible(true);
    } else {
      setIsModalVisible(false);
      navigate("//");
    }
  }, [customerinfo]);
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  useEffect(() => {
    document.title = "Register- MyMap ปิ้ง";
  }, []);

  return (<>
<div className="min-h-screen m-0">
    <div className="w-full relative">
      {/* ✅ Effect Background */}
      <div className="absolute top-0 w-full max-h-[100%] md:max-h-[100px] lg:max-h-[150px] overflow-hidden">
        <img src="images/ripped.png" alt="Effect" className="w-full object-bottom" />
      </div>

      {/* ✅ Navbar Content */}
      <div className="relative flex justify-between items-center px-6 py-5 pt-10">
        {/* ✅ LOGO (คลิกเพื่อกลับ Home) */}
        <img
          src="images/logo.png"
          alt="Left Logo"
          className="h-12 w-auto cursor-pointer z-[65]" 
        />

        
      </div>
    </div>
    {isModalVisible && (
      <div className="modal-overlay fixed inset-0 bg-gray-500/50 flex items-center justify-center z-60">
        <div className="modal-content bg-white p-6 rounded-lg shadow-lg w-4/5 max-w-md border-b-[3px] border-[#28B7E1]">
          <h2 className="text-center text-xl font-semibold mb-4">
            ลงทะเบียนครั้งแรก รับเลย <br /> 5,000 Point 🎉
          </h2>
          <form>
            {/* ฟอร์มข้อมูล */}
            <div className="mb-3">
              <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">
                ชื่อ
              </label>
              <input
                type="text"
                id="first_name"
                name="first_name"
                value={formData.first_name}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                required
              />
              {errors.first_name && <span className="text-red-500 text-xs">{errors.first_name}</span>}
            </div>
            <div className="mb-3">
              <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">
                นามสกุล
              </label>
              <input
                type="text"
                id="last_name"
                name="last_name"
                value={formData.last_name}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                required
              />
              {errors.last_name && <span className="text-red-500 text-xs">{errors.last_name}</span>}
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                อีเมล
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                required
              />
              {errors.email && <span className="text-red-500 text-xs">{errors.email}</span>}
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                เบอร์โทรศัพท์
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={formData.phone}
                maxLength={10}
                onChange={(e) => {
                  const value = e.target.value;
                  if (/^[0-9]*$/.test(value)) {
                    setFormData({ ...formData, phone: value });
                  }
                }}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                required
              />
              {errors.phone && <span className="text-red-500 text-xs">{errors.phone}</span>}
            </div>
            <div className="mb-3">
              <label htmlFor="birthdate" className="block text-sm font-medium text-gray-700">
                วันเกิด
              </label>
              <input
                type="date"
                id="birthdate"
                name="birthdate"
                value={formData.birthdate}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                required
              />
              {errors.birthdate && <span className="text-red-500 text-xs">{errors.birthdate}</span>}
            </div>
            <div className="flex justify-between">
              <button
                type="button"
                onClick={() => navigate("//")}
                className="bg-gray-300 text-black px-4 py-2 rounded-md"
              >
                ยกเลิก
              </button>
              <button
                type="button"
                onClick={handleSubmit}
                className="bg-[#28B7E1] text-white px-4 py-2 rounded-md"
                disabled={loading}
              >
                {loading ? "กำลังบันทึก..." : "บันทึก"}
              </button>
            </div>
          </form>
        </div>
      </div>
    )}
</div>
  </>); 
}
export default RegisterEvent