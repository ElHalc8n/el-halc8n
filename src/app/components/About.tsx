import { motion } from "motion/react";
import { Gamepad2, Heart, Cpu } from "lucide-react";

export function About() {
  const hobbies = [
    {
      icon: Gamepad2,
      title: "Gamer",
      subtitle: "Nickname: ElHalc8n",
      color: "from-cyan-500 to-blue-500",
      shadowColor: "shadow-cyan-500/50",
    },
    {
      icon: Heart,
      title: "Madridista",
      subtitle: "Real Madrid Fan",
      color: "from-purple-500 to-pink-500",
      shadowColor: "shadow-purple-500/50",
    },
    {
      icon: Cpu,
      title: "Hardware Enthusiast",
      subtitle: "Tech & Builds",
      color: "from-pink-500 to-orange-500",
      shadowColor: "shadow-pink-500/50",
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
            Who is ElHalc8n?
          </h2>
          <p className="text-gray-400 text-lg">
            More than just a developer—here's what makes me, me.
          </p>
        </motion.div>

        {/* Bento grid for hobbies */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {hobbies.map((hobby, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group"
            >
              <div className={`relative h-full p-6 rounded-2xl bg-gradient-to-br ${hobby.color} p-[2px]`}>
                <div className="h-full bg-[#1a1b26] rounded-2xl p-6 flex flex-col items-center justify-center text-center space-y-4 transition-all group-hover:bg-[#1a1b26]/80">
                  <div className={`p-4 rounded-full bg-gradient-to-br ${hobby.color} group-hover:shadow-lg ${hobby.shadowColor} transition-shadow`}>
                    <hobby.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">{hobby.title}</h3>
                    <p className="text-gray-400">{hobby.subtitle}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
