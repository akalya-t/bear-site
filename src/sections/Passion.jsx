import { motion } from "framer-motion";
import { Twitter, Linkedin, Globe } from "react-feather"; // 

const socials = [
  {
    name: "Twitter / X",
    icon: <Twitter className="w-6 h-6" />,
    link: "https://X.com/Akalya_T03", // 
  },
  {
    name: "LinkedIn",
    icon: <Linkedin className="w-6 h-6" />,
    link: "https://www.linkedin.com/in/akalya-thirumurugan/",
  },
  {
    name: "Portfolio",
    icon: <Globe className="w-6 h-6" />,
    link: "https://linktr.ee/akalyadesigns",
  },
];

const Passion = () => {
  return (
    <section
      id="passion"
      className="bg-[#f9f6f1] text-[#3c2f2f] py-24 px-6 md:px-16 lg:px-24 text-center flex flex-col items-center"
    >
      {/* Main Content */}
      <motion.div
        className="max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Heading */}
        <motion.h2
          className="text-3xl md:text-4xl font-semibold mb-4 cursor-default"
          whileHover={{
            textShadow: "0 0 25px rgba(139, 94, 60, 0.5)",
            scale: 1.03,
          }}
          transition={{ duration: 0.3 }}
        >
          The Mind Behind the Den
        </motion.h2>

        {/* Paragraph */}
        <motion.p
          className="text-lg md:text-xl text-[#5c4a3d] leading-relaxed mb-10"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          I’m{" "}
          <span className="font-medium text-[#8b5e3c]">
            Akalya Thirumurugan
          </span>
          — a designer and developer who finds meaning in calm, intentional
          design. This project began as a way to express how patience, strength,
          and simplicity — qualities of a bear — mirror how I approach creating
          experiences on the web.
          <br />
          <br />I love crafting designs that feel alive yet peaceful — blending
          motion, minimalism, and storytelling into every detail.
        </motion.p>

        {/* Social Icons */}
        <div className="flex items-center justify-center gap-6 mt-6 flex-wrap">
          {socials.map((social, i) => (
            <motion.a
              key={i}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#8b5e3c] text-[#f9f6f1] px-5 py-3 rounded-xl font-medium hover:bg-[#734a2d] transition-all shadow-md hover:shadow-lg"
              whileHover={{
                scale: 1.08,
                boxShadow: "0 0 20px rgba(139, 94, 60, 0.5)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              {social.icon}
              <span className="hidden sm:inline">{social.name}</span>
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* Footer */}
      <motion.footer
        className="w-full mt-24 border-t border-[#d5c2b3]/40 pt-10 px-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {/* Brand Info */}
          <motion.div
            className="text-[#3c2f2f]"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-lg md:text-xl font-semibold text-[#8b5e3c]">
              The Bear Site 🧸
            </h3>
            <p className="text-sm text-[#5c4a3d] opacity-80 mt-1">
              Crafted with patience, storytelling, and design.
            </p>
          </motion.div>

          

          {/* Copyright */}
          <motion.p
            className="text-sm text-[#8b5e3c] opacity-70 text-center md:text-right"
            whileHover={{
              scale: 1.03,
              textShadow: "0 0 10px rgba(139, 94, 60, 0.4)",
            }}
          >
            © 2025 Akalya Thirumurugan — All Rights Reserved
          </motion.p>
        </motion.div>
      </motion.footer>
    </section>
  );
};

export default Passion;
