import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateinfo } from "../common/userSlice.js/userSlice";
import { useNavigate , useLocation } from "react-router-dom";
import { getuser } from "../common/userSlice.js/userSlice";

function RegisterEvent() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { profile, customerinfo, isLoading, error } = useSelector(
    (state) => state.user
  );

  useEffect(() => {
    if (!customerinfo) {
      dispatch(getuser({ profile }));
    }
    if (customerinfo) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        customer_id: customerinfo.customer_id || "",
      }));
    }
  }, [dispatch, customerinfo, profile]);

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
  const [modalMessage, setModalMessage] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

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

  console.log(location.state?.from)

  const handleSubmit = async () => {
    if (validateForm()) {
      setLoading(true);
      try {
        const response = await dispatch(updateinfo(formData));
        setLoading(false);

        if (response?.payload.message === "Already register phone number") {
          // Show modal with the message "Already register phone number"
          setModalMessage("ท่านได้ลงทะเบียนไปแล้ว");
          setModalVisible(true);
         setTimeout(() => navigate(location.state?.from || -1), 2000); // Redirect to the previous page after 2 seconds
        } else if (response?.payload) {
          // Show modal with success message
          setModalMessage("ลงทะเบียนสำเร็จ");
          setModalVisible(true);
         setTimeout(() => navigate(location.state?.from || -1), 2000); // Redirect to the previous page after 2 seconds
        } else {
          setModalMessage("เกิดข้อผิดพลาดในการบันทึกข้อมูล");
          setModalVisible(true);
        }
      } catch (error) {
        setLoading(false);
        setModalMessage("เกิดข้อผิดพลาดในการบันทึกข้อมูล");
        setModalVisible(true);
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  useEffect(() => {
    document.title = "Register";
  }, []);

  const iconsuccess = <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M29.998 53.998C36.3632 53.998 42.4677 51.4695 46.9686 46.9686C51.4695 42.4677 53.998 36.3632 53.998 29.998C53.998 23.6329 51.4695 17.5284 46.9686 13.0275C42.4677 8.52661 36.3632 5.99805 29.998 5.99805C23.6329 5.99805 17.5284 8.52661 13.0275 13.0275C8.52661 17.5284 5.99805 23.6329 5.99805 29.998C5.99805 36.3632 8.52661 42.4677 13.0275 46.9686C17.5284 51.4695 23.6329 53.998 29.998 53.998ZM41.119 26.119C41.6655 25.5532 41.9679 24.7954 41.9611 24.0088C41.9542 23.2223 41.6387 22.4698 41.0825 21.9136C40.5263 21.3574 39.7738 21.0419 38.9873 21.035C38.2007 21.0282 37.4429 21.3306 36.877 21.877L26.998 31.756L23.119 27.877C22.5532 27.3306 21.7954 27.0282 21.0088 27.035C20.2223 27.0419 19.4698 27.3574 18.9136 27.9136C18.3574 28.4698 18.0419 29.2223 18.035 30.0088C18.0282 30.7954 18.3306 31.5532 18.877 32.119L24.877 38.119C25.4396 38.6815 26.2026 38.9974 26.998 38.9974C27.7935 38.9974 28.5565 38.6815 29.119 38.119L41.119 26.119Z" fill="#05B917"/>
  </svg>
  ;

  return (
    <>
      <div className="min-h-screen m-0">
        <div className="w-full relative">
          <div className="absolute top-0 w-full max-h-[100%] md:max-h-[100px] lg:max-h-[150px] overflow-hidden">
            <img src="images/ripped.png" alt="Effect" className="w-full object-bottom" />
          </div>

          <div className="relative flex justify-between items-center px-6 py-5 pt-10">
            <img src="images/logo.png" alt="Left Logo" className="h-12 w-auto cursor-pointer z-[65]" />
          </div>
        </div>

        {/* Modal */}
        {modalVisible && (
          <div className="modal-overlay fixed inset-0 bg-gray-500/50 flex items-center justify-center z-61">
            <div className="modal-content bg-white p-6 rounded-lg shadow-lg w-4/5 max-w-md border-b-[3px] grid justify-center items-center gap-2 border-[#28B7E1]">
              <div className="mx-auto">{iconsuccess}</div>
              <h2 className="text-center text-xl font-semibold mb-4">{modalMessage}</h2>
            </div>
          </div>
        )}

        <div className="modal-overlay fixed inset-0 bg-gray-500/50 flex items-center justify-center z-60">
          <div className="modal-content bg-white p-6 rounded-lg shadow-lg w-4/5 max-w-md border-b-[3px] border-[#28B7E1]">
            <h2 className="text-center text-xl font-semibold mb-4">
              ลงทะเบียนครั้งแรก รับเลย <br /> 5,000 Point 🎉
            </h2>
            <form>
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

              <div className="flex justify-center">
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
      </div>
    </>
  );
}

export default RegisterEvent;
