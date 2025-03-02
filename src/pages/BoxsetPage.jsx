import Navbar from "../components/Navbar";
import ProfileCard from "../components/ProfileCard";
import BoxCard from "../components/BoxCard";
import Select from "react-select";
import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getrestaurant } from "../common/userSlice.js/userSlice";

const BoxsetPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const restaurantData = useSelector((state) => state.user.getrestaurantData); // Get restaurant data from Redux store

  useEffect(() => {
    dispatch(getrestaurant()); // Fetch restaurant data on component mount
  }, [dispatch]);

  console.log(restaurantData); // Check the restaurant data in the console

  const [selectedZone, setSelectedZone] = useState(null);
  const [selectedStore, setSelectedStore] = useState(null);

  // ตัวเลือกโซน
  const zoneOptions = [
    { value: "ladprao", label: "ลาดพร้าว" },
    { value: "ratchada", label: "รัชดา" },
    { value: "silom", label: "สีลม" },
  ];

  // Function to filter restaurant stores by zone
  const getStoreOptionsByZone = (zone) => {
    if (!restaurantData || !restaurantData.length) return [];
    
    // Assuming that `restaurantData` doesn't include zone info, you could filter by restaurant name or any other property.
    // As an example, I'm using `zone` for this placeholder, but you can adapt it as per your actual data structure.
    return restaurantData
      .map((restaurant) => ({
        value: restaurant.restaurant_id, // Using `restaurant_id` as value
        label: restaurant.name, // Display restaurant name in the dropdown
        image_url: restaurant.image_url, // Storing the image URL
      }));
  };

  return (
    <div className="min-h-screen m-0">
      <Navbar />
      <div className="flex flex-col items-center">
        <ProfileCard />

        {/* Banner */}
        <div className="w-full flex justify-center mb-2 cursor-pointer p-4">
          <img
            src="images/Boxset.png"
            alt="Boxset Banner"
            className="w-full max-w-5xl rounded-lg shadow-md"
          />
        </div>

        {/* Dropdown เลือกโซน */}
        <div className="w-full max-w-md mx-auto p-4">
          <Select
            options={zoneOptions}
            value={selectedZone}
            onChange={(zone) => {
              setSelectedZone(zone);
              setSelectedStore(null); // รีเซ็ตร้านค้าเมื่อเปลี่ยนโซน
            }}
            placeholder="โซน/พื้นที่"
            className="mb-4 text-black"
            styles={{
              control: (base) => ({
                ...base,
                backgroundColor: "#E5E5E5",
                border: "none",
                borderRadius: "6px",
                padding: "8px",
                fontSize: "16px",
                color: "#333",
                boxShadow: "none",
              }),
            }}
          />

          {/* Dropdown เลือกร้านค้า (แสดงเฉพาะเมื่อเลือกโซนแล้ว) */}
          {selectedZone && (
            <Select
              options={getStoreOptionsByZone(selectedZone.value)} // Get store options based on selected zone
              value={selectedStore}
              onChange={setSelectedStore}
              placeholder="เลือกร้านค้า..."
              className="text-black"
              styles={{
                control: (base) => ({
                  ...base,
                  border: "1px solid #28B7E1",
                  borderRadius: "6px",
                  padding: "8px",
                  fontSize: "16px",
                  color: "#333",
                  boxShadow: "none",
                }),
              }}
            />
          )}
        </div>

        {/* ส่งค่าร้านที่เลือกไปยัง BoxCard */}
        <BoxCard selectedStore={selectedStore} />
      </div>
    </div>
  );
};

export default BoxsetPage;
