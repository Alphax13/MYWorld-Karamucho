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
        {/* Header - Top Left */}
        <motion.div
          className="mb-0 -ml-25 -mt-15"
          variants={slideInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <img 
            src="images/evtext.png" 
            alt="MY WORLD x คารามูโจ้ DUO LEVEL UP" 
            className="h-auto max-w-2xl object-contain"
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-center mb-4 -mt-5">
          
          {/* Left side - Campaign intro */}
          <motion.div
            className="text-white"
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="text-lg leading-relaxed">
              <p className="text-lg leading-relaxed">
                กิจกรรม MY World x คารามูโจ้ DUO LEVEL UP ลุยภารกิจ ต่อ ติด ผี 
                จะจัดหาผู้ที่จะไปทำภารกิจอัพเวลเพื่อต่อติดผีที่สถานที่ต่างๆ กับ
                <img 
                  src="images/epic.png" 
                  alt="EPIC TIME Logo" 
                  className="inline-block w-10 h-auto align-middle ml-1"
                />
              </p>
            </div>
            
            {/* Campaign rounds */}
            <div className="flex justify-center mt-6">
              <img src="images/mapp.png" alt="Campaign Rounds" className="w-full max-w-lg h-auto object-contain" />
            </div>
          </motion.div>

          {/* Right side - Video */}
          <motion.div
            className="flex justify-center items-center"
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="relative">
              <div className="relative w-90 h-[550px] rounded-2xl overflow-hidden shadow-2xl">
                <video 
                  src={videoSrc}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                  onError={(e) => console.log('Video error:', e)}
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom section - Full width description */}
        <motion.div
          className="text-white"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="text-lg text-gray-300 leading-relaxed max-w-4xl mx-auto text-center">
            โดยในกิจกรรมทั้ง 4 รอบ จะถูกคัดเลือกมาจากการโพสต์คลิปคาถา ต่อ ติด ผี ในแบบ ของตัวเอง ผ่านช่องทาง TikTok ตามกติกาที่กำหนด 
            เลือกจังหวัดที่อยากจะไป และสะดวกในการเดินทางไปร่วมงานพร้อมคู่ดูโอ้ในวันเวลาและสถานที่ที่เลือกไว้ 
            และ <span className="font-bold text-white">ผู้ชนะจากกิจกรรมทั้ง 4 รอบจะต้องไป Final Mission</span>
          </p>
        </motion.div>
      </div>
      
    </div>
  );
};

export default EventPC;