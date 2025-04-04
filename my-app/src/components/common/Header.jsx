// components/Header.jsx
import { motion } from "framer-motion";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Pricing", path: "/pricing" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <motion.header
      className="fixed top-0 w-full px-6 md:px-8 py-6 flex justify-between items-center bg-white/5 backdrop-blur-sm border-b border-[#55555580] z-50"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Logo */}
      <motion.div
        // whileHover={{ scale: 1.05 }}
        className="text-lg poppins font-light cursor-pointer "
      >
        <Link to="/">
          <img
            src="/kriyonastudio2.png"
            className="w-auto h-8 object-contain"
            alt="Other Page Logo"
          />
        </Link>
      </motion.div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex justify-end gap-20 w-full">
        {/* Navigation Links */}
        <div className="flex gap-6 lg:gap-8 text-sm">
          {navItems.map((item) => (
            <motion.button
              key={item.name}
              className="relative poppins hover:text-[#555] transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              <Link to={item.path}>{item.name}</Link>
              <motion.span
                className="absolute -bottom-1 left-0 w-0 h-px bg-[#555]"
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          ))}
        </div>

        {/* Social Icons */}
        <div className="flex gap-4">
          {[
            {
              icon: <FaInstagram />,
              link: "https://www.instagram.com/kriyonastudio/?locale=uken1&hl=am-et",
            },
            {
              icon: <FaYoutube />,
              link: "https://www.youtube.com/@KriyonaStudio",
            },
            {
              icon: <FaFacebookF />,
              link: "https://www.facebook.com/profile.php?id=61570457034132",
            },
            {
              icon: <FaLinkedinIn />,
              link: "https://www.linkedin.com/company/kriyona-studio",
            },
          ].map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              target="_blank"
              className="flex items-center text-gray-700 justify-center w-10 h-10 rounded-full border border-gray-600 hover:scale-110 transition-transform"
            >
              {item.icon}
            </motion.a>
          ))}
        </div>
      </nav>

      {/* Mobile Menu Button */}
      <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <div className="space-y-1">
          <span className="block w-6 h-px bg-[#555]" />
          <span className="block w-6 h-px bg-[#555]" />
          <span className="block w-4 h-px bg-[#555]" />
        </div>
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          className="absolute top-full left-0 w-full bg-white border-b border-[#55555580] md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {navItems.map((item) => (
            <div
              key={item.name}
              className="p-4 border-t border-[#55555520] hover:bg-[#f8f8f8]"
            >
              <Link to={item.path} onClick={() => setIsMenuOpen(false)}>
                {item.name}
              </Link>
            </div>
          ))}

          {/* Social Icons */}
          <div className="flex gap-4 border-t border-gray-300 py-5 ps-5">
            {[
              {
                icon: <FaInstagram />,
                link: "https://www.instagram.com/kriyonastudio/?locale=uken1&hl=am-et",
              },
              {
                icon: <FaYoutube />,
                link: "https://www.youtube.com/@KriyonaStudio",
              },
              {
                icon: <FaFacebookF />,
                link: "https://www.facebook.com/profile.php?id=61570457034132",
              },
              {
                icon: <FaLinkedinIn />,
                link: "https://www.linkedin.com/company/kriyona-studio",
              },
            ].map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                target="_blank"
                className="flex items-center text-gray-700 justify-center w-10 h-10 rounded-full border border-gray-600 hover:scale-110 transition-transform"
              >
                {item.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;
