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
      className="h-screen relative border border-[#55555580] overflow-hidden"
      ref={containerRef}
    >
      {/* Header */}
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="fixed top-0 w-full px-6 md:px-8 py-4 flex justify-between items-center bg-white/5 backdrop-blur-sm border-b border-gray-200"
      >
        <motion.div
          whileHover={{ borderBottom: "1px solid #555" }}
          className="text-lg font-light border-b border-transparent cursor-pointer"
        >
          Kriyona®
        </motion.div>

        <nav className="flex gap-6 md:gap-8 text-sm">
          {["Work", "Studio", "Contact"].map((item) => (
            <motion.button
              key={item}
              transition={{ duration: 0.8 }}
              className="relative text-[#333] hover:text-[#555]" // Default text color
              whileHover={{ color: "#555" }} // Smooth color change on hover
            >
              {item}
              <motion.span
                className="absolute left-0 bottom-0 h-px bg-[#555]"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          ))}
        </nav>
      </motion.header>

      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="hidden md:block absolute left-1/2 top-0 h-full w-px bg-[#55555580]"
      /> */}
      <div className="h-screen flex flex-col justify-end px-6 ">
        {/* Tagline */}

        {/* Title */}
        <div className="flex flex-col md:block">
          <motion.div className="flex justify-between items-center text-center">
            <motion.h1
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.3 }}
              className="text-6xl leading-[0.8] uppercase md:text-[280px] font-light overflow-hidden"
            >
              <motion.span
                variants={textVariants}
                transition={{ type: "spring", stiffness: 50 }}
                className="poppins inline-block"
              >
                Kriyona
              </motion.span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              transition={{ delay: 1.2 }}
              className="text-sm md:text-lg text-[#555] pe-40 mt-4 md:mt-6"
            >
              Visuals with Impact, Branding with Purpose.
            </motion.div>
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.5 }}
            className="text-6xl leading-[0.8] uppercase md:text-[280px] font-light overflow-hidden text-center md:text-right"
          >
            <motion.span
              variants={textVariants}
              transition={{ type: "spring", stiffness: 50 }}
              className="poppins  outlined-text inline-block"
            >
              Studio
            </motion.span>
          </motion.h1>
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
