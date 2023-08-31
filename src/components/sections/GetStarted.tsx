"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeIn, planetVariants } from "@/utils/motion";
import { TitleText, TypingText } from "../custom-text";
import { startingFeatures } from "@/constants";
import StartSteps from "../StartSteps";

type Props = {};

const GetStarted = (props: Props) => {
  return (
    <section className="paddings relative z-10">
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="innerWidth mx-auto flex flex-col lg:flex-row gap-8"
      >
        <motion.div
          variants={planetVariants("left")}
          className="flexCenter flex-1"
        >
          <img
            src="/get-started.png"
            alt="get-started"
            className="w-[90%] h-[90%] object-contain"
          />
        </motion.div>
        <motion.div
          variants={fadeIn("left", "tween", 0.2, 1)}
          className="flex-[0.75]  flex justify-center flex-col"
        >
          <TypingText title="| How MetaVersus Works" />
          <TitleText title={<>Get started with just a few clicks</>} />
          <div className="mt-[31px] flex flex-col max-w-[370px] gap-6">
            {startingFeatures.map((feature, i) => (
              <StartSteps key={feature} number={i + 1} text={feature} />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default GetStarted;
