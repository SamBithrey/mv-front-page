"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/utils/motion";
import { TitleText, TypingText } from "../custom-text";

type Props = {};

const World = (props: Props) => {
  return (
    <section className="paddings relative z-10">
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="innerWidth mx-auto flex flex-col"
      >
        <TypingText title="| People in the world" textStyles="text-center" />
        <TitleText
          title={
            <>
              Track friends around you and invite them to play together in the
              same world
            </>
          }
          textStyles="text-center"
        />
        <motion.div
          variants={fadeIn("up", "tween", 0.3, 1)}
          className="relative mt-[68px] flex w-full h-auto"
        >
          <img
            src="/map.png"
            alt="map"
            className="w-full h-full object-contain"
          />
          <div className="absolute bottom-[25%] right-[5%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
            <img src="/people-01.png" alt="people" className="h-full w-full" />
          </div>
          <div className="absolute top-[20%] left-[10%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
            <img src="/people-02.png" alt="people" className="h-full w-full" />
          </div>
          <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
            <img src="/people-03.png" alt="people" className="h-full w-full" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default World;
