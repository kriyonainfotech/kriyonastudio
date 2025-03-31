import React from 'react'
import { motion } from "framer-motion";

export const About = () => {
  return (
    <div>
      <div className="min-h-screen bg-white ">
        {/* Hero Section */}
        <section
          className=" bg-contain bg-bottom bg-no-repeat pt-48"
          style={{
            backgroundImage: "url('/Ellipse 462.svg')",
          }}
        >
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-light leading-20 text-gray-800 mb-6 mont">
              Creating Digital Experiences
              <br />
              <span className="font-medium bg-gradient-to-r from-red-500 to-black bg-clip-text text-transparent">
                That Matter
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We believe in purposeful design and meaningful technology
              solutions
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-30">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-light text-gray-800 mont">
                Our <span className="font-medium">Story</span>
              </h2>
              <p className="text-gray-600 leading-relaxed poppins">
                Founded in 2024, we've rapidly grown from a passionate duo to a
                team of skilled innovators. Our journey reflects our commitment
                to sustainable digital solutions.
              </p>
              <div className="flex gap-8 mt-8">
                <div className="text-center p-4 border-l-2 border-red-200">
                  <p className="text-2xl font-light text-red-600">15+</p>
                  <p className="text-gray-500 text-sm">Projects Delivered</p>
                </div>
                <div className="text-center p-4 border-l-2 border-red-200">
                  <p className="text-2xl font-light text-red-600">98%</p>
                  <p className="text-gray-500 text-sm">Client Retention</p>
                </div>
              </div>
            </div>
            <motion.div className="relative" whileHover={{ scale: 1.05 }}>
              <img
                src="/about.webp"
                alt="Our Workspace"
                className="w-3/4 max-w-md mx-auto rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
            </motion.div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20  bg-contain bg-bottom bg-no-repeat">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-normal text-center mb-12 text-gray-800 mont">
              What Drives Us
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Creativity",
                  desc: "Pushing artistic boundaries to craft visually stunning and engaging content.",
                },
                {
                  title: "Excellence",
                  desc: "Delivering high-quality work that leaves a lasting impact on brands and audiences.",
                },
                {
                  title: "Collaboration",
                  desc: "Building strong partnerships to bring unique visions to life with precision.",
                },
              ].map((item, index) => (
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.1 }}
                  key={index}
                  className="p-8 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer "
                >
                  <div className="w-12 h-12 bg-red-100 rounded-full mb-6 flex items-center justify-center">
                    <div className="w-6 h-6 bg-gradient-to-r from-red-500 to-black rounded-full"></div>
                  </div>
                  <h3 className="text-xl font-medium text-gray-800 mb-4 poppins">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 poppins">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center bg-gradient-to-b from-red-50/2 to-gray-200 rounded-xl shadow-lg p-12">
            <h2 className="text-3xl font-semibold mont text-gray-800 mb-4">
              Ready to Bring Your Vision to Life?
            </h2>
            <p className="text-gray-600 mb-6 max-w-xl mx-auto">
              Let's collaborate and craft something extraordinary together.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="px-8 py-3 mont text-white bg-gradient-to-r from-red-700 to-gray-800 rounded-lg cursor-pointer transition-all duration-300 shadow-md"
            >
              Schedule Consultation
            </motion.button>
          </div>
        </section>

        <section
          className="py-20  bg-contain bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/Ellipse 462.svg')",
          }}
        >
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-normal mont text-center mb-12 text-gray-800">
              Our Core Expertise
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                {
                  title: "Visual Storytelling",
                  desc: "Bringing brands to life with compelling narratives and cinematic visuals.",
                },
                {
                  title: "High-End Production",
                  desc: "Delivering premium-quality video, motion graphics, and post-production excellence.",
                },
              ].map((service, index) => (
                <motion.div
                  transition={{ duration: 0.2 }}
                  whileHover={{ scale: 1.05 }}
                  key={index}
                  className="p-[1px] rounded-lg bg-gradient-to-r from-red-500 to-black"
                >
                  <div className="p-8 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                    <h3 className="text-xl font-medium text-gray-800 mb-4 poppins">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mont">{service.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
