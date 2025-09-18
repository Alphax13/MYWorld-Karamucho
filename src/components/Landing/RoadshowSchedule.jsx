import React from 'react';

const RoadshowSchedule = () => {
  const scheduleData = [
    {
      date: 'วันที่ 15 ตุลาคม 2568',
      location: 'ถิ่น ติ่ง ที่ ศึกษาเทพ จันทบุรี 5 ชั้น'
    },
    {
      date: 'วันที่ 17 ตุลาคม 2568', 
      location: 'ถิ่น ติ่ง ที่ ศึกษาเทพ จันทบุรี 5 ชั้น'
    },
    {
      date: 'วันที่ 22 ตุลาคม 2568',
      location: 'ถิ่น ติ่ง ที่ ศึกษาเทพ จันทบุรี 5 ชั้น'
    },
    {
      date: 'วันที่ 24 ตุลาคม 2568',
      location: 'ถิ่น ติ่ง ที่ ศึกษาเทพ จันทบุรี 5 ชั้น'
    }
  ];

  return (
    <div className="max-h-screen relative overflow-hidden">
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

      <div className="h-full flex flex-col max-w-7xl mx-auto relative z-10 px-4 py-8">
        {/* Desktop Version - Image + Text */}
        <div className="hidden md:flex justify-center flex-shrink-0 mb-8 gap-4">
          <img src="images/arrow.png" alt="Arrow" className="w-20 h-20" />
          <h2 className="text-3xl md:text-4xl font-bold bg-[#241E20] text-white px-6 py-3 rounded-lg drop-shadow-lg flex items-center gap-3">
            ตารางกิจกรรม Roadshow
          </h2>
        </div>

        {/* Mobile Version - Image Only */}
        <div className="flex md:hidden justify-center flex-shrink-0 mb-8">
          <img src="images/show.png" alt="Arrow" className="w-full h-auto" />
        </div>
        
        <div className="flex-1 grid lg:grid-cols-2 gap-8 items-center min-h-0">
          {/* Left Column - Map */}
          <div className="relative lg:order-1 h-full flex items-center">
            <div className="relative w-full">
              <img 
                src="images/map.png" 
                alt="Thailand Map with Roadshow Locations" 
                className="w-full h-auto max-h-[75vh] object-contain rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Right Column - Branding & Schedule List - Hidden on Mobile */}
          <div className="hidden lg:flex lg:order-2 h-full items-center">
            <div className="w-full text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start">
                <img src="images/pin.png" alt="MY World" className="w-full max-w-md h-auto" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoadshowSchedule;