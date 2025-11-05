import { motion } from "framer-motion";
import bear1 from "../assets/bear.jpg";
import bear2 from "../assets/polar.jpg";
import bear3 from "../assets/morningbear.jpg";
import bear4 from "../assets/mistbear.jpg";
import bear5 from "../assets/mtopbear.png";
import bear6 from "../assets/mombabybear.jpg";
import bear7 from "../assets/longshotbear.jpg";
import bear8 from "../assets/restingbear.png";
import bear9 from "../assets/riverbearlook.jpg";

const images = [
  { src: bear1, caption: "Grizzly Bear roaming free in the Alaskan wild." },
  { src: bear2, caption: "A polar bear’s patience during the Arctic hunt." },
  { src: bear3, caption: "Sun bear enjoying the warmth of the forest." },
  { src: bear4, caption: "Bear at the forest-morning mist." },
  { src: bear5, caption: "Bear on the top of a mountain." },
  { src: bear6, caption: "The motherhood of the bear." },
  { src: bear7, caption: "A bear quenching its thirst by the river." },
  { src: bear8, caption: "The bear resting peacefully on soft earth." },
  { src: bear9, caption: "A bear gazing into its reflection on still water." },
];

const GalleryPage = () => {
  return (
    <section
      id="gallery"
      className="bg-[#efe9e3] text-[#3c2f2f] min-h-screen py-20 px-6 md:px-16 lg:px-24 overflow-hidden"
    >
      {/* Header */}
      <motion.div
        className="text-center mb-14"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2
          className="text-3xl md:text-4xl font-semibold mb-3 cursor-default"
          whileHover={{
            textShadow: "0 0 25px rgba(139, 94, 60, 0.5)",
            scale: 1.03,
          }}
        >
          Bear Gallery
        </motion.h2>
        <p className="text-lg text-[#5c4a3d]">
          A glimpse into the wilderness — where bears live, roam, and inspire.
        </p>
      </motion.div>

      {/* Grid Layout */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((img, i) => (
          <motion.div
            key={i}
            className="overflow-hidden rounded-2xl shadow-md bg-[#f9f6f1] relative group"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            whileHover={{
              scale: 1.04,
              boxShadow: "0 0 30px rgba(139, 94, 60, 0.4)",
            }}
          >
            {/* Image */}
            <motion.img
              src={img.src}
              alt={`Bear ${i + 1}`}
              className="w-full h-64 object-cover object-center transition-transform duration-700"
              whileHover={{ scale: 1.15 }}
            />

            {/* Caption Overlay */}
            <motion.div
              className="absolute inset-0 bg-[#3c2f2f]/50 opacity-0 group-hover:opacity-100 flex items-center justify-center text-[#f9f6f1] text-center text-sm md:text-base px-4 transition-all duration-700"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
            >
              <motion.p
                className="max-w-xs leading-relaxed"
                initial={{ y: 10, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {img.caption}
              </motion.p>
            </motion.div>

            {/* Subtle glowing border */}
            <motion.div
              className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-[#8b5e3c]/50 transition-all duration-500"
              whileHover={{ scale: 1.02 }}
            />
          </motion.div>
        ))}
      </div>

      {/* Soft footer note */}
      <motion.div
        className="text-center mt-16 text-sm text-[#5c4a3d]/80"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Each image captures the serenity and strength of the wild — calm, raw,
        and timeless.
        <br />
        (Ps: These are AI generated images)
      </motion.div>
    </section>
  );
};

export default GalleryPage;
