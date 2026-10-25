"use client";

import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "ChefAI – Intelligent Cooking Assistant",
      tagline: "Smart Culinary Assistant & Dynamic Recipe Engine",
      description:
        "An AI-powered personal kitchen assistant that dynamically formulates gourmet recipes from available pantry ingredients, strict dietary preferences, and target meal types. Implements safety guardrails, smart substitutions, and prompt-engineered LLM reasoning via OpenRouter.",
      image: "/projects/chefai.jpg",
      badge: "AI Culinary Assistant",
      technologies: ["Python", "Streamlit", "OpenRouter API", "Prompt Engineering", "LLM Reasoning"],
      github: "https://github.com/praveenlothu72-oss/chefai-cooking-assistant",
      live: "https://github.com/praveenlothu72-oss/chefai-cooking-assistant",
      glowColor: "shadow-emerald-500/10 hover:border-emerald-500/30",
      accentGradient: "from-emerald-500 to-teal-400",
    },
    {
      title: "Custom RAG Engine from Scratch",
      tagline: "Document Ingestion & Semantic Retrieval Pipeline",
      description:
        "An end-to-end Retrieval-Augmented Generation (RAG) system engineered from scratch without high-level black-box wrappers. Features PDF parsing, recursive chunking, HuggingFace sentence embeddings (all-MiniLM-L6-v2), ChromaDB vector persistence, and local LLM inference using Ollama (Qwen2.5).",
      image: "/projects/rag-pipeline.jpg",
      badge: "GenAI & RAG Pipeline",
      technologies: ["Python", "LangChain", "ChromaDB", "HuggingFace", "Ollama (Qwen2.5)", "Vector Search"],
      github: "https://github.com/praveenlothu72-oss/rag_application",
      live: "https://github.com/praveenlothu72-oss/rag_application",
      glowColor: "shadow-indigo-500/10 hover:border-indigo-500/30",
      accentGradient: "from-indigo-500 to-violet-400",
    },
  ];

  return (
    <section id="projects" className="py-24 relative overflow-hidden px-4 md:px-8">
      {/* Background blurs */}
      <div className="absolute top-1/3 left-0 w-96 h-96 rounded-full bg-electric/5 blur-[100px] -z-10 pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-96 h-96 rounded-full bg-violet/5 blur-[100px] -z-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet/10 border border-violet/20 text-slate-300 text-xs font-semibold mb-4 uppercase tracking-wider"
          >
            <span>🚀 Portfolio</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4"
          >
            Featured Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-400 text-sm md:text-base max-w-xl mx-auto"
          >
            A curated selection of my work demonstrating expertise in autonomous AI systems, custom RAG pipelines, and intelligent assistants.
          </motion.p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className={`group glass-card rounded-3xl border border-white/10 overflow-hidden flex flex-col justify-between shadow-2xl transition-all duration-300 ${project.glowColor}`}
            >
              {/* Entire upper part is a link to the project site */}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer flex-1 flex flex-col"
              >
                {/* Project Image Container */}
                <div className="relative h-64 md:h-72 w-full overflow-hidden bg-slate-950/60 border-b border-white/10">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out select-none"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent pointer-events-none" />

                  {/* Top Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-950/70 backdrop-blur-md border border-white/15 text-white shadow-lg">
                      {project.badge}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Title */}
                    <h3 className="text-2xl font-bold text-white mb-1.5 group-hover:text-electric transition-colors duration-300">
                      {project.title}
                    </h3>

                    {/* Tagline */}
                    <p className="text-xs font-semibold text-slate-300 mb-4 flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-electric" />
                      {project.tagline}
                    </p>

                    {/* Description */}
                    <p className="text-slate-400 text-xs md:text-sm leading-relaxed mb-6">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-2 mb-2">
                      {project.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-2.5 py-1 rounded-lg text-[11px] font-semibold bg-white/5 border border-white/10 text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </a>

              {/* Action Buttons */}
              <div className="px-6 md:px-8 pb-6 md:pb-8">
                <div className="flex items-center gap-3 border-t border-white/5 pt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium text-xs md:text-sm py-2.5 rounded-xl transition-all duration-300 hover:scale-[1.02]"
                  >
                    <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                    GitHub
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-indigo to-violet text-white font-semibold text-xs md:text-sm py-2.5 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-indigo/20 hover:scale-[1.02]"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Explore Project
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
