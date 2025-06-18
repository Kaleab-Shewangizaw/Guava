import React from "react";
import Logo from "../assets/guava-icon.svg";
// eslint-disable-next-line no-unused-vars
import { easeIn, hover, motion, spring } from "motion/react";
import { useNavigate } from "react-router-dom";

const Navbar = ({ dark }) => {
  const navigate = useNavigate();
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
      className={`flex items-center h-[56px] sticky top-5 mr-auto ml-auto w-[70%] px-5 text-black rounded-2xl backdrop-blur-md z-100 ${
        dark ? "dark:bg-black/40" : "bg-white/70"
      } transition-colors duration-500`}
      initial={{ y: -200 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, type: "spring", stiffness: 100, delay: 0.7 }}
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
        <h3
          className={`font-bold  text-2xl m-0 p-0 ${
            dark ? "text-[#3BBD55]" : "text-[#257B36]"
          }`}
        >
          Guava
        </h3>
      </motion.div>
      <ul
        className={`nav-list flex items-center w-[40%] justify-between text-gray-800 ${
          dark ? "dark:text-gray-200" : ""
        } transition-colors duration-300`}
      >
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
        className={`bg-transparent border px-4 py-1 rounded-[8px] ml-auto mr-[1%] text-md cursor-pointer ${
          dark
            ? "text-white border-[#08ce308f]"
            : "text-[#257B36] border-[#257B36]"
        }`}
        variants={hoverAnimation}
        whileHover="hover"
        onClick={() => navigate("/login")}
      >
        Sign In
      </motion.button>

      <motion.button
        className={` text-white px-4 py-1 rounded-[8px] ml-1 text-md border  cursor-pointer ${
          dark
            ? " bg-[#34B94E] border-[#34B94E]"
            : "bg-[#257B36] border-[#257B36]"
        }`}
        variants={hoverAnimation}
        whileHover="hover"
        onClick={() => navigate("/signup")}
      >
        Get Started!
      </motion.button>
    </motion.div>
  );
};

export default Navbar;
