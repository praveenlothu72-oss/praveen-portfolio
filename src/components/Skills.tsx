"use client";

import { Brain, Cloud, Globe, Smartphone, Terminal } from "lucide-react";
import { motion } from "framer-motion";

export default function Skills() {
  const skillCategories = [
    {
      title: "Mobile Development",
      icon: Smartphone,
      color: "text-blue-400 bg-blue-500/10 border-blue-500/20",
      skills: [
        { name: "Flutter", level: 95 },
        { name: "Firebase", level: 90 },
      ],
    },
    {
      title: "Programming",
      icon: Terminal,
      color: "text-amber-400 bg-amber-500/10 border-amber-500/20",
      skills: [
        { name: "Python", level: 85 },
        { name: "SQL", level: 80 },
      ],
    },
    {
      title: "Web Technologies",
      icon: Globe,
      color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
      skills: [
        { name: "HTML", level: 90 },
        { name: "CSS", level: 85 },
      ],
    },
    {
      title: "Cloud & Infrastructure",
      icon: Cloud,
      color: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
      skills: [
        { name: "Cloud Computing", level: 75 },
      ],
    },
    {
      title: "Artificial Intelligence",
      icon: Brain,
      color: "text-violet-400 bg-violet-500/10 border-violet-500/20",
      skills: [
        { name: "Artificial Intelligence", level: 80 },
        { name: "Machine Learning Basics", level: 75 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden px-4 md:px-8">
      {/* Glow effect backgrounds */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-electric/5 blur-[120px] -z-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-electric/10 border border-electric/20 text-slate-300 text-xs font-semibold mb-4 uppercase tracking-wider"
          >
            <span>⚡ Abilities</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4"
          >
            Technical Skillset
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-400 text-sm md:text-base max-w-xl mx-auto"
          >
            A compilation of frameworks, languages, and core concepts I specialize in to build comprehensive digital applications.
          </motion.p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, catIdx) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={catIdx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: catIdx * 0.1 }}
                className="glass-card p-6 rounded-3xl border border-white/10 flex flex-col justify-between"
              >
                <div>
                  {/* Category Title Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`p-2.5 rounded-xl border ${category.color}`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-bold text-white tracking-tight">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills Progress Bars */}
                  <div className="space-y-5">
                    {category.skills.map((skill, skillIdx) => (
                      <div key={skillIdx} className="space-y-2">
                        <div className="flex justify-between text-xs font-semibold text-slate-300">
                          <span>{skill.name}</span>
                          <span className="text-electric">{skill.level}%</span>
                        </div>
                        {/* Progress bar background */}
                        <div className="h-2 w-full bg-slate-900 rounded-full overflow-hidden border border-white/5">
                          {/* Animated progress bar fill */}
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                            className="h-full bg-gradient-to-r from-electric to-violet rounded-full"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
