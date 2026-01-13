import { motion } from "motion/react";
import { Map, GraduationCap, Heart, Archive, ExternalLink } from "lucide-react";

export function Projects() {
  const projects = [
    {
      title: "Desa Sungai Deras Tourism",
      description: "WebGIS & Promotion platform for village tourism showcasing interactive maps and local attractions.",
      icon: Map,
      color: "from-cyan-500 to-blue-500",
      shadowColor: "shadow-cyan-500/30",
      tags: ["WebGIS", "Tourism", "Maps"],
      span: "md:col-span-2",
    },
    {
      title: "EPrakerin SMK",
      description: "Internship Monitoring System built with Laravel for tracking student internships.",
      icon: GraduationCap,
      color: "from-purple-500 to-pink-500",
      shadowColor: "shadow-purple-500/30",
      tags: ["Laravel", "Monitoring", "Education"],
      span: "md:col-span-1",
    },
    {
      title: "Wedding Planner App",
      description: "Android Native application for planning and organizing wedding events.",
      icon: Heart,
      color: "from-pink-500 to-rose-500",
      shadowColor: "shadow-pink-500/30",
      tags: ["Android", "Java", "Events"],
      span: "md:col-span-1",
    },
    {
      title: "BKAD Pontianak Archive",
      description: "Internship project for managing and archiving documents at BKAD Pontianak.",
      icon: Archive,
      color: "from-orange-500 to-amber-500",
      shadowColor: "shadow-orange-500/30",
      tags: ["Archive", "Internship", "Management"],
      span: "md:col-span-2",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Mission Log
          </h2>
          <p className="text-gray-400 text-lg">
            Projects that define my journey through the digital universe
          </p>
        </motion.div>

        {/* Bento grid for projects */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className={`group ${project.span}`}
            >
              <div className={`relative h-full p-[2px] rounded-2xl bg-gradient-to-br ${project.color}`}>
                <div className={`h-full bg-[#1a1b26] rounded-2xl p-6 flex flex-col transition-all group-hover:bg-[#1a1b26]/80 group-hover:shadow-2xl ${project.shadowColor}`}>
                  {/* Icon */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${project.color}`}>
                      <project.icon className="w-6 h-6 text-white" />
                    </div>
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: -45 }}
                      className="p-2 rounded-lg bg-white/5 hover:bg-white/10 cursor-pointer"
                    >
                      <ExternalLink className="w-4 h-4 text-gray-400" />
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-400 mb-4">{project.description}</p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 text-xs rounded-full bg-white/5 text-gray-300 border border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
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
