import React from "react";
import HeroSection from "../components/Home/HeroSection";
import { LazyMotion, domAnimation } from "framer-motion";
import AboutSection from "../components/Home/AboutSection";

const Home = () => {
  return (
    <div>
      <LazyMotion features={domAnimation}>
        <HeroSection />
        <AboutSection />
      </LazyMotion>
    </div>
  );
};

export default Home;
