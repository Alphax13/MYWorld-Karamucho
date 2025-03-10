import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { getrestaurant, leaderboard } from "../../common/userSlice.js/userSlice";
import "./style.css";

const Location = ({ onCheckin, getprofile }) => {
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
    { id: 8, name: "71 หมูกระทะ", top: { pc: "50%", mobile: "53%" }, left: { pc: "78%", mobile: "74%" }, image: "images/pin8.png" },
    { id: 9, name: "Bar Mookrata", top: { pc: "42%", mobile: "55%" }, left: { pc: "66%", mobile: "55%" }, image: "images/pin10.png" },
    { id: 10, name: "อารยาหมูกระทะ", top: { pc: "75%", mobile: "45%" }, left: { pc: "84%", mobile: "82%" }, image: "images/pin7.png" },
    { id: 11, name: "วาสนาหมูกะทะ", top: { pc: "33%", mobile: "35%" }, left: { pc: "50%", mobile: "83%" }, image: "images/pin11.png" },
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
          backgroundImage: isMobile
            ? "url('images/sectionMB.png')"
            : customerinfo
            ? "url('images/sectionPC_customer.png')"  // เปลี่ยนเป็นรูปที่ต้องการเมื่อมี customerinfo
            : "url('images/sectionPC.png')",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          minHeight: "100vh",
          position: 'relative',
        }}
      >

      {customerinfo &&
        <>
          {/* แสดงข้อมูล Leaderboard ของลูกค้า */}
          {leaderInfo ? (
            <div className="sticky top-0 left-0 right-0 bg-white p-2 w-full shadow-md shadow-black z-10">
              <div className="flex justify-between items-center">
                <div className="flex gap-2 items-center">
                  {/* เช็คและแสดงอันดับที่พร้อมไอคอน */}
                  <div className="border-r-1 pr-2">
                    {customerRank < 3 ? (<div className="flex gap-2">
                      อันดับที่ : <img src={icons[customerRank + 1]} alt={`อันดับที่ ${customerRank + 1}`} className="w-6 h-6 mr-2" />
                    </div>) : (
                      <div className="flex gap-2">อันดับที่ : {customerRank + 1}</div>
                    )}
                  </div>
                  <div className="bg-[#C2F1FF] text-black px-3 py-1 rounded-xl shadow-md">
                    {leaderInfo?.total} แต้ม
                  </div>
                </div>
                <div className="flex gap-1 items-center">
                  <img src={leaderInfo?.customer?.picture} alt={leaderInfo.customer.name} className="w-10 h-10 rounded-full mr-2" />
                  <p className="font-bold">{leaderInfo?.customer?.name}</p>
                </div>
              </div>
            </div>
          ) : null}
        </>
      }

      <img src="images/ripper2.png" className="w-full block lg:hidden" />

      <div className="logo-container pb-2 justify-center block lg:hidden">
        <img src="images/LogoMymap.png" alt="Logo" className="w-30 lg:w-80" />
      </div>

      <div className="text-center px-2 w-[100%] mb-auto block gap-2 -mt-6 lg:mt-40">
        <h2 className="text-white font-bold text-lg lg:text-3xl lg:pb-3">
          {customerinfo ?
            <p>เลือกร้านที่คุณต้องการ</p>
            :
            <p className="lg:hidden">เชคพ้อยท์ร้านหมูกะทะ <span className="text-white italic text-3xl font-extrabold drop-shadow-[4px_2px_0px_black] lg:hidden">100 คนแรก</span>
            </p>}
        </h2>
        {!customerinfo && (
          <div className="flex justify-center lg:hidden">
            <img src="images/infu.png" className="w-full max-w-[80%] lg:max-w-[20%] mx-auto " />
          </div>
        )}
        {!customerinfo && (
          <div className="flex justify-end lg:hidden">
            <img src="images/100k.png" className="w-full max-w-[50%] lg:max-w-[20%]" />
          </div>
        )}

        <div className="text-black font-bold text-2xl ">
          {customerinfo ? <span className="text-white text-3xl lg:text-5xl font-extrabold">'ล่าแต้ม MY MAP ปิ้ง'</span> : <h1></h1>}
        </div>
      </div>

      <div className="absolute top-30 left-0 w-full h-full z-20">
  {mappedLocations.map((loc) => (
    <div
      key={loc.id}
      className="absolute cursor-pointer transform -translate-x-1/2 -translate-y-2/3 flex flex-col items-center"
      style={{
        top: isMobile ? loc.top.mobile : loc.top.pc,
        left: isMobile ? loc.left.mobile : loc.left.pc,
      }}
      onClick={() => (customerinfo ? handleClick(loc) : onCheckin(true))}
    >
      {/* SVG สำหรับข้อความโค้ง (ขนาดปรับตามอุปกรณ์) */}
      <svg width={isMobile ? "100" : "190"} height="30">
        <defs>
          <path
            id={`curvePath-${loc.id}`}
            d={isMobile ? "M 20,40 A 40,10 0 0,1 100,25" : "M 10,40 A 70,20 0 0,1 190,45"}
            fill="transparent"
          />
        </defs>
        <text width={isMobile ? "100" : "150"}>
          <textPath
            href={`#curvePath-${loc.id}`}
            startOffset="50%"
            textAnchor="middle"
            className="font-bold text-[10px] md:text-sm lg:text-xl"
            style={{
              fill: "white", // ตัวอักษรสีขาว
              stroke: "black", // ขอบสีดำ
              strokeWidth: "2px", // ความหนาของขอบ
              paintOrder: "stroke fill", // ทำให้ขอบอยู่ใต้ตัวอักษร
            }}
          >
            {loc.name}
          </textPath>
        </text>
      </svg>

      {/* รูป pin */}
      <img src={loc.image} alt={loc.name} className="w-10 sm:w-12 xl:w-16" />
    </div>
  ))}
</div>



      {/* Check-in Button */}
      {!customerinfo && (
        <motion.img
          src="images/btncheckin.png"
          onClick={() => profile ? getprofile() : customerinfo ? handleClick(loc) : onCheckin(true)} //navigate("/RegisterEvent") onCheckin(true)
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
