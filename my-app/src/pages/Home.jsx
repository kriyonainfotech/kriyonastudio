import React from "react";
import HeroSection from "../components/Home/HeroSection";
import { LazyMotion, domAnimation } from "framer-motion";
import AboutSection from "../components/Home/AboutSection";
import ClientPortfolio from "../components/Home/ClientPortfolio";
import Technologies from "../components/Home/Technologies";
import BrandElevationSection from "../components/Home/BrandElevationSection";


const Home = () => {
  
  return (
    <div>
      <LazyMotion features={domAnimation}>
        <HeroSection />
        <AboutSection />
        <Technologies />
       
        <ClientPortfolio />
        <BrandElevationSection />
      </LazyMotion>
    </div>
  );
};

export default Home;
//  <div className="relative overflow-hidden py-8 isolate">
//    {/* Gradient Overlays */}
//    <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-20" />
//    <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-20" />

//    {/* Marquee Container */}
//    <div className="flex nowrap overflow-hidden">
//      {/* Marquee Content - Duplicated */}
//      <div className="flex items-center shrink-0 min-w-full animate-marquee gap-8 pr-8">
//        {/* Content Set 1 */}
//        {[...Array(8)].map((_, i) => (
//          <div key={i} className="flex items-center gap-8">
//            <span className="text-5xl font-bold bg-gradient-to-r from-[#DC2626] via-[#7F1D1D] to-black bg-clip-text text-transparent">
//              INNOVATIVE DESIGNS
//            </span>
//            <span className="text-4xl">✦</span> {/* Black heart */}
//            <span className="text-5xl font-bold bg-gradient-to-r from-[#EF4444] via-[#450A0A] to-[#000000] bg-clip-text text-transparent">
//              CREATIVE SOLUTIONS
//            </span>
//            <span className="text-4xl">✦</span>
//          </div>
//        ))}
//      </div>

//      {/* Mirror Content for Seamless Loop */}
//      <div className="flex items-center shrink-0 min-w-full animate-marquee gap-8 pr-8">
//        {/* Content Set 2 (Duplicate) */}
//        {[...Array(8)].map((_, i) => (
//          <div key={i} className="flex items-center gap-8">
//            <span className="text-5xl font-bold bg-gradient-to-r from-[#DC2626] via-[#7F1D1D] to-black bg-clip-text text-transparent">
//              INNOVATIVE DESIGNS
//            </span>
//            <span className="text-4xl">✦</span> {/* Black heart */}
//            <span className="text-5xl font-bold bg-gradient-to-r from-[#EF4444] via-[#450A0A] to-[#000000] bg-clip-text text-transparent">
//              CREATIVE SOLUTIONS
//            </span>
//            <span className="text-4xl">✦</span>
//          </div>
//        ))}
//      </div>
//    </div>

//    {/* Animation Styles */}
//    <style jsx global>{`
//      @keyframes marquee {
//        0% {
//          transform: translateX(0%);
//        }
//        100% {
//          transform: translateX(-100%);
//        }
//      }
//      .animate-marquee {
//        animation: marquee 40s linear infinite;
//        animation-timing-function: linear !important;
//      }
//      /* Force hardware acceleration */
//      .animate-marquee {
//        transform: translate3d(0, 0, 0);
//        backface-visibility: hidden;
//        perspective: 1000px;
//      }
//    `}</style>
//  </div>;