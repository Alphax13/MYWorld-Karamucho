import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { getrestaurant, leaderboard } from "../../common/userSlice.js/userSlice";
import "./style.css";

const Location = ({ onCheckin }) => {
  const dispatch = useDispatch();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const navigate = useNavigate();
  const leaderData = useSelector((state) => state.user.leaderboardsData);
  const getrestaurantData = useSelector((state) => state.user.getrestaurantData);

  const { profile, customerinfo, isLoading, error } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getrestaurant())
    dispatch(leaderboard());
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
    { id: 2, name: "ม๋วนใจ๋ หมูกะทะ", top: { pc: "75%", mobile: "60%" }, left: { pc: "35%", mobile: "32%" }, image: "images/pin6.png" },
    { id: 3, name: "หมูกะทะ มหานคร", top: { pc: "60%", mobile: "44%" }, left: { pc: "45%", mobile: "48%" }, image: "images/pin4.png" },
    { id: 4, name: "Your Camp", top: { pc: "53%", mobile: "30%" }, left: { pc: "38%", mobile: "15%" }, image: "images/pin1.png" },
    { id: 5, name: "Everyday Mokata", top: { pc: "40%", mobile: "42%" }, left: { pc: "25%", mobile: "20%" }, image: "images/pin2.png" },
    { id: 6, name: "เอาถ่านหมูกะทะ", top: { pc: "40%", mobile: "33%" }, left: { pc: "43%", mobile: "42%" }, image: "images/pin3.png" },
    { id: 7, name: "ทวีโชค", top: { pc: "60%", mobile: "52%" }, left: { pc: "30%", mobile: "18%" }, image: "images/pin5.png" },
    { id: 8, name: "71 หมูกระทะ", top: { pc: "50%", mobile: "53%" }, left: { pc: "78%", mobile: "75%" }, image: "images/pin8.png" },
    { id: 9, name: "Bar Mookrata", top: { pc: "42%", mobile: "55%" }, left: { pc: "66%", mobile: "55%" }, image: "images/pin10.png" },
    { id: 10, name: "อารยาหมูกระทะ", top: { pc: "75%", mobile: "44%" }, left: { pc: "84%", mobile: "90%" }, image: "images/pin7.png" },
    { id: 11, name: "วาสนาหมูกะทะ", top: { pc: "30%", mobile: "35%" }, left: { pc: "50%", mobile: "83%" }, image: "images/pin11.png" },
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

  // Filter leaderData โดยการตรวจสอบว่า displayName ตรงกับ customer.name หรือไม่
  const leaderInfo = leaderData.find(leader => leader?.customer?.name === customerinfo?.name);

  const customerRank = leaderData.findIndex(leader => leader?.customer?.name === customerinfo?.name);

  const icons = {
    1: "images/r1.png",
    2: "images/r2.png",
    3: "images/r3.png",
  };

  return (
    <section
      className="relative flex flex-col items-center justify-between w-full"
      style={{
        backgroundImage: isMobile ? "url('images/sectionMB.png')" : "url('images/sectionPC.png')",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        position: 'relative',
      }}
    >
      <img src="images/ripper2.png" className="w-full block lg:hidden" />

      <div className="logo-container mt-10 pb-2 justify-center block lg:hidden">
        <img src="images/LogoMymap.png" alt="Logo" className="w-30 lg:w-80" />
      </div>

      <div className="text-center px-2 w-[80%] mb-auto block gap-2 -mt-6 lg:mt-60">
        <h2 className="text-white font-bold text-lg lg:text-3kx">
          {customerinfo ? 
            <p>เลือกร้านที่คุณต้องการ</p> 
            : 
            <p className="lg:hidden">เชคพ้อยท์ร้านหมูกะทะ <span className="text-white italic text-3xl font-extrabold drop-shadow-[4px_2px_0px_black]">100 คนแรก</span>
            </p>}
        </h2>
        {!customerinfo && (
          <div className="flex justify-center">
            <img src="images/infu.png" className="w-full max-w-[80%] lg:max-w-[20%] mx-auto lg:hidden" />
          </div>
        )}
        {!customerinfo && (
          <div className="flex justify-end lg:hidden">
            <img src="images/100k.png" className="w-full max-w-[50%] lg:max-w-[20%]" />
          </div>
        )}

        <div className="text-black font-bold text-2xl lg:text-3xl">
          {customerinfo ? <span className="text-white text-3xl font-extrabold">'ล่าแต้ม MY MAP ปิ้ง'</span>  : <h1></h1>}
        </div>
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
            <img src={loc.image} alt={loc.name} className="w-12 sm:w-12 xl:w-20" />
          </div>
        ))}
      </div>
      {/* Check-in Button */}
      {!customerinfo && (
        <motion.img
          src="images/btncheckin.png"
          onClick={() => onCheckin(true)} //navigate("/RegisterEvent")
          className="cursor-pointer mt-auto pb-0 w-50 lg:w-[200px] xl:w-[250px] z-20"
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
