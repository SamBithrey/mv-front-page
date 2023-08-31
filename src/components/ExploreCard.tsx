"use client";

import { Dispatch, SetStateAction } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";

type Props = {
  index: number;
  active: string;
  handleClick: Dispatch<SetStateAction<string>>;
  id: string;
  imgUrl: string;
  title: string;
};

const ExploreCard = ({
  index,
  active,
  handleClick,
  id,
  imgUrl,
  title,
}: Props) => {
  return (
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className={`relative ${
        active === id ? "lg:flex-[3.5] flex-[10]" : "lg:flex-[0.5] flex-[2]"
      } flexCenter  min-w-[170px] h-[700px] transition-[flex] duration-700 ease-out-flex cursor-pointer`}
      onClick={() => handleClick(id)}
    >
      <img
        src={imgUrl}
        alt={title}
        className="absolute w-full h-full object-cover rounded-3xl"
      />
      {active !== id ? (
        <h3 className="font-semibold sm:text-[26px] text-lg text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]">
          {title}
        </h3>
      ) : (
        <div className="absolute bottom-0 p-8 justify-start w-full flex-col bg-[rbga(0,0,0,0.5)] rounded-b-3xl">
          <div className="flexCenter w-[60px] h-[60px] rounded-3xl glassmorphism mb-4">
            <img
              src="/headset.svg"
              alt="headset"
              className="w-1/2 h-1/2 object-contain"
            />
          </div>
          <p className="font-normal text-base leading-5 text-white uppercase">
            Enter the Metaverse
          </p>
          <h2 className="mt-6 font-semibold sm:text-[32px] text-2xl text-white">
            {title}
          </h2>
        </div>
      )}
    </motion.div>
  );
};

export default ExploreCard;
