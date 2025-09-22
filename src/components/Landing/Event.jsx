import { motion } from "framer-motion";
import { useState } from "react";
import "./style.css";

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const slideInLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const slideInRight = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
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
  transition: { duration: 0.2 }
};

const phoneAnimation = {
  hidden: { opacity: 0, scale: 0.8, rotateY: -15 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    rotateY: 0,
    transition: { 
      duration: 1.2,
      ease: "easeOut",
      delay: 0.2
    } 
  },
};

const Event = () => {
  const handleClick = () => {
    console.log("Event button clicked");
  };

  return (
    <div
      className="event w-full relative md:hidden"
      style={{
        backgroundImage: "url('images/Background.png')",
        backgroundSize: "cover",
        backgroundPosition: "center top",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#1a1a1a",
      }}
    >
      {/* Background overlay images */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top right overlay */}
        <motion.div 
          className="absolute top-0 right-0"
          initial={{ opacity: 0, x: 50, y: -50 }}
          animate={{ 
            opacity: 1, 
            x: 0, 
            y: 0,
            rotate: [0, 1, 0, -1, 0]
          }}
          transition={{ 
            opacity: { duration: 1.5 },
            x: { duration: 1.5 },
            y: { duration: 1.5 },
            rotate: { 
              duration: 6, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }
          }}
        >
          <motion.img 
            src="images/yai.png" 
            alt="Pattern overlay" 
            className="h-[500px]" 
            animate={{ y: [0, -10, 0] }}
            transition={{ 
              duration: 4, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          />
        </motion.div>
      </div>
      
      {/* Main content container with max-w-7xl */}
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center px-6 lg:px-8 py-8 pb-32 gap-1 relative z-10">
      
      {/* Campaign details - Now on top */}
      <motion.div
        className="w-full text-white"
        variants={slideInRight}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Header - Edge to Edge */}
        <motion.div 
          className="mb-6 -mx-6 lg:-mx-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.img 
            src="images/evtext.png" 
            alt="MY World" 
            className="w-full h-auto mt-5 max-w-4xl mx-auto md:max-h-[300px] lg:max-h-[350px] object-contain" 
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        {/* Campaign description */}
        <motion.div 
          className="mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.p 
            className="text-gray-300 text-lg lg:text-lg mb-4 px-3 -mt-14"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            viewport={{ once: true }}
          >
          กิจกรรม MY World x คารามูโจ้ DUO LEVEL UP ลุยภารกิจ ต่อ ติด ผี จะจัดหาผู้ที่จะไปทำ<br/>ภารกิจอัพเวลเพื่อต่อติดผีที่สถานที่ต่างๆ กับ EPIC TIME คือ
          </motion.p>
          
          {/* Campaign rounds */}
          <motion.div 
            className="space-y-2 text-base rounded-xs text-black font-bold relative z-20"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
           <img 
                src="images/mapp.png" 
                alt="Thailand Map with Roadshow Locations" 
                className="w-full h-auto max-h-auto md:max-h-[60vh] lg:max-h-[65vh] object-contain rounded-lg relative z-30"
              />
          </motion.div>
        </motion.div>

        {/* Final Mission */}
        <motion.div 
          className="mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          viewport={{ once: true }}
        >
        </motion.div>

         <motion.div 
           className="mb-6 relative"
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           transition={{ delay: 1.2, duration: 0.6 }}
           viewport={{ once: true }}
         >
          <div className="flex items-center justify-center">
            {/* Desktop image */}
            <motion.img 
              src="images/bttext.webp" 
              alt="MY World" 
              className="w-full hidden md:block max-w-5xl mx-auto md:max-h-[400px] lg:max-h-[450px] object-contain" 
              whileHover={{ scale: 1.02, rotateZ: 1 }}
              transition={{ duration: 0.3 }}
            />
            {/* Mobile image - you can change the src to your mobile image */}
            <motion.img 
              src="images/bttext2.webp" 
              alt="MY World" 
              className="w-full block z-10 md:hidden" 
              whileHover={{ scale: 1.05, rotateZ: -1 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </motion.div>

        {/* Join Activity Button */}
        <motion.div 
          className="mt-2 flex justify-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.button
            onClick={handleClick}
            className="inline-block border-2 border-[#24B6E0] font-base text-white font-bold py-3 px-18 rounded-xs transition-all duration-300 text-lg shadow-lg hover:shadow-[0_0_20px_#24B6E0] hover:border-[#00D4FF] hover:text-[#00D4FF] hover:scale-105 z-100"
            style={{
              boxShadow: '0 0 20px rgba(34, 211, 238, 0.4), inset 0 0 20px rgba(34, 211, 238, 0.1)',
              textShadow: '0 0 10px rgba(36, 182, 224, 0.8), 0 0 20px rgba(36, 182, 224, 0.6), 0 0 30px rgba(36, 182, 224, 0.4)',
            }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 0 30px rgba(34, 211, 238, 0.6), inset 0 0 30px rgba(34, 211, 238, 0.2)',
              textShadow: '0 0 15px rgba(0, 212, 255, 1), 0 0 25px rgba(0, 212, 255, 0.8), 0 0 35px rgba(0, 212, 255, 0.6), 0 0 45px rgba(0, 212, 255, 0.4)',
            }}
            whileTap={{ scale: 0.95 }}
          >
            ร่วมกิจกรรม
          </motion.button>
        </motion.div>

        {/* Mobile background image - positioned within main container */}
        <motion.div 
          className="block md:hidden absolute bottom-0 left-0 right-0 w-full -mt-16 z-5 pointer-events-none"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.img 
            src="images/cover3.png" 
            alt="Background" 
            className="w-full h-auto opacity-70" 
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ 
              duration: 8, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          />
        </motion.div>

      </motion.div>
      
      </div>

      {/* Separate TikTok Video Section with Black Background */}
      <div 
        className="w-full bg-black relative py-10"
        style={{
          backgroundColor: "#000000"
        }}
      >
        {/* Background overlay image */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div 
            className="absolute top-0 left-0 w-full"
            initial={{ opacity: 0, y: -50 }}
            animate={{ 
              opacity: 0.3, 
              y: 0,
              rotate: [0, 0.5, 0, -0.5, 0]
            }}
            transition={{ 
              opacity: { duration: 1.5 },
              y: { duration: 1.5 },
              rotate: { 
                duration: 8, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }
            }}
          >
            <motion.img 
              src="images/Background.png" 
              alt="Background overlay" 
              className="w-full h-auto opacity-20" 
              animate={{ 
                scale: [1, 1.02, 1],
                y: [0, -5, 0] 
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            />
          </motion.div>

          {/* Mobile background image - positioned within TikTok section */}
          <motion.div 
            className="block md:hidden absolute top-0 right-0 w-full"
            initial={{ opacity: 0, x: 50, y: -50 }}
            animate={{ 
              opacity: 0.8, 
              x: 0, 
              y: 0,
              rotate: [0, 1, 0, -1, 0]
            }}
            transition={{ 
              opacity: { duration: 1.5 },
              x: { duration: 1.5 },
              y: { duration: 1.5 },
              rotate: { 
                duration: 6, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }
            }}
          >
            <motion.img 
              src="images/yai3.png" 
              alt="Mobile Background" 
              className="w-full h-auto opacity-80" 
              animate={{ 
                scale: [1, 1.02, 1],
                y: [0, -10, 0] 
              }}
              transition={{ 
                duration: 8, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            />
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            className="flex justify-center w-full"
            variants={phoneAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
          <div className="relative">
            {/* Phone frame */}
            <motion.div 
              className="rounded-xl"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="rounded-xl w-80 h-[500px] relative overflow-hidden shadow-2xl shadow-cyan-400/20">
                {/* MP4 Video */}
                <div className="absolute inset-0 rounded-xl overflow-hidden">
                  <video
                    className="w-full h-full object-cover"
                    style={{ 
                      borderRadius: '2px'
                    }}
                    controls
                    autoPlay
                    muted
                    loop
                    playsInline
                  >
                    <source src="MY X Karamucho Motion.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
        </div>
      </div>
      
    </div>
  );
};

export default Event;
