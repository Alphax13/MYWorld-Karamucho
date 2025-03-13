import { motion } from "framer-motion";
import "./style.css";

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};
const navigate = useNavigate();

const Event = () => {
  return (
    <div 
      className="event w-full flex flex-col items-center justify-center relative px-4 lg:px-4 py-4 gap-4 pb-10"
      style={{
        backgroundImage: "url('images/bg-paper.png')",
        backgroundSize: "cover",
        backgroundPosition: "top center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* หัวข้อหลัก */}
      <motion.div 
        className="w-full flex justify-center mb-5 mt-5"
        variants={fadeIn} 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true }}
      >
        <img src="images/textevent.png" alt="Event" className="w-[100%] lg:w-[40%]" />
      </motion.div>

      {/* กล่องข้อมูล COINS */}
      <motion.div 
        className="w-full flex flex-row items-center justify-center text-center gap-2 lg:gap-6"
        variants={fadeIn} 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true }}
      >
        <p className="text-black font-semibold text-lg lg:text-3xl whitespace-nowrap">
          ตามล่า COINS หมูกะทะ
        </p>
        <div className="bg-white px-4 py-1 rounded-lg border-2 border-[#28B7E1] text-[#28B7E1] text-2xl lg:text-5xl font-bold shadow-md">
          15,000 <span className="text-black text-sm">COINS</span>
        </div>
      </motion.div>

      {/* รูป My Box Set */}
      <motion.div 
        className="w-full flex justify-center mt-6"
        variants={fadeIn} 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true }}
      >
        <img src="images/cupon.png" alt="MY BOX SET" className="w-[100%]  lg:w-[40%]" />
      </motion.div>
      
      <motion.button
          className="bg-gradient-to-r from-[#004A5D] to-[#009BC3] text-white px-10 py-3 
                      rounded-[50px] border border-[#28B7E1] shadow-md text-2xl lg:text-2xl 
                      font-bold w-[80%] max-w-xs lg:w-[40%]"
          initial={{ y: 0 }}
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          onClick={() => {
            if(!profile){
              onCheckin(true);
              navigate('?page=RegisterEvent');
            }else{
              navigate('/RegisterEvent');
            }
          }}
        >
          คลิกเลย
        </motion.button>
    </div>
  );
};

export default Event;
