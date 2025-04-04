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
        const response = await fetch(
          "https://ks-backend.vercel.app/api/send-email",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
            mode: "cors",
          }
        );

        console.log(response, "data");

        if (response.ok) {
          setSuccess(true);
          reset();
        }
      } catch (error) {
        console.log("Error sending message:", error);
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
      <div className="container mx-auto px-6 md:px-8 py-24 overflow-hidden">
        {/* Section Header */}
        <div className="border text-center border-[#55555580] py-5 mt-8">
          <h2 className="xxs:mx-5 sm:mx-5 lg:mx-24 2xl:mx-40 xxs:text-4xl sm:text-5xl xl:text-5xl font-bold bg-gradient-to-r from-red-500 to-black bg-clip-text text-transparent mx-auto xxs:w-auto leading-snug">
            Get in Touch With Us
          </h2>
        </div>

        <motion.div
          className="grid md:grid-cols-2 gap-12 border-l border-r border-b border-[#55555580] w-full max-w-full overflow-hidden"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6 p-6 w-full"
            variants={itemVariants}
          >
            <div className="space-y-4">
              {/* Name Field */}
              <div className="flex flex-col">
                <label className="text-sm mb-2">Your Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  {...register("name", { required: "Name is required" })}
                  className="w-full border border-[#55555580] p-3 focus:outline-none focus:border-[#555]"
                />
                {errors.name && (
                  <span className="text-red-500 text-sm">
                    {errors.name.message}
                  </span>
                )}
              </div>

              {/* Email Field */}
              <div className="flex flex-col">
                <label className="text-sm mb-2">Email</label>
                <input
                  type="email"
                  placeholder="JohnDoe@gmail.com"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: "Enter a valid email",
                    },
                  })}
                  className="w-full border border-[#55555580] p-3 focus:outline-none focus:border-[#555]"
                />
                {errors.email && (
                  <span className="text-red-500 text-sm">
                    {errors.email.message}
                  </span>
                )}
              </div>

              {/* 📞 Phone Number Field */}
              <div className="flex flex-col">
                <label className="text-sm mb-2">Phone Number</label>
                <input
                  type="tel"
                  placeholder="+91 98765 43210"
                  {...register("phone", {
                    // required: "Phone number is required",
                    pattern: {
                      value: /^[0-9]{10,15}$/,
                      message: "Enter a valid phone number",
                    },
                  })}
                  className="w-full border border-[#55555580] p-3 focus:outline-none focus:border-[#555]"
                />
                {errors.phone && (
                  <span className="text-red-500 text-sm">
                    {errors.phone.message}
                  </span>
                )}
              </div>

              {/* Message Field */}
              <div className="flex flex-col">
                <label className="text-sm mb-2">Message</label>
                <textarea
                  {...register("message", {
                    required: "Message cannot be empty",
                  })}
                  className="w-full border border-[#55555580] p-3 h-32 focus:outline-none focus:border-[#555]"
                />
                {errors.message && (
                  <span className="text-red-500 text-sm">
                    {errors.message.message}
                  </span>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`bg-[#555] text-white py-3 px-6 rounded-md transition duration-300 ease-in-out ${
                  isSubmitting
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-[#444]"
                }`}
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>

              {/* Success Message */}
              {success && (
                <p className="text-green-500 text-sm mt-2">
                  Message sent successfully!
                </p>
              )}
            </div>
          </motion.form>

          {/* Contact Info */}
          <motion.div
            className="space-y-8 border-t border-[#55555580] md:border-t-0 p-8 sm:p-6 xxs:p-4 w-full"
            variants={itemVariants}
          >
            <div className="space-y-4 text-center sm:text-left">
              <h3 className="text-2xl font-bold text-gray-800">
                Kriyona Studio
              </h3>
              <p className="text-gray font-normal poppins text-gray-500">
                Digital Craftsmanship & Brand Elevation
              </p>
            </div>

            <div className="space-y-4 text-center sm:text-left">
              <div className="flex sm:flex-row flex-col items-center sm:items-start gap-2 sm:gap-4">
                <div className="sm:mt-3 w-6 h-px bg-[#555]" />
                <span className="text-md poppins">kriyonastudio@gmail.com</span>
              </div>
              <div className="flex sm:flex-row flex-col items-center sm:items-start gap-2 sm:gap-4">
                <div className="sm:mt-3 w-6 h-px bg-[#555]" />
                <span className="text-md poppins">+91 84879 53196</span>
              </div>
              <div className="flex sm:flex-row flex-col items-center sm:items-start gap-2 sm:gap-4 text-center sm:text-left">
                <div className="sm:mt-3 w-6 h-px bg-[#555]" />
                <span className="text-md poppins">
                  3rd floor, 51-52 Pramukh park society, Mahadev chowk, Mota
                  Varachha, Surat, Gujarat 394101
                </span>
              </div>
            </div>

            <div className="border-t border-[#55555520] pt-8 text-center sm:text-left">
              <h4 className="text-xl poppins font-bold text-gray-800 mb-4">
                Working Hours
              </h4>
              <p className="text-gray-500 poppins text-md">
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
