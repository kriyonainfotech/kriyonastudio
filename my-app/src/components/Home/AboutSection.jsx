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
      className="min-h-screen border border-[#55555580] relative"
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
        <motion.div className="text-center pb-8 mb-16 " variants={itemVariants}>
          <h2 className="xxs:mx-5 sm:mx-5 lg:mx-24 2xl:mx-40 xxs:text-4xl sm:text-5xl xl:text-5xl font-bold text-gray-800 mx-auto xxs:w-auto leading-snug pt-20t">
            About Us
          </h2>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 text-center gap-12">
          {/* Left Column */}
          <motion.div
            className="space-y-8 bg-white py-8 px-6 border border-[#55555580]"
            variants={itemVariants}
          >
            <motion.p
              className="text-lg font-normal text-gray-800 leading-relaxed poppins"
              variants={itemVariants}
            >
              At{" "}
              <span className="font-bold  bg-gradient-to-r from-red-500 to-black bg-clip-text text-transparent">
                Kriyona Studio
              </span>
              , we bring your brand to life through visually stunning and
              strategically crafted content. Specializing in professional reel
              making, video editing, post designing, and branding, we help
              businesses and creators stand out in the digital world.
            </motion.p>
          </motion.div>

          {/* Right Column */}
          <motion.div className="space-y-8" variants={containerVariants}>
            <motion.div
              className="border border-[#55555580] bg-white p-6 relative"
              variants={itemVariants}
            >
              <div className="absolute -top-4 left-4 bg-white px-2 text-sm font-normal mont">
                Since 2024
              </div>
              <p className="text-md mont text-gray-800 ">
                From startups to established brands, Kriyona Studio is your
                go-to creative partner for building a strong, visually
                compelling digital presence. <br /> Let’s create something
                amazing together!
              </p>
            </motion.div>

            {/* <motion.div
              className="group relative h-64 bg-gray-100 border border-[#55555580] overflow-hidden"
              variants={itemVariants}
              whileHover={{ scale: 0.98 }}
            >
              <div className="absolute inset-0 bg-[#55555510] mix-blend-multiply transition-opacity duration-300 group-hover:opacity-0" />
              <div className="p-4 absolute bottom-0 left-0 right-0 bg-gradient-to-t from-white to-transparent">
                <h3 className="text-xl">Process →</h3>
              </div>
            </motion.div> */}
          </motion.div>
        </div>

        <motion.div
          className="bg-white border border-[#55555580] p-8 mt-10 relative"
          variants={itemVariants}
        >
          <div className="absolute -top-4 left-4 bg-white px-2 text-sm font-normal mont">
            Our Expertise
          </div>
          <ul className="space-y-6">
            {[
              "Reel Production & Editing – From iPhone to DSLR cinematic reels, we ensure high-quality shooting, seamless editing, and engaging storytelling.",
              "Graphic & Post Design – A brand’s voice is best expressed through compelling social media posts, logos, and branding graphics.",
              "Marketing-Driven Content – We don’t just create; we strategize. Our content is designed to increase engagement and visibility across platforms.",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start border-b border-[#55555520] mont font-normal text-md text-gray-800 pb-2"
              >
                <span className="mr-2">▹</span>
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Animated Border Elements */}
        {/* <motion.div
          className="absolute left-8 top-1/2 w-px h-32 bg-[#55555580]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        /> */}
      </motion.div>
    </section>
  );
};

export default AboutSection;
