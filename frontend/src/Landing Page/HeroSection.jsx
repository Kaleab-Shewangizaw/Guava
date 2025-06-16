import React from "react";
import ShowCase1 from "../assets/images/Desktop - 10.png";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";

const HeroSection = () => {
  const buttonAnimation = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.3,
        type: "spring",
        stiffness: 300,
      },
    },
  };

  const textAnimation = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeIn",
      },
    },
  };
  return (
    <div className="mx-auto w-[70%] flex flex-col items-center mt-30">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
        className="flex flex-col items-center"
      >
        <motion.h1
          className="hero-text font-extrabold text-7xl"
          variants={textAnimation}
        >
          Blog. Share. Belong.
        </motion.h1>
        <motion.p className="mt-3 text-[#666666]" variants={textAnimation}>
          Build your story, create communities, and join conversations that
          matter — all on Guava.
        </motion.p>
      </motion.div>

      <div className="flex items-center  justify-center w-full my-15 gap-10">
        <motion.button
          className="bg-[#257B36] text-white px-4 py-1 rounded-[8px]  text-2xl font-light border-1 border-[#257B36]"
          variants={buttonAnimation}
          initial="hidden"
          animate="visible"
          whileHover="hover"
        >
          Get Started!
        </motion.button>
        <motion.button
          className="bg-transparent border-1 border-[#257B36] px-4 py-1 rounded-[8px] text-[22px] font-light cursor-pointer text-md"
          variants={buttonAnimation}
          initial="hidden"
          animate="visible"
          whileHover="hover"
        >
          Join a Community
        </motion.button>
      </div>
      <motion.img
        initial={{ y: 200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1, type: "spring", stiffness: 20 }}
        src={ShowCase1}
        className="rounded-lg shadow-2xl shadow-black  w-[80%]"
        alt=""
      />
    </div>
  );
};

export default HeroSection;
