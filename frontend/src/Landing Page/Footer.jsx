import React from "react";
import Logo from "../assets/guava-icon.svg";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";

const Footer = ({ dark }) => {
  const navigate = useNavigate();
  const hoverAnimation = {
    rest: { scale: 1 },
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
    <div
      className={`w-full py-2  mt-10 ${
        dark ? "bg-[#1771294a]" : "bg-[rgba(5,102,24,0.29)]"
      }`}
    >
      <div className="w-[70%] mx-auto flex justify-between items-center">
        <motion.img
          src={Logo}
          alt="Guava Logo"
          whileHover={{ rotateZ: 25 }}
          className="w-[50px] h-[50px] mr-0 p-0 cursor-pointer"
        />

        <div className={`flex gap-4 `}>
          <motion.a
            href="#"
            className={`${dark ? "text-[#E4E1E1]" : "text-[#016114]"}`}
            variants={hoverAnimation}
            initial="rest"
            whileHover="hover"
            animate="rest"
          >
            GitHub
          </motion.a>
          <motion.a
            href="#"
            className={`${dark ? "text-[#E4E1E1]" : "text-[#016114]"}`}
            variants={hoverAnimation}
            initial="rest"
            whileHover="hover"
            animate="rest"
          >
            LinkedIn
          </motion.a>
          <motion.a
            href="#"
            className={`${dark ? "text-[#E4E1E1]" : "text-[#016114]"}`}
            variants={hoverAnimation}
            initial="rest"
            whileHover="hover"
            animate="rest"
          >
            X
          </motion.a>
        </div>

        <motion.button
          className={` text-white px-4 py-1 rounded-[8px] ml-1 text-md border-1  cursor-pointer ${
            dark
              ? " bg-[#34B94E] border-[#34B94E]"
              : "bg-[#257B36] border-[#257B36]"
          }`}
          variants={hoverAnimation}
          initial="rest"
          whileHover="hover"
          animate="rest"
          onClick={() => navigate("/signup")}
        >
          Get Started!
        </motion.button>
      </div>
    </div>
  );
};

export default Footer;
