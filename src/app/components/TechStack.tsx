import { motion } from "motion/react";
import { Code2, Smartphone, Map, Layers } from "lucide-react";

export function TechStack() {
  const techs = [
    {
      name: "Laravel",
      icon: Layers,
      color: "from-red-500 to-orange-500",
      description: "Backend Framework",
    },
    {
      name: "React.js",
      icon: Code2,
      color: "from-cyan-400 to-blue-500",
      description: "Frontend Library",
    },
    {
      name: "Next.js",
      icon: Code2,
      color: "from-gray-600 to-gray-400",
      description: "React Framework",
    },
    {
      name: "Android Studio",
      icon: Smartphone,
      color: "from-green-500 to-emerald-500",
      description: "Mobile Development",
    },
    {
      name: "GIS Tools",
      icon: Map,
      color: "from-purple-500 to-pink-500",
      description: "QGIS/Mapbox",
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            My Arsenal
          </h2>
          <p className="text-gray-400 text-lg">
            Technologies I use to build the future
          </p>
        </motion.div>

        {/* Tech orbit/grid */}
        <div className="relative">
          {/* Center glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl"></div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 relative z-10">
            {techs.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.1, 
                  rotate: [0, -5, 5, 0],
                  transition: { duration: 0.3 }
                }}
                className="group"
              >
                <div className={`relative p-[2px] rounded-2xl bg-gradient-to-br ${tech.color}`}>
                  <div className="h-full bg-[#1a1b26] rounded-2xl p-6 flex flex-col items-center justify-center text-center space-y-3 transition-all group-hover:bg-[#1a1b26]/80">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className={`p-3 rounded-xl bg-gradient-to-br ${tech.color} group-hover:shadow-lg group-hover:shadow-${tech.color}/50`}
                    >
                      <tech.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <div>
                      <h3 className="font-bold text-sm mb-1">{tech.name}</h3>
                      <p className="text-xs text-gray-400">{tech.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
