import React from "react";
import { motion } from "framer-motion";

const MobileSlider = ({ slides, currentSlide }) => {
  return (
    <div className="relative w-full max-w-4xl">
      <div className="flex justify-center items-center space-x-8 overflow-hidden">
        {slides.map((slide, index) => (
          <motion.div
            key={slide.id}
            className={`relative transition-all duration-500 ${
              index === currentSlide 
                ? 'scale-110 z-10' 
                : index === (currentSlide - 1 + slides.length) % slides.length || 
                  index === (currentSlide + 1) % slides.length
                ? 'scale-90 opacity-60 z-5'
                : 'scale-75 opacity-30 z-0'
            }`}
            style={{
              transform: `translateX(${(index - currentSlide) * 100}px)`
            }}
          >
            {/* Step Number */}
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 z-20">
              <div className="bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full w-12 h-12 flex items-center justify-center text-white font-bold text-lg neon-glow">
                {slide.id}
              </div>
            </div>
            
            {/* Mobile Frame */}
            <div className="relative mobile-slide">
              <div className="w-64 h-96 bg-gradient-to-b from-gray-800 to-black rounded-3xl p-2 shadow-2xl border-4 border-gray-700">
                <div className="w-full h-full bg-gradient-to-b from-gray-100 to-white rounded-2xl overflow-hidden relative">
                  {/* Status bar */}
                  <div className="absolute top-0 left-0 right-0 h-6 bg-black flex items-center justify-between px-4 text-white text-xs z-10">
                    <span>9:41</span>
                    <div className="flex space-x-1">
                      <div className="w-4 h-2 bg-white rounded-sm"></div>
                      <div className="w-4 h-2 bg-white rounded-sm"></div>
                      <div className="w-4 h-2 bg-white rounded-sm"></div>
                    </div>
                  </div>
                  
                  {/* App content */}
                  <div className="pt-6 h-full">
                    <img 
                      src={slide.image} 
                      alt={slide.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Step indicator overlay */}
                  <div className="absolute bottom-4 left-4 bg-black bg-opacity-70 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {slide.stepText}
                  </div>
                </div>
                {/* Phone notch */}
                <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-20 h-6 bg-black rounded-full"></div>
              </div>
            </div>
            
            {/* Step Description */}
            <div className="text-center mt-6 text-white">
              <h3 className="text-lg font-bold mb-2">{slide.subtitle}</h3>
              <p className="text-sm text-gray-300 max-w-xs">{slide.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MobileSlider;