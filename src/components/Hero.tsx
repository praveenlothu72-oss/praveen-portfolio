"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Award, Brain, Calendar, Code2, Download } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = [
    "Flutter Developer",
    "Firebase Developer",
    "AI Enthusiast",
    "Mobile App Developer",
  ];

  useEffect(() => {
    const handleTyping = () => {
      const currentRole = roles[roleIndex];
      if (isDeleting) {
        setText(currentRole.substring(0, text.length - 1));
        setTypingSpeed(40);
      } else {
        setText(currentRole.substring(0, text.length + 1));
        setTypingSpeed(80);
      }

      if (!isDeleting && text === currentRole) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, roleIndex, typingSpeed]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden px-4 md:px-8"
    >
      {/* Massive Faded Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
        <h1 className="text-[12vw] font-black tracking-widest text-slate-100 opacity-[0.03] select-none font-sans uppercase">
          PRAVEEN
        </h1>
      </div>

      {/* Main Glass Mockup Container */}
      <div className="relative w-full max-w-6xl rounded-[32px] border border-white/10 bg-slate-950/40 backdrop-blur-2xl p-6 md:p-12 shadow-[0_24px_80px_rgba(0,0,0,0.4)] z-10 overflow-hidden">
        {/* Decorative Top Bar Buttons */}
        <div className="absolute top-4 left-6 flex gap-1.5 z-20">
          <div className="h-3 w-3 rounded-full bg-rose-500/80" />
          <div className="h-3 w-3 rounded-full bg-amber-500/80" />
          <div className="h-3 w-3 rounded-full bg-emerald-500/80" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Content */}
          <div className="lg:col-span-6 flex flex-col items-start text-left z-10">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-electric/10 border border-electric/20 text-electric text-xs font-semibold mb-6 uppercase tracking-wider"
            >
              <span>👋 Hello, I'm</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-none mb-4"
            >
              DURGA PRAVEEN LOTU
            </motion.h2>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="h-10 md:h-12 flex items-center mb-6 text-xl md:text-2xl font-bold bg-gradient-to-r from-electric via-indigo to-violet bg-clip-text text-transparent"
            >
              <span>{text}</span>
              <span className="cursor-blink h-6 ml-1 w-[2px] bg-electric" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-slate-300 text-sm md:text-base leading-relaxed mb-8 max-w-lg"
            >
              Motivated and detail-oriented Computer Science student specializing in
              <span className="text-white font-semibold"> Flutter</span>,
              <span className="text-white font-semibold"> Firebase</span>,
              <span className="text-white font-semibold"> Artificial Intelligence</span>, and
              <span className="text-white font-semibold"> Cloud Computing</span>. Passionate about building
              beautiful mobile applications and AI-powered solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-4 w-full sm:w-auto"
            >
              <a
                href="#projects"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 bg-gradient-to-r from-indigo to-violet text-white font-semibold px-8 py-3.5 rounded-full hover:shadow-lg hover:shadow-indigo/35 hover:scale-[1.03] transition-all duration-300"
              >
                View Projects
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 bg-white/5 border border-white/10 text-white font-semibold px-8 py-3.5 rounded-full hover:bg-white/10 hover:scale-[1.03] transition-all duration-300"
              >
                Contact Me
              </a>
            </motion.div>
          </div>

          {/* Right Column: Centered Developer Photo & Floating Cards */}
          <div className="lg:col-span-6 flex justify-center items-center relative py-12 lg:py-6">
            
            {/* Background Halo and Glow Arch */}
            <div className="absolute w-72 h-80 md:w-80 md:h-[400px] rounded-t-full bg-gradient-to-tr from-indigo/30 via-violet/20 to-electric/40 blur-xl opacity-80 -z-10" />
            
            <div className="glow-arch relative flex items-end justify-center w-72 h-80 md:w-80 md:h-[400px] rounded-t-full border border-white/20 bg-slate-900/60 overflow-hidden shadow-[0_0_50px_rgba(79,124,255,0.2)]">
              {/* Radial Arch background */}
              <div className="absolute inset-0 bg-gradient-to-b from-indigo/50 via-indigo/10 to-transparent -z-10" />
              
              {/* User Portrait Image */}
              <div className="relative w-full h-full">
                <Image
                  src="/avatar.jpg"
                  alt="Durga Praveen Lotu"
                  fill
                  className="object-cover object-top select-none pointer-events-none"
                  priority
                />
                {/* Fade-out Bottom Gradient */}
                <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent pointer-events-none" />
              </div>
            </div>

            {/* FLOATING CARD 1: Diploma Score */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="absolute -top-4 -left-4 md:left-2 bg-slate-950/80 backdrop-blur-md border border-white/15 px-4 py-3 rounded-2xl flex items-center gap-3 shadow-lg max-w-[170px]"
            >
              <div className="h-9 w-9 rounded-xl bg-amber-500/20 flex items-center justify-center text-amber-400">
                <Award className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xl font-bold leading-none text-white">91%</p>
                <p className="text-[10px] text-slate-400">Diploma Score</p>
              </div>
            </motion.div>

            {/* FLOATING CARD 2: Projects Built */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="absolute top-1/4 -right-6 md:-right-2 bg-slate-950/80 backdrop-blur-md border border-white/15 px-4 py-3 rounded-2xl flex items-center gap-3 shadow-lg max-w-[160px]"
            >
              <div className="h-9 w-9 rounded-xl bg-electric/20 flex items-center justify-center text-electric">
                <Code2 className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xl font-bold leading-none text-white">3+</p>
                <p className="text-[10px] text-slate-400">Projects Built</p>
              </div>
            </motion.div>

            {/* FLOATING CARD 3: B.Tech Graduation */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ repeat: Infinity, duration: 5.5, ease: "easeInOut", delay: 0.5 }}
              className="absolute -bottom-6 left-2 md:left-6 bg-slate-950/80 backdrop-blur-md border border-white/15 px-4 py-3 rounded-2xl flex items-center gap-3 shadow-lg max-w-[175px]"
            >
              <div className="h-9 w-9 rounded-xl bg-violet/20 flex items-center justify-center text-violet-400">
                <Calendar className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xl font-bold leading-none text-white">2027</p>
                <p className="text-[10px] text-slate-400">B.Tech Graduation</p>
              </div>
            </motion.div>

            {/* FLOATING CARD 4: Specialization */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 6.5, ease: "easeInOut", delay: 1.5 }}
              className="absolute bottom-6 -right-6 md:-right-4 bg-slate-950/80 backdrop-blur-md border border-white/15 px-4 py-3 rounded-2xl flex items-center gap-3 shadow-lg max-w-[185px]"
            >
              <div className="h-9 w-9 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                <Brain className="h-5 w-5" />
              </div>
              <div>
                <p className="text-[15px] font-bold leading-none text-white">Flutter & AI</p>
                <p className="text-[10px] text-slate-400">Specialization</p>
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
