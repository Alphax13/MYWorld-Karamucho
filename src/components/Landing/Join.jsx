import React, { useState, useEffect } from "react";
import StepHeader from "./StepHeader";
import "./style.css";

const Join = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentDesktopSlide, setCurrentDesktopSlide] = useState(0);

  // Slides data
  const slides = [
    { id: 1, image: "images/w1.png", title: "Step 1" },
    { id: 2, image: "images/w2.png", title: "Step 2" },
    { id: 3, image: "images/w3.png", title: "Step 3" },
    { id: 4, image: "images/w4.png", title: "Step 4" },
    { id: 5, image: "images/w5.png", title: "Step 5" },
    { id: 6, image: "images/w6.png", title: "Step 6" },
    { id: 7, image: "images/w7.png", title: "Step 7" },
    { id: 8, image: "images/w8.png", title: "Step 8" },
    { id: 9, image: "images/w9.png", title: "Step 9" },
  ];

  // Group slides for desktop (3 columns)
  const slideGroups = [];
  for (let i = 0; i < slides.length; i += 3) {
    slideGroups.push(slides.slice(i, i + 3));
  }

  // Auto-slide functionality for mobile
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="bg-black py-6 md:py-10">
      <div className="max-w-7xl mx-auto px-2 md:px-4 py-2 md:py-4">
        {/* First Title Section */}
        <div className="animate-fadeInUp mb-4 md:mb-8">
          {/* Desktop Version */}
          <div className="hidden md:block">
            <StepHeader 
              imageSrc="images/join.png"
              altText="วิธีการใช้งาน"
              className="hover-glow"
            />
          </div>
          {/* Mobile Version */}
          <div className="block md:hidden">
            <StepHeader 
              imageSrc="images/join2.png"
              altText="วิธีการใช้งาน"
              className="hover-glow"
            />
          </div>
        </div>

        {/* Desktop and Mobile Slider */}
        <div className="relative max-w-6xl mx-auto">
          {/* Desktop View - Show 3 columns with arrows */}
          <div className="hidden lg:block relative">
            {/* Left Arrow for Desktop */}
            <button 
              onClick={() => setCurrentDesktopSlide((prev) => (prev - 1 + slideGroups.length) % slideGroups.length)}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 text-white p-3 rounded-full shadow-lg transition-all duration-300 neon-glow animate-fadeInLeft animate-neonPulse hover-scale"
              style={{ marginLeft: '-60px' }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Right Arrow for Desktop */}
            <button 
              onClick={() => setCurrentDesktopSlide((prev) => (prev + 1) % slideGroups.length)}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 text-white p-3 rounded-full shadow-lg transition-all duration-300 neon-glow animate-fadeInRight animate-neonPulse hover-scale"
              style={{ marginRight: '-60px' }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Slider Container */}
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentDesktopSlide * 100}%)` }}
              >
                {slideGroups.map((group, groupIndex) => (
                  <div key={groupIndex} className="w-full flex-shrink-0">
                    <div className="grid grid-cols-3 gap-4 px-2">
                      {group.map((slide, index) => (
                        <div
                          key={slide.id}
                          className="relative text-center animate-fadeInUp hover-scale"
                          style={{ animationDelay: `${index * 0.1}s` }}
                        >
                          <img 
                            src={slide.image} 
                            className="w-full h-auto object-contain mx-auto"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Desktop Pagination Dots */}
            <div className="flex justify-center space-x-3 mt-8 animate-fadeInUp animate-delay-300">
              {slideGroups.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentDesktopSlide(index)}
                  className={`pagination-dot hover-scale animate-bounce ${
                    index === currentDesktopSlide ? 'active' : ''
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="dot-inner"></div>
                </button>
              ))}
            </div>
          </div>

          {/* Mobile View - Show 1 column with slider */}
          <div className="lg:hidden w-full px-1">
            <div className="relative w-full overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {slides.map((slide, index) => (
                  <div key={slide.id} className="w-full flex-shrink-0 px-2">
                    <div className="relative text-center animate-fadeInUp hover-scale">
                      <div className="relative max-w-md mx-auto">
                        <img 
                          src={slide.image} 
                          alt={slide.title}
                          className="w-full h-auto object-contain mx-auto"
                          style={{ maxHeight: '450px', minHeight: '350px' }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Navigation with Arrows and Dots in same row */}
            <div className="flex items-center justify-center space-x-3 mt-4 mb-4 animate-fadeInUp animate-delay-200">
              {/* Left Arrow for Mobile */}
              <button 
                onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
                className="text-white p-2 rounded-full shadow-lg transition-all duration-300 neon-glow animate-pulse hover-scale flex-shrink-0"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Mobile Pagination Dots */}
              <div className="flex justify-center space-x-2 overflow-x-auto px-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`mobile-pagination-dot hover-scale animate-bounce flex-shrink-0 ${
                      index === currentSlide ? 'active' : ''
                    }`}
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                  </button>
                ))}
              </div>

              {/* Right Arrow for Mobile */}
              <button 
                onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
                className="text-white p-2 rounded-full shadow-lg transition-all duration-300 neon-glow animate-pulse hover-scale flex-shrink-0"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Second Title Section */}
        <div className="pt-6 md:pt-8 animate-fadeInUp animate-delay-400">
          {/* Desktop Version */}
          <div className="hidden md:block">
            <StepHeader 
              imageSrc="images/texttime.png"
              altText="ระบบจองออนไลน์"
              className="hover-glow"
            />
          </div>
          {/* Mobile Version */}
          <div className="block md:hidden">
            <StepHeader 
              imageSrc="images/texttime2.png"
              altText=""
              className="hover-glow"
            />
          </div>
        </div>

        {/* Information Text Section */}
        <div className="max-w-6xl mx-auto px-2 md:px-4 pb-6 md:pb-8 animate-fadeInUp animate-delay-300">
          <div className="">
            {/* Desktop Version - Show Text */}
            <p className="hidden md:block text-white text-lg leading-relaxed mb-6 animate-fadeInLeft px-2">
             กิจกรรมสร้างสรรค์คาถา ต่อ ติด ผี สามารถร่วมสนุกได้ตั้งแต่ วันที่ <span className="font-bold">20 กันยายน - 3 ตุลาคม 2568</span>
            และ<span className="font-bold">ประกาศผลผู้มีสิทธิ์ร่วมกิจกรรมลุยภารกิจ ต่อ ติด ผี วันที่ 8 ตุลาคม 2568 ผ่านช่องทาง Facebook: MY WORLD และ TikTok: MY WORLD </span>
             โดยผู้มีสิทธิ์ร่วมกิจกรรมจะต้องยืนยันสิทธิ์การเข้าร่วมผ่านช่องทาง inbox ของ Facebook หรือ TikTok ภายใน 17.00 น. ของวันที่ 10 ตุลาคม 2568
            </p>
            
            {/* Mobile Version - Show Image */}
            <div className="block md:hidden mb-4 animate-fadeInLeft">
                <p className="text-white text-lg leading-relaxed px-2 -mt-5 text-center">กิจกรรมสร้างสรรค์คาถา ต่อ ติด ผี </p>
                 <p className="text-white text-lg leading-relaxed px-2 mb-5 text-center">สามารถร่วมสนุกได้ตั้งแต่ วันที่</p>
              <img 
                src="images/date.png" 
                alt="รายละเอียดกิจกรรม" 
                className="w-full h-auto object-contain mx-auto hover-scale hover-glow"
              />
              <p className="text-white text-base text-center leading-relaxed px-2 -mt-16">
                และ<span className="font-bold">ประกาศผลผู้มีสิทธิ์ร่วมกิจกรรมลุยภารกิจ ต่อ ติด ผี วันที่ 8 ตุลาคม 2568 ผ่านช่องทาง Facebook: MY WORLD และ TikTok: MY WORLD </span>
                โดยผู้มีสิทธิ์ร่วมกิจกรรมจะต้องยืนยันสิทธิ์การเข้าร่วมผ่านช่องทาง inbox ของ Facebook หรือ TikTok ภายใน 17.00 น. ของวันที่ 10 ตุลาคม 2568
              </p>
            </div>
            
            <div className="border-gray-700 pt-4 md:pt-6">
              {/* 2 Column Layout */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 items-start">
                {/* Left Column - Image */}
                <div className="hidden md:flex justify-center animate-fadeInLeft animate-delay-200 order-2 md:order-1">
                  <img 
                    src="images/winner.png" 
                    alt="เงื่อนไขการจอง" 
                    className="w-full h-auto object-contain max-w-xs md:max-w-sm hover-scale hover-glow"
                  />
                </div>
                
                {/* Right Column - Text */}
                <div className="animate-fadeInRight animate-delay-300 order-1 md:order-2 px-2">
                    {/* Desktop Version - Show Text Header */}
                    <h1 className="hidden md:block text-3xl font-semibold text-white text-center bg-[#241E20] p-4 mb-5 hover-scale">
                      รายละเอียด <span className="text-[#24B6E0]">ของรางวัล</span>
                    </h1>
                    
                    {/* Mobile Version - Show Images */}
                    <div className="block md:hidden mb-3 text-center">
                      {/* Winner Image for Mobile */}
                      <img 
                        src="images/winner.png" 
                        alt="เงื่อนไขการจอง" 
                        className="w-full h-auto object-contain mx-auto hover-scale hover-glow mb-3 -mt-10 max-w-xl"
                      />
                      {/* Detail Header Image for Mobile */}
                      <img 
                        src="images/detail.png" 
                        alt="รายละเอียดของรางวัล" 
                        className="w-full h-auto object-contain mx-auto hover-scale hover-glow"
                      />
                    </div>
                    <ul className="list-disc list-inside space-y-2 md:space-y-3 text-white text-sm md:text-base">
                        <li className="animate-fadeInUp animate-delay-100">
                          ผู้ที่ร่วมสร้างสรรค์คาถา ต่อ ติด ผี ที่ทำถูกกติกา ลงคลิปภายในระยะเวลาจัดกิจกรรม และถูกใจคณะกรรมการฯ ที่สุด จะได้รับ MY World x คารามูโจ้ Tumbler มูลค่ารางวัลละ 390 บาท จำนวน 50 รางวัล
                        </li>
                        <li className="animate-fadeInUp animate-delay-200">
                          ผู้ที่ได้เข้าร่วมกิจกรรมลุยภารกิจ ต่อ ติด ผี รอบคัดเลือกจะได้รับเงินรางวัลสูงสุดคู่ละ 20,000 บาท ต่อรอบ
                        </li>
                        <li className="animate-fadeInUp animate-delay-300">
                          ผู้ที่ได้เข้าร่วมกิจกรรมลุยภารกิจ ต่อ ติด ผี รอบ Final Mission จะได้รับเงินรางวัลสูงสุดคู่ละ 80,000 บาท
                        </li>
                        <li className="animate-fadeInUp animate-delay-400">
                          รวมมูลค่าของรางวัลตลอดกิจกรรมสูงสุด <span className="font-bold">237,200 บาท</span>
                        </li>
                    </ul>
                    <p className="text-white text-base md:text-base font-black mt-5">หมายเหตุ</p>
                    <ul className="list-disc list-inside space-y-2 md:space-y-3 text-white text-sm md:text-base">
                        <li className="animate-fadeInUp animate-delay-500">
                            ของรางวัล MY World x คารามูโจ้ Tumbler จะเริ่มทำการจัดส่ง ตั้งแต่วันที่ 15 ตุลาคม– 14 พฤศจิกายน 2568
                        </li>
                        <li className="animate-fadeInUp animate-delay-600">
                            ผู้โชคดีที่ได้รับรางวัลมีหน้าที่รับผิดชอบภาษีหัก ณ ที่จ่ายตามที่กฎหมายกำหนด
                        </li>
                    </ul>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Join;