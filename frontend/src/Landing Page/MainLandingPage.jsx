import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import FeaturesSection from "./FeaturesSection";
import TestimonialSection from "./TestimonialSection";
import Footer from "./Footer";

const MainLandingPage = () => {
  return (
    <>
      <div className="w-full bg-gradient-to-r from-white to-[#CBE1EB]  relative">
        <Navbar />
        <HeroSection />
        <FeaturesSection />
        <TestimonialSection />
        <Footer />
      </div>
    </>
  );
};

export default MainLandingPage;
