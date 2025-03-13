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
    { src: "no2.png", text: "รับ 5,000 COINS", sub: "คลิก รับ 5,000 COINS ยืนยันตัวตนผ่าน LINE \nรอตรวจสอบ 3-5 วินาที" },
    { src: "no3.png", text: "ออกล่า “รับสิทธิ์เพิ่ม”", sub: "ออกล่า หมูกระทะ ร่วมทำภารกิจ Check-in \nครบ 5 จุด รับ COINS \nแลกส่วนลดพิเศษ 100 บาท" },
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
        <p className="text-gray-800 font-semibold text-center text-base lg:text-xl lg:pb-20">
          ออกล่า MY MEAT BOX SET
          <span className="text-[#28B7E1] font-bold text-xl lg:text-3xl block">
          รับส่วนลดพิเศษ  100 บาท
          </span>
        </p>


        {/* Slider หรือ Grid */}
        <div className="slider-track flex justify-center items-center w-full">
          {isMobile ? (
            <div className="cards flex flex-col items-center justify-center gap-2 w-[100%] max-w-lg pb-5">
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
              <p className="text-black text-base lg:text-lg text-center w-[90%]">
                {images[currentIndex].sub.split("\n").map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-3 gap-2 w-full pb-5">
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
