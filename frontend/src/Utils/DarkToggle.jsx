import React from "react";
//eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaInfo, FaMoon, FaTelegramPlane } from "react-icons/fa";
import { IoMdSunny } from "react-icons/io";

const DarkToggle = ({ info, handleDark, darkMode }) => {
  // Add darkMode to props
  return (
    <div className="sticky top-4 z-50 w-full flex justify-end pr-4">
      <div className="flex gap-2">
        <button className="p-3 rounded-full text-2xl text-[#00ceca] cursor-pointer hover:scale-110 transition-all duration-150 text-center ">
          {info ? <FaInfo /> : <FaTelegramPlane />}
        </button>

        <motion.button
          className="p-3 rounded-full text-2xl text-[#4d4d4d] cursor-pointer hover:scale-110 transition-all text-center duration-150 "
          onClick={handleDark}
          key={darkMode ? "dark-mode" : "light-mode"}
          initial={{ opacity: 0, scale: 0.95, rotateZ: -190 }}
          animate={{ opacity: 1, scale: 1, rotateZ: 0 }}
          transition={{ duration: 0.5, ease: "linear" }}
        >
          {darkMode ? <IoMdSunny className="text-white/70" /> : <FaMoon />}
        </motion.button>
      </div>
    </div>
  );
};

export default DarkToggle;
