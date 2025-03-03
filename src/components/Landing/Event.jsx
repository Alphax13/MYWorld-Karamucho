import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./style.css";

const Event = () => {
  const navigate = useNavigate();
  
  return (
    <div className="w-full relative mb-10">
      <img src="images/rip.png" className="ripper w-full" />
      
      {/* ภาพ event text */}
      <div className="w-full flex justify-center cursor-pointer">
        <img src="images/textevent.png" alt="Checkin Banner" className="w-[50%] md:w-[45%] lg:w-[40%] xl:w-[35%] 2xl:w-[30%] max-sm:w-[70%]" />
      </div>
      <div className="absolute -5 top-[35%] lg:top-[40%] right-[18%] md:right-[23%] lg:right-[15%] xl:right-[38%] flex flex-col items-center transform -translate-y-1/2">
        <h1 className="text-sm lg:text-xl font-bold">ล่า COINS หมูกะทะ</h1>
      </div>
      {/* Container ปุ่ม ใช้ absolute กำหนดตำแหน่ง + responsive */}
      <div className="absolute -10 top-[68%] right-[15%] md:right-[20%] lg:right-[20%] xl:right-[38%] flex flex-col items-center gap-30 md:gap-60 lg:gap-50 xl:gap-75 transform -translate-y-1/2">
        
      {/* ปุ่ม คลิกเลย พร้อมอนิเมชั่นลอยขึ้นลง */}
        <motion.button 
          className="event-button bg-gradient-to-r from-[#004A5D] to-[#009BC3] text-white px-6 md:px-8 lg:px-10 py-3 md:py-4 lg:py-5 rounded-lg border border-[#28B7E1] shadow-md hover:from-[#003D4C] hover:to-[#008BB0] transition duration-300 text-lg md:text-xl lg:text-2xl"
          initial={{ y: 0 }}
          animate={{ y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          onClick={() => navigate("/point")}
        >
          คลิกเลย
        </motion.button>

        {/* ปุ่ม Add Line */}
        <a href="https://line.me/ti/p/~@myworld" target="_blank" rel="noopener noreferrer">
          <button className="event-button bg-gradient-to-r from-[#004A5D] to-[#009BC3] text-white px-6 md:px-8 lg:px-10 py-3 md:py-4 lg:py-5 rounded-lg border border-[#28B7E1] shadow-md hover:from-[#003D4C] hover:to-[#008BB0] transition duration-300 flex items-center text-lg md:text-xl lg:text-2xl">
            <img src="images/line-icon.png" alt="Line" className="w-6 md:w-8 lg:w-10 h-6 md:h-8 lg:h-10 mr-2" />
            <span>Add Line</span>
          </button>
        </a>
      </div>

      {/* ภาพ event หลัก */}
      <div className="w-full flex justify-center mt-6">
        <img src="images/event.png" alt="Checkin Banner" className="w-[50%] md:w-[45%] lg:w-[40%] xl:w-[35%] 2xl:w-[30%] max-sm:w-[70%]" />
      </div>
    </div>
  );
};

export default Event;
