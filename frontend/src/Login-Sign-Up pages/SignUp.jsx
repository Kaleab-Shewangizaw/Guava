import React, { useState } from "react";
import DarkToggle from "../Utils/DarkToggle";
import useDarkMode from "../Utils/DarkSetting";
import Logo from "../assets/guava-icon.svg";
//eslint-disable-next-line no-unused-vars
import { motion, spring } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const SignUp = () => {
  const [darkMode, setDarkMode] = useDarkMode();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      className={`w-full h-screen  relative flex flex-col ${
        darkMode
          ? "bg-gradient-to-r from-[#364F3B] to-[#3B4549]"
          : "bg-gradient-to-r from-white to-[#CBE1EB]"
      }`}
    >
      <DarkToggle
        info={false}
        handleDark={handleDarkModeToggle}
        darkMode={darkMode}
      />
      <motion.div
        className="text-center w-lg bg-[#CAFFE5]/30 rounded-lg backdrop:blur-lg flex flex-col items-center mx-auto mt-10 p-10 shadow-2xl gap-10"
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 0.9,
          ease: "linear",
          type: spring,
          stiffness: 500,
        }}
      >
        <motion.img
          src={Logo}
          alt="Guava Logo"
          className="w-[40px] h-[40px] mr-0 p-0"
        />
        <h1
          className={`text-2xl  mb-4 ${
            darkMode ? "text-white" : "text-[#000000]"
          }`}
        >
          Welcome!
        </h1>
        <form className="" action="">
          <div className="flex flex-col gap-4 w-full relative">
            <input
              type="text"
              placeholder="Username"
              className={`p-2 rounded-lg outline-0 placeholder:text-gray-500 w-full ${
                darkMode ? "bg-gray-700 text-white" : "bg-[#A4E5B1] text-black"
              }`}
            />
            <input
              type="email"
              placeholder="Email"
              className={`p-2 rounded-lg outline-0 placeholder:text-gray-500   ${
                darkMode ? "bg-gray-700 text-white" : "bg-[#A4E5B1] text-black"
              }`}
            />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className={`p-2 rounded-lg outline-0 placeholder:text-gray-500 ${
                darkMode ? "bg-gray-700 text-white" : "bg-[#A4E5B1] text-black"
              }`}
            />
            {showPassword ? (
              <FaEyeSlash
                className={`absolute right-3 top-31  cursor-pointer hover:scale-120 transition-all duration-200 ${
                  darkMode ? "text-gray-300" : "text-gray-600"
                }`}
                onClick={() => {
                  setShowPassword(!showPassword);
                }}
              />
            ) : (
              <FaEye
                className={`absolute right-3 top-31  cursor-pointer hover:scale-120 transition-all duration-200 ${
                  darkMode ? "text-gray-300" : "text-gray-600"
                }`}
                onClick={() => {
                  setShowPassword(!showPassword);
                }}
              />
            )}
          </div>
          <button
            type="submit"
            className={`mt-4 p-2 rounded-lg w-full cursor-pointer ${
              darkMode
                ? "bg-[#3BBD55] text-white hover:bg-[#2A8C42]"
                : "bg-[#257B36] text-white hover:bg-[#1A5A27]"
            } transition-colors duration-300`}
          >
            Sign Up
          </button>
          <button
            type="button"
            onClick={() => alert("Google Sign Up is not implemented yet!")}
            className={`mt-4 p-2 rounded-lg w-full cursor-pointer ${
              darkMode
                ? "bg-[#3b3b3b] text-white hover:bg-[#666766]"
                : "bg-[#3b3b3b] text-white hover:bg-[#666766]"
            } transition-colors duration-300`}
          >
            google
          </button>
        </form>
        <p
          className={`mt-4 text-sm ${
            darkMode ? "text-white" : "text-[#000000]"
          }`}
        >
          Already have an account?{" "}
          <p
            onClick={() => {
              navigate("/login");
            }}
            href="/login"
            className={`text-[#34B94E] hover:underline font-bold inline cursor-pointer ${
              darkMode ? "text-[#62f981]" : "text-[#257B36]"
            }`}
          >
            Log In
          </p>
        </p>
      </motion.div>
    </div>
  );
};
export default SignUp;
