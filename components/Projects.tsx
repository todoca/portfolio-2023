import { motion } from "framer-motion";
import React from "react";

type Props = {};

const Projects = (props: Props) => {
  const projects = [1, 2, 3, 4, 5];
  return (
    <div className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <motion.div
        initial={{ opacity: 0 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1 }}
        className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#f4dc1c]"
      >
        {/* projects */}
        {projects.map((project, i) => (
          <div
            key={i}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
          >
            <motion.img
              initial={{ y: -300, opacity: 0 }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="h-[25vh] md:h-[30vh] p-10"
              src="img/todoca.png"
              alt=""
            />
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                <span className="underline decoration-[#f4dc1c]/50">
                  Case Study {i + 1} of {projects.length}:
                </span>{" "}
                UPS clone
              </h4>
              <p className="text-lg text-center md:text-left">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo
                iste voluptate repellat quidem hic ab atque voluptatibus vitae
                excepturi minima perferendis facilis aperiam dolore, rerum
                facere saepe optio repudiandae numquam!
              </p>
            </div>
          </div>
        ))}
      </motion.div>

      <div className="w-full absolute top-[30%] bg-[#f4dc1c]/10 left-0 h-[50vh] -skew-y-12"></div>
    </div>
  );
};

export default Projects;
