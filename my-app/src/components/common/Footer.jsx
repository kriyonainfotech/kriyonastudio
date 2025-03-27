// components/Footer.jsx
import { motion } from "framer-motion";

const Footer = () => {
  const footerLinks = [
    // { title: "Home", items: ["About Us", "Technologies", "Services"] },
    { title: "Work", items: ["Projects", "Clients", "Case Studies"] },
    { title: "Studio", items: ["About", "Team", "Contact"] },
    { title: "Connect", items: ["FaceBook", "LinkedIn", "Instagram", "Youtube"] },
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
                  href="#"
                  className="block mont text-md text-gray-700 hover:text-[#555] transition-colors"
                  whileHover={{ x: 5 }}
                >
                  {item}
                </motion.a>
              ))}
            </div>
          ))}

          {/* Social Links */}
          <div className="space-y-4">
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
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-[#55555520] mt-8 pt-8 text-center text-sm text-[#55555580]">
          © {new Date().getFullYear()} Kriyona Studio. All rights reserved.
        </div>
      </div>
    </motion.footer>
  );
};

// Helper component for social icons
const SocialIcon = ({ platform }) => {
  // Add your SVG icons here
  return <div className="w-6 h-6 bg-[#55555520] rounded-full" />;
};

export default Footer;
