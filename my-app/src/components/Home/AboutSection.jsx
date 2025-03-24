import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AboutSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section
      className="min-h-screen border border-[#55555580] relative bg-white"
      ref={ref}
    >
      {/* Grid Overlay */}
      <div className="absolute inset-0 grid grid-cols-12">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="border-r border-[#55555520] last:border-r-0"
          />
        ))}
      </div>

      <motion.div
        className="container mx-auto px-6 md:px-8 py-24 relative"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {/* Section Header */}
        <motion.div
          className="border-b border-[#55555580] pb-8 mb-16"
          variants={itemVariants}
        >
          <h2 className="text-5xl md:text-7xl font-light">
            <span className="block">
              About Us
            </span>
          </h2>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column */}
          <motion.div className="space-y-8" variants={itemVariants}>
            <motion.p
              className="text-xl leading-relaxed"
              variants={itemVariants}
            >
              Kriyona Studio is a digital foundry where innovation meets
              craftsmanship. We bridge the gap between technological excellence
              and human-centered design.
            </motion.p>

            <motion.div
              className="border border-[#55555580] p-8"
              variants={itemVariants}
            >
              <h3 className="text-2xl mb-4">Core Tenets</h3>
              <ul className="space-y-4">
                {[
                  "Precision Engineering",
                  "Creative Integrity",
                  "Sustainable Solutions",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center border-b border-[#55555520] pb-2"
                  >
                    <span className="mr-2">▹</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          {/* Right Column */}
          <motion.div className="space-y-8" variants={containerVariants}>
            <motion.div
              className="border border-[#55555580] p-8 relative"
              variants={itemVariants}
            >
              <div className="absolute -top-4 left-4 bg-white px-2 text-sm">
                Since 2024
              </div>
              <p className="text-lg">
                Crafting digital experiences that combine technical mastery with
                artistic vision. Our process is built on iterative refinement
                and cross-disciplinary collaboration.
              </p>
            </motion.div>

            <motion.div
              className="group relative h-64 bg-gray-100 border border-[#55555580] overflow-hidden"
              variants={itemVariants}
              whileHover={{ scale: 0.98 }}
            >
              <div className="absolute inset-0 bg-[#55555510] mix-blend-multiply transition-opacity duration-300 group-hover:opacity-0" />
              <div className="p-4 absolute bottom-0 left-0 right-0 bg-gradient-to-t from-white to-transparent">
                <h3 className="text-xl">Process →</h3>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Animated Border Elements */}
        <motion.div
          className="absolute left-8 top-1/2 w-px h-32 bg-[#55555580]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        />
      </motion.div>
    </section>
  );
};

export default AboutSection;
