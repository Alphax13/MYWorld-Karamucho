import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getbranchrestaurant, checkin, getrestaurant } from "../common/userSlice.js/userSlice";
import "./Checkin.css";

export default function CheckInPage() {
  const dispatch = useDispatch();
  const { profile, customerinfo, isLoading, error } = useSelector((state) => state.user);
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedStore, setSelectedStore] = useState(""); // Default is empty string
  const [branches, setBranches] = useState([]);
  const [selectedBranch, setSelectedBranch] = useState("");
  const [storeImg, setStoreImg] = useState("www.google.com");
  const [errorMessage, setErrorMessage] = useState("");
  const branchdata = useSelector((state) => state.user.getbranchrestaurantData);
  const getrestaurantData = useSelector((state) => state.user.getrestaurantData);

  useEffect(() => {
    dispatch(getrestaurant());
  }, [dispatch]);

  useEffect(() => {
    if (location.state?.id) {
      const selectedRestaurant = getrestaurantData.find(
        (store) => store.restaurant_id === location.state.id
      );
      if (selectedRestaurant) {
        setSelectedStore(selectedRestaurant.name);
      }
    }
  }, [location.state?.id, getrestaurantData]);


  useEffect(() => {
    if (selectedStore && getrestaurantData.length > 0) {
      const selectedRestaurant = getrestaurantData.find(
        (store) => store.name === selectedStore
      );
      if (selectedRestaurant) {
        setStoreImg(selectedRestaurant?.image_url || "");
        dispatch(getbranchrestaurant({ restaurant_id: selectedRestaurant?.restaurant_id }));
      }
    }
  }, [selectedStore, dispatch, getrestaurantData]);

  const handleCheckin = async () => {
    const checkinData = {
      customer_id: customerinfo?.customer_id,
      restaurant_id: getrestaurantData.find(store => store.name === selectedStore)?.restaurant_id,
      branch_id: branchdata.find((branch) => branch.name === selectedBranch)?.branch_id,
      image_url: "www.google.com", //storeImg
    };

    console.log(checkinData);

    try {
      const response = await dispatch(checkin(checkinData));
      console.log(response);
      if (response.payload === 'success') {
        navigate("/checkin-photo", { state: checkinData });
      } else {
        setErrorMessage('ท่านได้เช็คอินร้านหรือสาขานี้ไปแล้ว');
      }
    } catch (error) {
      setErrorMessage("เกิดข้อผิดพลาดในการเช็คอิน กรุณาลองใหม่อีกครั้ง");
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
          key={selectedStore}
          className="w-60 p-2 border border-[#24B6E0] rounded-sm mb-3 bg-white"
          value={selectedStore}
          onChange={(e) => {
            const storeName = e.target.value;
            setSelectedStore(storeName);
            setErrorMessage('');
          }}
        >
          <option value="">เลือกชื่อร้าน</option>
          {getrestaurantData.map((store, index) => (
            <option key={index} value={store.name}>
              {store.name}
            </option>
          ))}
        </select>

        {/* Dropdown เลือกสาขา */}
        {selectedStore && (
          <select
            className="w-60 p-2 border border-[#24B6E0] rounded-sm mb-3 bg-white"
            value={selectedBranch}
            onChange={(e) => {
              setSelectedBranch(e.target.value);
              setErrorMessage('');
            }}
          >
            <option value="">เลือกเขต</option>
            {branchdata.length > 0 ? (
              branchdata.map((branch, index) => (
                <option key={index} value={branch.name}>
                  {branch.name}
                </option>
              ))
            ) : (
              <option disabled>ไม่มีข้อมูลสาขา</option>
            )}
          </select>
        )}

        {errorMessage && (
          <div className="error-message text-red-600 mb-4">
            {errorMessage}
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
