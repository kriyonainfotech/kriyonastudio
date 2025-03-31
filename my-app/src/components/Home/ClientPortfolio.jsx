// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import { useState } from "react";

// const ClientItem = ({ src, name }) => {
//   const [loaded, setLoaded] = useState(false);

//   return (
//     <div className="relative group bg-white aspect-square">
//       <div className="absolute inset-0 border border-[#55555580] p-8 flex items-center justify-center">
//         {/* Shimmer placeholder */}
//         {!loaded && (
//           <div className="absolute inset-0 shimmer bg-[#f6f7f8] bg-gradient-to-r from-transparent via-[#f8f8f8] to-transparent" />
//         )}

//         {/* Optimized image */}
//         <img
//           src={src}
//           alt={name}
//           title={name}
//           className={`w-full h-full object-contain transition-opacity duration-300 ${
//             loaded ? "opacity-100" : "opacity-0"
//           }`}
//           loading="lazy"
//           decoding="async"
//           onLoad={() => setLoaded(true)}
//         />
//       </div>
//     </div>
//   );
// };

// const ClientPortfolio = () => {
//   const [ref, inView] = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   // Your clients array remains the same
//   const clients = [
//     { src: "/works/Group 1.png", name: "Saaraang Skin Care" },
//     { src: "/works/Group 13.png", name: "KidzEra Pre School" },
//     { src: "/works/np.png", name: "Nilkanth Phisyotherapy" },
//     { src: "/works/ic.png", name: "Infinity Classes" },
//     { src: "/works/sv.png", name: "Sharda Vidhyamandir" },
//     { src: "/works/dynamicdecor.png", name: "Dynamic Decor" },
//     { src: "/works/copyhart.png", name: "Copy Hart" },
//     { src: "/works/maabhagwati.png", name: "Maa Bhagwati Hospital" },
//     {
//       src: "/works/execllenttrekking.png",
//       name: "Excellent Trekking & Holiday",
//     },
//     { src: "/works/nilkanthhospital.png", name: "Nikanth Hospital" },
//     { src: "/works/hse.png", name: "Hashtag Spoken English classes" },
//     { src: "/works/bf.png", name: "Bhaktinandan Furniture" },
//     { src: "/works/shreehari.png", name: "ShreeHari Tution classes" },
//     { src: "/works/akshar.png", name: "Akshar Netralaya" },
//   ];

//   return (
//     <section
//       id="projects"
//       className="relative border border-[#55555580] bg-white py-20"
//     >
//       {/* Add shimmer animation to your CSS */}
//       <style jsx>{`
//         .shimmer {
//           animation: shimmer 2s infinite linear;
//           background-size: 200% 100%;
//         }

//         @keyframes shimmer {
//           0% {
//             background-position: -200% 0;
//           }
//           100% {
//             background-position: 200% 0;
//           }
//         }
//       `}</style>

//       <motion.div
//         ref={ref}
//         className="container mx-auto px-6 md:px-8 pb-24"
//         initial="hidden"
//         animate={inView ? "visible" : "hidden"}
//       >
//         {/* Section Header */}
//         <div className="py-20 text-center">
//           <h2 className="xxs:mx-5 sm:mx-5 lg:mx-24 2xl:mx-40 xxs:text-4xl sm:text-5xl xl:text-5xl font-bold poppins text-gray-800 mx-auto xxs:w-auto leading-snug">
//             Our Valued Clients
//           </h2>
//         </div>

//         {/* Optimized Client Grid */}
//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-px bg-[#55555520]">
//           {clients.map((client, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 50 }}
//               animate={inView ? { opacity: 1, y: 0 } : {}}
//               transition={{
//                 delay: index * 0.1,
//                 type: "spring",
//                 stiffness: 300,
//               }}
//             >
//               <ClientItem src={client.src} name={client.name} />
//             </motion.div>
//           ))}
//         </div>
//       </motion.div>
//     </section>
//   );
// };

// export default ClientPortfolio;
import { useState, useMemo } from "react";

const ClientItem = ({ src, name }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative bg-white aspect-square">
      <div className="absolute inset-0 border border-[#55555580] p-4 md:p-6 flex items-center justify-center">
        {!loaded && (
          <div className="absolute inset-0 bg-gray-100 animate-pulse" />
        )}
        <img
          src={src}
          alt={name}
          title={name}
          width={200}
          height={200}
          className={`w-full h-full object-contain transition-opacity duration-300 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
          loading="lazy"
          decoding="async"
          onError={() => console.error(`Image failed to load: ${src}`)}
          onLoad={() => setLoaded(true)}
        />
      </div>
    </div>
  );
};

const ClientPortfolio = () => {
  const clients = useMemo(
    () => [
      { src: "/works/Group 1.png", name: "Saaraang Skin Care" },
      { src: "/works/Group 13.png", name: "KidzEra Pre School" },
      { src: "/works/np.png", name: "Nilkanth Phisyotherapy" },
      { src: "/works/ic.png", name: "Infinity Classes" },
      { src: "/works/sv.png", name: "Sharda Vidhyamandir" },
      { src: "/works/dynamicdecor.png", name: "Dynamic Decor" },
      { src: "/works/copyhart.png", name: "Copy Hart" },
      { src: "/works/maabhagwati.png", name: "Maa Bhagwati Hospital" },
      {
        src: "/works/execllenttrekking.png",
        name: "Excellent Trekking & Holiday",
      },
      { src: "/works/nilkanthhospital.png", name: "Nikanth Hospital" },
      { src: "/works/hse.png", name: "Hashtag Spoken English classes" },
      { src: "/works/bf.png", name: "Bhaktinandan Furniture" },
      { src: "/works/shreehari.png", name: "ShreeHari Tution classes" },
      { src: "/works/akshar.png", name: "Akshar Netralaya" },
    ],
    []
  );

  return (
    <section
      id="projects"
      className="relative border border-[#55555580] bg-white py-12 md:py-16"
    >
      <div className="container mx-auto px-4 md:px-6 pb-12">
        <div className="py-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold poppins text-gray-800 mx-auto leading-snug">
            Our Valued Clients
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4">
          {clients.map((client, index) => (
            <ClientItem key={index} src={client.src} name={client.name} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientPortfolio;
