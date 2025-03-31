import { motion, useScroll } from "framer-motion";
import { useRef } from "react";

const HeroSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ container: containerRef });

  const textVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <div
      className="h-screen relative border border-[#55555580] overflow-hidden bg-cover bg-right-top bg-no-repeat"
      ref={containerRef}
      style={{
        backgroundImage: "url('/Ellipse 462.svg')",
      }}
    >
      <div className="h-screen flex flex-col justify-center md:justify-end px-4">
        <div className="flex flex-col md:block">
          {/* Kriyona */}
          <motion.div className="relative">
            <motion.h1
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.3 }}
              className="text-7xl sm:text-8xl md:text-9xl lg:text-[180px] xl:text-[250px] leading-[0.8] uppercase font-light overflow-hidden text-center md:text-left"
            >
              <motion.span
                variants={textVariants}
                transition={{ type: "spring", stiffness: 50 }}
                className="poppins inline-block outlined-text"
              >
                Kriyona
              </motion.span>
            </motion.h1>
          </motion.div>

          {/* Studio */}
          <motion.h1
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.5 }}
            className="text-7xl sm:text-8xl md:text-9xl lg:text-[180px] xl:text-[250px] leading-[0.8] uppercase font-light overflow-hidden text-center md:text-right"
          >
            <motion.span
              variants={textVariants}
              transition={{ type: "spring", stiffness: 50 }}
              className="poppins inline-block"
            >
              Studio
            </motion.span>
          </motion.h1>

          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            transition={{ delay: 1.2 }}
            className=" sm:text-md md:text-lg lg:text-xl text-[#555] max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mt-4 md:mt-6 mx-auto md:mx-0 md:absolute md:right-10 lg:right-20 xl:right-40 bottom-10 md:bottom-55 lg:bottom-75 xl:bottom-100"
          >
            Visuals with Impact, Branding with Purpose.
          </motion.div>
        </div>
      </div>

      {/* Animated Bottom Border */}
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ delay: 1.5, duration: 1.2 }}
        className="absolute bottom-0 left-0 h-px bg-[#55555580]"
      />

      {/* Scroll Progress */}
      <motion.div
        className="fixed top-0 left-0 h-px bg-[#555]"
        style={{ scaleX: scrollYProgress }}
      />
    </div>
  );
};

export default HeroSection;
