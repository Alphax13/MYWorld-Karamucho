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
            src="images/Cover1.png" 
            alt="Background" 
            className="w-full h-full object-cover"
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
      </div>
    </div>
  );
};

export default BannerKV;
