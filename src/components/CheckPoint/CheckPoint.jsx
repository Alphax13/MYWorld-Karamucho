import { useState } from "react";
import "./CheckPoint.css";

const allLocations = [
  { id: 1, store: "ร้านติดมันส์", branch: "สาขาลาดพร้าว", checkedIn: true, img: "/images/logo.png" },
  { id: 2, store: "ร้านติดมันส์", branch: "สาขาธารี", checkedIn: false, img: "/images/logo.png" },
  { id: 3, store: "ร้านติดมันส์", branch: "สาขาสุขุมวิท", checkedIn: false, img: "/images/logo.png" },
  { id: 4, store: "ร้านหมูย่าง", branch: "สาขาพระราม 3", checkedIn: false, img: "/images/logo.png" },
  { id: 5, store: "ร้านหมูย่าง", branch: "สาขาสาทร", checkedIn: false, img: "/images/logo.png" },
  { id: 6, store: "ร้านไก่ทอด", branch: "สาขาธารี", checkedIn: false, img: "/images/logo.png" },
];

const storeList = [...new Set(allLocations.map((loc) => loc.store))]; // ดึงชื่อร้านทั้งหมด

export default function CheckPoint() {
  const [selectedStore, setSelectedStore] = useState(storeList[0]); // ร้านเริ่มต้น
  const [searchTerm, setSearchTerm] = useState("");
  const [checkins, setCheckins] = useState(allLocations);

  // กรองร้านที่ถูกเลือก + ค้นหาสาขา
  const filteredLocations = checkins.filter(
    (loc) =>
      loc.store === selectedStore &&
      loc.branch.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCheckin = (id) => {
    setCheckins(
      checkins.map((loc) =>
        loc.id === id ? { ...loc, checkedIn: !loc.checkedIn } : loc
      )
    );
  };

  return (
      <div className="checkin-page flex flex-col items-center">
        <img src="/images/top.png" alt="Top Banner" className="fixed-top" />
        <div className="flex flex-col items-center p-6">
        {/* โลโก้ */}
        <div className="mb-4">
          <img src="/images/LogoMymap.png" alt="Logo" className="w-50 h-auto pt-5" />
        </div>

        {/* Dropdown เลือกร้าน */}
        <select
          className="w-80 p-2 border border-[#24B6E0] rounded-sm mb-3 bg-white "
          onChange={(e) => setSelectedStore(e.target.value)}
          value={selectedStore}
        >
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
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
    </div>
        {/* เส้นถนน */}
        <div className="relative w-full mb-0">
          <div className="absolute w-full h-full">
            <img src="/images/Road.png" alt="Road" className="w-full h-auto" />
          </div>
          <div className="px-12">
          {/* จุดเช็คอิน */}
          {filteredLocations.map((loc, index) => (
            <div
              key={loc.id}
              className={`relative flex items-center w-50 h-13 my-4 rounded-full border-2 shadow-md transition-all cursor-pointer 
                ${loc.checkedIn ? "bg-green-200 border-green-500" : "bg-white border-gray-300"} 
                ${index % 2 === 0 ? "ml-0 flex-row" : "ml-auto flex-row-reverse"}`}
              onClick={() => handleCheckin(loc.id)}
            >
              {/* รูปภาพร้าน (ใหญ่ขึ้น) */}
              <div className={`w-14 h-14 rounded-full border-4 overflow-hidden flex-shrink-0 ${loc.checkedIn ? "border-green-500" : "border-gray-300"}`}>
                <img src={loc.img} alt="ร้าน" className="w-full h-full object-cover" />
              </div>

              {/* ข้อมูลร้าน */}
              <div className="mx-3 text-left">
                <div className="text-lg font-bold">{loc.store}</div>
                <div className="text-gray-600">{loc.branch}</div>
              </div>
            </div>
          ))}

          {filteredLocations.length === 0 && (
            <div className="text-gray-500 text-center mt-6">ไม่พบสาขา</div>
          )}
        </div>
          <img src="/images/bottom.png" alt="Bottom Banner" className="fixed-bottom" />
        </div>
      </div>
  );
}
