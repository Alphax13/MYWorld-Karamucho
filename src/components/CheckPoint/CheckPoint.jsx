import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkinHis, getrestaurant } from "../../common/userSlice.js/userSlice";
import "./CheckPoint.css";

export default function CheckPoint() {
  const dispatch = useDispatch();
  const { profile, customerinfo, isLoading, error } = useSelector((state) => state.user);
  const pointData = useSelector((state) => state.user.checkinHisesData);
  const getrestaurantData = useSelector((state) => state.user.getrestaurantData);
  
  const [selectedStore, setSelectedStore] = useState(""); // ร้านเริ่มต้น
  const [selectedBranch, setselectedBranch] = useState("");

  useEffect(() => {
    document.title = "MyCheckPoint- MyMap ปิ้ง";
  }, []);

  useEffect(() => {
    dispatch(getrestaurant());
  }, [dispatch]);

  useEffect(() => {
    if (customerinfo?.customer_id) {
      dispatch(checkinHis({ customerid: customerinfo.customer_id }));
    }
  }, [dispatch, customerinfo]);

  // ดึงรายชื่อร้านจาก API
  const storeList = getrestaurantData.map((store) => store.name);

  return (
    <div className="checkin-page flex flex-col items-center">
      <img src="images/top.png" alt="Top Banner" className="fixed-top" />
      <div className="flex flex-col items-center p-6 pb-0">
        {/* โลโก้ */}
        <div className="mb-4">
          <img src="images/LogoMymap.png" alt="Logo" className="w-50 h-auto pt-5" />
        </div>
        <div className="flex flex-col items-center z-10">
          {/* Dropdown เลือกร้าน */}
          <select
            className="w-80 p-2 border border-[#24B6E0] rounded-sm mb-3 bg-white"
            onChange={(e) => setSelectedStore(e.target.value)}
            value={selectedStore}
          >
            <option value="">เลือกชื่อร้าน</option>
            {storeList.map((store) => (
              <option key={store} value={store}>
                {store}
              </option>
            ))}
          </select>
          {/* ช่องค้นหาสาขา */}
          <input
            type="text"
            className="w-80 p-2 border border-[#24B6E0] rounded-sm mb-3 bg-white"
            placeholder="ค้นหาร้าน"
            value={selectedBranch}
            onChange={(e) => setselectedBranch(e.target.value)}
          />
        </div>
      </div>
      {/* เส้นถนน */}
      <div className="road relative ">
        <div className="px-10 mb-25 -mt-4">
          {/* จุดเช็คอิน */}
          {pointData.map((loc, index) => (
            <div
              key={loc.id}
              className={`relative flex items-center w-60 h-14.5 my-8 rounded-full border-2 shadow-md transition-all cursor-pointer 
                ${loc.status === 'approved' ? "bg-green-200 border-green-500" : loc.status === 'rejected' ? "bg-red-200 border-red-500" : "bg-white border-gray-300"} 
                ${index % 2 === 0 ? "ml-0 flex-row" : "ml-auto flex-row-reverse"}`}
            >
              {/* รูปภาพร้าน */}
              <div className={`w-14 h-14 rounded-full border-4 overflow-hidden flex-shrink-0 ${loc.status === 'approved' ? "border-green-500" : "border-gray-300"}`}>
                <img src={loc.restaurant.image_url} alt="ร้าน" className="w-full h-full object-cover" />
              </div>
              <div className="mx-2 text-left">
                <div className="text-lg font-bold -mb-1.5">{loc.restaurant.name}</div>
                <div className="text-base text-gray-600">สาขา {loc.restaurant_branch.name}</div>
              </div>
            </div>
          ))}

          {pointData.length === 0 && (
            <div className="text-gray-500 text-center mt-6">ไม่พบสาขา</div>
          )}
        </div>
      </div>
    </div>
  );
}
