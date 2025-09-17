import React from "react";
import "./style.css";

const BannerKV = () => {
  return (
    <div className="w-full bg-black">
      {/* New banner design matching the provided image */}
      <div 
        className="w-full h-screen relative flex items-center justify-center overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #000428 0%, #004e92 100%)",
          backgroundImage: "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 0%, transparent 70%)"
        }}
      >
        {/* Background image - Desktop */}
        <div className="absolute inset-0 hidden lg:block">
          <img 
            src="images/KVbg.webp" 
            alt="Background" 
            className="w-full h-full object-cover"
            style={{ transform: "translateX(180px)" }}
          />
        </div>
        
        {/* Background image - Mobile */}
        <div className="absolute inset-0 lg:hidden">
          <img 
            src="images/Cover.webp" 
            alt="Mobile Background" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Background overlay */}
        <div className="absolute inset-0 bg-transparent"></div>
        
        {/* Main content container - Hidden on mobile */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 flex-col lg:flex-row items-center justify-between hidden lg:flex ">
          
          {/* Left side - Logo and text content */}
          <div className="flex-1 text-white mb-8 lg:mb-0">
            {/* Main title with LE-DUO UP branding */}
            <div className="mb-6">
              <div className="flex items-center mb-2">
                <img 
                  src="images/toptext.webp" 
                  alt="MY" 
                  className="h-52 w-auto mr-2"
                />
              </div>
            </div>
            
            {/* Description text */}
            <div className="mb-8 text-lg lg:text-lg text-gray-200 max-w-xl">
              <p className="mb-2">มายคอนเนคได้ทุกไอเดีย!</p>
              <p className="mb-2"> เพียงซื้อ MY World คู่กับ คารามูโจ้ คู่กับ แล้วมาร่วมสนุกกับแคมเปญสุดมันส์!
                พิเศษ! มีของที่ระลึกลิมิเต็ดรอให้สะสม เฉพาะในกิจกรรมนี้เท่านั้น</p>
            </div>
            
            {/* Join button */}
            <button 
              className="bg-black border-2 border-[#24B6E0] font-base text-white font-bold py-3 px-18 rounded-xs transition-all duration-300 text-lg shadow-lg hover:shadow-[0_0_20px_#24B6E0] hover:border-[#00D4FF] hover:text-[#00D4FF]"
              style={{
                boxShadow: "0 0 15px rgba(36, 182, 224, 0.5), inset 0 0 15px rgba(36, 182, 224, 0.1)",
                textShadow: "0 0 50px rgba(36, 182, 224, 0.8)"
              }}
              onClick={() => console.log("Join button clicked")}
            >
              ร่วมกิจกรรม
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerKV;
