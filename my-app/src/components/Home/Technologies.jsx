import { motion } from "framer-motion";
import { useState } from "react";

const Technologies = () => {
    const [activeCategory, setActiveCategory] = useState("VideoEditing");


  //  const categories = {
  //    Frontend: [
  //      { name: "Next.js", img: "/nextjs.svg", link: "https://nextjs.org/" },
  //      {
  //        name: "TypeScript",
  //        img: "/typescript.svg",
  //        link: "https://www.typescriptlang.org/",
  //      },
  //      {
  //        name: "JavaScript",
  //        img: "/javascript.svg",
  //        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  //      },
  //      { name: "React", img: "/react.svg", link: "https://react.dev" },
  //      {
  //        name: "HTML",
  //        img: "/html.svg",
  //        link: "https://www.w3schools.com/html/",
  //      },
  //      { name: "CSS", img: "/css.svg", link: "https://www.w3schools.com/css/" },
  //      {
  //        name: "Bootstrap",
  //        img: "/bootstrap.svg",
  //        link: "https://getbootstrap.com/",
  //      },
  //    ],
  //    Backend: [
  //      { name: "Node.js", img: "/nodejs.png", link: "https://nodejs.org/" },
  //      {
  //        name: "Express",
  //        img: "/express-js.png",
  //        link: "https://expressjs.com/",
  //      },
  //      {
  //        name: "MongoDB",
  //        img: "/MongoDB-Logo.png",
  //        link: "https://www.mongodb.com/",
  //      },
  //      {
  //        name: "PostgreSQL",
  //        img: "/Postgresql_elephant.svg.png",
  //        link: "https://www.postgresql.org/",
  //      },
  //      { name: "MySQL", img: "/mysql.png", link: "https://www.mysql.com/" },
  //    ],
  //    DevOps: [
  //      { name: "Docker", img: "/docker.png", link: "https://www.docker.com/" },
  //      {
  //        name: "Kubernetes",
  //        img: "/kubernets.jpg",
  //        link: "https://kubernetes.io/",
  //      },
  //      { name: "Gradle", img: "/gradle.png", link: "https://gradle.org/" },
  //    ],
  //    "UI/UX": [
  //      { name: "Figma", img: "/figma.png", link: "https://www.figma.com/" },
  //      {
  //        name: "Adobe XD",
  //        img: "/tech/Xd.png",
  //        link: "https://www.adobe.com/products/xd.html",
  //      },
  //      {
  //        name: "Photoshop",
  //        img: "/tech/photoshop.png",
  //        link: "https://www.adobe.com/products/photoshop.html",
  //      },
  //      {
  //        name: "Illustrator",
  //        img: "/tech/illustrator.png",
  //        link: "https://www.adobe.com/products/illustrator.html",
  //      },
  //    ],
  //    Mobiles: [
  //      {
  //        name: "React Native",
  //        img: "/services/reactjs.png",
  //        link: "https://reactnative.dev/",
  //      },
  //      {
  //        name: "Flutter",
  //        img: "/services/Flutter.png",
  //        link: "https://flutter.dev/",
  //      },
  //    ],
  //    VideoEditing: [
  //      {
  //        name: "AfterEffect",
  //        img: "/services/ae.png",
  //        link: "https://www.adobe.com/in/products/aftereffects.html",
  //      },
  //      {
  //        name: "PremierPro",
  //        img: "/services/pre-pro.png",
  //        link: "https://www.adobe.com/in/products/premiere.html",
  //      },
  //      {
  //        name: "Adobe Illutrator",
  //        img: "/services/illustrator.png",
  //        link: "https://www.adobe.com/products/illustrator.html",
  //      },
  //    ],
  //   };
       const categories = {
         VideoEditing: [
           {
             name: "AfterEffect",
             img: "/tech/ae.png",
             link: "https://www.adobe.com/in/products/aftereffects.html",
           },
           {
             name: "Adobe Illutrator",
             img: "/tech/ill.png",
             link: "https://www.adobe.com/products/illustrator.html",
           },
           {
             name: "PremierPro",
             img: "/tech/pre-pro.png",
             link: "https://www.adobe.com/in/products/premiere.html",
           },
         ],
         "UI/UX": [
           {
             name: "Figma",
             img: "/tech/figma.png",
             link: "https://www.figma.com/",
           },
           {
             name: "Adobe XD",
             img: "/tech/Xd.png",
             link: "https://www.adobe.com/products/xd.html",
           },
           {
             name: "Photoshop",
             img: "/tech/photoshop.png",
             link: "https://www.adobe.com/products/photoshop.html",
           },
           {
             name: "Illustrator",
             img: "/tech/illustrator.png",
             link: "https://www.adobe.com/products/illustrator.html",
           },
         ],
       };
    const currentCategory = categories[activeCategory] || [];


  return (  
    <section
      className="relative border border-[#55555580] bg-contain bg-top bg-no-repeat"
      style={{
        backgroundImage: "url('/Ellipse 461.svg')",
      }}
    >
      <div className="container mx-auto border-x border-[#55555580]">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="xxs:mx-5 sm:mx-5 lg:mx-24 2xl:mx-40 xxs:text-4xl sm:text-5xl xl:text-5xl font-bold text-gray-800 poppins mx-auto xxs:w-auto leading-snug pt-20">
            Technologies We Utilise
          </h2>
        </div>

        {/* Category Selector */}
        <motion.div
          className="grid xxs:grid-cols-3 sm:grid-cols-5 lg:grid-cols-7 xl:grid-cols-2"
          initial="hidden"
          animate="visible"
        >
          {Object.keys(categories).map((category) => (
            <motion.button
              key={category}
              className={`p-3 text-center cursor-pointer mont border border-[#55555580] 
                ${
                  activeCategory === category
                    ? "text-[#555] border-b-2 font-semibold border-[#555]"
                    : "text-[#55555580] hover:text-[#555]"
                } transition-all duration-300`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Technology Grid */}
        <motion.div
          className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-px pb-36"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.05,
                delayChildren: 0.2,
              },
            },
          }}
        >
          {currentCategory.map((tech) => (
            <motion.a
              key={tech.name}
              href={tech.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white relative group aspect-square"
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: { opacity: 1, scale: 1 },
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="absolute inset-0 border border-[#55555580] p-4 flex items-center justify-center">
                <img
                  alt={tech.name}
                  loading="lazy"
                  className="w-2/4 h-2/4 object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
                  src={tech.img}
                />
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Decorative Border */}
        {/* <motion.div
          className="absolute right-8 bottom-24 w-px h-32 bg-[#55555580]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        /> */}
      </div>
    </section>
  );
};

export default Technologies;
