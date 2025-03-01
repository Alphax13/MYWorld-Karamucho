import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

const locations = [
  { 
    id: 1, 
    name: "Your Camp", 
    top: { pc: "35%", mobile: "30%" }, 
    left: { pc: "30%", mobile: "15%" }, 
    image: "/images/pin1.png" 
  },
  { 
    id: 2, 
    name: "Everyday Mokata", 
    top: { pc: "45%", mobile: "40%" }, 
    left: { pc: "25%", mobile: "20%" }, 
    image: "/images/pin2.png" 
  },
  { 
    id: 3, 
    name: "อุดมสุข หมูกระทะ", 
    top: { pc: "33%", mobile: "33%" }, 
    left: { pc: "45%", mobile: "42%" }, 
    image: "/images/pin3.png" 
  },
  { 
    id: 4, 
    name: "หมูกระทะ มหานคร", 
    top: { pc: "53%", mobile: "50%" }, 
    left: { pc: "45%", mobile: "48%" }, 
    image: "/images/pin4.png" 
  },
  { 
    id: 5, 
    name: "ทวีโชค หมูกระทะ", 
    top: { pc: "55%", mobile: "52%" }, 
    left: { pc: "30%", mobile: "28%" }, 
    image: "/images/pin5.png" 
  },
  { 
    id: 6, 
    name: "ม้วนไจ๋ หมูกระทะ", 
    top: { pc: "65%", mobile: "63%" }, 
    left: { pc: "35%", mobile: "32%" }, 
    image: "/images/pin6.png" 
  },
  { 
    id: 7, 
    name: "อาริยา หมูกระทะ", 
    top: { pc: "35%", mobile: "38%" }, 
    left: { pc: "65%", mobile: "80%" }, 
    image: "/images/pin7.png" 
  },
  { 
    id: 8, 
    name: "71 หมูกระทะ", 
    top: { pc: "46%", mobile: "53%" }, 
    left: { pc: "78%", mobile: "75%" }, 
    image: "/images/pin8.png" 
  },
  { 
    id: 9, 
    name: "Y.O.U หมูกระทะ", 
    top: { pc: "65%", mobile: "62%" }, 
    left: { pc: "75%", mobile: "70%" }, 
    image: "/images/pin9.png" 
  },
];
const Location = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleClick = (location) => {
    alert(`คุณกดที่: ${location.name}`);
    // สามารถเปลี่ยนให้ส่งค่าไปยัง API หรือไปหน้าอื่นได้
  };

  return (
    <section
    className="relative flex flex-col items-center justify-between w-full"
    style={{
      backgroundImage: isMobile
        ? "url('/images/sectionMB.png')"
        : "url('/images/sectionPC.png')",
      backgroundSize: "cover",
      backgroundPosition: "center center",
      backgroundRepeat: "no-repeat",
      minHeight: "100vh",
    }}
  >
    {/* Ripper Image - แสดงเฉพาะ Mobile */}
    <img src="/images/ripper2.png" className="w-full mx-auto block lg:hidden" />
  
    {/* Logo Section - แสดงเฉพาะ Mobile */}
    <div className="logo-container justify-center mt-15 block lg:hidden">
      <img src="/images/LogoMymap.png" alt="Logo" className="w-40 lg:w-48" />
    </div>
  
    {/* Text Section - แสดงเฉพาะ Mobile */}
    <div className="text-center mt-3 lg:mt-8 px-4 max-w-[900px] block lg:hidden">
      <h2 className="text-white font-bold text-lg lg:text-xl pb-2">
        ผู้ร่วมแคมเปญที่ เชคพ้อยท์ร้าน
      </h2>
      <h1 className="text-black font-bold text-2xl lg:text-3xl text-outline">
        ครบ 10 ร้านก่อน 100 คนแรก
      </h1>
  
      {/* Influencer Image */}
      <img src="/images/infu.png" className="w-full max-w-[600px] mx-auto mt-4 lg:mt-6" />
    </div>
  
    {/* Map Pins */}
    <div className="absolute top-30 lg:top-40 left-0 w-full h-full z-20">
        {locations.map((loc) => (
          <div
            key={loc.id}
            className="absolute cursor-pointer transform -translate-x-1/2 -translate-y-1/2"
            style={{
              top: isMobile ? loc.top.mobile : loc.top.pc,
              left: isMobile ? loc.left.mobile : loc.left.pc,
            }}
            onClick={() => alert(`คุณกดที่: ${loc.name}`)}
          >
            <img src={loc.image} alt={loc.name} className="w-10 lg:w-20 sm:w-12" />
          </div>
        ))}
      </div>
  
    {/* Check-in Button */}
    <img
      src="/images/btncheckin.png"
      onClick={() => navigate("/checkin")}
      className="cursor-pointer mt-auto pb-0 w-50 lg:w-[200px] xl:w-[250px]"
      alt="Go to Check-in"
    />
  </section>
  
  );
};

export default Location;
