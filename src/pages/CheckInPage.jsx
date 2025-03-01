import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Checkin.css";

const mockBranches = {
  "Your Camp": { 
    branches: ["เขต ลาดพร้าว", "เขต พระนคร", "เขต บางนา"],
    img: "/images/store.png"
  },
  "Everyday Mokata": { 
    branches: ["เขต ปทุมวัน", "เขต ดินแดง"],
    img: "/images/store.png"
  },
  "อุดมสุข หมูกระทะ": { 
    branches: ["เขต ห้วยขวาง", "เขต วัฒนา"],
    img: "/images/store.png"
  },
  "หมูกระทะ มหานคร": { 
    branches: ["เขต บางกะปิ", "เขต จตุจักร"],
    img: "/images/store.png"
  },
  "ทวีโชค หมูกระทะ": { 
    branches: ["เขต สาทร", "เขต บางรัก"],
    img: "/images/store.png"
  },
  "ม้วนไจ๋ หมูกระทะ": { 
    branches: ["เขต ธนบุรี", "เขต บางแค"],
    img: "/images/store.png"
  },
  "อาริยา หมูกระทะ": { 
    branches: ["เขต ดอนเมือง", "เขต หลักสี่"],
    img: "/images/store.png"
  },
  "71 หมูกระทะ": { 
    branches: ["เขต บางซื่อ", "เขต คลองสาน"],
    img: "/images/store.png"
  },
  "Y.O.U หมูกระทะ": { 
    branches: ["เขต พระโขนง", "เขต ราชเทวี"],
    img: "/images/store.png"
  },
};



export default function CheckInPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedStore, setSelectedStore] = useState("");
  const [branches, setBranches] = useState([]);
  const [selectedBranch, setSelectedBranch] = useState("");
  const [storeImg, setStoreImg] = useState("");

  useEffect(() => {
    if (location.state?.store) {
      setSelectedStore(location.state.store);
      setBranches(mockBranches[location.state.store]?.branches || []);
      setStoreImg(mockBranches[location.state.store]?.img || "");
    }
  }, [location.state]);

  const handleCheckin = () => {
    navigate("/checkin-photo", { 
      state: { store: selectedStore, branch: selectedBranch, img: storeImg } 
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
            setBranches(mockBranches[e.target.value]?.branches || []);
            setStoreImg(mockBranches[e.target.value]?.img || "");
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
