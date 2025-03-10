import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { IoArrowBackCircleOutline, IoArrowForwardCircleOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import "./style.css";

const JoinStore = ({onCheckin}) => {
  const { profile, customerinfo } = useSelector((state) => state.user);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const images = [
    { src: "no1.png", text: "คลิก“รับ 5,000 COINS”", sub: "กดเลือกที่ ”รับ 5,000 COINS” \nรอยืนยันตัวตนผ่าน LINE  \nรอการตรวจสอบ 3-5 วินาที " },
    { src: "no2.png", text: "กรอกเพื่อรับสิทธิ์”", sub: "ร่วมทำภารกิจ Check-in ครบ 5 จุดรับ Coins เพื่อแลก MY BOX SET" },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="w-full "
      style={{
        backgroundImage: "url('images/paper.png')",
        backgroundSize: "cover",
        backgroundPosition: "top center",
        backgroundRepeat: "no-repeat",
      }}
    >
    <div className="flex flex-col items-center justify-start pt-10 px-4 lg:px-12 py-4 gap-8">
      {/* หัวข้อหลัก */}
      <p className="text-gray-800 font-semibold text-center text-sm lg:text-xl">
        สามารถแลกได้ที่ <span className="text-[#28B7E1] font-bold text-xl lg:text-3xl">11 ร้านหมูกะทะ</span> ที่ร่วมรายการ
      </p>

      <motion.button 
        className="bg-gradient-to-r from-[#004A5D] to-[#009BC3] text-white px-10 py-3 
                  rounded-[50px] border border-[#28B7E1] shadow-md text-2xl lg:text-2xl 
                  font-bold w-[80%] max-w-xs lg:w-[40%]"
        initial={{ y: 0 }}
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        onClick={()=> profile ?  navigate('/RegisterEvent') : onCheckin(true)}
      >
        คลิกเลย
      </motion.button>

      {/* Container ของ Slider หรือ Grid */}
      <div className="container-content w-full flex justify-center">
        <div className={`slider redeemSlide ${isMobile ? "mobile-slider" : "desktop-slider"} w-full max-w-5xl`}>
          <div className="slider-track flex justify-center items-center w-full">
            {isMobile ? (
              <div className="flex flex-col items-center gap-4 w-full">
                {/* ภาพที่เปลี่ยนได้ */}
                <motion.img 
                  src={`images/${images[currentIndex].src}`} 
                  alt="Coin Collect" 
                  className="w-[80%] max-w-xs"
                  key={currentIndex}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                />

                {/* ปุ่มเลื่อนซ้าย-ขวา */}
                <div className="flex items-center justify-between gap-5">
                  <button className="prev-btn" onClick={handlePrev}>
                    <IoArrowBackCircleOutline size={50} className="text-[#004A5D] hover:opacity-80 transition" />
                  </button>
                  <p className="text-[#004A5D] font-bold text-lg lg:text-2xl text-center">
                    {images[currentIndex].text}
                  </p>
                  <button className="next-btn" onClick={handleNext}>
                    <IoArrowForwardCircleOutline size={50} className="text-[#004A5D] hover:opacity-80 transition" />
                  </button>
                </div>

                {/* คำอธิบายใต้ภาพ */}
                <p className="text-black text-base lg:text-lg text-center w-[80%]">
                {images[currentIndex].sub.split("\n").map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-2 gap-5 w-full ">
                {images.map((img, index) => (
                  <motion.div 
                    className="cards flex flex-col items-center gap-4" 
                    key={index}
                    whileHover={{ scale: 1.05 }}
                  >
                    <img src={`images/${img.src}`} alt={`Coin Collect ${index + 1}`} className="w-full h-auto max-w-xs" />
                    <p className="text-[#004A5D] text-4xl font-bold text-center">{img.text}</p>
                    <p className="text-black text-2xl text-center ">{img.sub}</p>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
      {/* องค์ประกอบด้านล่าง */}
      <div className="w-full flex flex-col items-center lg:hidden">
        <img src="images/bottom.png" alt="Bottom" className="w-full z-50 " />
      </div>
    </div>
  );
};

export default JoinStore;
