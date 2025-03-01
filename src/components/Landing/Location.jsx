import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

const locations = [
  { id: 1, name: "Your Camp", top: "30%", left: "20%", image: "/images/pin1.png" },
  { id: 2, name: "Everyday Mokata", top: "40%", left: "25%", image: "/images/pin2.png" },
  { id: 3, name: "อุดมสุข หมูกระทะ", top: "35%", left: "45%", image: "/images/pin3.png" },
  { id: 4, name: "หมูกระทะ มหานคร", top: "50%", left: "40%", image: "/images/pin4.png" },
  { id: 5, name: "ทวีโชค หมูกระทะ", top: "60%", left: "30%", image: "/images/pin5.png" },
  { id: 6, name: "ม้วนไก่ หมูกระทะ", top: "70%", left: "35%", image: "/images/pin6.png" },
  { id: 7, name: "อาริยา หมูกระทะ", top: "50%", left: "70%", image: "/images/pin7.png" },
  { id: 8, name: "71 หมูกระทะ", top: "55%", left: "80%", image: "/images/pin8.png" },
  { id: 9, name: "Y.O.U หมูกระทะ", top: "65%", left: "75%", image: "/images/pin9.png" },
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
      {/* Map Pins */}
      <div className="absolute top-0 left-0 w-full h-full">
        {locations.map((loc) => (
          <div
            key={loc.id}
            className="absolute cursor-pointer transform -translate-x-1/2 -translate-y-1/2"
            style={{
              top: loc.top,
              left: loc.left,
            }}
            onClick={() => handleClick(loc)}
          >
            <img src={loc.image} alt={loc.name} className="w-8 sm:w-12" />
          </div>
        ))}
      </div>

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
