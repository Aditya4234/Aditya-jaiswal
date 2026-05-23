"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import Reveal from "./Reveal";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart",
    content:
      "Aditya is an exceptional frontend developer. He transformed our vision into a stunning, fast, and user-friendly application. His attention to detail is remarkable.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Product Manager, DevFlow",
    content:
      "Working with Aditya was a great experience. He delivered high-quality code ahead of schedule and was always responsive to feedback. Highly recommended!",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Founder, WebCraft",
    content:
      "The portfolio website Aditya built for us exceeded our expectations. His expertise in modern frontend technologies really shines through in the final product.",
    rating: 5,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 bg-[var(--background)] text-[var(--foreground)] overflow-hidden">
      <div className="absolute top-20 left-20 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold">
              What{" "}
              <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Clients
              </span>{" "}
              Say
            </h2>
            <div className="mt-4 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto" />
          </div>
        </Reveal>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="relative p-8 rounded-2xl border border-[var(--border)] bg-[var(--card)] backdrop-blur-md hover:border-purple-500/50 transition-all duration-300"
            >
              <Quote className="absolute top-4 right-4 text-purple-500/20" size={40} />
              <div className="flex gap-1 mb-5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={16} className="fill-yellow-500 text-yellow-500" />
                ))}
              </div>
              <p className="text-[var(--foreground)]/60 text-sm leading-7 mb-6">
                &ldquo;{t.content}&rdquo;
              </p>
              <div>
                <p className="font-semibold">{t.name}</p>
                <p className="text-sm text-[var(--foreground)]/50">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
