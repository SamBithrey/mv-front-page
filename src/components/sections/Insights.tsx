"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeIn, planetVariants } from "@/utils/motion";
import InsightCard from "../InsightCard";
import { TitleText, TypingText } from "../custom-text";
import { insights } from "@/constants";

type Props = {};

const Insights = (props: Props) => {
  return (
    <section className="paddings relative z-10">
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="innerWidth mx-auto flex flex-col"
      >
        <TypingText title="| Insight" textStyles="text-center" />
        <TitleText
          title={<>Insight about Metaverse</>}
          textStyles="text-center"
        />
        <div className="mt-[50px] flex flex-col gap-[30px]">
          {insights.map((insight, i) => (
            <InsightCard key={`insight-${i}`} index={i + 1} {...insight} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Insights;
