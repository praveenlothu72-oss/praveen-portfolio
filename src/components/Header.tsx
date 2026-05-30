"use client";

import { useState, useEffect } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 py-4 md:px-8">
      <nav
        className={`mx-auto max-w-7xl rounded-full transition-all duration-300 ${
          scrolled
            ? "glass-panel px-6 py-3 shadow-lg shadow-black/20"
            : "bg-transparent px-6 py-4"
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo to-violet text-white font-bold text-lg shadow-lg shadow-indigo/35 group-hover:scale-105 transition-transform duration-300">
              DP
            </div>
            <span className="text-xl font-bold tracking-tight text-white group-hover:text-electric transition-colors duration-300">
              Praveen
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-white transition-colors relative group py-1"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-electric transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Contact Button */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-white text-navy font-semibold px-6 py-2.5 rounded-full hover:bg-electric hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-electric/30 hover:scale-[1.03]"
            >
              Contact Me
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 md:hidden text-white hover:text-electric transition-colors"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-20 left-4 right-4 glass-panel rounded-3xl p-6 shadow-2xl flex flex-col gap-4 z-40 border border-white/10"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-slate-200 hover:text-white hover:pl-2 transition-all duration-200 py-1 border-b border-white/5"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 bg-gradient-to-r from-indigo to-violet text-white font-semibold py-3 rounded-full hover:shadow-lg transition-all duration-300"
            >
              Contact Me
              <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
