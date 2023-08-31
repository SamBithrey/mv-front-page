"use client";

import { textContainer, textVariant2 } from "@/utils/motion";
import { motion } from "framer-motion";
import { ReactComponentElement } from "react";

type Props = {
  title: React.ReactNode;
  textStyles?: string;
};

const TitleText = ({ title, textStyles }: Props) => {
  return (
    <motion.h2
      variants={textVariant2}
      initial="hidden"
      whileInView="show"
      className={`mt-2 font-bold md:text-[64px] text-[40px] text-white ${textStyles}`}
    >
      {title}
    </motion.h2>
  );
};

export default TitleText;
