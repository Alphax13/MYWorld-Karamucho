import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getbranchrestaurant, checkinHis, getrestaurant, getuser } from "../common/userSlice.js/userSlice";
import "./Checkin.css";

export default function CheckInPage() {
  const dispatch = useDispatch();
  const { profile, customerinfo, isLoading, error } = useSelector((state) => state.user);
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedStore, setSelectedStore] = useState(""); // Default is empty string
  const [branches, setBranches] = useState([]);
  const [selectedBranch, setSelectedBranch] = useState("");
  const [storeImg, setStoreImg] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const pointData = useSelector((state) => state.user.checkinHisesData);
  const branchdata = useSelector((state) => state.user.getbranchrestaurantData);
  const getrestaurantData = useSelector((state) => state.user.getrestaurantData);

  useEffect(() => {
    document.title = "Check in";
  }, []);

  useEffect(() => {
    dispatch(getrestaurant());
    if (profile && !customerinfo) {
      dispatch(getuser({ profile }))
    }
    if (customerinfo?.customer_id) {
      dispatch(checkinHis({ customerid: customerinfo?.customer_id }));
    }
  }, [dispatch, customerinfo, profile]);

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
        setStoreImg(selectedRestaurant.image_url || ""); // ใช้ค่าจาก API
        dispatch(getbranchrestaurant({ restaurant_id: selectedRestaurant.restaurant_id }));
      }
    }
  }, [selectedStore, dispatch, getrestaurantData]);

  const handleCheckin = async () => {
    const selectedRestaurant = getrestaurantData.find(store => store.name === selectedStore);
    const selectedBranchData = branchdata.find(branch => branch.name === selectedBranch);

    const checkinData = {
      customer_id: customerinfo?.customer_id,
      restaurant_id: selectedRestaurant?.restaurant_id,
      branch_id: selectedBranchData?.branch_id,
      image_url: storeImg, // ส่งรูปไปด้วย
      store: selectedStore,
      branch: selectedBranch,
    };

    console.log(checkinData);

    navigate("/checkin-photo", { state: checkinData });
  };

  return (
    <div className="checkin-container p-5 flex flex-col items-center">
      <img src="images/top.png" alt="Top Banner" className="fixed-top" />

      <div className="branch-box p-6 mt-10 z-100">
        <div className="logo-container2">
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
          {getrestaurantData
            // .filter(store => store.name !== '71 หมูกระทะ')
            .map((store, index) => (
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
              // กรองออกสาขาที่ตรงกับชื่อสาขาที่เคยเช็คอิน
              branchdata
                .filter(branch => branch.name !== pointData[0]?.restaurant_branch?.name || '71 หมูกระทะ')
                .map((branch, index) => (
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
