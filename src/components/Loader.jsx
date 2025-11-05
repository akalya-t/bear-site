import { motion } from "framer-motion";
import bearLogo from "../assets/bearlogo.svg";

const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#f9f6f1]">
      <motion.img
        src={bearLogo}
        alt="Bear Logo"
        className="w-28 h-28"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      />

      <motion.p
        className="mt-5 text-lg text-[#3c2f2f] tracking-wider"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.8 }}
      >
        Loading the Den...
      </motion.p>
    </div>
  );
};

export default Loader;
