"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, motion } from "framer-motion";

interface CounterProps {
  value: number;
  startFrom?: number;
  suffix?: string;
  duration?: number;
}

function Counter({ value, startFrom = 0, suffix = "", duration = 1.5 }: CounterProps) {
  const [count, setCount] = useState(startFrom);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let current = startFrom;
      const end = value;
      const range = end - startFrom;
      if (range <= 0) return;

      const steps = Math.min(range, 60); // standard frame rate steps
      const increment = Math.ceil(range / steps);
      const stepTime = (duration * 1000) / steps;

      const timer = setInterval(() => {
        current += increment;
        if (current >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(current);
        }
      }, stepTime);

      return () => clearInterval(timer);
    }
  }, [isInView, value, startFrom, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Experience() {
  const stats = [
    {
      value: 91,
      startFrom: 0,
      suffix: "%",
      label: "Diploma Score",
      description: "Nuzvid Polytechnic",
      color: "from-amber-500/20 to-orange-500/20 text-amber-400",
    },
    {
      value: 3,
      startFrom: 0,
      suffix: "+",
      label: "Projects Built",
      description: "Flutter, AI, & Database",
      color: "from-blue-500/20 to-indigo-500/20 text-blue-400",
    },
    {
      value: 100,
      startFrom: 0,
      suffix: "+",
      label: "Hours Learning AI",
      description: "ML Basics & API Integration",
      color: "from-violet-500/20 to-purple-500/20 text-violet-400",
    },
    {
      value: 2027,
      startFrom: 2000,
      suffix: "",
      label: "Graduation Year",
      description: "B.Tech Computer Science",
      color: "from-emerald-500/20 to-teal-500/20 text-emerald-400",
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden px-4 md:px-8 bg-slate-950/20 border-y border-white/5">
      {/* Background glow lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card p-6 md:p-8 rounded-3xl border border-white/10 flex flex-col items-center text-center group"
            >
              {/* Highlight Background Glow */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none -z-10`} />

              <h3 className={`text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-2 ${stat.color.split(" ").pop()}`}>
                <Counter
                  value={stat.value}
                  startFrom={stat.startFrom}
                  suffix={stat.suffix}
                />
              </h3>
              
              <p className="text-white font-bold text-sm md:text-base mb-1">
                {stat.label}
              </p>
              
              <p className="text-slate-400 text-xs">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
