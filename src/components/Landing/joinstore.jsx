import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { IoArrowBackCircleOutline, IoArrowForwardCircleOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import "./style.css";

const JoinStore = ({ onCheckin }) => {
  const { profile } = useSelector((state) => state.user);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const images = [
    { src: "no1.png", text: "@Line“MY WORLD”", sub: "ค้นหาเพื่อนใน Line @myworld \nจากนั้นกดเพิ่มเพื่อนก่อนเข้าร่วมกิจกรรม" },
    { src: "no2.png", text: "ลงทะเบียน", sub: "ทำการลงทะเบียน ”รับ 5,000 COINS” \nยืนยันตัวตนผ่าน LINE \nรอการตรวจสอบ 3-5 วินาที " },
    { src: "no3.png", text: "Check-in รับสิทธิ์", sub: "ร่วมทำภารกิจ Check-inในเว็บครบ 5 จุด \nรับ Coinsเพื่อแลก MY BOX SET" },
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
    <div className="w-full"
      style={{
        backgroundImage: "url('images/paper.png')",
        backgroundSize: "cover",
        backgroundPosition: "top center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex flex-col items-center justify-start pt-10 px-4 lg:px-12 lg:pb-50 py-4 gap-8">
        {/* หัวข้อหลัก */}
        <p className="text-gray-800 font-semibold text-center text-sm lg:text-xl">
          สามารถแลกได้ที่ <span className="text-[#28B7E1] font-bold text-xl lg:text-3xl">ร้านหมูกระทะ 11 ร้าน</span> ที่ร่วมรายการ
        </p>

        <motion.button
          className="bg-gradient-to-r from-[#004A5D] to-[#009BC3] text-white px-10 py-3 
                      rounded-[50px] border border-[#28B7E1] shadow-md text-2xl lg:text-2xl 
                      font-bold w-[80%] max-w-xs lg:w-[40%]"
          initial={{ y: 0 }}
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          onClick={() => profile ? navigate('/RegisterEvent') : onCheckin(true)}
        >
          คลิกเลย
        </motion.button>

        {/* Slider หรือ Grid */}
        <div className="slider-track flex justify-center items-center w-full">
          {isMobile ? (
            <div className="cards flex flex-col items-center justify-center gap-4 w-[90%] max-w-lg pb-5">
              <motion.img
                src={`images/${images[currentIndex].src}`}
                alt="Coin Collect"
                className="w-auto"
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
              />

              {/* ปุ่มเลื่อนซ้าย-ขวา + ข้อความตรงกลาง */}
              <div className="flex items-center justify-between w-full">
                <motion.button
                  className="prev-btn flex items-center justify-center w-16 h-16 min-w-[64px] flex-shrink-0"
                  onClick={handlePrev}
                  whileHover={{ scale: 1.1 }}
                >
                  <IoArrowBackCircleOutline size={40} color="#24B6E0" />
                </motion.button>

                <p
                  className="text-[#24B6E0] text-xl font-bold text-center flex-1"
                  dangerouslySetInnerHTML={{ __html: images[currentIndex].text.replace(/\n/g, "<br/>") }}
                ></p>

                <motion.button
                  className="next-btn flex items-center justify-center w-16 h-16 min-w-[64px] flex-shrink-0"
                  onClick={handleNext}
                  whileHover={{ scale: 1.1 }}
                >
                  <IoArrowForwardCircleOutline size={40} color="#24B6E0"/>
                </motion.button>
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
            <div className="grid grid-cols-3 gap-5 w-full pb-5">
              {images.map((img, index) => (
                <motion.div
                  className="cards flex flex-col items-center gap-5"
                  key={index}
                  whileHover={{ scale: 1.05 }}
                >
                  <img src={`images/${img.src}`} alt={`Coin Collect ${index + 1}`} className="w-full h-auto max-w-xs" />
                  <div className="text-content  text-center">
                    <p className="text-2xl font-bold text-[#24B6E0]">{img.text}</p>
                    <p className="text-lg">{img.sub.split("\n").map((line, i) => (
                      <React.Fragment key={i}>
                        {line}
                        <br />
                      </React.Fragment>
                    ))}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
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
