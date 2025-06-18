import React from "react";

import { ReactComponent as F1Icon } from "../assets/images/f1.svg";
import { ReactComponent as F2Icon } from "../assets/images/f2.svg";
import { ReactComponent as F3Icon } from "../assets/images/f3.svg";
import { ReactComponent as F4Icon } from "../assets/images/f4.svg";
import { ReactComponent as F1DIcon } from "../assets/images/f1D.svg";
import { ReactComponent as F2DIcon } from "../assets/images/f2D.svg";
import { ReactComponent as F3DIcon } from "../assets/images/f3D.svg";
import { ReactComponent as F4DIcon } from "../assets/images/f4D.svg";

// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";

const FeaturesSection = ({ dark }) => {
  const MotionF1Icon = motion(F1Icon);
  const MotionF2Icon = motion(F2Icon);
  const MotionF3Icon = motion(F3Icon);
  const MotionF4Icon = motion(F4Icon);
  const MotionF1DIcon = motion(F1DIcon);
  const MotionF2DIcon = motion(F2DIcon);
  const MotionF3DIcon = motion(F3DIcon);
  const MotionF4DIcon = motion(F4DIcon);
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
      <h1
        className={`w-full  text-3xl font-bold mb-6 text-left ${
          dark ? "text-gray-200" : ""
        }`}
      >
        Features
      </h1>
      <div className={`feature-item w-full  text-lg`}>
        <motion.p
          variants={textAnimation}
          initial="hidden"
          whileInView="visible"
          className={`mb-4 ${dark ? "!text-gray-300" : "text-[#3E3E3E]"}`}
          viewport={{ once: true, amount: 0.5 }}
        >
          Share your thoughts, experiences, or knowledge through rich blog
          posts. Add photos, videos, links, or files to bring your story to life
          and connect with your audience.
        </motion.p>

        {dark ? (
          <MotionF1DIcon
            className="fill-current text-white"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 2, type: "spring", stiffness: 100 }}
            viewport={{ once: true, amount: 0.5 }}
          />
        ) : (
          <MotionF1Icon
            className="fill-current text-[#8ff7a4]"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 2, type: "spring", stiffness: 100 }}
            viewport={{ once: true, amount: 0.5 }}
          />
        )}
      </div>
      <div className="feature-item w-full">
        {dark ? (
          <MotionF2DIcon
            className="fill-current text-white"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 2, type: "spring", stiffness: 100 }}
            viewport={{ once: true, amount: 0.5 }}
          />
        ) : (
          <MotionF2Icon
            className="fill-current text-[#8ff7a4]"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 2, type: "spring", stiffness: 100 }}
            viewport={{ once: true, amount: 0.5 }}
          />
        )}

        <motion.p
          variants={textAnimation}
          initial="hidden"
          whileInView="visible"
          className={`mb-4 ${dark ? "!text-gray-300" : "text-[#3E3E3E]"}`}
          viewport={{ once: true, amount: 0.5 }}
        >
          See what everyone’s talking about. Hashtags let content rise to the
          top, and the trending page keeps you updated on the most popular and
          active discussions.
        </motion.p>
      </div>
      <div className="feature-item w-full">
        <motion.p
          variants={textAnimation}
          initial="hidden"
          whileInView="visible"
          className={`mb-4 ${dark ? "!text-gray-300" : "text-[#3E3E3E]"}`}
          viewport={{ once: true, amount: 0.5 }}
        >
          Create your own space or join others who share your interests.
          Communities let you post together, collaborate, and build meaningful
          conversations with like-minded people.
        </motion.p>
        {dark ? (
          <MotionF3DIcon
            className="fill-current text-white"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 2, type: "spring", stiffness: 100 }}
            viewport={{ once: true, amount: 0.5 }}
          />
        ) : (
          <MotionF3Icon
            className="fill-current text-[#8ff7a4]"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 2, type: "spring", stiffness: 100 }}
            viewport={{ once: true, amount: 0.5 }}
          />
        )}
      </div>
      <div className="feature-item w-full">
        {dark ? (
          <MotionF4DIcon
            className="fill-current text-white"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 2, type: "spring", stiffness: 100 }}
            viewport={{ once: true, amount: 0.5 }}
          />
        ) : (
          <MotionF4Icon
            className="fill-current text-[#8ff7a4]"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 2, type: "spring", stiffness: 100 }}
            viewport={{ once: true, amount: 0.5 }}
          />
        )}

        <motion.p
          variants={textAnimation}
          initial="hidden"
          whileInView="visible"
          className={`mb-4 ${dark ? "!text-gray-300" : "text-[#3E3E3E]"}`}
          viewport={{ once: true, amount: 0.5 }}
        >
          Follow your favorite creators, react to posts with likes, and leave
          comments to join the dialogue. Interaction is at the heart of Guava’s
          social experience.
        </motion.p>
      </div>
    </div>
  );
};

export default FeaturesSection;
