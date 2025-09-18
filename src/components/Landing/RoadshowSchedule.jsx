import React from 'react';

const RoadshowSchedule = () => {

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Desktop Background */}
      <div className="absolute inset-0 hidden md:block">
        <img 
          src="images/Background.png" 
          alt="Desktop Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0"></div>
      </div>

      {/* Mobile Background */}
      <div className="absolute inset-0 block md:hidden">
        <img 
          src="images/Background2.png" 
          alt="Mobile Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="flex flex-col max-w-7xl mx-auto relative z-10 px-4 py-4 md:py-8 h-auto">
        {/* Desktop Version - Image + Text */}
        <div className="hidden md:flex justify-center flex-shrink-0 mb-4 md:mb-8 gap-4">
          <img src="images/arrow.png" alt="Arrow" className="w-16 h-16 md:w-20 md:h-20" />
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold bg-[#241E20] text-white px-4 md:px-6 py-2 md:py-3 rounded-lg flex items-center gap-3">
            ตารางกิจกรรม Roadshow
          </h2>
        </div>

        {/* Mobile Version - Image Only */}
        <div className="flex md:hidden justify-center flex-shrink-0 mb-4 md:mb-8">
          <img src="images/show.png" alt="Arrow" className="w-full h-auto max-w-sm" />
        </div>
        
        <div className="flex-1 grid lg:grid-cols-2 gap-4 md:gap-8 items-center min-h-0">
          {/* Left Column - Map */}
          <div className="relative lg:order-1 flex items-center justify-center">
            <div className="relative w-full max-w-lg mx-auto">
              <img 
                src="images/map.png" 
                alt="Thailand Map with Roadshow Locations" 
                className="w-full h-auto max-h-auto md:max-h-[60vh] lg:max-h-[65vh] object-contain rounded-lg"
              />
            </div>
          </div>

          {/* Right Column - Branding & Schedule List - Hidden on Mobile */}
          <div className="hidden lg:flex lg:order-2 items-center justify-center">
            <div className="w-full text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start">
                <img src="images/pin.png" alt="MY World" className="w-[60%] max-w-sm lg:max-w-md h-auto" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoadshowSchedule;