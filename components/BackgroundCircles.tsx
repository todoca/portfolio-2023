import React from "react";
import { motion } from "framer-motion";

const BackgroundCircles = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{ duration: 2.5 }}
      className="relative flex justify-center items-center"
    >
      <div
        className="absolute border border-[#333333] rounded-full 
    h-[50vh] w-[50vh] mt-52 animate-ping"
      />
      <div
        className="absolute border border-[#333333] rounded-full 
    h-[40vh] w-[40vh] mt-52"
      />
      <div
        className="absolute border border-[#333333] rounded-full 
    h-[60vh] w-[60vh] mt-52"
      />
      <div
        className="rounded-full border border-[#f4dc1c] 
  opacity-20  h-[75vh] w-[75vh] absolute mt-52 animate-pulse"
      />
      <div
        className="absolute border border-[#333333] rounded-full 
    h-[95vh] w-[95vh] mt-52"
      />
    </motion.div>
  );
};

export default BackgroundCircles;
