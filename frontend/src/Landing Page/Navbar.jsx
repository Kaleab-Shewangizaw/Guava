import React from "react";
import Logo from "../assets/guava-icon.svg";
import { easeIn, hover, motion, spring } from "motion/react";

const Navbar = () => {
  const hoverAnimation = {
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.3,
        ease: "easeIn",
        type: "spring",
        stiffness: 300,
      },
    },
  };

  return (
    <motion.div
      className="flex items-center h-[56px] sticky top-5 mr-auto ml-auto w-[70%] px-5 rounded-2xl bg-[rgba(195,195,195,0.37)] "
      initial={{ y: -200 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, type: "spring", stiffness: 100 }}
    >
      <motion.div
        className="flex items-center gap-0  mr-[16%]  cursor-pointer"
        variants={hoverAnimation}
        whileHover="hover"
      >
        <motion.img
          src={Logo}
          alt="Guava Logo"
          className="w-[50px] h-[50px] mr-0 p-0  "
        />
        <h3 className="font-bold text-[#257B36] text-2xl m-0 p-0">Guava</h3>
      </motion.div>
      <ul className="nav-list flex items-center  w-[40%] justify-between text-[#3E3E3E]">
        <motion.li variants={hoverAnimation} whileHover="hover">
          Home
        </motion.li>
        <motion.li variants={hoverAnimation} whileHover="hover">
          Features
        </motion.li>
        <motion.li variants={hoverAnimation} whileHover="hover">
          Communities
        </motion.li>
        <motion.li variants={hoverAnimation} whileHover="hover">
          Trends
        </motion.li>
      </ul>
      <motion.button
        className="bg-transparent border-1 border-[#257B36] px-4 py-1 rounded-[8px] ml-auto mr-[1%] cursor-pointer text-md"
        variants={hoverAnimation}
        whileHover="hover"
      >
        Sign In
      </motion.button>
      <motion.button
        className="bg-[#257B36] text-white px-4 py-1 rounded-[8px] ml-1 text-md"
        variants={hoverAnimation}
        whileHover="hover"
      >
        Get Started!
      </motion.button>
    </motion.div>
  );
};

export default Navbar;
