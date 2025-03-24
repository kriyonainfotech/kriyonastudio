import React from "react";
import HeroSection from "../components/Home/HeroSection";
import { LazyMotion, domAnimation } from "framer-motion";

const Home = () => {
  return (
    <div>
      <LazyMotion features={domAnimation}>
        <HeroSection />
      </LazyMotion>
    </div>
  );
};

export default Home;
