import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import "./Checkin.css";

const branches = [
  { id: 1, store: "ร้านติดมันส์", branch: "สาขาลาดพร้าว", checkedIn: true, img: "/images/logo.png" },
  { id: 2, store: "ร้านติดมันส์", branch: "สาขาธารี", checkedIn: false, img: "/images/logo.png" },
  { id: 3, store: "ร้านติดมันส์", branch: "สาขาสุขุมวิท", checkedIn: false, img: "/images/logo.png" },
  { id: 4, store: "ร้านหมูย่าง", branch: "สาขาพระราม 3", checkedIn: false, img: "/images/logo.png" },
  { id: 5, store: "ร้านหมูย่าง", branch: "สาขาสาทร", checkedIn: false, img: "/images/logo.png" },
  { id: 6, store: "ร้านไก่ทอด", branch: "สาขาธารี", checkedIn: false, img: "/images/logo.png" },
];

const stores = [...new Set(branches.map(branch => branch.store))];

export default function CheckInPage() {
  const [selectedStore, setSelectedStore] = useState("");
  const [selectedBranch, setSelectedBranch] = useState("");
  const navigate = useNavigate();

  const filteredBranches = branches.filter(branch => branch.store === selectedStore);

  const handleCheckin = () => {

    navigate("/checkin-photo", { state: { store: selectedStore, branch: selectedBranch } });
  };

  return (
    <div className="checkin-container p-5 flex flex-col items-center">
      <img src="/images/top.png" alt="Top Banner" className="fixed-top" />

      <div className="branch-box p-6">
        <div className="logo-container">
          <img src="/images/LogoMymap.png" alt="Logo" className="logo" />
        </div>

        <select
          className="w-60 p-2 border border-[#24B6E0] rounded-sm mb-3 bg-white"
          value={selectedStore}
          onChange={(e) => {
            setSelectedStore(e.target.value);
            setSelectedBranch("");
          }}
        >
          <option value="">เลือกชื่อร้าน</option>
          {stores.map((store, index) => (
            <option key={index} value={store}>{store}</option>
          ))}
        </select>

        {selectedStore && (
          <select
            className="w-60 p-2 border border-[#24B6E0] rounded-sm mb-3 bg-white"
            value={selectedBranch}
            onChange={(e) => setSelectedBranch(e.target.value)}
          >
            <option value="">เลือกสาขา</option>
            {filteredBranches.map((branch) => (
              <option key={branch.id} value={branch.branch}>
                {branch.branch}
              </option>
            ))}
          </select>
        )}

        <button 
          className="checkin-button w-full bg-gradient-to-r from-[#004A5D] to-[#009BC3] text-white px-4 py-2 rounded-lg border border-[#28B7E1] shadow-md hover:from-[#003D4C] hover:to-[#008BB0] transition duration-300" 
          disabled={!selectedBranch}
          onClick={handleCheckin} // เมื่อกดปุ่มเช็คอิน จะเรียก handleCheckin
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
