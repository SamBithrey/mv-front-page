"use client";

import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/utils/motion";
import { TypingText } from "../custom-text";

type Props = {};

const About = (props: Props) => {
  return (
    <section className="paddings relative z-10">
      <div className="gradient-02 z-0" />
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="innerWidth mx-auto flexCenter flex-col"
      >
        <TypingText title="| About Metaversus" textStyles="text-center" />
        <motion.p
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="mt-2 font-normal sm:text-[32px] text-xl text-center text-secondary-white"
        >
          <span className="font-extrabold text-white">Metaverse </span>
          is a new thing in the future, where you can enjoy the virtual world by
          feeling like its really real, you can feel what you feel in this
          metaverse world, because this is really the
          <span className="font-extrabold text-white">
            {" "}
            madness of the metaverse{" "}
          </span>
          of today, using only
          <span className="font-extrabold text-white"> VR </span>
          devices you can easily
          <span className="font-extrabold text-white"> explore </span>
          the metaverse world you want, turn your dreams into reality. Lets
          explore the madness of the metaverse by scrolling down
        </motion.p>
        <motion.img
          variants={fadeIn("up", "tween", 0.3, 1)}
          src="/arrow-down.svg"
          alt="arrow down"
          className=" w-[18px] h-7 object-contain mt-7"
        />
      </motion.div>
    </section>
  );
};

export default About;
