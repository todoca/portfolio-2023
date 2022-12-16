import { motion } from "framer-motion";
import React from "react";

type Props = {};

const About = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row  max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <motion.img
        className="-mb-20 md:mb-0 mt-20 flex-shrink-0 h-[22vh] w-[22vh] rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[30vw] xl:h-[70vh]"
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
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-3xl mt-4 md:text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#f4dc1c]/50">little</span>{" "}
          background
        </h4>
        {/* TODO:Better the content */}
        <p className="text-sm sm:text-base">
          My name is Alejandro Marcano, Venezuelan, Engineer electronic,
          freelance, manager, lover of science and technology. I have been
          coding for over 10 years now, As a Full Stack Developer I have worked
          both with startups and Enterprises to help build & scale their
          companies. I am a runner at heart and animal lovers, in my free time,
          I connect with God, meditate, listen to music and play my guitar.
          <br />
          <br />
          &quot;MY GOAL IS DESIGN & DEVELOP AWESOME CROSS-PLATFORM APPS FOR THE
          WORLD WITH LOVE.&quot;
        </p>
      </div>
    </motion.div>
  );
};

export default About;
