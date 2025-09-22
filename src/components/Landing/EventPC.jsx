import { motion } from "framer-motion";
import { useState } from "react";
import "./style.css";

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
    <div className="hidden md:block w-full relative bg-gray-900 min-h-screen">
      {/* Background with pattern overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-7x00 to-black">
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-repeat" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='white' fill-opacity='0.1'%3E%3Cpath d='M20 20c0 0 0-8.2-8.2-8.2S3.6 11.8 3.6 20s8.2 8.2 8.2 8.2 8.2 0 8.2-8.2zM32.2 3.6c0 8.2 8.2 8.2 8.2 8.2s-8.2 8.2-8.2 8.2-8.2 0-8.2-8.2 0-8.2 8.2-8.2zM11.8 32.2c0-8.2-8.2-8.2-8.2-8.2s8.2-8.2 8.2-8.2 8.2 0 8.2 8.2-8.2 8.2-8.2 8.2z'/%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left side - Mobile mockup */}
          <motion.div
            className="flex justify-center lg:justify-center"
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="relative">
              {/* Phone frame */}
              <div className="relative w-100 h-[550px]">
                <div className="w-full h-full  overflow-hidden relative">
                  
                  {/* Phone screen content */}
                  <div className="relative w-full h-full">
                    
                    {/* Game characters in background */}
                    <div className="absolute inset-0">
                      <video 
                        src="MY X Karamucho Motion.mp4" 
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover opacity-80"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right side - Campaign details */}
          <motion.div
            className="text-white space-y-8"
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Header */}
            <div>
              <div className="mb-6">
                <img 
                  src="images/evtext.webp" 
                  alt="MY WORLD x คารามูโจ้ DUO LEVEL UP" 
                  className="w-full h-auto max-w-lg mx-auto object-contain"
                />
              </div>
            </div>

            {/* Campaign description */}
            <div className="space-y-4">
              <p className="text-lg leading-relaxed">
                กิจกรรม MY World x คารามูโจ้ DUO LEVEL UP ลุยภารกิจ ต่อ ติด ผี จะจัดหาผู้ที่จะไปทำภารกิจอัพเวลเพื่อต่อติดผีที่สถานที่ต่างๆ 
                กับ EPIC TIME คือ
              </p>

              {/* Campaign rounds */}
              <div className="space-y-3 bg-white px-3 py-3">
                <div className="flex items-start gap-3 text-black">
                  <span className=" text-black px-3 py-1 rounded-full text-sm font-bold">รอบคัดเลือก 1  : วันพุธที่ 15 ตุลาคม 2568 ต่อ ติด ผี ที่กรุงเทพฯ จำนวน 5 คู่</span>
                </div>
                <div className="flex items-start gap-3 text-black">
                  <span className=" text-black px-3 py-1 rounded-full text-sm font-bold">รอบคัดเลือก 2  : วันศุกร์ที่ 17 ตุลาคม 2568 ต่อ ติด ผี ที่ชลบุรี จำนวน 5 คู่</span>
                </div>
                <div className="flex items-start gap-3 text-black">
                  <span className=" text-black px-3 py-1 rounded-full text-sm font-bold">รอบคัดเลือก 3  : วันพุธที่ 22 ตุลาคม 2568 ต่อ ติด ผี ที่เชียงใหม่ จำนวน 5 คู่</span>
                </div>
                <div className="flex items-start gap-3 text-black">
                  <span className=" text-black px-3 py-1 rounded-full text-sm font-bold">รอบคัดเลือก 4  : วันศุกร์ที่ 24 ตุลาคม 2568 ต่อ ติด ผี ที่โคราช จำนวน 5 คู่</span>
                </div>
              </div>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                โดยในกิจกรรมทั้ง 4 รอบ จะถูกคัดเลือกมาจากการโพสต์คลิปคาถา ต่อ ติด ผี ในแบบ ของตัวเอง ผ่านช่องทาง TikTok ตามกติกาที่กำหนด 
                เลือกจังหวัดที่อยากจะไป และสะดวกในการเดินทางไปร่วมงานพร้อมคู่ดูโอ้ในวันเวลาและสถานที่ที่เลือกไว้ 
                และ <span className="font-bold">ผู้ชนะจากกิจกรรมทั้ง 4 รอบจะต้องไป Final Mission</span>
              </p>
            </div>

            {/* Final Mission */}
            <div className="text-center">
              <img 
                src="images/bttext.webp" 
                alt="Final Mission" 
                className="w-full h-auto max-w-lg mx-auto object-contain"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default EventPC;