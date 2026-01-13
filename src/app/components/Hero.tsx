import { motion } from "motion/react";
import { Rocket, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl mx-auto text-center">
        {/* Animated avatar/logo */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="mb-8"
        >
          <div className="relative inline-block">
            <div className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full bg-gradient-to-br from-cyan-500 via-purple-500 to-pink-500 p-1">
              <div className="w-full h-full rounded-full bg-[#0B0C10] flex items-center justify-center">
                <Sparkles className="w-16 h-16 md:w-20 md:h-20 text-cyan-400" />
              </div>
            </div>
            {/* Orbiting element */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-purple-500 rounded-full shadow-lg shadow-purple-500/50"></div>
            </motion.div>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Hi, I'm Peno.
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 text-white">
            Informatics Student & Creative Developer.
          </h2>
          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Building WebGIS, Apps, and exploring the digital space.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="#projects"
            className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg font-bold text-lg overflow-hidden transition-all hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Rocket className="w-5 h-5" />
              Explore My Universe
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </a>
          <a
            href="#transmission"
            className="px-8 py-4 border-2 border-cyan-500 rounded-lg font-bold text-lg hover:bg-cyan-500/10 transition-all hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/30"
          >
            Contact Me
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-20"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-block"
          >
            <div className="w-6 h-10 border-2 border-cyan-500 rounded-full p-1">
              <div className="w-1 h-2 bg-cyan-500 rounded-full mx-auto"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
