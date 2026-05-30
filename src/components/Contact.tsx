"use client";

import { useState } from "react";
import { Mail, Phone, Send } from "lucide-react";
import { motion } from "framer-motion";

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={props.className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus("sending");
    // Simulate API request
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 4000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "praveenlothu72@gmail.com",
      href: "mailto:praveenlothu72@gmail.com",
      color: "text-blue-400 bg-blue-500/10 border-blue-500/20",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9182646340",
      href: "tel:+919182646340",
      color: "text-violet-400 bg-violet-500/10 border-violet-500/20",
    },
    {
      icon: GithubIcon,
      label: "GitHub",
      value: "github.com/praveenlothu72-osstext",
      href: "https://github.com/praveenlothu72-osstext",
      color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    },
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden px-4 md:px-8">
      {/* Background glowing gradients */}
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-violet/5 blur-[100px] -z-10 pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[450px] h-[450px] rounded-full bg-electric/5 blur-[120px] -z-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-electric/10 border border-electric/20 text-slate-300 text-xs font-semibold mb-4 uppercase tracking-wider"
          >
            <span>✉️ Connect</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4"
          >
            Get In Touch
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-400 text-sm md:text-base max-w-xl mx-auto"
          >
            Have a project in mind, an opportunity to discuss, or just want to say hi? Shoot me a message!
          </motion.p>
        </div>

        {/* Contact Container Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Panel: Contact info */}
          <div className="lg:col-span-5 flex flex-col gap-6 justify-between">
            <div className="flex flex-col gap-6">
              {contactInfo.map((info, idx) => {
                const Icon = info.icon;
                return (
                  <motion.a
                    key={idx}
                    href={info.href}
                    target={info.label === "GitHub" ? "_blank" : undefined}
                    rel={info.label === "GitHub" ? "noopener noreferrer" : undefined}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    whileHover={{ x: 6 }}
                    className="glass-card p-6 rounded-3xl border border-white/10 flex items-center gap-5 hover:border-white/20"
                  >
                    <div className={`p-3.5 rounded-2xl border ${info.color}`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 font-semibold mb-0.5">{info.label}</p>
                      <p className="text-sm md:text-base font-bold text-white tracking-wide truncate max-w-[200px] sm:max-w-xs md:max-w-none">
                        {info.value}
                      </p>
                    </div>
                  </motion.a>
                );
              })}
            </div>

            {/* Premium brand footer card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="glass-card p-6 rounded-3xl border border-white/10 bg-indigo/5 mt-6 lg:mt-0 flex flex-col justify-center items-center text-center py-10"
            >
              <h4 className="text-xl font-bold text-white mb-2">Let's build something epic!</h4>
              <p className="text-slate-400 text-xs leading-relaxed max-w-xs">
                Combining mobile performance and clean design with artificial intelligence to deliver next-gen digital products.
              </p>
            </motion.div>
          </div>

          {/* Right Panel: Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 glass-card p-8 rounded-3xl border border-white/10 flex flex-col justify-between"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Durga Praveen"
                  className="glass-input w-full p-4 text-sm"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="praveen@example.com"
                  className="glass-input w-full p-4 text-sm"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Hi Praveen, I would love to collaborate on a mobile app..."
                  className="glass-input w-full p-4 text-sm resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending" || status === "success"}
                className={`w-full flex items-center justify-center gap-2 bg-gradient-to-r from-indigo to-violet text-white font-semibold py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-indigo/35 hover:scale-[1.01] ${
                  status === "sending" ? "opacity-75 cursor-not-allowed" : ""
                }`}
              >
                {status === "idle" && (
                  <>
                    Send Message
                    <Send className="h-4 w-4" />
                  </>
                )}
                {status === "sending" && <span>Sending Message...</span>}
                {status === "success" && <span className="text-emerald-300">✓ Message Sent Successfully!</span>}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
