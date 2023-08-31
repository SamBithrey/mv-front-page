"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeIn, planetVariants } from "@/utils/motion";
import NewFeatures from "../NewFeatures";
import { TitleText, TypingText } from "../custom-text";
import { newFeatures } from "@/constants";

type Props = {};

const WhatsNew = (props: Props) => {
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
          variants={fadeIn("right", "tween", 0.2, 1)}
          className="flex-[0.75]  flex justify-center flex-col"
        >
          <TypingText title="| What's New?" />
          <TitleText title={<>What's new about MetaVersus?</>} />
          <div className="mt-12 flex flex-wrap justify-between gap-6">
            {newFeatures.map((feature, i) => (
              <NewFeatures key={feature.title} {...feature} />
            ))}
          </div>
        </motion.div>
        <motion.div
          variants={planetVariants("right")}
          className="flexCenter flex-1"
        >
          <img
            src="/whats-new.png"
            alt="get-started"
            className="w-[90%] h-[90%] object-contain"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default WhatsNew;
