import { useState } from "react";
import Navbar from "../components/Navbar";
import ProfileCard from "../components/ProfileCard";
import BoxCard from "../components/BoxCard";
import Select from "react-select";

const BoxsetPage = () => {
  const [selectedZone, setSelectedZone] = useState(null);
  const [selectedStore, setSelectedStore] = useState(null);

  // ตัวเลือกโซน
  const zoneOptions = [
    { value: "ladprao", label: "ลาดพร้าว" },
    { value: "ratchada", label: "รัชดา" },
    { value: "silom", label: "สีลม" },
  ];

  // รายการร้านค้าตามโซนที่เลือก
  const storeOptionsByZone = {
    ladprao: [
      { value: "grill_ladprao", label: "ย่างเนย ลาดพร้าว" },
      { value: "71_moocata", label: "71 หมูกระทะ ลาดพร้าว 71" },
    ],
    ratchada: [
      { value: "shabu_ratchada", label: "ชาบูชิ รัชดา" },
      { value: "bbq_ratchada", label: "BBQ Plaza รัชดา" },
    ],
    silom: [
      { value: "steak_silom", label: "สเต็ก เฮ้าส์ สีลม" },
      { value: "noodle_silom", label: "ร้านก๋วยเตี๋ยว สีลม" },
    ],
  };

  return (
    <div className="min-h-screen m-0">
      <Navbar />
      <div className="flex flex-col items-center">
      <ProfileCard />

      {/* Banner */}
      <div className="w-full flex justify-center mb-2 cursor-pointer p-4">
        <img
          src="/images/Boxset.png"
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
            options={storeOptionsByZone[selectedZone.value] || []}
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
