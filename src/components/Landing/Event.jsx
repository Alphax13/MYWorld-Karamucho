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
  const [currentVideo, setCurrentVideo] = useState(0);
  
  // TikTok video IDs or URLs
  const tiktokVideos = [
    "7519453596677721351",
    "7519082788549561608", 
    "7500443057817537810",
    "7496870249506082055",
    "7496867187232115976"
  ];

  const nextVideo = () => {
    setCurrentVideo((prev) => (prev + 1) % tiktokVideos.length);
  };

  const prevVideo = () => {
    setCurrentVideo((prev) => (prev - 1 + tiktokVideos.length) % tiktokVideos.length);
  };

  const handleClick = () => {
    console.log("Event button clicked");
  };

  return (
    <div
      className="event w-full relative"
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
            className="w-full h-auto mt-5" 
            whileHover={{ scale: 1.05 }}
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
          กิจกรรม MY World x คารามูโจ้ DUO LEVEL UP ลุยภารกิจ ต่อ ติด ผี จะจัดหาผู้ที่จะไปทำภารกิจอัพเวลเพื่อต่อติดผีที่สถานที่ต่างๆ กับ EPIC TIME คือ
          </motion.p>
          
          {/* Campaign rounds */}
          <motion.div 
            className="space-y-2 text-base rounded-xs text-black font-bold"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
           <img 
                src="images/map.png" 
                alt="Thailand Map with Roadshow Locations" 
                className="w-full h-auto max-h-auto md:max-h-[60vh] lg:max-h-[65vh] object-contain rounded-lg"
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
          <motion.p 
            className="text-white text-lg mb-2 max-w-2xl relative z-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1.0, duration: 0.8 }}
            viewport={{ once: true }}
          >
           โดยในกิจกรรมทั้ง 4 รอบ จะถูกคัดเลือกมาจากการโพสต์คลิปคาถา ต่อ ติด ผี ในแบบ ของตัวเอง ผ่านช่องทาง TikTok ตามกติกาที่กำหนด 
           เลือกจังหวัดที่อยากจะไป และสะดวกในการเดินทางไปร่วมงานพร้อมคู่ดูโอ้ในวันเวลาและสถานที่ที่เลือกไว้ และ<span className="font-bold">ผู้ชนะจากกิจกรรมทั้ง 4 รอบจะต้องไป Final Mission</span>
          </motion.p>
        </motion.div>

         <motion.div 
           className="mb-6 relative"
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           transition={{ delay: 1.2, duration: 0.6 }}
           viewport={{ once: true }}
         >
          <div className="flex items-center">
            {/* Desktop image */}
            <motion.img 
              src="images/bttext.webp" 
              alt="MY World" 
              className="w-full hidden md:block" 
              whileHover={{ scale: 1.05, rotateZ: 1 }}
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

        </motion.div>
      </motion.div>
      
      </div>

      {/* Separate TikTok Video Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8 relative z-10">
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
              <div className="rounded-xl w-80 h-[700px] relative overflow-hidden shadow-2xl shadow-cyan-400/20">
                {/* TikTok iframe */}
                <div className="absolute inset-0 rounded-xl overflow-hidden">
                  <iframe
                    key={currentVideo}
                    src={`https://www.tiktok.com/embed/v2/${tiktokVideos[currentVideo]}`}
                    className="w-full h-full border-0"
                    allow="encrypted-media; autoplay"
                    title={`TikTok video ${currentVideo + 1}`}
                    style={{ 
                      borderRadius: '2px'
                    }}
                    frameBorder="0"
                    scrolling="no"
                    loading="lazy"
                  />
                </div>
              </div>
              
              {/* Navigation Controls */}
              <motion.div 
                className="flex items-center justify-center space-x-4 mt-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0, duration: 0.6 }}
              >
                {/* Left Arrow */}
                <motion.button
                  onClick={prevVideo}
                  className="w-12 h-12 rounded-full bg-black border-2 border-cyan-400 text-cyan-400 hover:border-cyan-300 hover:text-cyan-300 flex items-center justify-center transition-all duration-300 shadow-lg shadow-cyan-400/30 hover:shadow-cyan-300/50 hover:shadow-xl"
                  style={{
                    boxShadow: '0 0 20px rgba(34, 211, 238, 0.3), inset 0 0 20px rgba(34, 211, 238, 0.1)',
                  }}
                  aria-label="Previous video"
                  whileHover={{ 
                    scale: 1.1,
                    boxShadow: '0 0 30px rgba(34, 211, 238, 0.6), inset 0 0 30px rgba(34, 211, 238, 0.2)',
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.svg 
                    className="w-6 h-6" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    whileHover={{ x: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                  </motion.svg>
                </motion.button>

                {/* Pagination Dots */}
                <div className="flex items-center space-x-2">
                  {tiktokVideos.map((_, index) => (
                    <motion.button
                      key={index}
                      onClick={() => setCurrentVideo(index)}
                      className={`transition-all duration-300 ${
                        index === currentVideo
                          ? 'w-8 h-3 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50'
                          : 'w-3 h-3 bg-gray-400 rounded-full hover:bg-gray-300'
                      }`}
                      aria-label={`Go to video ${index + 1}`}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1.2 + index * 0.1 }}
                    />
                  ))}
                </div>

                {/* Right Arrow */}
                <motion.button
                  onClick={nextVideo}
                  className="w-12 h-12 rounded-full bg-black border-2 border-cyan-400 text-cyan-400 hover:border-cyan-300 hover:text-cyan-300 flex items-center justify-center transition-all duration-300 shadow-lg shadow-cyan-400/30 hover:shadow-cyan-300/50 hover:shadow-xl"
                  style={{
                    boxShadow: '0 0 20px rgba(34, 211, 238, 0.3), inset 0 0 20px rgba(34, 211, 238, 0.1)',
                  }}
                  aria-label="Next video"
                  whileHover={{ 
                    scale: 1.1,
                    boxShadow: '0 0 30px rgba(34, 211, 238, 0.6), inset 0 0 30px rgba(34, 211, 238, 0.2)',
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.svg 
                    className="w-6 h-6" 
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
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      {/* Mobile background image at bottom - overlapping and edge to edge */}
      <motion.div 
        className="block md:hidden absolute bottom-0 left-0 right-0 w-full -mt-16 z-0"
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
      
    </div>
  );
};

export default Event;
