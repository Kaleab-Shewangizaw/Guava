import React from "react";
import F1 from "../assets/images/f1.svg";
import F2 from "../assets/images/f2.svg";
import F3 from "../assets/images/f3.svg";
import F4 from "../assets/images/f4.svg";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";

const FeaturesSection = () => {
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
      <h1 className="w-full  text-3xl font-bold mb-6 text-left">Features</h1>
      <div className="feature-item w-full">
        <motion.p
          variants={textAnimation}
          initial="hidden"
          whileInView="visible"
          className="text-lg text-[#3E3E3E] mb-4"
          viewport={{ once: true, amount: 0.5 }}
        >
          Share your thoughts, experiences, or knowledge through rich blog
          posts. Add photos, videos, links, or files to bring your story to life
          and connect with your audience.
        </motion.p>
        <motion.img
          src={F1}
          alt="Feature illustration"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 2, type: "spring", stiffness: 100 }}
          viewport={{ once: true, amount: 0.5 }}
        />
      </div>
      <div className="feature-item w-full">
        <motion.img
          src={F2}
          alt="Feature illustration"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
          viewport={{ once: true, amount: 0.5 }}
        />

        <motion.p
          variants={textAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="text-lg text-[#3E3E3E] mb-4"
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
          viewport={{ once: true, amount: 0.5 }}
          className="text-lg text-[#3E3E3E] mb-4"
        >
          Create your own space or join others who share your interests.
          Communities let you post together, collaborate, and build meaningful
          conversations with like-minded people.
        </motion.p>
        <motion.img
          src={F3}
          alt="Feature illustration"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{
            duration: 0.6,
            type: "spring",
            stiffness: 100,
            delay: 0.2,
          }}
        />
      </div>
      <div className="feature-item w-full">
        <motion.img
          src={F4}
          alt="Feature illustration"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
          viewport={{ once: true, amount: 1 }}
        />

        <motion.p
          variants={textAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="text-lg text-[#3E3E3E] mb-4"
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
