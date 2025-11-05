import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <section className="bg-[#f9f6f1] text-[#3c2f2f] min-h-screen flex flex-col justify-center items-center px-6 md:px-16 lg:px-28 pt-24 pb-16">
      {/* Intro Section */}
      <motion.div
        className="text-center max-w-3xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="text-3xl md:text-5xl font-semibold mb-6 cursor-default"
          whileHover={{
            textShadow: "0 0 25px rgba(139, 94, 60, 0.5)",
            scale: 1.02,
          }}
          transition={{ duration: 0.3 }}
        >
          About <span className="text-[#8b5e3c]">The Bear</span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-[#5c4a3d] leading-relaxed"
          whileHover={{ scale: 1.02, color: "#3c2f2f" }}
          transition={{ duration: 0.3 }}
        >
          “The Bear” isn’t just a website — it’s a reflection of calm creation.
          I built it as a space to explore how simplicity, patience, and motion
          can live together in design. Each element moves gently, inspired by
          the quiet strength of nature itself.
        </motion.p>
      </motion.div>

      {/* Story of Bears Section */}
      <motion.div
        className="mt-20 max-w-5xl text-center md:text-left"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
      >
        <motion.h2
          className="text-2xl md:text-3xl font-semibold text-[#8b5e3c] mb-6 text-center cursor-default"
          whileHover={{
            textShadow: "0 0 25px rgba(139, 94, 60, 0.4)",
            scale: 1.03,
          }}
        >
          The Story of Bears
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Paragraphs Section */}
          <div className="space-y-5 text-[#5c4a3d] leading-relaxed text-base md:text-lg">
            {[
              "Bears are among nature’s oldest wanderers — creatures of strength, wisdom, and balance. For thousands of years, they’ve symbolized courage in the wild and calm in solitude. From icy Arctic landscapes to dense Asian forests, they adapt with quiet mastery.",
              "In many cultures, the bear represents introspection — the ability to retreat, reflect, and emerge renewed. Their hibernation mirrors how we, too, pause and grow stronger in stillness. That’s what inspired the spirit of this project — to create with calm intention, not chaos.",
              "Every bear is unique: the playful panda, the fierce grizzly, the serene polar bear. Yet, they all move with the same grace — slow, deliberate, powerful. In the same way, I approach design: every animation, every layout, every pause — intentional and full of meaning.",
            ].map((text, i) => (
              <motion.p
                key={i}
                whileHover={{
                  scale: 1.02,
                  color: "#3c2f2f",
                }}
                transition={{ duration: 0.3 }}
              >
                {text}
              </motion.p>
            ))}
          </div>

          {/* Fun Facts Section */}
          <motion.div
            className="bg-[#efe9e3] p-8 rounded-2xl shadow-md text-center md:text-left hover:shadow-xl transition-all cursor-default"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            whileHover={{
              scale: 1.04,
              boxShadow: "0 0 30px rgba(139, 94, 60, 0.4)",
            }}
          >
            <h3 className="text-xl font-semibold mb-4 text-[#3c2f2f]">
              Fascinating Bear Facts 🐾
            </h3>
            <ul className="text-sm md:text-base text-[#5c4a3d] space-y-3">
              <li>🐻 Bears can smell food from up to 20 miles away.</li>
              <li>🐾 They are fast runners — some can sprint over 40 km/h.</li>
              <li>🌲 Despite their size, most bears are skilled climbers.</li>
              <li>❄️ Polar bears have black skin under their white fur.</li>
              <li>🪶 Bears communicate using body language and vocal tones.</li>
            </ul>
          </motion.div>
        </div>
      </motion.div>

      {/* Principles Grid */}
      <motion.div
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-20 max-w-5xl"
        initial="hidden"
        whileInView="visible"
        variants={{
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
          },
          hidden: { opacity: 0 },
        }}
      >
        {[
          {
            title: "Patience in Design",
            text: "Every detail takes time — like a bear waiting for dawn. Good design grows slowly, not instantly.",
          },
          {
            title: "Motion with Meaning",
            text: "Animations here aren’t random. Each one breathes, like nature — calm, intentional, and human.",
          },
          {
            title: "Natural Simplicity",
            text: "No chaos, no excess. Clean layouts help people feel grounded, calm, and connected.",
          },
          {
            title: "Rooted in Curiosity",
            text: "Every project I create starts with a question: how can this feel more human and less digital?",
          },
          {
            title: "Emotional Balance",
            text: "Design should feel. A calm color palette and slow transitions tell their own story.",
          },
          {
            title: "Quiet Strength",
            text: "Like the bear — soft outside, powerful inside. That’s how I approach creativity and code.",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            className="bg-[#efe9e3] rounded-2xl shadow-md p-6 text-center transition-all cursor-default"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 25px rgba(139, 94, 60, 0.5)",
            }}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <h3
              className="text-xl font-semibold mb-3 text-[#3c2f2f]"
              style={{ transition: "color 0.3s ease" }}
            >
              {item.title}
            </h3>
            <p className="text-[#5c4a3d] text-sm md:text-base leading-relaxed">
              {item.text}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* Closing Line */}
      <motion.div
        className="mt-20 text-center max-w-xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <motion.p
          className="text-lg md:text-xl italic text-[#5c4a3d] cursor-default"
          whileHover={{
            textShadow: "0 0 25px rgba(139, 94, 60, 0.4)",
            scale: 1.03,
          }}
        >
          "This project is place in which I checked my UI design skills and storytelling to create meaningful site"
        </motion.p>
        <p className="mt-4 text-sm text-[#8b5e3c] opacity-70">
          — Akalya Thirumurugan
        </p>
      </motion.div>
    </section>
  );
};

export default AboutPage;
