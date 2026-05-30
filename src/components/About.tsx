"use client";

import { Building2, Calendar, GraduationCap, Percent } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  const education = [
    {
      institution: "GIET Engineering College",
      period: "2024 - 2027",
      degree: "Bachelor of Technology (B.Tech)",
      specialization: "Computer Science and Engineering",
      details: "Focusing on Software Engineering, Data Structures & Algorithms, Artificial Intelligence, and Cloud Computing.",
      color: "border-electric/30 shadow-electric/5",
      badgeColor: "bg-electric/25 text-electric-300",
    },
    {
      institution: "Nuzvid Polytechnic",
      period: "2021 - 2024",
      degree: "Diploma in Computer Engineering",
      specialization: "Academic Score: 91%",
      details: "Completed coursework in computer fundamentals, programming, database management, and operating systems.",
      color: "border-violet/30 shadow-violet/5",
      badgeColor: "bg-violet/25 text-violet-300",
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden px-4 md:px-8">
      {/* Background soft blur shapes */}
      <div className="absolute top-1/4 right-0 w-80 h-80 rounded-full bg-violet/10 blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 rounded-full bg-indigo/10 blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo/10 border border-indigo/20 text-slate-300 text-xs font-semibold mb-4 uppercase tracking-wider"
          >
            <span>📚 Background</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4"
          >
            Education & Journey
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-400 text-sm md:text-base max-w-xl mx-auto"
          >
            An academic path shaped by passion for mobile development, cloud solutions, and intelligence systems.
          </motion.p>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {education.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              whileHover={{ y: -6 }}
              className={`glass-card p-6 md:p-8 rounded-3xl border ${edu.color} relative overflow-hidden flex flex-col justify-between`}
            >
              {/* Top Accent Light */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

              <div>
                {/* Header info */}
                <div className="flex justify-between items-start gap-4 mb-6">
                  <div className="p-3 bg-white/5 rounded-2xl border border-white/10 text-slate-200">
                    <GraduationCap className="h-6 w-6 text-electric" />
                  </div>
                  <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/5 border border-white/10 text-slate-300">
                    <Calendar className="h-3.5 w-3.5" />
                    {edu.period}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">
                  {edu.institution}
                </h3>
                <h4 className="text-lg font-semibold text-slate-200 mb-2">
                  {edu.degree}
                </h4>
                <div className="inline-block px-3 py-1 rounded-lg text-xs font-bold mb-4 bg-white/5 border border-white/10 text-slate-300">
                  {edu.specialization}
                </div>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {edu.details}
                </p>
              </div>

              {/* Decorative background logo */}
              <div className="absolute bottom-4 right-4 opacity-5 pointer-events-none">
                <Building2 className="h-28 w-28 text-white" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
