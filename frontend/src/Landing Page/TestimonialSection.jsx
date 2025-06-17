import React from "react";
import Testimony from "./Testimony";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const TestimonialSection = () => {
  return (
    <>
      <div className="mx-auto w-[70%] flex flex-col items-center mt-30">
        <h1 className="w-full  text-3xl font-bold mb-6 text-left">
          Testimonials
        </h1>
      </div>
      <div className="w-full py-10 overflow-hidden">
        <motion.div
          className="flex gap-5 w-max"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            duration: 500,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {[...Array(10)].flatMap((_, index) => [
            <Testimony
              key={`selam-${index}`}
              name="Selam M."
              testimony="This is a great service!"
            />,
            <Testimony
              key={`john-${index}`}
              name="John D."
              testimony="I had an amazing experience!"
            />,
            <Testimony
              key={`alice-${index}`}
              name="Alice S."
              testimony="Highly recommend this to everyone!"
            />,
            <Testimony
              key={`bob-${index}`}
              name="Bob T."
              testimony="A fantastic platform for sharing ideas!"
            />,
            <Testimony
              key={`jane-${index}`}
              name="Jane R."
              testimony="I love the community and the features!"
            />,
            <Testimony
              key={`mike-${index}`}
              name="Mike L."
              testimony="This has changed the way I connect with others!"
            />,
            <Testimony
              key={`sara-${index}`}
              name="Sara K."
              testimony="An excellent place to express myself!"
            />,
          ])}
        </motion.div>
      </div>
    </>
  );
};

export default TestimonialSection;
