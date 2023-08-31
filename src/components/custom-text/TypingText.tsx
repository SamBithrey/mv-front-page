"use client";

import { textContainer, textVariant2 } from "@/utils/motion";
import { motion } from "framer-motion";

type Props = {
  title: string;
  textStyles?: string;
};

const TypingText = ({ title, textStyles }: Props) => {
  return (
    <motion.p
      variants={textContainer}
      className={`font-normal text-sm text-secondary-white ${textStyles}`}
    >
      {Array.from(title).map((letter, i) => (
        <motion.span variants={textVariant2} key={i}>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.p>
  );
};

export default TypingText;
