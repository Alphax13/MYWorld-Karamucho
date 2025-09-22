import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import StepHeader from "./StepHeader";
import "./style.css";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.8, 
      ease: "easeOut" 
    } 
  },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { 
      duration: 0.8, 
      ease: "easeOut" 
    } 
  },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { 
      duration: 0.8, 
      ease: "easeOut" 
    } 
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.6,
      ease: "easeOut" 
    } 
  },
};

const scaleHover = {
  scale: 1.05,
  transition: { duration: 0.3 }
};

const slideToggle = {
  hidden: {
    opacity: 0,
    height: 0,
    marginTop: 0,
    marginBottom: 0,
    overflow: 'hidden',
    transition: {
      duration: 0.8,
      ease: [0.4, 0.0, 0.2, 1]
    }
  },
  visible: {
    opacity: 1,
    height: 'auto',
    marginTop: '1.5rem',
    marginBottom: '1.5rem',
    overflow: 'visible',
    transition: {
      duration: 0.8,
      ease: [0.4, 0.0, 0.2, 1]
    }
  }
};

const Join = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentDesktopSlide, setCurrentDesktopSlide] = useState(0);
  const [isTimeContentVisible, setIsTimeContentVisible] = useState(false);
  const [isPrizeContentVisible, setIsPrizeContentVisible] = useState(false);

  // Toggle time content visibility
  const toggleTimeContent = () => {
    setIsTimeContentVisible(!isTimeContentVisible);
  };

  // Toggle prize content visibility
  const togglePrizeContent = () => {
    setIsPrizeContentVisible(!isPrizeContentVisible);
  };

  // Scroll to section function
  const scrollToSection = (className) => {
    const element = document.querySelector(`.${className}`);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

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
  ];

  // Group slides for desktop (3 columns)
  const slideGroups = [];
  for (let i = 0; i < slides.length; i += 3) {
    slideGroups.push(slides.slice(i, i + 3));
  }

  return (
    <motion.div 
      className="bg-black py-6 pb-0 md:py-10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.0 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto md:px-4 py-2 md:py-4">
        {/* First Title Section */}
        <motion.div 
          className="mb-4 md:mb-8"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Desktop Version */}
          <motion.div 
            className="hidden md:block text-left"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex justify-start">
              <StepHeader 
                imageSrc="images/rune.png"
                altText="วิธีการใช้งาน"
                className="hover-glow"
              />
            </div>
          </motion.div>
          {/* Mobile Version */}
          <motion.div 
            className="hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <StepHeader 
              imageSrc="images/rune.png"
              altText="วิธีการใช้งาน"
              className="hover-glow"
            />
          </motion.div>
        </motion.div>

        {/* Desktop and Mobile Slider */}
        <div className="relative max-w-6xl mx-auto">
          {/* Desktop View - Show 3 columns with arrows */}
          <div className="hidden lg:block relative gap-5">
            {/* Left Arrow for Desktop */}
            <motion.button 
              onClick={() => setCurrentDesktopSlide((prev) => (prev - 1 + slideGroups.length) % slideGroups.length)}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-black border-2 border-cyan-400 text-cyan-400 hover:border-cyan-300 hover:text-cyan-300 flex items-center justify-center transition-all duration-300 shadow-lg shadow-cyan-400/30 hover:shadow-cyan-300/50 hover:shadow-xl"
              style={{ 
                marginLeft: '-60px',
                boxShadow: '0 0 20px rgba(34, 211, 238, 0.3), inset 0 0 20px rgba(34, 211, 238, 0.1)',
              }}
              whileHover={{ 
                scale: 1.1,
                boxShadow: '0 0 30px rgba(34, 211, 238, 0.6), inset 0 0 30px rgba(34, 211, 238, 0.2)',
              }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <motion.svg 
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                whileHover={{ x: -3 }}
                transition={{ duration: 0.2 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </motion.svg>
            </motion.button>

            {/* Right Arrow for Desktop */}
            <motion.button 
              onClick={() => setCurrentDesktopSlide((prev) => (prev + 1) % slideGroups.length)}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-black border-2 border-cyan-400 text-cyan-400 hover:border-cyan-300 hover:text-cyan-300 flex items-center justify-center transition-all duration-300 shadow-lg shadow-cyan-400/30 hover:shadow-cyan-300/50 hover:shadow-xl"
              style={{ 
                marginRight: '-60px',
                boxShadow: '0 0 20px rgba(34, 211, 238, 0.3), inset 0 0 20px rgba(34, 211, 238, 0.1)',
              }}
              whileHover={{ 
                scale: 1.1,
                boxShadow: '0 0 30px rgba(34, 211, 238, 0.6), inset 0 0 30px rgba(34, 211, 238, 0.2)',
              }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <motion.svg 
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                whileHover={{ x: 3 }}
                transition={{ duration: 0.2 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </motion.svg>
            </motion.button>

            {/* Slider Container */}
            <motion.div 
              className="overflow-hidden"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentDesktopSlide * 100}%)` }}
              >
                {slideGroups.map((group, groupIndex) => (
                  <div key={groupIndex} className="w-full flex-shrink-0">
                    <motion.div 
                      className="grid grid-cols-3 gap-4 px-2"
                      variants={staggerContainer}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.3 }}
                    >
                      {group.map((slide, index) => (
                        <motion.div
                          key={slide.id}
                          className="relative text-center"
                          variants={staggerItem}
                          whileHover={{ 
                            scale: 1.05,
                            y: -10,
                            transition: { duration: 0.3 }
                          }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <motion.img 
                            src={slide.image} 
                            className="w-full h-auto object-contain mx-auto"
                            whileHover={{ 
                              filter: "brightness(1.1)",
                              transition: { duration: 0.3 }
                            }}
                          />
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Desktop Pagination Dots */}
            <motion.div 
              className="flex justify-center space-x-3 mt-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
            >
              {slideGroups.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentDesktopSlide(index)}
                  className={`pagination-dot hover-scale ${
                    index === currentDesktopSlide ? 'active' : ''
                  }`}
                  variants={staggerItem}
                  whileHover={{ 
                    scale: 1.3,
                    boxShadow: "0 0 15px rgba(36, 182, 224, 0.8)"
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <div className="dot-inner"></div>
                </motion.button>
              ))}
            </motion.div>

            {/* Desktop Action Buttons */}
            <motion.div 
              className="flex flex-row justify-center space-x-8 mt-8 relative z-10"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 1.0 }}
            >
              <motion.button
                onClick={toggleTimeContent}
                className={`font-bold py-3 px-6 rounded-full text-lg shadow-lg transition-all duration-300 ${
                  isTimeContentVisible 
                    ? 'bg-gradient-to-r from-[#FF6B6B] to-[#FF8E53] hover:from-[#FF7979] hover:to-[#FD79A8] text-white' 
                    : 'bg-gradient-to-r from-[#7DD4ED] to-[#1A94B7] hover:from-[#8DDDF0] hover:to-[#2BA3C7] text-white'
                }`}
                style={{
                  boxShadow: isTimeContentVisible 
                    ? '0 0 25px rgba(255, 107, 107, 0.6), 0 0 35px rgba(255, 142, 83, 0.4), inset 0 0 20px rgba(255, 107, 107, 0.2)'
                    : '0 0 25px rgba(125, 212, 237, 0.6), 0 0 35px rgba(26, 148, 183, 0.4), inset 0 0 20px rgba(125, 212, 237, 0.2)',
                  textShadow: isTimeContentVisible 
                    ? '0 0 10px rgba(255, 107, 107, 0.9), 0 0 20px rgba(255, 107, 107, 0.7), 0 0 30px rgba(255, 107, 107, 0.5)'
                    : '0 0 10px rgba(125, 212, 237, 0.9), 0 0 20px rgba(125, 212, 237, 0.7), 0 0 30px rgba(125, 212, 237, 0.5)',
                }}
                variants={staggerItem}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: isTimeContentVisible
                    ? '0 0 35px rgba(255, 107, 107, 0.8), 0 0 45px rgba(255, 142, 83, 0.6), inset 0 0 25px rgba(255, 107, 107, 0.3)'
                    : '0 0 35px rgba(125, 212, 237, 0.8), 0 0 45px rgba(26, 148, 183, 0.6), inset 0 0 25px rgba(125, 212, 237, 0.3)',
                  textShadow: isTimeContentVisible
                    ? '0 0 15px rgba(255, 107, 107, 1), 0 0 25px rgba(255, 107, 107, 0.8), 0 0 35px rgba(255, 107, 107, 0.6), 0 0 45px rgba(255, 107, 107, 0.4)'
                    : '0 0 15px rgba(125, 212, 237, 1), 0 0 25px rgba(125, 212, 237, 0.8), 0 0 35px rgba(125, 212, 237, 0.6), 0 0 45px rgba(125, 212, 237, 0.4)',
                }}
                whileTap={{ scale: 0.98 }}
              >
                ระยะเวลาร่วมกิจกรรม
              </motion.button>

              <motion.button
                onClick={togglePrizeContent}
                className={`font-bold py-3 px-6 rounded-full text-lg shadow-lg transition-all duration-300 ${
                  isPrizeContentVisible 
                    ? 'bg-gradient-to-r from-[#FF6B6B] to-[#FF8E53] hover:from-[#FF7979] hover:to-[#FD79A8] text-white' 
                    : 'bg-gradient-to-r from-[#7DD4ED] to-[#1A94B7] hover:from-[#8DDDF0] hover:to-[#2BA3C7] text-white'
                }`}
                style={{
                  boxShadow: isPrizeContentVisible 
                    ? '0 0 25px rgba(255, 107, 107, 0.6), 0 0 35px rgba(255, 142, 83, 0.4), inset 0 0 20px rgba(255, 107, 107, 0.2)'
                    : '0 0 25px rgba(125, 212, 237, 0.6), 0 0 35px rgba(26, 148, 183, 0.4), inset 0 0 20px rgba(125, 212, 237, 0.2)',
                  textShadow: isPrizeContentVisible 
                    ? '0 0 10px rgba(255, 107, 107, 0.9), 0 0 20px rgba(255, 107, 107, 0.7), 0 0 30px rgba(255, 107, 107, 0.5)'
                    : '0 0 10px rgba(125, 212, 237, 0.9), 0 0 20px rgba(125, 212, 237, 0.7), 0 0 30px rgba(125, 212, 237, 0.5)',
                }}
                variants={staggerItem}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: isPrizeContentVisible
                    ? '0 0 35px rgba(255, 107, 107, 0.8), 0 0 45px rgba(255, 142, 83, 0.6), inset 0 0 25px rgba(255, 107, 107, 0.3)'
                    : '0 0 35px rgba(125, 212, 237, 0.8), 0 0 45px rgba(26, 148, 183, 0.6), inset 0 0 25px rgba(125, 212, 237, 0.3)',
                  textShadow: isPrizeContentVisible
                    ? '0 0 15px rgba(255, 107, 107, 1), 0 0 25px rgba(255, 107, 107, 0.8), 0 0 35px rgba(255, 107, 107, 0.6), 0 0 45px rgba(255, 107, 107, 0.4)'
                    : '0 0 15px rgba(125, 212, 237, 1), 0 0 25px rgba(125, 212, 237, 0.8), 0 0 35px rgba(125, 212, 237, 0.6), 0 0 45px rgba(125, 212, 237, 0.4)',
                }}
                whileTap={{ scale: 0.98 }}
              >
                รายละเอียดของรางวัล
              </motion.button>
            </motion.div>


          </div>

          {/* Mobile View - Show 1 column with slider */}
          <motion.div 
            className="lg:hidden w-full px-1 relative"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Mobile Header - Inside mobile container */}
            <motion.div 
              className="mb-6 relative z-20"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.div 
                className="block md:hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <StepHeader 
                  imageSrc="images/rune.png"
                  altText="วิธีการใช้งาน"
                  className="hover-glow"
                />
              </motion.div>
            </motion.div>

            {/* Background image for mobile */}
            <div className="absolute inset-0 -mx-1 pointer-events-none">
              <motion.div 
                className="absolute inset-0 w-full h-full"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                animate={{ 
                  scale: [1, 1.01, 1],
                  opacity: [0.2, 0.3, 0.2]
                }}
                style={{
                  backgroundImage: "url('images/cover4.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  zIndex: 0
                }}
              />
            </div>

            <div className="relative w-full overflow-hidden -mt-10 z-10">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {slides.map((slide, index) => (
                  <div key={slide.id} className="w-full flex-shrink-0 px-2">
                    <motion.div 
                      className="relative text-center"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ 
                        scale: 1.02,
                        y: -5,
                        transition: { duration: 0.3 }
                      }}
                    >
                      <div className="relative max-w-md mx-auto">
                        <motion.img 
                          src={slide.image} 
                          alt={slide.title}
                          className="w-full h-auto object-contain mx-auto"
                          style={{ maxHeight: '450px', minHeight: '350px' }}
                          whileHover={{ 
                            filter: "brightness(1.1)",
                            transition: { duration: 0.3 }
                          }}
                          animate={{ 
                            y: [0, -2, 0],
                            transition: { 
                              duration: 3, 
                              repeat: Infinity, 
                              ease: "easeInOut" 
                            }
                          }}
                        />
                      </div>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Navigation with Arrows and Dots in same row */}
            <motion.div 
              className="flex items-center justify-center space-x-3 mt-4 mb-4 relative z-30"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              {/* Left Arrow for Mobile */}
              <motion.button 
                onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
                className="w-12 h-12 rounded-full bg-black border-2 border-cyan-400 text-cyan-400 hover:border-cyan-300 hover:text-cyan-300 flex items-center justify-center transition-all duration-300 shadow-lg shadow-cyan-400/30 hover:shadow-cyan-300/50 hover:shadow-xl flex-shrink-0 relative z-30"
                style={{
                  boxShadow: '0 0 20px rgba(34, 211, 238, 0.3), inset 0 0 20px rgba(34, 211, 238, 0.1)',
                }}
                whileHover={{ 
                  scale: 1.1,
                  boxShadow: '0 0 30px rgba(34, 211, 238, 0.6), inset 0 0 30px rgba(34, 211, 238, 0.2)',
                }}
                whileTap={{ scale: 0.9 }}
              >
                <motion.svg 
                  className="w-4 h-4" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  whileHover={{ x: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                </motion.svg>
              </motion.button>

              {/* Mobile Pagination Dots */}
              <motion.div 
                className="flex justify-center space-x-2 overflow-x-auto px-2"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {slides.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`mobile-pagination-dot flex-shrink-0 ${
                      index === currentSlide ? 'active' : ''
                    }`}
                    variants={staggerItem}
                    whileHover={{ 
                      scale: 1.3,
                      boxShadow: "0 0 10px rgba(36, 182, 224, 0.8)"
                    }}
                    whileTap={{ scale: 0.9 }}
                  >
                  </motion.button>
                ))}
              </motion.div>

              {/* Right Arrow for Mobile */}
              <motion.button 
                onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
                className="w-12 h-12 rounded-full bg-black border-2 border-cyan-400 text-cyan-400 hover:border-cyan-300 hover:text-cyan-300 flex items-center justify-center transition-all duration-300 shadow-lg shadow-cyan-400/30 hover:shadow-cyan-300/50 hover:shadow-xl flex-shrink-0 relative z-30"
                style={{
                  boxShadow: '0 0 20px rgba(34, 211, 238, 0.3), inset 0 0 20px rgba(34, 211, 238, 0.1)',
                }}
                whileHover={{ 
                  scale: 1.1,
                  boxShadow: '0 0 30px rgba(34, 211, 238, 0.6), inset 0 0 30px rgba(34, 211, 238, 0.2)',
                }}
                whileTap={{ scale: 0.9 }}
              >
                <motion.svg 
                  className="w-4 h-4" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  whileHover={{ x: 2 }}
                  transition={{ duration: 0.2 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </motion.svg>
              </motion.button>
            </motion.div>

            {/* Mobile Action Buttons */}
            <motion.div 
              className="flex flex-col space-y-5 mt-6 pb-6 px-8 relative z-10"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <motion.button
                onClick={toggleTimeContent}
                className={`font-bold py-3 px-4 rounded-full text-base shadow-lg transition-all duration-300 ${
                  isTimeContentVisible 
                    ? 'bg-gradient-to-r from-[#FF6B6B] to-[#FF8E53] hover:from-[#FF7979] hover:to-[#FD79A8] text-white' 
                    : 'bg-gradient-to-r from-[#7DD4ED] to-[#1A94B7] hover:from-[#8DDDF0] hover:to-[#2BA3C7] text-white'
                }`}
                style={{
                  boxShadow: isTimeContentVisible 
                    ? '0 0 25px rgba(255, 107, 107, 0.6), 0 0 35px rgba(255, 142, 83, 0.4), inset 0 0 20px rgba(255, 107, 107, 0.2)'
                    : '0 0 25px rgba(125, 212, 237, 0.6), 0 0 35px rgba(26, 148, 183, 0.4), inset 0 0 20px rgba(125, 212, 237, 0.2)',
                  textShadow: isTimeContentVisible 
                    ? '0 0 10px rgba(255, 107, 107, 0.9), 0 0 20px rgba(255, 107, 107, 0.7), 0 0 30px rgba(255, 107, 107, 0.5)'
                    : '0 0 10px rgba(125, 212, 237, 0.9), 0 0 20px rgba(125, 212, 237, 0.7), 0 0 30px rgba(125, 212, 237, 0.5)',
                }}
                variants={staggerItem}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: isTimeContentVisible
                    ? '0 0 35px rgba(255, 107, 107, 0.8), 0 0 45px rgba(255, 142, 83, 0.6), inset 0 0 25px rgba(255, 107, 107, 0.3)'
                    : '0 0 35px rgba(125, 212, 237, 0.8), 0 0 45px rgba(26, 148, 183, 0.6), inset 0 0 25px rgba(125, 212, 237, 0.3)',
                  textShadow: isTimeContentVisible
                    ? '0 0 15px rgba(255, 107, 107, 1), 0 0 25px rgba(255, 107, 107, 0.8), 0 0 35px rgba(255, 107, 107, 0.6), 0 0 45px rgba(255, 107, 107, 0.4)'
                    : '0 0 15px rgba(125, 212, 237, 1), 0 0 25px rgba(125, 212, 237, 0.8), 0 0 35px rgba(125, 212, 237, 0.6), 0 0 45px rgba(125, 212, 237, 0.4)',
                }}
                whileTap={{ scale: 0.98 }}
              >
                {isTimeContentVisible ? 'ระยะเวลาร่วมกิจกรรม' : ' ระยะเวลาร่วมกิจกรรม'}
              </motion.button>

              <motion.button
                onClick={togglePrizeContent}
                className={`font-bold py-3 px-4 rounded-full text-base shadow-lg transition-all duration-300 ${
                  isPrizeContentVisible 
                    ? 'bg-gradient-to-r from-[#FF6B6B] to-[#FF8E53] hover:from-[#FF7979] hover:to-[#FD79A8] text-white' 
                    : 'bg-gradient-to-r from-[#7DD4ED] to-[#1A94B7] hover:from-[#8DDDF0] hover:to-[#2BA3C7] text-white'
                }`}
                style={{
                  boxShadow: isPrizeContentVisible 
                    ? '0 0 25px rgba(255, 107, 107, 0.6), 0 0 35px rgba(255, 142, 83, 0.4), inset 0 0 20px rgba(255, 107, 107, 0.2)'
                    : '0 0 25px rgba(125, 212, 237, 0.6), 0 0 35px rgba(26, 148, 183, 0.4), inset 0 0 20px rgba(125, 212, 237, 0.2)',
                  textShadow: isPrizeContentVisible 
                    ? '0 0 10px rgba(255, 107, 107, 0.9), 0 0 20px rgba(255, 107, 107, 0.7), 0 0 30px rgba(255, 107, 107, 0.5)'
                    : '0 0 10px rgba(125, 212, 237, 0.9), 0 0 20px rgba(125, 212, 237, 0.7), 0 0 30px rgba(125, 212, 237, 0.5)',
                }}
                variants={staggerItem}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: isPrizeContentVisible
                    ? '0 0 35px rgba(255, 107, 107, 0.8), 0 0 45px rgba(255, 142, 83, 0.6), inset 0 0 25px rgba(255, 107, 107, 0.3)'
                    : '0 0 35px rgba(125, 212, 237, 0.8), 0 0 45px rgba(26, 148, 183, 0.6), inset 0 0 25px rgba(125, 212, 237, 0.3)',
                  textShadow: isPrizeContentVisible
                    ? '0 0 15px rgba(255, 107, 107, 1), 0 0 25px rgba(255, 107, 107, 0.8), 0 0 35px rgba(255, 107, 107, 0.6), 0 0 45px rgba(255, 107, 107, 0.4)'
                    : '0 0 15px rgba(125, 212, 237, 1), 0 0 25px rgba(125, 212, 237, 0.8), 0 0 35px rgba(125, 212, 237, 0.6), 0 0 45px rgba(125, 212, 237, 0.4)',
                }}
                whileTap={{ scale: 0.98 }}
              >
                {isPrizeContentVisible ? 'รายละเอียดของรางวัล' : 'รายละเอียดของรางวัล'}
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Second Title Section */}
        <motion.div 
          className="TextTimeSection"
          variants={slideToggle}
          initial="hidden"
          animate={isTimeContentVisible ? "visible" : "hidden"}
        >
          <motion.div 
            className="pt-6 md:pt-8"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.6 }}
          >
            {/* Desktop Version */}
            <motion.div 
              className="hidden md:block"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <StepHeader 
                imageSrc="images/texttime.png"
                altText="ระบบจองออนไลน์"
                className="hover-glow"
              />
            </motion.div>
            {/* Mobile Version */}
          </motion.div>

          {/* Information Text Section */}
          <motion.div 
            className="max-w-6xl mx-auto md:px-4  md:pb-8"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.8 }}
          >
          <div className="TextSection">
            {/* Desktop Version - Show Text */}
            <p className="hidden md:block text-white text-lg leading-relaxed mb-4 animate-fadeInLeft px-2">
             กิจกรรมสร้างสรรค์คาถา ต่อ ติด ผี สามารถร่วมสนุกได้ตั้งแต่ วันที่ <span className="font-bold">20 กันยายน - 3 ตุลาคม 2568</span>
            และ<span className="font-bold">ประกาศผลผู้มีสิทธิ์ร่วมกิจกรรมลุยภารกิจ ต่อ ติด ผี วันที่ 8 ตุลาคม 2568 ผ่านช่องทาง Facebook: MY WORLD และ TikTok: MY WORLD </span>
             ผู้มีสิทธิ์ร่วมกิจกรรมจะต้องยืนยันสิทธิ์การเข้าร่วมผ่านช่องทาง inbox ของ Facebook หรือ TikTok ภายใน 17.00 น. ของวันที่ 10 ตุลาคม 2568
            </p>
            
            {/* Mobile Version - Show Image */}
            <div className="block md:hidden mb-4 animate-fadeInLeft relative overflow-hidden -mx-2 md:-mx-4">
                {/* Background image positioned under Mobile Version comment */}
                <motion.div 
                  className="absolute inset-0 w-full h-full"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  viewport={{ once: true }}
                  animate={{ 
                    scale: [1, 1.02, 1],
                    opacity: [0.3, 0.4, 0.3]
                  }}
                  style={{
                    backgroundImage: "url('images/sm2.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    zIndex: 0
                  }}
                />
                
                <div className="relative z-10 p-4 mx-2 md:mx-4">
                  <img 
                    src="images/texttime2.png" 
                    alt="รายละเอียดกิจกรรม" 
                    className="w-full h-auto object-contain mx-auto hover-scale hover-glow"
                  />
                  <p className="text-white leading-relaxed px-2 -mt-5 text-center font-extrabold text-2xl transform -rotate-3">ระยะเวลาส่งคลิป</p>
                  <img 
                    src="images/date.png" 
                    alt="รายละเอียดกิจกรรม" 
                    className="w-full h-auto object-contain mx-auto hover-scale hover-glow"
                  />
                  <p className="text-white font-extrabold text-2xl text-center leading-relaxed px-2 transform -rotate-3 -mt-15">
                    ประกาศผู้ถูกเลือก
                  </p>
                  <img 
                    src="images/end.png" 
                    alt="รายละเอียดกิจกรรม" 
                    className="w-[70%] h-auto object-contain mx-auto hover-scale hover-glow -mt-2"
                  />
                  <p className="text-white font-bold text-xl text-center leading-relaxed px-2 transform -rotate-3 -mt-5">
                    (ผ่าน FB & TikTok: MY WORLD)
                  </p>

                  <p className="text-white font-bold text-2xl text-center leading-relaxed px-2 transform -rotate-3 mt-10">
                    ยืนยันสิทธิ์ภายใน
                  </p>
                  <p className="text-[#E50101] font-bold text-2xl text-center leading-relaxed px-2 transform shadow-2xl -rotate-3">
                    10 ตุลาคม 2568
                  </p>
                  <p className="text-[#E50101] font-bold text-2xl text-center leading-relaxed px-2 transform shadow-2xl pb-10 -rotate-3">
                    เวลา 17.00 น.
                  </p>
                </div>
            </div>
          </div>
        </motion.div>
        </motion.div>

        {/* Prize Details Section */}
        <motion.div 
          className="PrizeDetailsSection"
          variants={slideToggle}
          initial="hidden"
          animate={isPrizeContentVisible ? "visible" : "hidden"}
        >
          <motion.div 
            className="pt-6 md:pt-8"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.6 }}
          >
            <div className="max-w-6xl mx-auto md:px-4 md:pb-8">
            <div className="border-gray-700 pt-4 md:pt-6">
              {/* 2 Column Layout */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 items-start">
                {/* Left Column - Winner Image & Campaign Info */}
                <div className="animate-fadeInLeft animate-delay-200 order-2 md:order-1 px-2 md:px-4">
                  {/* Winner Image */}
                  <div className="hidden md:flex justify-center mb-8">
                    <img 
                      src="images/winner.png" 
                      alt="ผู้ชนะ" 
                      className="w-full h-auto object-contain max-w-sm hover-scale hover-glow"
                    />
                  </div>

                  {/* Campaign Timeline for Desktop */}
                  <div className="hidden md:block mb-8">
                    <h3 className="text-white font-bold text-2xl mb-6 text-center">
                      กิจกรรมสร้างสรรค์คาถา
                    </h3>
                    <div className="space-y-4">
                      <div className="text-center">
                        <p className="text-white text-lg leading-relaxed">
                          <span className="font-bold text-[#7DD4ED]">ระยะเวลาส่ง:</span><br/>
                          20 กันยายน - 3 ตุลาคม 2568
                        </p>
                      </div>
                      <div className="text-center">
                        <p className="text-white text-lg leading-relaxed">
                          <span className="font-bold text-[#24B6E0]">ประกาศผล:</span><br/>
                          8 ตุลาคม 2568
                        </p>
                      </div>
                      <div className="text-center">
                        <p className="text-white text-lg leading-relaxed">
                          <span className="font-bold text-[#FF6B6B]">ยืนยันสิทธิ์:</span><br/>
                          ภายใน 10 ตุลาคม 2568 เวลา 17.00 น.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Special Reward for Desktop */}
                  <div className="hidden md:block">
                    <div className="text-center">
                      <h3 className="text-[#E50101] font-bold text-2xl mb-2">
                        Special Reward
                      </h3>
                      <p className="text-[#E50101] font-semibold text-lg mb-6">
                        ผู้ไม่ถูกเลือก แต่ถูกใจกรรมการ
                      </p>
                      
                      <div className="mb-6">
                        <img 
                          src="images/tumbler.png" 
                          alt="รายละเอียดของรางวัล" 
                          className="w-3/4 h-auto object-contain mx-auto hover-scale hover-glow"
                        />
                      </div>
                      
                      <div className="text-center">
                        <p className="text-white font-semibold text-lg leading-relaxed">
                          MY WORLD X คารามูโจ้<br/>
                          <span className="text-[#7DD4ED] font-bold">Tumbler 50 รางวัล</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Right Column - Prize Details */}
                <div className="animate-fadeInRight animate-delay-300 order-1 md:order-2 px-2 md:px-4 transform md:-rotate-1">
                    {/* Desktop Version - Show Text Header */}
                    <div className="hidden md:block mb-8">
                      <h1 className="text-4xl font-bold text-white text-center mb-4 transform rotate-1">
                        รายละเอียด<span className="text-[#24B6E0]">ของรางวัล</span>
                      </h1>
                    </div>
                    
                    {/* Mobile Version - Show Images */}
                    <div className="block md:hidden mb-3 text-center">
                      {/* Detail Header Image for Mobile */}
                      <img 
                        src="images/detail.png" 
                        alt="รายละเอียดของรางวัล" 
                        className="w-full h-auto object-contain mx-auto hover-scale hover-glow"
                      />
                    </div>

                    {/* Award Image Section */}
                    <div className="mb-6 hidden md:block text-center">
                      <img 
                        src="images/award.png" 
                        alt="รายละเอียดของรางวัล" 
                        className="w-full h-auto object-contain mx-auto hover-scale hover-glow max-w-sm transform rotate-1"
                      />
                    </div>

                    {/* Mobile Award Image */}
                    <div className="mb-4 block md:hidden">
                      <img 
                        src="images/award.png" 
                        alt="รายละเอียดของรางวัล" 
                        className="w-full h-auto object-contain mx-auto md:ml-auto md:mr-0 hover-scale hover-glow"
                        style={{ maxWidth: '90%', marginLeft: 'auto', marginRight: '0' }}
                      />
                    </div>

                    {/* Note Text */}
                    <div className="mb-8">
                      <div className="hidden md:block text-center transform -rotate-1">
                        <p className="text-white text-lg leading-relaxed">
                          <span className="text-[#FF6B6B] font-semibold">หมายเหตุ:</span> ผู้ที่ได้รับการคัดเลือกจะต้องพาคู่ดูโอ้ของตนไปร่วมกิจกรรมด้วย 
                          <span className="font-bold text-[#7DD4ED]"> (รอบ 1-4 จังหวัดละ 5 คู่)</span>
                        </p>
                      </div>
                      <p className="block md:hidden text-white text-base text-center max-w-xl mx-auto p-3 bg-black/30">
                        *ผู้ที่ได้รับการคัดเลือกจะต้องพาคู่ดูโอ้ของตนไปร่วมกิจกรรมด้วย (รอบ 1-4 จังหวัดละ 5 คู่)
                      </p>
                    </div>

                    {/* Mobile - Vertical Layout */}
                    <div className="block md:hidden">
                      {/* Special Reward Section - Mobile */}
                      <div className="mb-8">
                        <p className="text-[#E50101] font-bold text-3xl text-center leading-relaxed px-2 transform shadow-2xl -rotate-3 mb-2">
                          Special Reward
                        </p>
                        <p className="text-[#E50101] font-semibold text-lg text-center leading-relaxed px-2 transform shadow-2xl -rotate-3 mb-4">
                          ผู้ไม่ถูกเลือก แต่ถูกใจกรรมการ
                        </p>
                        
                        <div className="mb-4">
                          <img 
                            src="images/tumbler.png" 
                            alt="รายละเอียดของรางวัล" 
                            className="w-3/4 h-auto object-contain mx-auto hover-scale hover-glow"
                          />
                        </div>
                        
                        <p className="text-white font-semibold text-lg text-center leading-relaxed px-2 transform shadow-2xl -rotate-3 mb-4">
                          MY WORLD X คารามูโจ้ <br/>Tumbler 50 รางวัล
                        </p>
                      </div>

                      {/* Winners Section - Mobile */}
                      <div className="relative overflow-hidden -mx-2 my-8">
                        {/* Background image */}
                        <motion.div 
                          className="absolute inset-0 w-full h-full"
                          initial={{ opacity: 0, scale: 0.95 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.2, duration: 1.2, ease: "easeInOut" }}
                          viewport={{ once: true }}
                          animate={{ 
                            scale: [1, 1.005, 1],
                            opacity: [0.2, 0.3, 0.2]
                          }}
                          style={{
                            backgroundImage: "url('images/sm3.png')",
                            backgroundSize: "cover",
                            backgroundPosition: "center center",
                            backgroundRepeat: "no-repeat",
                            zIndex: 1
                          }}
                        />
                        
                        <div className="relative z-10 p-4 mx-2">
                          <div className="text-center space-y-4 mb-4">
                            <p className="text-white font-semibold text-2xl leading-relaxed px-2 transform shadow-2xl -rotate-3">
                              ผู้ชนะทั้ง 4 รอบ
                            </p>
                            <p className="text-white font-semibold text-lg leading-relaxed px-2 transform shadow-2xl -rotate-3">
                              จะได้รางวัลคู่ละ 20,000 บาท
                            </p>
                            <p className="text-white text-base leading-relaxed px-2 transform shadow-2xl -rotate-3">
                              แล้วไปลุยกันต่อ
                            </p>
                          </div>

                          <div className="text-center mb-4">
                            <p className="text-white text-base leading-relaxed px-2 transform shadow-2xl -rotate-3 mb-4">
                              กับ
                            </p>
                            
                            <div className="space-y-4">
                              <img 
                                src="images/final.png" 
                                alt="รายละเอียดของรางวัล" 
                                className="w-[60%] h-auto object-contain mx-auto hover-scale hover-glow relative z-10"
                              />
                              <img 
                                src="images/80k.png" 
                                alt="รายละเอียดของรางวัล" 
                                className="w-[80%] h-auto object-contain mx-auto hover-scale hover-glow relative z-10"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Winners Section for Desktop */}
                    <div className="hidden md:block">
                      <div className="text-center h-full transform rotate-1">
                        <h3 className="text-white font-bold text-2xl mb-2">
                          ผู้ชนะทั้ง 4 รอบ
                        </h3>
                        <p className="text-white font-semibold text-lg mb-2">
                          จะได้รางวัลคู่ละ <span className="text-[#FFD700] font-bold">20,000 บาท</span>
                        </p>
                        <p className="text-gray-300 text-base mb-6">
                          แล้วไปลุยกันต่อ
                        </p>

                        <p className="text-white text-lg mb-4 font-semibold">
                          กับ
                        </p>
                        
                        <div className="space-y-4">
                          <img 
                            src="images/final.png" 
                            alt="รายละเอียดของรางวัล" 
                            className="w-[70%] h-auto object-contain mx-auto hover-scale hover-glow"
                          />
                          <img 
                            src="images/80k.png" 
                            alt="รายละเอียดของรางวัล" 
                            className="w-[90%] h-auto object-contain mx-auto hover-scale hover-glow"
                          />
                        </div>
                      </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Join;