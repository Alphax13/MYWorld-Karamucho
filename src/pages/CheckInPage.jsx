import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getbranchrestaurant, checkin } from "../common/userSlice.js/userSlice";
import "./Checkin.css";

const mockBranches = {
  "Y.O.U หมูกระทะ": {
    branches: ["เขต พระโขนง", "เขต ราชเทวี"],
    img: "images/store.png",
    id: 1
  },
  "Your Camp": {
    branches: ["เขต ลาดพร้าว", "เขต พระนคร", "เขต บางนา"],
    img: "images/store.png",
    id: 2
  },
  "Everyday Mokata": {
    branches: ["เขต ปทุมวัน", "เขต ดินแดง"],
    img: "images/store.png",
    id: 3
  },
  "อุดมสุข หมูกระทะ": {
    branches: ["เขต ห้วยขวาง", "เขต วัฒนา"],
    img: "images/store.png",
    id: 4
  },
  "หมูกระทะ มหานคร": {
    branches: ["เขต บางกะปิ", "เขต จตุจักร"],
    img: "images/store.png",
    id: 5
  },
  "ทวีโชค หมูกระทะ": {
    branches: ["เขต สาทร", "เขต บางรัก"],
    img: "images/store.png",
    id: 6
  },
  "ม้วนไจ๋ หมูกระทะ": {
    branches: ["เขต ธนบุรี", "เขต บางแค"],
    img: "images/store.png",
    id: 7
  },
  "อาริยา หมูกระทะ": {
    branches: ["เขต ดอนเมือง", "เขต หลักสี่"],
    img: "images/store.png",
    id: 8
  },
  "71 หมูกระทะ": {
    branches: ["เขต บางซื่อ", "เขต คลองสาน"],
    img: "images/store.png",
    id: 9
  },
};

export default function CheckInPage() {
  const dispatch = useDispatch();
  const branchdata = useSelector((state) => state.user.getbranchrestaurantData);
  const { profile, customerinfo, isLoading, error } = useSelector((state) => state.user);
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedStore, setSelectedStore] = useState(location.state?.store || "");
  const [branches, setBranches] = useState([]);
  const [selectedBranch, setSelectedBranch] = useState("");
  const [storeImg, setStoreImg] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (selectedStore) {
      setBranches(mockBranches[selectedStore]?.branches || []);
      setStoreImg(mockBranches[selectedStore]?.img || "");
      dispatch(getbranchrestaurant({ restaurant_id: mockBranches[selectedStore]?.id }));
    }
  }, [selectedStore, dispatch]);

  const handleCheckin = async () => {
    const checkinData = {
      customer_id: customerinfo?.customer_id,
      restaurant_id: mockBranches[selectedStore]?.id,
      branch_id: branchdata.find((branch) => branch.name === selectedBranch)?.branch_id,
      image_url: storeImg,
    };
    
    console.log(checkinData);
    
    try {
      // Dispatch action to perform check-in
      const response = await dispatch(checkin(checkinData));
      
      // ตรวจสอบว่า response มาจาก dispatch หรือไม่
      if (response.payload && response.payload.success) {
        // หากการ check-in สำเร็จให้ไปยังหน้าต่อไป
        navigate("/checkin-photo", { state: checkinData });
      } else {
        // หากมีข้อผิดพลาดใน check-in
        setErrorMessage('ท่านได้เช็คอินร้านหรือสาขานี้ไปแล้ว'); // Set error message
      }
    } catch (error) {
      setErrorMessage("เกิดข้อผิดพลาดในการเช็คอิน กรุณาลองใหม่อีกครั้ง"); // Set error message
    }
  };


  return (
    <div className="checkin-container p-5 flex flex-col items-center">
      <img src="images/top.png" alt="Top Banner" className="fixed-top" />

      <div className="branch-box p-6 mt-10 z-100">
        <div className="logo-container">
          <img src="images/LogoMymap.png" alt="Logo" className="logo" />
        </div>

        {/* Dropdown เลือกร้าน */}
        <select
          className="w-60 p-2 border border-[#24B6E0] rounded-sm mb-3 bg-white"
          value={selectedStore}
          onChange={(e) => {
            const storeName = e.target.value;
            setSelectedStore(storeName);
            setBranches(mockBranches[storeName]?.branches || []);
            setStoreImg(mockBranches[storeName]?.img || "");
            dispatch(getbranchrestaurant({ restaurant_id: mockBranches[storeName]?.id })); // Fetch branches from API
          }}
        >
          <option value="">เลือกชื่อร้าน</option>
          {Object.keys(mockBranches).map((store, index) => (
            <option key={index} value={store}>{store}</option>
          ))}
        </select>

        {/* Dropdown เลือกสาขา */}
        {selectedStore && (
          <select
            className="w-60 p-2 border border-[#24B6E0] rounded-sm mb-3 bg-white"
            value={selectedBranch}
            onChange={(e) => setSelectedBranch(e.target.value)}
          >
            <option value="">เลือกเขต</option>
            {branchdata.length > 0 ? (
              <>
                {branchdata.map((store, index) => (
                  <option key={index} value={store.name}>
                    {store.name}
                  </option>
                ))}
              </>
            ) : (
              <option disabled>ไม่มีข้อมูลสาขา</option>
            )}
          </select>
        )}

        {errorMessage && (
          <div className="error-message text-red-600 mb-4">
            {errorMessage} {/* Show the error message */}
          </div>
        )}

        {/* ปุ่ม Check-in */}
        <button
          className="checkin-button w-full bg-gradient-to-r from-[#004A5D] to-[#009BC3] text-white px-4 py-2 rounded-lg border border-[#28B7E1] shadow-md"
          disabled={!selectedBranch}
          onClick={handleCheckin}
        >
          Check-in
        </button>
      </div>

      <div className="absolute bottom-0 -translate-x-1/3 -translate-y-10 flex flex-col items-center">
        <img src="images/element.png" alt="Extra Element" className="w-60 z-0" />
      </div>
      <div className="fixed-bottom w-full">
        <img src="images/bottom.png" alt="Bottom" className="w-full z-50" />
      </div>
    </div>
  );
}
