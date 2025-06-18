import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import FeaturesSection from "./FeaturesSection";
import TestimonialSection from "./TestimonialSection";
import Footer from "./Footer";
import { FaMoon } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { IoMdSunny } from "react-icons/io";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";

const MainLandingPage = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    return saved === null ? false : JSON.parse(saved);
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <div
      className={`w-full relative min-h-screen ${
        darkMode
          ? "bg-gradient-to-r from-[#364F3B] to-[#3B4549]"
          : "bg-gradient-to-r from-white to-[#CBE1EB]"
      } transition-colors duration-900 ease-in-out`}
    >
      <div className="sticky top-4 z-50 w-full flex justify-end pr-4">
        <div className="flex gap-2">
          <button className="p-3 rounded-full text-2xl text-[#00ceca] cursor-pointer hover:scale-110 transition-all duration-150 text-center ">
            <FaTelegramPlane />
          </button>
          <motion.button
            className="p-3 rounded-full text-2xl text-[#4d4d4d] cursor-pointer hover:scale-110 transition-all text-center duration-150 "
            onClick={() => setDarkMode(!darkMode)}
            key={darkMode ? "dark-mode" : "light-mode"}
            initial={{ opacity: 0, scale: 0.95, rotateZ: -190 }}
            animate={{ opacity: 1, scale: 1, rotateZ: 0 }}
            transition={{ duration: 0.5, ease: "linear" }}
          >
            {darkMode ? <IoMdSunny className="text-white/70" /> : <FaMoon />}
          </motion.button>
        </div>
      </div>

      <Navbar dark={darkMode} />
      <HeroSection dark={darkMode} />
      <FeaturesSection dark={darkMode} />
      <TestimonialSection dark={darkMode} />
      <Footer dark={darkMode} />
    </div>
  );
};

export default MainLandingPage;
