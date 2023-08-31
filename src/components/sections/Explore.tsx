"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { staggerContainer } from "@/utils/motion";
import { exploreWorlds } from "@/constants";
import ExploreCard from "../ExploreCard";
import { TitleText, TypingText } from "../custom-text";

type Props = {};

const Explore = (props: Props) => {
  const [active, setActive] = useState("world-2");

  return (
    <section className="paddings" id="explore">
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="innerWidth mx-auto flex flex-col"
      >
        <TypingText title="| The World" textStyles="text-center" />
        <TitleText
          title={
            <>
              Choose the world you want <br className="md:block hidden" /> to
              explore
            </>
          }
          textStyles="text-center"
        />
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {exploreWorlds.map((world, i) => (
            <ExploreCard
              key={world.id}
              {...world}
              index={i}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Explore;
