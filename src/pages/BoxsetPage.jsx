import Navbar from "../components/Navbar";
import ProfileCard from "../components/ProfileCard";
import BoxCard from "../components/BoxCard";
import Select from "react-select";
import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getrestaurant, getbranchrestaurant , getuser , loginWithLine  } from "../common/userSlice.js/userSlice";

const BoxsetPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const couponId = useState(location?.state?.coupon_id)
  const dispatch = useDispatch();
  const { profile, customerinfo, isLoading, error} = useSelector((state) => state.user);
  const restaurantData = useSelector((state) => state.user.getrestaurantData);
  const branchdata = useSelector((state) => state.user.getbranchrestaurantData);

  useEffect(() => {
    document.title = "My Box Set";
  }, []);

  useEffect(() => {
    dispatch(getrestaurant()); // Fetch restaurant data on component mount
  }, [dispatch]);

  useEffect(() => {
    if (!profile){
      dispatch(loginWithLine())
    }else if (!customerinfo) {
      dispatch(getuser({ profile }));
    }else if (!customerinfo?.first_name){
      navigate('/RegisterEvent', { state: { from: '/point' } });
    }
  }, [dispatch, customerinfo, profile]);

  const [selectedZone, setSelectedZone] = useState(null);
  const [selectedStore, setSelectedStore] = useState(null);
  const [selectedBranch, setSelectedBranch] = useState(null);
  console.log(selectedBranch?.value)

  // ฟังก์ชั่นกรองข้อมูลร้านจากโซน
  const getStoreOptionsByZone = (zone) => {
    if (!restaurantData || !restaurantData.length) return [];
    return restaurantData
      .filter(restaurant => restaurant.name !== '71 หมูกระทะ')
      .map((restaurant) => ({
        value: restaurant.restaurant_id,
        label: restaurant.name,
        image_url: restaurant.image_url,
      }));
  };

  useEffect(() => {
    if (selectedStore) {
      // Dispatch action to get branches of the selected store
      dispatch(getbranchrestaurant({ restaurant_id: selectedStore?.value }));
    }
  }, [selectedStore, dispatch]);

  return (
    <div className="min-h-screen m-0">
      <Navbar />
      <div className="flex flex-col items-center">
        <ProfileCard />

        {/* Banner */}
        <div className="w-full flex justify-center cursor-pointer px-4">
          <img
            src="images/Boxset.png"
            alt="Boxset Banner"
            className="w-full max-w-5xl"
          />
        </div>

        {/* Dropdown เลือกโซน */}
        <div className="w-full max-w-md mx-auto px-4 pt-2">

          <Select
            options={getStoreOptionsByZone(selectedZone?.value)} // Get store options based on selected zone
            value={selectedStore}
            onChange={setSelectedStore}
            placeholder="เลือกร้าน"
            className="text-black mb-2"
            styles={{
              control: (base) => ({
                ...base,
                border: "1px solid #28B7E1",
                borderRadius: "6px",
                padding: "4px",
                fontSize: "16px",
                color: "#333",
                boxShadow: "none",
              }),
            }}
          />

          {/* Dropdown เลือกสาขา (แสดงเฉพาะเมื่อเลือกร้านแล้ว) */}
          {selectedStore && branchdata && branchdata.length > 0 && (
            <Select
              options={branchdata.map((branch) => ({
                value: branch.branch_id,
                label: branch.name,
              }))}
              value={selectedBranch}  // กำหนด value ให้ตรงกับ selectedBranch
              onChange={(selectedOption) => setSelectedBranch(selectedOption)}  // เมื่อเลือก item ให้ตั้งค่า selectedBranch
              placeholder="เลือกสาขา"
              className="text-black"
              styles={{
                control: (base) => ({
                  ...base,
                  border: "1px solid #28B7E1",
                  borderRadius: "6px",
                  padding: "4px",
                  fontSize: "16px",
                  color: "#333",
                  boxShadow: "none",
                }),
              }}
            />

          )}
        </div>

        <BoxCard selectedStore={selectedStore} selectedBranch={selectedBranch} couponId={couponId} />
      </div>
    </div>
  );
};

export default BoxsetPage;
