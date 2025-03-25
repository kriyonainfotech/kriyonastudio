import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const BrandElevationSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const services = [
    { name: "Reel Shooting", emoji: "🎬", img: "/reel.svg" },
    { name: "Video Editing", emoji: "✂️", img: "/edit.svg" },
    { name: "Graphic Designing", emoji: "🎨", img: "/graphic.svg" },
    { name: "Motion Graphics", emoji: "🔥", img: "/motion.svg" },
    { name: "Post Production", emoji: "🖥️", img: "/post-prod.svg" },
    { name: "Branding & Marketing", emoji: "🚀", img: "/branding.svg" },
    { name: "Content Creation", emoji: "📱", img: "/content.svg" },
    { name: "Visual Storytelling", emoji: "📸", img: "/storytelling.svg" },
    { name: "Logo Designing", emoji: "🔖", img: "/logo.svg" },
    { name: "Creative Direction", emoji: "🏆", img: "/creative.svg" },
  ];

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

  return (
    <section className="relative border border-[#55555580] bg-white">
      <div className="container mx-auto px-6 md:px-8 py-24">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="xxs:mx-5 sm:mx-5 lg:mx-24 2xl:mx-40 xxs:text-4xl sm:text-5xl xl:text-5xl font-bold poppins text-gray-800 mx-auto xxs:w-auto leading-snug">
            Our Creative Services
          </h2>
        </div>

        {/* Services Grid */}
        <motion.div
          ref={ref}
          className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-3 gap-px"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div
            className="border border-[#55555580] px-6 py-20 flex flex-col items-center justify-center"
            variants={itemVariants}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 108.1 122.88"
              width="80"
              height="80"
            >
              <defs>
                <linearGradient
                  id="gradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#FFB6C1" stopOpacity="1" />
                  <stop offset="100%" stopColor="#555555" stopOpacity="1" />
                </linearGradient>
              </defs>
              <g fill="url(#gradient)">
                <path d="M17.61,47.71h52.57c4.88,0,8.86,3.99,8.86,8.86v38.52c0,4.87-3.99,8.86-8.86,8.86H53.94l11.79,18.92H54.75 l-12.86-17.29l-12.99,17.29H17.76l11.72-18.92H17.61c-4.87,0-8.86-3.99-8.86-8.86V56.57C8.75,51.7,12.73,47.71,17.61,47.71 L17.61,47.71z M17.83,9.22c4.92,0,9.38,2,12.61,5.22c3.23,3.23,5.22,7.69,5.22,12.61c0,4.92-2,9.38-5.22,12.61 c-3.23,3.23-7.69,5.22-12.61,5.22s-9.38-2-12.61-5.22C2,36.44,0,31.98,0,27.06c0-4.92,2-9.38,5.22-12.61S12.91,9.22,17.83,9.22 L17.83,9.22z M24.93,19.96c-1.82-1.82-4.33-2.94-7.1-2.94c-2.77,0-5.28,1.12-7.1,2.94c-1.82,1.82-2.94,4.33-2.94,7.1 c0,2.77,1.12,5.28,2.94,7.1s4.33,2.94,7.1,2.94c2.77,0,5.28-1.12,7.1-2.94s2.94-4.33,2.94-7.1C27.88,24.29,26.75,21.77,24.93,19.96 L24.93,19.96z M60.62,0c6.2,0,11.81,2.51,15.87,6.57c4.06,4.06,6.57,9.67,6.57,15.87c0,6.2-2.51,11.81-6.57,15.87 c-4.06,4.06-9.67,6.57-15.87,6.57s-11.81-2.51-15.87-6.57c-4.06-4.06-6.57-9.67-6.57-15.87c0-6.2,2.51-11.81,6.57-15.87 S54.42,0,60.62,0L60.62,0z M70.88,12.19c-2.62-2.62-6.25-4.25-10.26-4.25s-7.63,1.62-10.26,4.25c-2.62,2.62-4.25,6.25-4.25,10.26 s1.62,7.63,4.25,10.26c2.62,2.62,6.25,4.25,10.26,4.25s7.63-1.62,10.26-4.25s4.25-6.25,4.25-10.26 C75.13,18.44,73.5,14.81,70.88,12.19L70.88,12.19z M84.07,89.97V61.52l24.02-14.16v57.15L84.07,89.97L84.07,89.97z" />
              </g>
            </svg>
            <p className="text-center pt-6 text-sm md:text-lg mont mt-3">
              Reel Shooting 
            </p>
          </motion.div>

          <motion.div
            className="border border-[#55555580] px-6 py-20 flex flex-col items-center justify-center"
            variants={itemVariants}
            transition={{ type: "spring", stiffness: 300 }}
          >
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 108.1 122.88"
                width="110"
              height="100"
              className="me-5"
              >
                <defs>
                  <linearGradient
                    id="gradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#FFB6C1" stopOpacity="1" />
                    <stop offset="100%" stopColor="#555555" stopOpacity="1" />
                  </linearGradient>
                </defs>
                <g fill="url(#gradient)">
                  <path d="M12.14,0H32.8h29.43h28.8h19.71c3.34,0,6.38,1.37,8.58,3.56c2.2,2.2,3.56,5.24,3.56,8.58v7.13v57.25v7.09 c0,3.34-1.37,6.38-3.56,8.58c-2.2,2.2-5.24,3.56-8.58,3.56h-19.2c-0.16,0.03-0.33,0.04-0.51,0.04c-0.17,0-0.34-0.01-0.51-0.04 H62.74c-0.16,0.03-0.33,0.04-0.51,0.04c-0.17,0-0.34-0.01-0.51-0.04H33.31c-0.16,0.03-0.33,0.04-0.51,0.04 c-0.17,0-0.34-0.01-0.51-0.04H12.14c-3.34,0-6.38-1.37-8.58-3.56S0,86.95,0,83.61v-7.09V19.27v-7.13C0,8.8,1.37,5.76,3.56,3.56 C5.76,1.37,8.8,0,12.14,0L12.14,0z M55.19,31.24l20.53,14.32c0.32,0.2,0.61,0.48,0.84,0.81c0.92,1.33,0.58,3.14-0.74,4.06 L55.37,64.57c-0.5,0.41-1.15,0.66-1.85,0.66c-1.62,0-2.93-1.31-2.93-2.93V33.63h0.01c0-0.58,0.17-1.16,0.52-1.67 C52.05,30.64,53.87,30.32,55.19,31.24L55.19,31.24z M93.95,79.45V89.9h16.78c1.73,0,3.3-0.71,4.44-1.85 c1.14-1.14,1.85-2.71,1.85-4.44v-4.16H93.95L93.95,79.45z M88.1,89.9V79.45H65.16V89.9H88.1L88.1,89.9z M59.31,89.9V79.45H35.73 V89.9H59.31L59.31,89.9z M29.87,89.9V79.45H5.85v4.16c0,1.73,0.71,3.3,1.85,4.44c1.14,1.14,2.71,1.85,4.44,1.85H29.87L29.87,89.9z M5.85,73.6H32.8h29.43h28.8h26V22.2h-26h-28.8H32.8H5.85V73.6L5.85,73.6z M88.1,16.35V5.85H65.16v10.49H88.1L88.1,16.35z M93.95,5.85v10.49h23.07v-4.2c0-1.73-0.71-3.3-1.85-4.44c-1.14-1.14-2.71-1.85-4.44-1.85H93.95L93.95,5.85z M59.31,16.35V5.85 H35.73v10.49H59.31L59.31,16.35z M29.87,16.35V5.85H12.14c-1.73,0-3.3,0.71-4.44,1.85c-1.14,1.14-1.85,2.71-1.85,4.44v4.2H29.87 L29.87,16.35z" />
                </g>
              </svg>
              <p className="text-center pt-6 text-sm md:text-lg mont">Video Editing</p>
          </motion.div>
          <motion.div
            className="border border-[#55555580] px-6 py-20 flex flex-col items-center justify-center"
            variants={itemVariants}
            transition={{ type: "spring", stiffness: 300 }}
          >
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 108.1 122.88"
                width="110"
                height="100"
              >
                <defs>
                  <linearGradient
                    id="gradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#FFB6C1" stopOpacity="1" />
                    <stop offset="100%" stopColor="#555555" stopOpacity="1" />
                  </linearGradient>
                </defs>
                <g>
                  <path
                    fill="url(#gradient)"
                    d="M105.28,6.06l14.38,14.38c1.93,1.93,1.93,5.09,0,7.03L108.63,38.5L87.22,17.1L98.26,6.06 C100.19,4.13,103.35,4.13,105.28,6.06L105.28,6.06z M30.9,16.9l23.3,33.21l28.83-28.83l21.4,21.41L71.86,75.27l15.23,21.7 l-10.49,7.59L60.56,86.58l-23.5,23.5c-1.93,1.93-5.09,1.93-7.02,0L15.65,95.7c-1.93-1.93-1.93-5.09,0-7.03l24.72-24.72L6.05,25.48 C-9.46,7.88,7.03-17.13,30.9,16.9L30.9,16.9z M8.95,94.84l21.5,21.49l-24.42,4.03L8.95,94.84L8.95,94.84L8.95,94.84z M84.47,104.47 c8.47-6.26,14.43-5.63,17.78,1.55c0.79,1.7,3.2,8.98,8.16,12.96c4.87,3.91,12.48,4.45,12.48,4.69 C110.97,124.78,62.03,125.18,84.47,104.47L84.47,104.47L84.47,104.47z"
                  />
                </g>
              </svg>
              <p className="text-center pt-6 text-sm md:text-lg mont">
                Graphic Designing
              </p>
          </motion.div>

           <motion.div
            className="border border-[#55555580] px-6 py-20 flex flex-col items-center justify-center"
            variants={itemVariants}
            transition={{ type: "spring", stiffness: 300 }}
          >
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 108.1 122.88"
                width="110"
                height="100"
              >
                <defs>
                  <linearGradient
                    id="gradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#FFB6C1" stopOpacity="1" />
                    <stop offset="100%" stopColor="#555555" stopOpacity="1" />
                  </linearGradient>
                </defs>
                <path
                  fill="url(#gradient)"
                  d="M114.69,36.31v48a1.45,1.45,0,0,1-1.44,1.44H100.84a1.45,1.45,0,0,1-1.44-1.44V48.61c2.54-2.48,5.65-5.48,8.83-8.54l5-4.82a12.84,12.84,0,0,0,1.45,1.06Zm-84.56-13a20.9,20.9,0,0,0-8.08,1l-.06,0A20.87,20.87,0,0,0,8.34,48.78a20.45,20.45,0,0,0,1.79,4.93L.31,63.11a1,1,0,0,0,0,1.41l5.56,5.82a1,1,0,0,0,1.41,0l9.45-9.12a20.78,20.78,0,0,0,4.63,2.47,21.48,21.48,0,0,0,6,1.3A20.9,20.9,0,0,0,48.51,37.51l0,0A20.86,20.86,0,0,0,30.13,23.34ZM17.75,31.62a16.65,16.65,0,0,1,23.52,1.6l0,.05a16.7,16.7,0,0,1,3.19,5.59l0,0A16.71,16.71,0,0,1,34,60a16.8,16.8,0,0,1-6.44.82,16.44,16.44,0,0,1-6.28-1.69l0,0a16.7,16.7,0,0,1-5.1-4l-.05-.06a16.63,16.63,0,0,1-3.2-5.59l0-.05a16.71,16.71,0,0,1-.8-6.39,16.62,16.62,0,0,1,5.66-11.43Zm28.59-8.08,11-9.6c7.26,7.12,14.3,15.72,21.49,22.82L105,10.43,96.55,2l26.33-2L121.4,26.83l-8.1-8.1c-5.81,5.89-19.55,18.86-25.37,24.68-7.35,7.35-10.86,7.49-18.21.13L57.3,29.73l-3.86,3.42a28.54,28.54,0,0,0-1.37-2.7,26.3,26.3,0,0,0-3-4.18h0a26.43,26.43,0,0,0-2.77-2.72ZM64.76,54.88V84.31a1.45,1.45,0,0,1-1.44,1.44H50.91a1.45,1.45,0,0,1-1.44-1.44V62.92a29,29,0,0,0,2.12-2.44,27.34,27.34,0,0,0,2.91-4.66,27.33,27.33,0,0,0,2.65-8.6l3.31,3.68.43.45a50.63,50.63,0,0,0,3.87,3.53Zm-25,14.5V84.31a1.45,1.45,0,0,1-1.44,1.44H25.94a1.45,1.45,0,0,1-1.44-1.44V70.93a29.79,29.79,0,0,0,3.08.38,28.48,28.48,0,0,0,10.78-1.4c.48-.17,1-.34,1.43-.53ZM89.72,57.07V84.31a1.45,1.45,0,0,1-1.44,1.44H75.87a1.45,1.45,0,0,1-1.44-1.44V59.91a19.22,19.22,0,0,0,4.54.46,19.79,19.79,0,0,0,10.75-3.3Z"
                />
              </svg>
              <p className="text-center pt-6 text-sm md:text-lg mont">
                Branding & Marketing
              </p>
           
          </motion.div>
          <motion.div
            className="border border-[#55555580] px-6 py-20 flex flex-col items-center justify-center"
            variants={itemVariants}
            transition={{ type: "spring", stiffness: 300 }}
          >
              <svg
                viewBox="0 0 108.1 122.88"
                width="110"
                height="100"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                fill="url(#gradient)"
              >
                <defs>
                  <linearGradient
                    id="gradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#FFB6C1" stopOpacity="1" />
                    <stop offset="100%" stopColor="#555555" stopOpacity="1" />
                  </linearGradient>
                </defs>
                <g>
                  <path d="M64.44,61.11c1.79,0,3.12-1.45,3.12-3.12c0-1.78-1.45-3.12-3.12-3.12H24.75c-1.78,0-3.12,1.45-3.12,3.12 c0,1.78,1.45,3.12,3.12,3.12H64.44L64.44,61.11L64.44,61.11L64.44,61.11z M77.45,19.73l18.1-19.14c0.69-0.58,1.39-0.81,2.2-0.35 l14.56,14.1c0.58,0.69,0.69,1.5-0.12,2.31L93.75,36.14L77.45,19.73L77.45,19.73L77.45,19.73L77.45,19.73z M87.74,42.27l-18.66,3.86 l2.36-20.28L87.74,42.27L87.74,42.27z M19.14,13.09h41.73l-3.05,6.45H19.14c-3.48,0-6.65,1.43-8.96,3.73s-3.73,5.46-3.73,8.96 v45.74c0,3.48,1.43,6.66,3.73,8.96c2.3,2.3,5.47,3.73,8.96,3.73h3.72v0.01l0.21,0.01c1.77,0.12,3.12,1.66,2.99,3.43l-1.26,18.1 L48.78,97.7c0.58-0.58,1.38-0.93,2.27-0.93h37.32c3.48,0,6.65-1.42,8.96-3.73c2.3-2.3,3.73-5.48,3.73-8.96V50.45h6.68v42.69 c0.35,9.63-3.58,15.04-19.43,15.7l-32.25-0.74l-32.73,13.87l-0.16,0.13c-1.35,1.16-3.38,1-4.54-0.36c-0.57-0.67-0.82-1.49-0.77-2.3 l1.55-22.34h-0.26c-5.26,0-10.05-2.15-13.52-5.62C2.15,88.03,0,83.24,0,77.98V32.23c0-5.26,2.15-10.05,5.62-13.52 C9.08,15.24,13.87,13.09,19.14,13.09L19.14,13.09L19.14,13.09z M79.69,78.42c1.79,0,3.12-1.45,3.12-3.12 c0-1.79-1.45-3.12-3.12-3.12H24.75c-1.78,0-3.12,1.45-3.12,3.12c0,1.78,1.45,3.12,3.12,3.12H79.69L79.69,78.42L79.69,78.42 L79.69,78.42z M50.39,43.81c1.78,0,3.12-1.45,3.12-3.12c0-1.67-1.45-3.12-3.12-3.12H24.75c-1.78,0-3.12,1.45-3.12,3.12 c0,1.78,1.45,3.12,3.12,3.12H50.39L50.39,43.81L50.39,43.81L50.39,43.81z" />
                </g>
              </svg>
              <p className="text-center pt-6 text-sm md:text-lg mont">
                Content Creation
              </p>
        
          </motion.div>

          <motion.div
            className="border border-[#55555580] px-6 py-20 flex flex-col items-center justify-center"
            variants={itemVariants}
            transition={{ type: "spring", stiffness: 300 }}
          >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 122.88 77.39"
                width="110"
                height="110"
              >
                <defs>
                  <linearGradient
                    id="gradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#FFB6C1" stopOpacity="1" />
                    <stop offset="100%" stopColor="#555555" stopOpacity="1" />
                  </linearGradient>
                </defs>
                <path
                  fill="url(#gradient)"
                  d="M2.52,71.63H15.11a2.19,2.19,0,0,1-1.63-2.1V18a2.18,2.18,0,0,1,2.18-2.17h13.8l-.89,3.58H17.37V68.91h87.86V19.4h-11l-1-3.58h13.46A2.17,2.17,0,0,1,108.82,18V69.52a2.17,2.17,0,0,1-1.63,2.1h13.17c3.36,0,3.36,5.77,0,5.77H2.52c-3.36,0-3.36-5.76,0-5.76ZM57.71,0h8.58a1.15,1.15,0,0,1,1.15,1.15V4H81a4.57,4.57,0,0,1,1.1-1.75h0a4.64,4.64,0,0,1,6.58,0h0a4.64,4.64,0,0,1,0,6.58h0a4.64,4.64,0,0,1-6.58,0h0A4.61,4.61,0,0,1,81,7H74a25.23,25.23,0,0,1,6.06,4.89A27.14,27.14,0,0,1,86.72,25.7H88.6A1.37,1.37,0,0,1,90,27.08v6.29a1.37,1.37,0,0,1-1.37,1.38H82.38A1.38,1.38,0,0,1,81,33.37V27.08a1.38,1.38,0,0,1,1.38-1.38h1.44a24.26,24.26,0,0,0-5.88-11.85,22.1,22.1,0,0,0-10.5-6.47V9.83A1.15,1.15,0,0,1,66.29,11H57.71a1.14,1.14,0,0,1-1.15-1.15V7.38a22,22,0,0,0-10.7,6.74A24.57,24.57,0,0,0,40.21,25.7h1.41A1.38,1.38,0,0,1,43,27.08v6.29a1.38,1.38,0,0,1-1.38,1.38H35.4A1.38,1.38,0,0,1,34,33.37V27.08A1.38,1.38,0,0,1,35.4,25.7h1.91a27.42,27.42,0,0,1,6.42-13.47A25.13,25.13,0,0,1,50,7H41.91a4.53,4.53,0,0,1-1.1,1.74h0a4.63,4.63,0,0,1-3.29,1.37,4.7,4.7,0,0,1-3.3-1.37h0a4.64,4.64,0,0,1,0-6.58h0a4.64,4.64,0,0,1,6.58,0h0A4.57,4.57,0,0,1,41.91,4H56.56V1.15A1.14,1.14,0,0,1,57.71,0ZM74.66,40.74,70.21,52.12,53.8,51.91,49.26,40.74c3.9-7,7.87-15.49,9.91-23l2.16.24L61.25,38.1a2.12,2.12,0,1,0,1.29-.05l.06-19.91L65.08,18c1.81,7.51,5.74,16,9.58,22.71ZM69.82,57H53.88V53.82H69.82V57ZM57.87,72.58H65c1.61,0,1.61,3.13,0,3.13H57.87c-1.61,0-1.62-3.13,0-3.13Z"
                />
              </svg>
              <p className="text-center pt-6 text-sm md:text-lg mont">Logo Designing</p>
           
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default BrandElevationSection;
