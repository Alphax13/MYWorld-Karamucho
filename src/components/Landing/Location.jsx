import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { getrestaurant } from "../../common/userSlice.js/userSlice";
import "./style.css";

const Location = ({ onCheckin }) => {
  const dispatch = useDispatch();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const navigate = useNavigate();
  const getrestaurantData = useSelector((state) => state.user.getrestaurantData);

  const { profile, customerinfo, isLoading, error } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getrestaurant())
  }, [dispatch])

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleClick = (location) => {
    navigate("/checkin", { state: { store: location.name, id: location.id } });
  };

  const locations = [
    { id: 1, name: "Y.O.U หมูกระทะ", top: { pc: "65%", mobile: "62%" }, left: { pc: "75%", mobile: "70%" }, image: "images/pin9.png" },
    { id: 2, name: "ม๋วนใจ๋ หมูกะทะ", top: { pc: "65%", mobile: "63%" }, left: { pc: "35%", mobile: "32%" }, image: "images/pin6.png" },
    { id: 3, name: "หมูกะทะ มหานคร", top: { pc: "53%", mobile: "50%" }, left: { pc: "45%", mobile: "48%" }, image: "images/pin4.png" },
    { id: 4, name: "Your Camp", top: { pc: "40%", mobile: "30%" }, left: { pc: "30%", mobile: "15%" }, image: "images/pin1.png" },
    { id: 5, name: "Everyday Mokata", top: { pc: "45%", mobile: "40%" }, left: { pc: "25%", mobile: "20%" }, image: "images/pin10.png" },
    { id: 6, name: "เอาถ่านหมูกะทะ", top: { pc: "33%", mobile: "33%" }, left: { pc: "45%", mobile: "42%" }, image: "images/pin3.png" },
    { id: 7, name: "ทวีโชค", top: { pc: "55%", mobile: "52%" }, left: { pc: "30%", mobile: "28%" }, image: "images/pin5.png" },
    { id: 8, name: "71 หมูกระทะ", top: { pc: "46%", mobile: "53%" }, left: { pc: "78%", mobile: "75%" }, image: "images/pin8.png" },
    { id: 9, name: "Bar Mookrata", top: { pc: "50%", mobile: "57%" }, left: { pc: "66%", mobile: "61%" }, image: "images/pin2.png" },
    { id: 10, name: "อารยาหมูกระทะ", top: { pc: "37%", mobile: "44%" }, left: { pc: "84%", mobile: "90%" }, image: "images/pin0.png" },
    { id: 11, name: "วาสนาหมูกะทะ", top: { pc: "38%", mobile: "30%" }, left: { pc: "50%", mobile: "70%" }, image: "images/pin0.png" },
    // { id: 10, name: "อาริยา หมูกระทะ", top: { pc: "35%", mobile: "38%" }, left: { pc: "65%", mobile: "85%" }, image: "images/pin7.png" },
  ];

  // แปลงข้อมูล getrestaurantData มาใช้แสดงตามตำแหน่งที่กำหนด
  const mappedLocations = getrestaurantData.map((restaurant) => {
    const location = locations.find((loc) => loc.id === restaurant.restaurant_id);
    if (location) {
      return { ...location, id: restaurant.restaurant_id };
    }
    return null;
  }).filter(loc => loc !== null);

  return (
    <section
      className="relative flex flex-col items-center justify-between w-full"
      style={{
        backgroundImage: isMobile ? "url('images/sectionMB.png')" : "url('images/sectionPC.png')",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
      }}
    >
      <img src="images/ripper2.png" className="w-full mx-auto block lg:hidden" />

      <div className="logo-container mt-15 justify-center block lg:hidden">
        <img src="images/LogoMymap.png" alt="Logo" className="w-40 lg:w-48" />
      </div>

      <div className="text-center mt-5 px-6 max-w-[900px] mb-auto block lg:hidden">
        <h2 className="text-white font-bold text-lg lg:text-xl pb-2">
          {customerinfo ? "เลือกร้านที่คุณต้องการ " : "ผู้ร่วมแคมเปญที่ เชคพ้อยท์ร้าน"}
        </h2>
        <div className="text-black font-bold text-2xl lg:text-3xl">
          {customerinfo ? <span className="text-white text-3xl font-extrabold">'ล่าแต้ม MY MAP ปิ้ง'</span>  : <h1 className="text-black font-bold text-2xl lg:text-3xl text-outline"> ครบ 10 ร้านก่อน 100 คนแรก </h1>}
        </div>
        {!customerinfo && <img src="images/infu.png" className="w-full max-w-[600px]" />}
      </div>

      <div className="absolute top-30 left-0 w-full h-full z-20">
        {mappedLocations.map((loc) => (
          <div
            key={loc.id}
            className="absolute cursor-pointer transform -translate-x-1/2 -translate-y-1/2"
            style={{
              top: isMobile ? loc.top.mobile : loc.top.pc,
              left: isMobile ? loc.left.mobile : loc.left.pc,
            }}
            onClick={() => (customerinfo ? handleClick(loc) : onCheckin(true))}
          >
            <img src={loc.image} alt={loc.name} className="w-8 sm:w-12" />
          </div>
        ))}
      </div>
        {/* Check-in Button */}
        {!customerinfo && (
        <motion.img
          src="images/btncheckin.png"
          onClick={() => navigate("/RegisterEvent")}
          className="cursor-pointer mt-auto pb-0 w-50 lg:w-[400px] xl:w-[400px] z-20"
          alt="Go to Check-in"
          initial={{ y: 0 }}
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        />
      )}
    </section>
  );
};

export default Location;