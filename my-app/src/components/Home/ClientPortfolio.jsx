import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ClientPortfolio = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };
const clients = [
  { src: "/works/Group 1.png", name: "Saaraang Skin Care" },
  { src: "/works/Group 13.png", name: "KidzEra Pre School" },
  { src: "/works/np.png", name: "Nilkanth Phisyotherapy" },
  { src: "/works/ic.png", name: "Infinity Classes" },
  { src: "/works/sv.png", name: "Sharda Vidhyamandir" },
  { src: "/works/dynamicdecor.png", name: "Dynamic Decor" },
  { src: "/works/copyhart.png", name: "Copy Hart" },
  { src: "/works/maabhagwati.png", name: "Maa Bhagwati Hospital" },
  { src: "/works/execllenttrekking.png", name: "Excellent Trekking & Holiday" },
  { src: "/works/nilkanthhospital.png", name: "Nikanth Hospital" },
  { src: "/works/hse.png", name: "Hashtag Spoken English classes" },
  { src: "/works/bf.png", name: "Bhaktinandan Furniture" },
  { src: "/works/shreehari.png", name: "ShreeHari Tution classes" },
  { src: "/works/akshar.png", name: "Akshar Netralaya" },
];
  return (
    <section className="relative border border-[#55555580] bg-white py-20">
      <div className="absolute inset-0 grid grid-cols-12">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="border-r border-[#55555520] last:border-r-0"
          />
        ))}
      </div>

      <motion.div
        ref={ref}
        className="container mx-auto px-6 md:px-8 pb-24"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {/* Section Header */}
        <div className="py-20 text-center">
          <h2 className="xxs:mx-5 sm:mx-5 lg:mx-24 2xl:mx-40 xxs:text-4xl sm:text-5xl xl:text-5xl font-bold poppins text-gray-800 mx-auto xxs:w-auto leading-snug">
            Our Valued Clients
          </h2>
        </div>

        {/* Client Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-px bg-[#55555520]">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              className="relative group bg-white aspect-square"
              variants={itemVariants}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="absolute inset-0 border border-[#55555580] p-8 flex items-center justify-center">
                {/* Dynamic Image */}
                <img
                  src={client.src}
                  alt={client.name}
                  title={client.name}
                  className="w-full cursor-pointer h-full object-contain"
                  loading="lazy"
                />

                {/* Hover overlay */}
                {/* <div className="absolute inset-0 border-2 border-[#555] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" /> */}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Animated Border Elements */}
        {/* <motion.div
          className="absolute right-8 bottom-24 w-px h-32 bg-[#55555580]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        /> */}
      </motion.div>
    </section>
  );
};

export default ClientPortfolio;
