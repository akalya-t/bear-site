import { motion } from "framer-motion";
import herobear from "../assets/herobear.jpg";
import { ChevronDown } from "react-feather";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <section
      id="home"
      className="relative flex flex-col md:flex-row items-center justify-center min-h-screen bg-[#f9f6f1] overflow-hidden px-6 md:px-16 lg:px-24"
    >
      {/* Decorative background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#efe9e3]" />

      {/* Left: Hero Text */}
      <motion.div
        className="relative z-10 flex-1 text-center md:text-left"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Title with glow hover */}
        <motion.h1
          className="text-4xl md:text-6xl font-semibold text-[#3c2f2f] tracking-wide leading-tight"
          whileHover={{
            textShadow: "0 0 20px rgba(139, 94, 60, 0.3)",
            scale: 1.02,
          }}
          transition={{ duration: 0.3 }}
        >
          Welcome to <span className="text-[#8b5e3c]">The Bear</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          className="mt-5 text-lg md:text-xl text-[#5c4a3d] leading-relaxed max-w-lg md:max-w-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          A calm space built for bears(You can explore here though ).
        </motion.p>

        {/* Button with glow and hover pop */}
        <motion.div
          className="mt-10"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          <motion.button
            onClick={() => navigate("/about")}
            className="inline-block bg-[#8b5e3c] text-[#f9f6f1] px-6 py-3 rounded-lg font-medium shadow-md hover:shadow-xl hover:bg-[#734a2d] transition-all cursor-pointer"
            whileHover={{
              scale: 1.08,
              boxShadow: "0 0 25px rgba(139, 94, 60, 0.6)",
            }}
            whileTap={{ scale: 0.96 }}
          >
            Explore the Story
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Right: Hero Image (floating & reactive) */}
      <motion.div
        className="relative z-10 flex-1 flex justify-center mt-10 md:mt-0"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.img
          src={herobear}
          alt="Bear Hero"
          className="w-64 md:w-80 lg:w-[420px] object-contain drop-shadow-xl cursor-pointer"
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 5,
            ease: "easeInOut",
          }}
          whileHover={{
            scale: 1.07,
            rotate: [0, 1, -1, 0],
            boxShadow: "0 0 40px rgba(139, 94, 60, 0.4)",
          }}
        />
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-[#3c2f2f]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <p className="text-sm tracking-widest opacity-80">SCROLL</p>
        <Link to="form" smooth={true} duration={800}>
          <ChevronDown className="w-6 h-6 animate-bounce cursor-pointer hover:text-[#8b5e3c]" />
        </Link>
      </motion.div>

      {/* Floating Background Orbs with hover dim effects */}
      <motion.div
        className="absolute -top-20 -left-20 w-60 h-60 bg-[#d5c2b3] rounded-full opacity-20 blur-3xl"
        animate={{ x: [0, 20, 0], y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        whileHover={{ opacity: 0.35, scale: 1.05 }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-72 h-72 bg-[#c6a589] rounded-full opacity-20 blur-3xl"
        animate={{ x: [0, -20, 0], y: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
        whileHover={{ opacity: 0.35, scale: 1.05 }}
      />

      {/* Soft vignette effect for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#00000005] via-transparent to-[#00000010] pointer-events-none" />
    </section>
  );
};

export default Home;
