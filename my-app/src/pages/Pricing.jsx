import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Pricing = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const sections = [
    {
      title: "Integrated Content Strategy Package (Post + Reel)",
      pdfLink: "/Post+Reel.pdf",
      plans: [
        {
          tier: "Basic",
          price: "₹4700/month",
          features: [
            "8 Premium Social Media Posts (Design & Posting)",
            "1 Professional Reel (Shooting, Editing & Posting)",
            "Strategic Marketing Support for Enhanced Engagement",
          ],
        },
        {
          tier: "Standard",
          price: "₹6200/month",
          features: [
            "8 High-Quality Social Media Posts (Design + Posting)",
            "2 Professionally Shot & Edited Reels (Including Posting)",
            "Strategic Marketing Support for Enhanced Engagement",
          ],
        },
        {
          tier: "Premium",
          price: "₹7700/month",
          features: [
            "8 Premium Social Media Posts (Design + Posting)",
            "3 Professionally Shot & Edited Reels (Including Posting)",
            "Strategic Marketing Support for Enhanced Engagement",
          ],
        },
      ],
    },
    {
      title: "Premium iPhone Production Package (iPhone Shooting + Editing)",
      pdfLink: "/Shooting+Editing.pdf",
      plans: [
        {
          tier: "Basic",
          price: "₹6000/month",
          features: [
            "4 High-Quality Reels (iPhone Shooting + Editing)",
            "Maximum Duration: 60 seconds per reel",
            "Swift Editing & Delivery: 2 Reel per Day",
          ],
        },
        {
          tier: "Standard",
          price: "₹9000/month",
          features: [
            "6 High-Quality Reels (iPhone Shooting + Editing)",
            "Maximum Duration: 60 Seconds per Reel",
            "Editing & Delivery: 2 Days per Reel",
          ],
        },
        {
          tier: "Premium",
          price: "₹12000/month",
          features: [
            "8 High-Quality Reels (iPhone Shooting + Editing)",
            "Maximum Duration: 60 Seconds per Reel",
            "Editing & Delivery: 2 Days per Reel",
          ],
        },
      ],
    },
    {
      title: "Professional Reel Editing Package(Only Editing)",
      pdfLink: "/EditingOnly.pdf",
      plans: [
        {
          tier: "Basic",
          price: "₹3000/month",
          features: [
            "4 High-Quality Reels Editing",
            "Maximum Duration: 60 seconds per reel",
            "1-Day Editing Delivery per Reel",
          ],
        },
        {
          tier: "Standard",
          price: "₹4500/month",
          features: [
            "6 High-Quality Reels Editing",
            "Maximum Duration: 60 Seconds per Reel",
            "1-Day Editing Delivery per Reel",
          ],
        },
        {
          tier: "Premium",
          price: "₹6000/month",
          features: [
            "8 High-Quality Reels Editing",
            "Maximum Duration: 60 Seconds per Reel",
            "1-Day Editing Delivery per Reel",
          ],
        },
      ],
    },
    {
      title:
        "Advanced Cinematic Production Package (Camera Shooting + Editing)",
      pdfLink: "/CameraShooting+Editing.pdf",
      plans: [
        {
          tier: "Basic",
          price: "₹10000/month",
          features: [
            "4 DSLR Reels (Shooting + Editing)",
            "Max Duration: 60 sec per reel",
            "Delivery Time: 2 days per reel",
          ],
        },
        {
          tier: "Standard",
          price: "₹15000/month",
          features: [
            "6 DSLR Reels (Shooting + Editing)",
            "Max Duration: 60 sec per reel",
            "Delivery Time: 2 days per reel",
          ],
        },
        {
          tier: "Premium",
          price: "₹20000/month",
          features: [
            "8 DSLR Reels (Shooting + Editing)",
            "Max Duration: 60 sec per reel",
            "Delivery Time: 2 days per reel",
          ],
        },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
        <div className="border-b border-[#55555580] text-center pb-8 mb-16">
          <h2 className="xxs:mx-5 sm:mx-5 lg:mx-24 2xl:mx-40 xxs:text-4xl sm:text-5xl xl:text-5xl font-bold bg-gradient-to-r from-red-500 to-black bg-clip-text text-transparent poppins mx-auto xxs:w-auto leading-snug pt-20">
            Pricing Structure
          </h2>
        </div>

        {/* Pricing Sections */}
        <motion.div
          ref={ref}
          className="space-y-24"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {sections.map((section, index) => (
            <motion.div key={index} variants={itemVariants}>
              {/* Section Header */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 border-b border-[#55555580] pb-6 gap-4">
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light poppins">
                  {section.title}
                </h3>
                <motion.a
                  href={section.pdfLink}
                  download
                  className="text-sm border poppins border-[#55555580] px-4 py-2 bg-white text-black hover:bg-gradient-to-r hover:from-red-500 hover:to-black hover:text-white transition-all"
                >
                  Download Pricing Guide
                </motion.a>
              </div>

              {/* Plans Grid */}
              <div className="grid lg:grid-cols-3 gap-px bg-[#55555520] ">
                {section.plans.map((plan, idx) => (
                  <motion.div
                    key={idx}
                    className="bg-white relative group h-full "
                    variants={itemVariants}
                    // whileHover={{ y: -10 }}
                  >
                    {/* {plan.tier === "Standard" && (
                      <div className="absolute top-0 right-8 -translate-y-1/2 px-4 py-1 bg-[#555] text-white text-xs z-50">
                        Most Popular
                      </div>
                    )} */}
                    <div className="border border-[#55555580] px-5 py-15 h-full">
                      {/* <h4 className="text-2xl font-light mb-4">{plan.tier}</h4> */}
                      <div className="border-b border-[#55555520] pb-6 mb-6">
                        <p className="text-4xl font-light poppins">
                          {plan.price}
                        </p>
                      </div>
                      <ul className="space-y-4 mb-8">
                        {plan.features.map((feature, i) => (
                          <li
                            key={i}
                            className="flex items-center roboto text-[#55555580]"
                          >
                            <span className="mr-2">▹</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                      {/* <motion.button
                        className="w-full mont py-4 border border-[#55555580] hover:bg-[#555] hover:text-white transition-all"
                        whileHover={{ scale: 1.02 }}
                      >
                        Choose Plan
                      </motion.button> */}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <section className="pt-20">
          <div className="container mx-auto px-4 text-center bg-gradient-to-b from-gray-200 to-red-50/2 rounded-xl shadow-lg p-12">
            <h2 className="text-3xl font-semibold mont text-gray-800 mb-4">
              Ready to Bring Your Vision to Life?
            </h2>
            <p className="text-gray-600 mb-6 max-w-xl mx-auto">
              Let's collaborate and craft something extraordinary together.
            </p>
            <button className="px-8 py-3 mont text-white bg-gradient-to-r from-gray-800 to-red-700 rounded-lg cursor-pointer transition-all duration-300 shadow-md">
              Schedule Consultation
            </button>
          </div>
        </section>

        {/* FAQ Section */}
        {/* <motion.div
          className="mt-24 border-t border-[#55555580] pt-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-2xl mb-8 font-light">Common Questions</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              "What's included in basic editing?",
              "Can I mix different service plans?",
              "How does reel shooting process work?",
              "What's the typical delivery timeline?",
            ].map((question, index) => (
              <motion.div
                key={index}
                className="border-b border-[#55555520] pb-4"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <div className="flex justify-between items-center">
                  <p className="text-[#55555580]">{question}</p>
                  <button className="text-2xl hover:text-[#555]">+</button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div> */}
      </div>
    </section>
  );
};

export default Pricing;
