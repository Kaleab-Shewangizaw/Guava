import React from "react";
import ShowCase1 from "../assets/images/Desktop - 10.png";
import ShowCase2 from "../assets/images/Desktop - 7.png";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";

const HeroSection = ({ dark }) => {
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
          className={`hero-text font-extrabold text-7xl ${
            dark ? "text-white" : ""
          }`}
          variants={textAnimation}
        >
          Blog. Share. Belong.
        </motion.h1>
        <motion.p
          className={`mt-3 text-[#666666] ${dark ? "text-[#B3B3B3]" : ""}`}
          variants={textAnimation}
        >
          Build your story, create communities, and join conversations that
          matter — all on Guava.
        </motion.p>
      </motion.div>

      <div className="flex items-center  justify-center w-full my-15 gap-10">
        <motion.button
          className={` text-white px-4 py-1 rounded-[8px]  text-2xl font-light border cursor-pointer ${
            dark
              ? " bg-[#34B94E] border-[#34B94E]"
              : "bg-[#257B36] border-[#257B36]"
          }`}
          variants={buttonAnimation}
          initial="hidden"
          animate="visible"
          whileHover="hover"
        >
          Get Started!
        </motion.button>
        <motion.button
          className={`bg-transparent border border-[#257B36] px-4 py-1 rounded-[8px] text-[22px] font-light cursor-pointer text-md ${
            dark
              ? "text-white border-[#21ff08]"
              : "text-[#257B36] border-[#257B36]"
          }`}
          variants={buttonAnimation}
          initial="hidden"
          animate="visible"
          whileHover="hover"
        >
          Join a Community
        </motion.button>
      </div>
      <motion.img
        key={dark ? "dark-image" : "light-image"}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        src={dark ? ShowCase1 : ShowCase2}
        className="rounded-lg shadow-2xl shadow-black w-[80%]"
        alt=""
      />
    </div>
  );
};

export default HeroSection;
