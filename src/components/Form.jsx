import { motion } from "framer-motion";
import { useState } from "react";
import { Send } from "react-feather";

const Form = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section
      id="form"
      className="bg-[#f9f6f1] text-[#3c2f2f] py-20 px-6 md:px-16 lg:px-24 text-center overflow-hidden"
    >
      {/* Title */}
      <motion.div
        className="max-w-3xl mx-auto mb-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2
          className="text-3xl md:text-4xl font-semibold mb-3 cursor-default"
          whileHover={{
            textShadow: "0 0 25px rgba(139, 94, 60, 0.5)",
            scale: 1.03,
          }}
        >
          Share Your Bear Thought 🐾
        </motion.h2>
        <p className="text-lg md:text-xl text-[#5c4a3d]">
          Know something fascinating about bears? Share it here — I might
          feature it in this den!
        </p>
      </motion.div>

      {/* Form Section */}
      {!submitted ? (
        <motion.form
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
          action="https://formspree.io/f/xeopbwwr"
          method="POST"
          className="bg-[#efe9e3] max-w-lg mx-auto rounded-2xl shadow-md p-8 flex flex-col gap-6 text-left transition-all"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{
            boxShadow: "0 0 40px rgba(139, 94, 60, 0.25)",
          }}
          transition={{ duration: 0.8 }}
        >
          {/* Name Field */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <label
              htmlFor="name"
              className="block font-medium mb-1 text-[#3c2f2f]"
            >
              Your Name
            </label>
            <motion.input
              type="text"
              id="name"
              name="name"
              required
              className="w-full p-3 rounded-lg bg-[#f9f6f1] border border-[#c6a589] focus:outline-none focus:ring-2 focus:ring-[#8b5e3c] focus:shadow-[0_0_15px_rgba(139,94,60,0.2)] transition-all"
              whileFocus={{ scale: 1.01 }}
            />
          </motion.div>

          {/* Email Field */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <label
              htmlFor="email"
              className="block font-medium mb-1 text-[#3c2f2f]"
            >
              Email Address
            </label>
            <motion.input
              type="email"
              id="email"
              name="email"
              required
              className="w-full p-3 rounded-lg bg-[#f9f6f1] border border-[#c6a589] focus:outline-none focus:ring-2 focus:ring-[#8b5e3c] focus:shadow-[0_0_15px_rgba(139,94,60,0.2)] transition-all"
              whileFocus={{ scale: 1.01 }}
            />
          </motion.div>

          {/* Message Field */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <label
              htmlFor="message"
              className="block font-medium mb-1 text-[#3c2f2f]"
            >
              Your Bear Thought
            </label>
            <motion.textarea
              id="message"
              name="message"
              rows="4"
              required
              className="w-full p-3 rounded-lg bg-[#f9f6f1] border border-[#c6a589] focus:outline-none focus:ring-2 focus:ring-[#8b5e3c] focus:shadow-[0_0_15px_rgba(139,94,60,0.2)] transition-all resize-none"
              placeholder="Example: Did you know bears mark trees to communicate?"
              whileFocus={{ scale: 1.01 }}
            ></motion.textarea>
          </motion.div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            className="flex items-center justify-center gap-2 bg-[#8b5e3c] text-[#f9f6f1] py-3 rounded-lg font-medium hover:bg-[#734a2d] transition-all"
            whileHover={{
              scale: 1.08,
              boxShadow: "0 0 25px rgba(139, 94, 60, 0.5)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Send className="w-5 h-5" />
            Submit
          </motion.button>
        </motion.form>
      ) : (
        // Thank You Message
        <motion.div
          className="max-w-md mx-auto bg-[#efe9e3] p-8 rounded-2xl shadow-md"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h3
            className="text-2xl font-semibold mb-3 text-[#3c2f2f]"
            animate={{
              textShadow: "0 0 20px rgba(139, 94, 60, 0.4)",
            }}
            transition={{
              repeat: Infinity,
              duration: 3,
              repeatType: "reverse",
            }}
          >
            Thank You! 🐻
          </motion.h3>
          <motion.p
            className="text-[#5c4a3d]"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Your bear thought has been received. Keep exploring the wild side of
            the web!
          </motion.p>
        </motion.div>
      )}
    </section>
  );
};

export default Form;
