import React from 'react';

const RoadshowSchedule = () => {

  return (
    <div className="hidden md:block min-h-screen relative overflow-hidden -mt-10">
      {/* Desktop Background */}
      <div className="absolute inset-0">
        <img 
          src="images/Background.png" 
          alt="Desktop Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      <div className="flex flex-col max-w-7xl mx-auto relative z-10 px-4 py-4 h-auto mt-10">
        {/* Header Text */}
        <div className="flex justify-center flex-shrink-0 mb-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold bg-[#241E20] text-white px-6 py-3 rounded-lg">
            ตารางกิจกรรม Roadshow
          </h2>
        </div>
        
        <div className="flex-1 grid grid-cols-2 gap-4 items-center min-h-0">
          {/* Left Column - Map */}
          <div className="relative flex items-center justify-center">
            <div className="relative w-full max-w-lg mx-auto">
              <img 
                src="images/mapttha.png"
                alt="Thailand Map with Roadshow Locations" 
                className="w-full h-[600px] object-contain rounded-lg"
              />
            </div>
          </div>

          {/* Right Column - Additional Image */}
          <div className="flex items-center justify-center">
            <div className="w-full text-center">
              <img 
                src="images/pin.png" 
                alt="Event Dates" 
                className="w-full h-auto max-w-sm mx-auto object-contain" 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoadshowSchedule;