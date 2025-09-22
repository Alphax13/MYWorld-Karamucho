import { motion } from "framer-motion";
import { useState } from "react";
import "./style.css";
import videoSrc from "../../assets/MY X Karamucho Motion.mp4";

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const slideInLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const slideInRight = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const EventPC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const handlePrevSlide = () => {
    setCurrentSlide(prev => prev > 0 ? prev - 1 : 0);
  };
  
  const handleNextSlide = () => {
    setCurrentSlide(prev => prev < 3 ? prev + 1 : 3);
  };

  return (
    <div className="hidden md:block w-full relative bg-black min-h-screen">
      {/* Background */}
      <div className="absolute inset-0">
        <img 
          src="images/Background3.png" 
          alt="Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left side - Campaign details (previously right) */}
          <motion.div
            className="text-white space-y-8"
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Header */}
            <div>
              <div className="mb-6">
                <img 
                  src="images/duo.png" 
                  alt="MY WORLD x คารามูโจ้ DUO LEVEL UP" 
                  className="w-[80%] h-auto max-w-lg object-contain -ml-20"
                />
              </div>
            </div>

            {/* Campaign description */}
            <div className="space-y-4 -mt-10">
              <div className="text-lg leading-relaxed flex items-center">
                <p className="text-lg leading-relaxed">
                  กิจกรรม MY World x คารามูโจ้ DUO LEVEL UP ลุยภารกิจ ต่อ ติด ผี 
                  จะจัดหาผู้ที่จะไปทำภารกิจอัพเวลเพื่อต่อติดผีที่สถานที่ต่างๆ กับ
                  <img 
                    src="images/epic.png" 
                    alt="EPIC TIME Logo" 
                    className="inline-block w-12 h-auto align-middle ml-1"
                  />
                </p>
              </div>
              {/* Campaign rounds */}
              <div className="space-y-3 ">
                <img src="images/mapp.png" alt="Campaign Rounds" className="w-[70%] h-auto mx-auto object-contain" />
              </div>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                โดยในกิจกรรมทั้ง 4 รอบ จะถูกคัดเลือกมาจากการโพสต์คลิปคาถา ต่อ ติด ผี ในแบบ ของตัวเอง ผ่านช่องทาง TikTok ตามกติกาที่กำหนด 
                เลือกจังหวัดที่อยากจะไป และสะดวกในการเดินทางไปร่วมงานพร้อมคู่ดูโอ้ในวันเวลาและสถานที่ที่เลือกไว้ 
                และ <span className="font-bold">ผู้ชนะจากกิจกรรมทั้ง 4 รอบจะต้องไป Final Mission</span>
              </p>
            </div>
          </motion.div>

          {/* Right side - Mobile mockup (previously left) */}
          <motion.div
            className="flex justify-center lg:justify-center"
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="relative z-10">
              {/* Phone frame */}
              <div className="relative w-100 h-[550px]">
                <div className="w-full h-full  overflow-hidden relative">
                  
                  {/* Phone screen content */}
                  <div className="relative w-full h-full">
                    
                    {/* Game characters in background */}
                    <div className="absolute inset-0">
                      <video 
                        src={videoSrc}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover opacity-80"
                        onError={(e) => console.log('Video error:', e)}
                      >
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default EventPC;