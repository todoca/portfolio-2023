import { motion } from "framer-motion";
import React from "react";

type Props = {};

const ExperienceCard = (props: Props) => {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-4 flex-shrink-0 mt-24 w-[70vw] max-h-[75vh] md:max-w-[80vh] p-5 snap-center bg-[#292929]  hover:opacity-100 opacity-40 transition-opacity duration-200 overflow-hidden cursor-pointer">
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        alt=""
        className="w-[15vh] h-[15vh] rounded-full xl:w-[15vh] xl:h-[15vh] object-cover"
        src="img/todoca.png "
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">CEO of TODOCA</h4>
        <p className="font-bold text-2xl mt-1">TODOCA</p>
        <div className="flex space-x-2 my-2">
          <img className="h-10 w-10 rounded-full" src="img/todoca.png" alt="" />
          <img className="h-10 w-10 rounded-full" src="img/todoca.png" alt="" />
          <img className="h-10 w-10 rounded-full" src="img/todoca.png" alt="" />
        </div>
        <p className="uppercase py-5 text-gray-300">
          Started Work... - Ended...
        </p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>
            Summary pointsSummary pointsSummary pointsSummary pointsSummary
            pointsSummary points
          </li>
          <li>
            Summary pointsSummary pointSummary pointsSummary pointsSummary
            pointsSummary pointss
          </li>
          <li>
            Summary pointsSummary pointsSummary pointsSummary pointsSummary
            pointsSummary points
          </li>
          <li>
            Summary pointsSummary pointsSummary pointsSummary pointsSummary
            pointsSummary points
          </li>
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
