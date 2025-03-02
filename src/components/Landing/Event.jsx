import { motion } from "framer-motion";
import "./style.css";

const Event = () => {
  return (
    <div className="w-full relative mb-10">
      <img src="images/rip.png" className="ripper w-full" />
      
      {/* ภาพ event text */}
      <div className="w-full flex justify-center cursor-pointer">
        <img src="images/textevent.png" alt="Checkin Banner" className="w-[50%] md:w-[45%] lg:w-[40%] xl:w-[35%] 2xl:w-[30%] max-sm:w-[70%]" />
      </div>
      <div className="absolute -10 top-[32%] lg:top-[40%] right-[10%] md:right-[23%] lg:right-[15%] xl:right-[38%] flex flex-col items-center transform -translate-y-1/2">
        <h1 className="text-base lg:text-xl font-bold">ล่า COINS หมูกะทะ</h1>
      </div>
      {/* Container ปุ่ม ใช้ absolute กำหนดตำแหน่ง + responsive */}
      <div className="absolute -10 top-[68%] right-[15%] md:right-[20%] lg:right-[20%] xl:right-[38%] flex flex-col items-center gap-40 md:gap-60 lg:gap-50 xl:gap-75 transform -translate-y-1/2">
        
        {/* ปุ่ม คลิกเลย */}
        <motion.button className="event-button bg-gradient-to-r from-[#004A5D] to-[#009BC3] text-white px-6 md:px-8 lg:px-10 py-3 md:py-4 lg:py-5 rounded-lg border border-[#28B7E1] shadow-md hover:from-[#003D4C] hover:to-[#008BB0] transition duration-300 text-lg md:text-xl lg:text-2xl"
        initial={{ y: 0 }}
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}>
          คลิกเลย
        </motion.button>

        {/* ปุ่ม Add Line */}
        <button className="event-button bg-gradient-to-r from-[#004A5D] to-[#009BC3] text-white px-6 md:px-8 lg:px-10 py-3 md:py-4 lg:py-5 rounded-lg border border-[#28B7E1] shadow-md hover:from-[#003D4C] hover:to-[#008BB0] transition duration-300 flex items-center text-lg md:text-xl lg:text-2xl">
          <img src="images/line-icon.png" alt="Line" className="w-6 md:w-8 lg:w-10 h-6 md:h-8 lg:h-10 mr-2" />
          <span>Add Line</span>
        </button>
      </div>

      {/* ภาพ event หลัก */}
      <div className="w-full flex justify-center mt-6">
        <img src="images/event.png" alt="Checkin Banner" className="w-[50%] md:w-[45%] lg:w-[40%] xl:w-[35%] 2xl:w-[30%] max-sm:w-[70%]" />
      </div>
    </div>
  );
};

export default Event;
