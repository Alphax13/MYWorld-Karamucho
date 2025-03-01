import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Checkin.css";

const mockBranches = {
  "Your Camp": ["เขต ลาดพร้าว", "เขต พระนคร", "เขต บางนา"],
  "Everyday Mokata": ["เขต ปทุมวัน", "เขต ดินแดง"],
  "อุดมสุข หมูกระทะ": ["เขต ห้วยขวาง", "เขต วัฒนา"],
  "หมูกระทะ มหานคร": ["เขต บางกะปิ", "เขต จตุจักร"],
  "ทวีโชค หมูกระทะ": ["เขต สาทร", "เขต บางรัก"],
  "ม้วนไจ๋ หมูกระทะ": ["เขต ธนบุรี", "เขต บางแค"],
  "อาริยา หมูกระทะ": ["เขต ดอนเมือง", "เขต หลักสี่"],
  "71 หมูกระทะ": ["เขต บางซื่อ", "เขต คลองสาน"],
  "Y.O.U หมูกระทะ": ["เขต พระโขนง", "เขต ราชเทวี"],
};


export default function CheckInPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedStore, setSelectedStore] = useState("");
  const [branches, setBranches] = useState([]);
  const [selectedBranch, setSelectedBranch] = useState("");

  useEffect(() => {
    if (location.state?.store) {
      setSelectedStore(location.state.store);
      setBranches(mockBranches[location.state.store] || []);
    }
  }, [location.state]);

  const handleCheckin = () => {
    navigate("/checkin-photo", { 
      state: { store: selectedStore, branch: selectedBranch } 
    });
  };

  return (
    <div className="checkin-container p-5 flex flex-col items-center">
      <img src="/images/top.png" alt="Top Banner" className="fixed-top" />

      <div className="branch-box p-6 mt-10 z-100">
        <div className="logo-container">
          <img src="/images/LogoMymap.png" alt="Logo" className="logo" />
        </div>

        {/* Dropdown เลือกร้าน */}
        <select
          className="w-60 p-2 border border-[#24B6E0] rounded-sm mb-3 bg-white"
          value={selectedStore}
          onChange={(e) => {
            setSelectedStore(e.target.value);
            setBranches(mockBranches[e.target.value] || []);
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
            <option value="">เลือกสาขา</option>
            {branches.map((branch, index) => (
              <option key={index} value={branch}>{branch}</option>
            ))}
          </select>
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
        <img src="/images/element.png" alt="Extra Element" className="w-60 z-0" />
      </div>
      <div className="fixed-bottom w-full">
        <img src="/images/bottom.png" alt="Bottom" className="w-full z-50" />
      </div>
    </div>
  );
}
