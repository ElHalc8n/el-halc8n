import { motion } from "motion/react";
import { Instagram, Youtube, Github, Send } from "lucide-react";

export function Transmission() {
  const socials = [
    {
      name: "Instagram",
      handle: "@fahmi.peno",
      icon: Instagram,
      color: "from-pink-500 via-purple-500 to-orange-500",
      link: "https://instagram.com/fahmi.peno",
    },
    {
      name: "YouTube",
      handle: "YouTube Channel",
      icon: Youtube,
      color: "from-red-500 to-red-600",
      link: "#",
    },
    {
      name: "GitHub",
      handle: "View Projects",
      icon: Github,
      color: "from-gray-600 to-gray-800",
      link: "#",
    },
  ];

  return (
    <section id="transmission" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Transmission
          </h2>
          <p className="text-gray-400 text-lg">
            Connect with me across the digital space
          </p>
        </motion.div>

        {/* Social links bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {socials.map((social, index) => (
            <motion.a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group block"
            >
              <div className={`relative p-[2px] rounded-2xl bg-gradient-to-br ${social.color}`}>
                <div className="h-full bg-[#1a1b26] rounded-2xl p-8 flex flex-col items-center justify-center text-center space-y-4 transition-all group-hover:bg-[#1a1b26]/80">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`p-4 rounded-full bg-gradient-to-br ${social.color} group-hover:shadow-lg`}
                  >
                    <social.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">{social.name}</h3>
                    <p className="text-gray-400">{social.handle}</p>
                  </div>
                  <motion.div
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-2 text-sm text-cyan-400"
                  >
                    Connect
                    <Send className="w-4 h-4" />
                  </motion.div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center pt-12 border-t border-gray-800"
        >
          <p className="text-gray-400 mb-2">
            Designed by <span className="text-cyan-400 font-bold">Peno</span>
          </p>
          <p className="text-gray-500 text-sm">
            @ Universitas Muhammadiyah Pontianak
          </p>
          <div className="mt-4">
            <p className="text-xs text-gray-600">
              elhalc8n.space • 2026
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
