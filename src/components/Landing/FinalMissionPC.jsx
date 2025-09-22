import { motion } from "framer-motion";
import "./style.css";

const fadeInUp = {
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

const FinalMissionPC = () => {
  return (
    <div className="hidden md:block w-full relative bg-black py-16">
      {/* Background with stars effect */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-30">
          <div className="w-full h-full bg-repeat" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='white' fill-opacity='0.1'%3E%3Ccircle cx='20' cy='20' r='1'/%3E%3Ccircle cx='80' cy='40' r='0.5'/%3E%3Ccircle cx='40' cy='80' r='1'/%3E%3Ccircle cx='90' cy='90' r='0.5'/%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          
          {/* Left side - Final Mission Image */}
          <motion.div
            className="flex flex-col justify-center items-center"
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="text-center">
              <img 
                src="images/final.png" 
                alt="Final Mission Details" 
                className="w-full h-auto max-w-lg mx-auto object-contain"
              />
            </div>
            
            {/* Join Activity Button */}
            <a 
              href="https://www.tiktok.com/@myworld.creator?lang=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                className="mt-8 bg-black hover:bg-cyan-400 text-white font-bold py-4 px-8 text-lg shadow-lg shadow-cyan-500/50 transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-400/60 border border-cyan-400 glow-blue"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  boxShadow: '0 0 20px rgba(6, 182, 212, 0.5), 0 0 40px rgba(6, 182, 212, 0.3), 0 0 60px rgba(6, 182, 212, 0.1)'
                }}
              >
                ร่วมกิจกรรม
              </motion.button>
            </a>
          </motion.div>

          {/* Right side - Prize Image */}
          <motion.div
            className="flex justify-center items-center"
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="text-center">
              <img 
                src="images/80k.png" 
                alt="Prize Information" 
                className="w-[500px] h-auto max-w-2xl mx-auto object-contain"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default FinalMissionPC;