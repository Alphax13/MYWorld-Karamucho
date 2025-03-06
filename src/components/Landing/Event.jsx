import { motion } from "framer-motion";
import "./style.css";

const Event = () => {
  return (
    <div 
      className="event w-full flex flex-col items-center justify-center relative px-4 lg:px-4 py-4"
      style={{
        backgroundImage: "url('images/bg-paper.png')",
        backgroundSize: "cover",
        backgroundPosition: "top center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* หัวข้อหลัก */}
      <div className="w-full flex justify-center mb-5 mt-5">
        <img src="images/textevent.png" alt="Event" className="w-[100%] lg:w-[40%]" />
      </div>

      {/* กล่องข้อมูล COINS */}
      <div className="w-full flex flex-row items-center justify-center text-center gap-2 lg:gap-6">
        
        {/* ข้อความ */}
        <p className="text-black font-semibold text-lg lg:text-3xl whitespace-nowrap">
          ตามล่า COINS หมูกะทะ
        </p>

        {/* จำนวน COINS */}
        <div className="bg-white px-4 py-1 rounded-lg border-2 border-[#28B7E1] text-[#28B7E1] text-2xl lg:text-5xl font-bold shadow-md">
          15,000 <span className="text-black text-sm">COINS</span>
        </div>

      </div>

      {/* รูป My Box Set */}
      <div className="w-full flex justify-center mt-6">
        <img src="images/cupon.png" alt="MY BOX SET" className="w-[100%]  lg:w-[40%]" />
      </div>

      {/* ปุ่ม คลิกเลย 
      <motion.button 
        className="bg-gradient-to-r from-[#004A5D] to-[#009BC3] text-white px-10 py-3 rounded-lg border border-[#28B7E1] shadow-md mt-6 text-lg lg:text-2xl font-bold w-[80%] max-w-xs lg:w-[40%]"
        initial={{ y: 0 }}
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
      >
        คลิกเลย
      </motion.button>
      */}
    </div>
  );
};

export default Event;
