import { motion } from "framer-motion";
import { BookOpen, Compass, Feather, Zap } from "react-feather";

const facts = [
  {
    icon: <BookOpen className="w-8 h-8 text-[#8b5e3c]" />,
    title: "Ancient Species",
    text: "Bears belong to the Ursidae family, with origins dating back over 30 million years.",
  },
  {
    icon: <Compass className="w-8 h-8 text-[#8b5e3c]" />,
    title: "Natural Navigators",
    text: "Bears can sense direction and smell food from several kilometers away.",
  },
  {
    icon: <Feather className="w-8 h-8 text-[#8b5e3c]" />,
    title: "Gentle Strength",
    text: "Despite their power, most bears prefer solitude, moving with grace and quiet awareness.",
  },
  {
    icon: <Zap className="w-8 h-8 text-[#8b5e3c]" />,
    title: "Fast and Fearless",
    text: "Grizzly bears can sprint up to 40 km/h — faster than most humans can run.",
  },
];

const BearFacts = () => {
  return (
    <section
      id="bearfacts"
      className="bg-[#f9f6f1] text-[#3c2f2f] py-20 px-6 md:px-16 lg:px-24"
    >
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Bear Facts & Insights
        </h2>
        <p className="text-lg text-[#5c4a3d]">
          A few fascinating glimpses into the lives of one of nature’s most
          powerful yet peaceful creatures.
        </p>
      </motion.div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {facts.map((fact, i) => (
          <motion.div
            key={i}
            className="bg-[#efe9e3] p-8 rounded-2xl shadow-md hover:shadow-lg transition-all text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.8 }}
          >
            <div className="flex justify-center mb-4">{fact.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{fact.title}</h3>
            <p className="text-[#5c4a3d] text-sm md:text-base leading-relaxed">
              {fact.text}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default BearFacts;
