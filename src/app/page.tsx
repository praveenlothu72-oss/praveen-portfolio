"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Lenis from "lenis";

import CursorGlow from "@/components/CursorGlow";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

export default function Home() {
  useEffect(() => {
    // Initialize AOS scroll animations
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
    });

    // Initialize Lenis Smooth Scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative min-h-screen">
      {/* Background gradients */}
      <div className="absolute top-0 left-0 right-0 h-[1000px] bg-gradient-to-b from-[#061B6B] via-[#3347FF]/10 to-transparent -z-10 pointer-events-none" />
      
      {/* Interactive Cursor Glow */}
      <CursorGlow />

      {/* Navigation Header */}
      <Header />

      {/* Content sections */}
      <main className="w-full flex flex-col gap-12">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="py-12 text-center text-xs text-slate-500 border-t border-white/5 bg-slate-950/60 relative z-10">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Durga Praveen Lotu. All rights reserved.</p>
          <p className="flex gap-6">
            <a
              href="https://github.com/praveenlothu72-osstext"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-electric transition-colors"
            >
              GitHub
            </a>
            <a
              href="mailto:praveenlothu72@gmail.com"
              className="hover:text-electric transition-colors"
            >
              Email
            </a>
            <a
              href="tel:+919182646340"
              className="hover:text-electric transition-colors"
            >
              Phone
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
