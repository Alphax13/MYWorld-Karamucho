import { motion } from "framer-motion";
import "./style.css";

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const Event = () => {
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
        <div className="absolute top-0 right-0">
          <img src="images/yai.png" alt="Pattern overlay" className="h-[500px]" />
        </div>
      </div>
      
      {/* Main content container with max-w-7xl */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center px-4 lg:px-8 py-8 gap-1">
      {/* Left side - Mobile phone mockup */}
      <motion.div
        className="flex-1 flex justify-center lg:justify-center"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="relative">
          {/* Phone frame */}
          <div className="rounded-xl">
            <div className="rounded-xl w-80 h-[700px] relative overflow-hidden">
              {/* TikTok iframe */}
              <div className="absolute inset-0 rounded-xl overflow-hidden">
                <iframe
                  src="https://www.tiktok.com/embed/v2/7546078162606640406"
                  className="w-full h-full border-0"
                  allow="encrypted-media; autoplay"
                  title="TikTok video"
                  style={{ 
                    borderRadius: '2px'
                  }}
                  frameBorder="0"
                  scrolling="no"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Right side - Campaign details */}
      <motion.div
        className="flex-1 text-white"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center mb-4">
            <img src="images/evtext.webp" alt="MY World" className="h-68 mr-2" />
          </div>
        </div>

        {/* Campaign description */}
        <div className="mb-6">
          <p className="text-gray-300 text-lg lg:text-lg mb-4">
          กิจกรรม MY World x คารามูโจ้ DUO LEVEL UP ลุยภารกิจ ต่อ ติด ผี จะจัดหาผู้ที่จะไปทำภารกิจอัพเวลเพื่อต่อติดผีที่สถานที่ต่างๆ กับ EPIC TIME คือ
          </p>
          <p></p>
          
          {/* Campaign rounds */}
          <div className="space-y-2 text-lg bg-white p-2 rounded-xs text-black font-bold">
            <div><span className="text-black font-bold">	รอบคัดเลือก 1:</span> วันพุธที่ 15 ตุลาคม 2568 ต่อ ติด ผี ที่กรุงเทพฯ จำนวน 5 คู่</div>
            <div><span className="text-black font-bold">	รอบคัดเลือก 2:</span> วันศุกร์ที่ 17 ตุลาคม 2568 ต่อ ติด ผี ที่ชลบุรี จำนวน 5 คู่</div>
            <div><span className="text-black font-bold">	รอบคัดเลือก 3:</span> วันพุธที่ 22 ตุลาคม 2568 ต่อ ติด ผี ที่เชียงใหม่ จำนวน 5 คู่</div>
            <div><span className="text-black font-bold">	รอบคัดเลือก 4:</span> วันศุกร์ที่ 24 ตุลาคม 2568 ต่อ ติด ผี ที่โคราช จำนวน 5 คู่</div>
          </div>
        </div>

        {/* Final Mission */}
        <div className="mb-4">
          <p className="text-gray-300 text-lg mb-2 max-w-2xl">
           โดยในกิจกรรมทั้ง 4 รอบ จะถูกคัดเลือกมาจากการโพสต์คลิปคาถา ต่อ ติด ผี ในแบบ ของตัวเอง ผ่านช่องทาง TikTok ตามกติกาที่กำหนด 
           เลือกจังหวัดที่อยากจะไป และสะดวกในการเดินทางไปร่วมงานพร้อมคู่ดูโอ้ในวันเวลาและสถานที่ที่เลือกไว้ และ<span className="font-bold">ผู้ชนะจากกิจกรรมทั้ง 4 รอบจะต้องไป Final Mission</span>
          </p>
        </div>

         <div className="mb-6">
          <div className="flex items-center mb-4">
            <img src="images/bttext.webp" alt="MY World" className="w-full mr-2" />
          </div>
        </div>
              
       
      </motion.div>
      </div>
    </div>
  );
};

export default Event;
