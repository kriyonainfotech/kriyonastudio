import React from "react";
import HeroSection from "../components/Home/HeroSection";
import { LazyMotion, domAnimation } from "framer-motion";
import AboutSection from "../components/Home/AboutSection";
import ClientPortfolio from "../components/Home/ClientPortfolio";
import Technologies from "../components/Home/Technologies";
import BrandElevationSection from "../components/Home/BrandElevationSection";
import MarqueeComponent from "../components/common/MarqueeComponent";

const Home = () => {
  return (
    <div>
      <LazyMotion features={domAnimation}>
        <HeroSection />
        <AboutSection />
        <Technologies />
        <MarqueeComponent />
        {/* <ClientPortfolio /> */}
        <BrandElevationSection />
      </LazyMotion>
    </div>
  );
};

export default Home;
