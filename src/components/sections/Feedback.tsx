"use client";

import { motion } from "framer-motion";
import { fadeIn, staggerContainer, zoomIn } from "@/utils/motion";

type Props = {};

const Feedback = (props: Props) => {
  return (
    <section className="paddings relative z-10">
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="innerWidth mx-auto flex lg:flex-row flex-col gap-6"
      >
        <motion.div
          variants={fadeIn("right", "tween", 0.2, 1)}
          className="flex-[0.5] lg:max-w-[370px] flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6a6a6a] relative"
        >
          <div className="feedback-gradient" />
          <div>
            <h4 className="font-bold sm:text-[32px] text-[26px] sm:leading-10 leading-9 text-white">
              Mr. Founder
            </h4>
            <p className="mt-2 font-normal sm:text-lg text-xs sm:leading-[22px] leading-4 text-white">
              Founder | Metaversus
            </p>
          </div>
          <p className="mt-6 font-normal sm:text-2xl text-lg sm:leading-[45px] leading-[39px] text-white">
            pellentesque elit eget gravida cum sociis natoque penatibus et
            magnis dis parturient montes nascetur ridiculus mus mauris vitae
            ultricies leo integer malesuada nunc vel risus commodo viverra
            maecenas
          </p>
        </motion.div>
        <motion.div
          variants={fadeIn("left", "tween", 0.2, 1)}
          className="relative flexCenter flex-1"
        >
          <img
            src="/planet-09.png"
            alt="planet-09"
            className="w-full lg:h-[610px] h-auto object-cover rounded-[40px] min-h-[210px]"
          />
          <motion.div
            variants={zoomIn(0.4, 1)}
            className="lg:block hidden absolute -left-[10%] top-[3%]"
          >
            <img
              src="/stamp.png"
              alt="stamp"
              className="w-[155px] h-[155px] object-contain"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Feedback;
