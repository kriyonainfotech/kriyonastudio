import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { useState } from "react";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [success, setSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSuccess(true);
        reset();
      }
    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

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
        <div className="border-b text-center border-[#55555580] pb-8 mb-16">
          <h2 className="xxs:mx-5 sm:mx-5 lg:mx-24 2xl:mx-40 xxs:text-4xl sm:text-5xl xl:text-5xl font-bold bg-gradient-to-r from-red-500 to-black bg-clip-text text-transparent mx-auto xxs:w-auto leading-snug pt-20t">
            Get in Touch With Us
          </h2>
        </div>

        <motion.div
          className="grid md:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6"
            variants={itemVariants}
          >
            <div className="space-y-4">
              <div className="flex flex-col">
                <label className="text-sm mb-2">Your Name</label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  className="border border-[#55555580] p-3 focus:outline-none focus:border-[#555]"
                />
                {errors.name && (
                  <span className="text-red-500 text-sm">Required field</span>
                )}
              </div>

              <div className="flex flex-col">
                <label className="text-sm mb-2">Email</label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  className="border border-[#55555580] p-3 focus:outline-none focus:border-[#555]"
                />
                {errors.email && (
                  <span className="text-red-500 text-sm">
                    Valid email required
                  </span>
                )}
              </div>

              <div className="flex flex-col">
                <label className="text-sm mb-2">Message</label>
                <textarea
                  {...register("message", { required: true })}
                  className="border border-[#55555580] p-3 h-32 focus:outline-none focus:border-[#555]"
                />
                {errors.message && (
                  <span className="text-red-500 text-sm">Required field</span>
                )}
              </div>
            </div>

            {success && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-green-500 text-sm"
              >
                Message sent successfully!
              </motion.div>
            )}

            <motion.button
              type="submit"
              className="border border-[#555] px-8 py-3 text-white bg-gradient-to-r from-red-700 to-gray-800 mont font-normal transition-all duration-300 w-full md:w-auto"
              whileHover={{ scale: 1.05 }}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </motion.button>
          </motion.form>

          {/* Contact Info */}
          <motion.div
            className="space-y-8 border-l border-[#55555580] pl-8"
            variants={itemVariants}
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-light">Kriyona Studio</h3>
              <p className="text-[#55555580]">
                Digital Craftsmanship & Brand Elevation
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-6 h-px bg-[#555]" />
                <span className="text-md poppins">kriyonastudio@gmail.com</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-6 h-px bg-[#555]" />
                <span className="text-md poppins">+91 84879 53196</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-6 h-px bg-[#555]" />
                <span className="text-md poppins">
                  3rd floor, 51-52 Pramukh park society, Mahadev chowk, Mota
                  Varachha, Surat, Gujarat 394101
                </span>
              </div>
            </div>

            <div className="border-t border-[#55555520] pt-8">
              <h4 className="text-lg mont poppins font-light mb-4">
                Working Hours
              </h4>
              <p className="text-[#55555580] poppins text-md">
                Mon-Sat: 9AM - 7PM IST
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;
