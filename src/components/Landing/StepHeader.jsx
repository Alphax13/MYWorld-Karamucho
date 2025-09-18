import React from "react";
import { motion } from "framer-motion";

const StepHeader = ({ imageSrc, altText, className = "" }) => {
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <motion.div
      className={`text-center ${className}`}
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <img 
        src={imageSrc} 
        alt={altText}
        className="w-full max-w-full lg:max-w-lg h-auto mx-auto mb-2 object-contain filter drop-shadow-lg"
        />

    </motion.div>
  );
};

export default StepHeader;