import { IoGiftSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full relative">
      {/* ✅ Effect Background */}
      <div className="absolute top-0 w-full max-h-[100%] md:max-h-[100px] lg:max-h-[150px] overflow-hidden">
        <img src="/images/ripped.png" alt="Effect" className="w-full object-bottom" />
      </div>

      {/* ✅ Navbar Content */}
      <div className="relative flex justify-between items-center px-6 py-5 pt-15">
        {/* ✅ LOGO (คลิกเพื่อกลับ Home) */}
        <img
          src="/images/logo.png"
          alt="Left Logo"
          className="h-12 w-auto cursor-pointer"
          onClick={() => navigate("/")} // 🔹 กลับไปหน้า Home
        />

        {/* ✅ ปุ่ม "คูปองของฉัน" (ไปหน้าประวัติคูปอง) */}
        <div className="flex flex-col items-center">
          <button
            className="w-[60px] h-[60px] border border-[#28B7E1] rounded-lg shadow-lg bg-white text-gray-900 flex items-center justify-center"
            onClick={() => navigate("/coupon-history")} // 🔹 ไปหน้าคูปอง
          >
            <IoGiftSharp className="text-3xl" />
          </button>
          <span className="text-sm font-semibold mt-2 text-black">คูปองของฉัน</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
