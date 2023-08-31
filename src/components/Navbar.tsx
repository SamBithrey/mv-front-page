"use client";

import { motion } from "framer-motion";
import { navVariants } from "@/utils/motion";
import Image from "next/image";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className="xPaddings py-8 relative"
    >
      <div className="absolute w-[50%} inset-0 gradient-01" />
      <div className="innerWidth mx-auto flex justify-between gap-8">
        <Image
          src="/search.svg"
          alt="search"
          width={24}
          height={24}
          className="w-6 h-6 object-contain"
        />
        <h2 className="font-extrabold text-2xl leading-[30px] text-white">
          MetaVersus
        </h2>
        <Image
          src="/menu.svg"
          alt="menu"
          className="w-6 h-6 object-contain"
          width={24}
          height={24}
        />
      </div>
    </motion.nav>
  );
};

export default Navbar;
