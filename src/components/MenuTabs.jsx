import { FaCheckCircle, FaHistory } from "react-icons/fa";
import { HiOutlineTicket } from "react-icons/hi"; 
const MenuTabs = ({ activeTab, setActiveTab }) => {
  // รายการเมนู พร้อมไอคอน
  const menuItems = [
    { id: "checkin", label: "กิจกรรม Check-in", icon: <FaCheckCircle /> },
    { id: "redeem", label: "แลกคูปอง", icon: <HiOutlineTicket /> },
    { id: "history", label: "ประวัติการแลก", icon: <FaHistory /> },
  ];

  return (
    <div className="flex justify-center gap-6 mb-2">
      {menuItems.map((item) => (
        <div key={item.id} className="flex flex-col items-center">
          <button
            onClick={() => setActiveTab(item.id)}
            className={`flex items-center justify-center w-[60px] h-[60px] rounded-lg shadow-lg transition-all 
            ${activeTab === item.id ? "bg-[#28B7E1] text-white shadow-md" : "bg-white border border-[#28B7E1] text-[#28B7E1]"}`}
          >
            <div className={`text-3xl transition-all 
              ${activeTab === item.id ? "text-white" : "text-[#28B7E1]"}`}>
              {item.icon}
            </div>
          </button>

          <span className="text-sm font-semibold mt-2 text-[#333]">{item.label}</span>
        </div>
      ))}
    </div>
  );
};

export default MenuTabs;
