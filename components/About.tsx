import { motion } from "framer-motion";
import React from "react";

type Props = {};

const About = (props: Props) => {
  return (
    <div className="flex flex-col relative h-screen text-center md:text-left md:flex-row  max-w-7xl px-10 mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <motion.img
      className="-mb-20 md:mb-0 flex-shrink-0 w-56 rounded-full object-cover"
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        alt=""
        src="img/About.jpg"
      />
    </div>
  );
};

export default About;
