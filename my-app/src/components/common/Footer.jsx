// components/Footer.jsx
import { motion } from "framer-motion";
import { GrInstagram } from "react-icons/gr";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  const footerLinks = [
    {
      title: "Studio",
      items: [
        { text: "About", link: "/about" },
        { text: "Pricing", link: "/pricing" },
        { text: "Contact", link: "/contact" },
      ],
    },
    {
      title: "Work",
      items: [
        { text: "Projects", link: "/#projects" },
        { text: "Services", link: "/#services" },
        { text: "Our Technologies", link: "/#technologies" },
      ],
    },
  ];

  return (
    <motion.footer
      className="border-t border-[#55555580] bg-white w-full"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-6 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Branding Column */}
          <div className="space-y-4">
            <div className="mb-8">
              <img src="/kriyonastudio2.png" className="h-14 w-auto" alt="" />
            </div>
            <p className="text-md pe-4 text-gray-800 poppins">
              Crafting digital experiences with precision and creativity
            </p>
          </div>

          {/* Links Columns */}
          {footerLinks.map((section) => (
            <div key={section.title} className="space-y-3">
              <h4 className="text-xl poppins font-medium mb-5">
                {section.title}
              </h4>
              {section.items.map((item) => (
                <motion.a
                  key={item}
                  href={item.link}
                  className="block mont text-md text-gray-700 hover:text-[#555] transition-colors"
                  whileHover={{ x: 5 }}
                >
                  {item.text}
                </motion.a>
              ))}
            </div>
          ))}

          <div className="flex flex-col gap-2 text-sm">
            <h4 className="text-xl poppins font-medium mb-5">Contact Us</h4>
            <div className="flex items-start gap-2 mb-3 text-md tracking-wide roboto">
              <FaEnvelope className="mt-1 text-gradient" />
              <a
                href="mailto:kriyonastudio@gmail.com"
                className="block mont text-gray-800 hover:text-[#555] transition-colors"
              >
                kriyonastudio@gmail.com
              </a>
            </div>
            <div className="flex items-start gap-2 mb-3 text-md tracking-wide roboto">
              <FaPhoneAlt className=" mt-1 text-gradient" />
              <a
                href="tel:+1234567890"
                className="block mont text-gray-800 hover:text-[#555] transition-colors"
              >
                +91 84879 53196
              </a>
            </div>
            <div className="flex items-start gap-2 mb-3 text-md tracking-wide roboto">
              <FaMapMarkerAlt className="text-gradient text-2xl" />
              <span className="block mont text-gray-800 hover:text-[#555] transition-colors">
                3rd floor, 51-52 Pramukh park society, Mahadev chowk, Mota
                Varachha, Surat, Gujarat 394101
              </span>
            </div>
          </div>

          {/* Social Links */}
          {/* <div className="space-y-4">
            <h4 className="text-sm font-medium mb-2">Follow Us</h4>
            <div className="flex gap-4">
              {["FaceBook", "Instagram", "LinkedIn", "Youtube"].map(
                (platform) => (
                  <motion.a
                    key={platform}
                    href="#"
                    className="text-[#55555580] hover:text-[#555]"
                    whileHover={{ scale: 1.1 }}
                  >
                    <span className="sr-only">{platform}</span>
                    <SocialIcon platform={platform} />
                  </motion.a>
                )
              )}
            </div>
          </div> */}
          <div className="space-y-4">
            <h4 className="text-sm font-medium mb-2">Follow Us</h4>
            <div className="flex gap-4">
              {[
                {
                  platform: "Instagram",
                  link: "https://www.instagram.com/kriyonastudio/?locale=uken1&hl=am-et",
                },
                {
                  platform: "Youtube",
                  link: "https://www.youtube.com/@KriyonaStudio",
                },
                {
                  platform: "FaceBook",
                  link: "https://www.facebook.com/profile.php?id=61570457034132",
                },
                {
                  platform: "LinkedIn",
                  link: "https://www.linkedin.com/company/kriyona-studio",
                },
              ].map(({ platform, link }) => (
                <motion.a
                  key={platform}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#55555580] hover:text-[#555]"
                  whileHover={{ scale: 1.1 }}
                >
                  <span className="sr-only">{platform}</span>
                  <SocialIcon platform={platform} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-[#55555520] mt-8 pt-8 text-center text-sm text-[#55555580]">
          © {new Date().getFullYear()} Kriyona Studio. All rights reserved.
          <br />
          Developed By{" "}
          <a
            href="https://www.kriyonainfotech.com/"
            className="text-[#555] underline"
            target="_blank"
          >
            Kriyona Infotech
          </a>
        </div>
      </div>
    </motion.footer>
  );
};

// Helper component for social icons
const SocialIcon = ({ platform }) => {
  const icons = {
    FaceBook: <FaFacebookF className="w-6 h-6 text-[#0866ff]" />,
    Instagram: <FaInstagram className="w-6 h-6 text-pink-700" />,
    LinkedIn: <FaLinkedinIn className="w-6 h-6 text-[#0a66c2]" />,
    Youtube: <FaYoutube className="w-6 h-6 text-red-500" />,
  };

  return (
    <div className="flex items-center text-gray-700 justify-center w-12 h-12 rounded-full border border-gray-600 hover:scale-110 transition-transform">
      {icons[platform]}
    </div>
  );
};

export default Footer;
