import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

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

  return (
        <section
        className="flex flex-col items-center justify-between w-full"
        style={{
            backgroundImage: isMobile
            ? "url('/images/sectionMB.png')"
            : "url('/images/sectionPC.png')",
            backgroundSize: isMobile ? "cover" : "contain",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            minHeight: "100vh",
        }}
        >
        <div className="container-content w-[90%] flex flex-grow min-h-[80vh] xl:max-h-[100%]"></div>

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
