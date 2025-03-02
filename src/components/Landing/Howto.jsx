import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IoArrowBackCircleOutline, IoArrowForwardCircleOutline } from "react-icons/io5";
import "./style.css";

const Howto = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const images = [
    { src: "w1.png", text: "เลือกเมนู \n“MY Map ปิ้ง”" },
    { src: "w2.png", text: "ค้นหาร้านหมูกะทะ\nที่ต้องการ" },
    { src: "w3.png", text: "กด\nรับสิทธิ์" },
    { src: "w4.png", text: "แสดงคูปองให้พนักงาน" }
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
        <img src="images/ripmap.png" className="ripper w-full" />
        <img
          src="images/lo-right.png"
          className="absolute right-0 w-[140px] sm:w-[200px] md:w-[240px] lg:w-[320px] xl:w-[420px]"
        />
      </div>

      {/* rulesTitle */}
      <div id="rulesTitle" className="w-full flex justify-center relative">
        <img src="images/how.png" alt="Coin Icon" className="w-[65%] xl:w-[650px] pt-5 pb-10" />
        <img
          src="images/lo-left.png"
          className="absolute -left-5 bottom-[-50px] w-[100px] sm:w-[50px] md:w-[120px] lg:w-[200px] xl:w-[350px]"
        />
      </div>

      <div className="container-content w-[90%]">
        <div className={`slider redeemSlide ${isMobile ? "mobile-slider" : "desktop-slider"}`} id="carousel">
          <div className="slider-track flex justify-center items-center w-full">
            {isMobile ? (
              <div className="cards flex flex-col items-center justify-center gap-4 w-[90%] max-w-lg pb-5">
                <img src={`images/${images[currentIndex].src}`} alt="Coin Collect" className="w-auto" />
                <div className="flex items-center justify-between gap-4 w-full">
                  <button className="prev-btn" onClick={handlePrev}>
                    <IoArrowBackCircleOutline size={40} />
                  </button>
                  <p
                    className="text-black text-2xl font-bold text-center flex-1"
                    dangerouslySetInnerHTML={{ __html: images[currentIndex].text.replace(/\n/g, "<br/>") }}
                  ></p>
                  <button className="next-btn" onClick={handleNext}>
                    <IoArrowForwardCircleOutline size={40} />
                  </button>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-4 gap-2 w-full pb-5">
                {images.map((img, index) => (
                  <div className="cards flex flex-col items-center gap-5" key={index}>
                    <img src={`images/${img.src}`} alt={`Coin Collect ${index + 1}`} className="w-full h-auto" />
                    <div className="text-content text-black text-center">
                      <p className="text-2xl font-bold">{img.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* ปุ่ม Check ไปหน้า /point */}
          <img
            src="images/check.png"
            onClick={() => navigate("/point")}
            className="cursor-pointer mx-auto pb-10 flex flex-col items-center w-60 lg:w-[200px] xl:w-[350px]"
            alt="Go to Point"
          />
        </div>
      </div>
    </section>
  );
};

export default Howto;
