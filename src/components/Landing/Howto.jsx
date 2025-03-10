import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { IoArrowBackCircleOutline, IoArrowForwardCircleOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import "./style.css";

const Howto = (onCheckin) => {
  const { profile, customerinfo, isLoading, error } = useSelector((state) => state.user);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const images = [
    { src: "w1.png", text: "ไปที่ MY WORLD\nหรือ กดเช็คคูปอง" },
    { src: "w2.png", text: "ริชเมนูบาร์เลือก\n“แลกคูปอง”" },
    { src: "w3.png", text: "ค้นหาร้าน\nที่ต้องการแลก" },
    { src: "w4.png", text: "กดรับสิทธิ์\nภายใน 10 นาที" },
    { src: "w5.png", text: "แสดงโค้ดคูปอง\nให้พนักงานหน้าร้าน" }
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
    <section
      id="rules"
      className="mx-auto flex flex-col items-center"
      style={{
        backgroundImage: isMobile ? "url('images/rulesmb.png')" : "url('images/rules.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* รูปหลัก + รูปตกแต่งข้างขวา */}
      <div className="relative w-full flex justify-center items-center -mb-5 p-0">
        <motion.img 
          src="images/ripmap.png" 
          className="ripper w-full"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        />
        <motion.img
          src="images/lo-right.png"
          className="absolute right-0 w-[140px] sm:w-[200px] md:w-[240px] lg:w-[320px] xl:w-[420px]"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        />
      </div>

      {/* rulesTitle */}
      <motion.div 
        id="rulesTitle" 
        className="w-full flex justify-center relative"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
      >
        <img src="images/ow.png" alt="Coin Icon" className="w-[65%] xl:w-[650px] pt-5 pb-10" />
        <motion.img
          src="images/lo-left.png"
          alt="Coin Icon2"
          className="absolute -left-5 bottom-[-50px] w-[100px] sm:w-[50px] md:w-[120px] lg:w-[200px] xl:w-[350px]"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        />
      </motion.div>

      <div className="container-content w-[90%]">
        <div className={`slider redeemSlide ${isMobile ? "mobile-slider" : "desktop-slider"}`} id="carousel">
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
                <div className="flex items-center justify-between gap-4 w-full">
                  <motion.button 
                    className="prev-btn"
                    onClick={handlePrev}
                    whileHover={{ scale: 1.1 }}
                  >
                    <IoArrowBackCircleOutline size={40} />
                  </motion.button>
                  <p
                    className="text-black text-xl font-bold text-center flex-1"
                    dangerouslySetInnerHTML={{ __html: images[currentIndex].text.replace(/\n/g, "<br/>") }}
                  ></p>
                  <motion.button 
                    className="next-btn" 
                    onClick={handleNext}
                    whileHover={{ scale: 1.1 }}
                  >
                    <IoArrowForwardCircleOutline size={40} />
                  </motion.button>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-5 gap-2 w-full pb-5">
                {images.map((img, index) => (
                  <motion.div 
                    className="cards flex flex-col items-center gap-5" 
                    key={index}
                    whileHover={{ scale: 1.05 }}
                  >
                    <img src={`images/${img.src}`} alt={`Coin Collect ${index + 1}`} className="w-full h-auto" />
                    <div className="text-content text-black text-center">
                      <p className="text-2xl font-bold">{img.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>

          {/* ปุ่ม Check ไปหน้า /point */}
          <motion.img
            src="images/check.png"
            onClick={() => profile ? navigate("/coupon-history"): onCheckin(true)}
            className="cursor-pointer mx-auto pb-10 flex flex-col items-center w-60 lg:w-[200px] xl:w-[350px]"
            alt="Go to Point"
            whileHover={{ scale: 1.05 }}
          />
        </div>
      </div>
    </section>
  );
};

export default Howto;
