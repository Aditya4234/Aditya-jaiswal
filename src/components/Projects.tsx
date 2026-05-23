"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

function GithubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}
import Reveal from "./Reveal";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with product listings, cart, checkout, and payment integration built with Next.js.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Stripe"],
    gradient: "from-blue-500 to-purple-500",
    live: "https://example.com",
    github: "https://github.com/adityajaiswal8899/ecommerce",
  },
  {
    title: "Social Media Dashboard",
    description:
      "Real-time analytics dashboard for social media metrics with interactive charts and data visualization.",
    tags: ["React", "D3.js", "Firebase", "Tailwind"],
    gradient: "from-purple-500 to-pink-500",
    live: "https://example.com",
    github: "https://github.com/adityajaiswal8899/dashboard",
  },
  {
    title: "AI Chat Application",
    description:
      "An intelligent chat application powered by AI with real-time messaging, voice support, and smart suggestions.",
    tags: ["Next.js", "OpenAI", "WebSocket", "Prisma"],
    gradient: "from-pink-500 to-orange-500",
    live: "https://example.com",
    github: "https://github.com/adityajaiswal8899/ai-chat",
  },
  {
    title: "Portfolio Builder",
    description:
      "Drag-and-drop portfolio builder that lets creatives showcase their work with customizable templates.",
    tags: ["React", "DnD Kit", "MongoDB", "S3"],
    gradient: "from-orange-500 to-yellow-500",
    live: "https://example.com",
    github: "https://github.com/adityajaiswal8899/portfolio-builder",
  },
  {
    title: "Task Management App",
    description:
      "Kanban-style project management tool with real-time collaboration, task assignments, and progress tracking.",
    tags: ["Next.js", "Socket.io", "PostgreSQL", "Redis"],
    gradient: "from-green-500 to-teal-500",
    live: "https://example.com",
    github: "https://github.com/adityajaiswal8899/task-manager",
  },
  {
    title: "Weather Forecast App",
    description:
      "Beautiful weather application with 7-day forecasts, interactive maps, and severe weather alerts.",
    tags: ["React", "Mapbox", "OpenWeather", "PWA"],
    gradient: "from-blue-500 to-cyan-500",
    live: "https://example.com",
    github: "https://github.com/adityajaiswal8899/weather",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 bg-[var(--background)] text-[var(--foreground)] overflow-hidden">
      <div className="absolute top-40 left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-40 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold">
              My{" "}
              <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            <div className="mt-4 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto" />
          </div>
        </Reveal>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className="group relative p-6 rounded-2xl border border-[var(--border)] bg-[var(--card)] backdrop-blur-md hover:border-white/20 transition-all duration-500 overflow-hidden"
            >
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br ${project.gradient} transition-opacity duration-500`} />

              <div className="relative z-10">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center mb-5`}>
                  <div className="w-5 h-5 border-2 border-white rounded-full" />
                </div>

                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-[var(--foreground)]/60 text-sm leading-7 mb-5">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs border border-[var(--border)] bg-[var(--muted)] text-[var(--foreground)]/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-semibold text-purple-400 hover:text-white transition-colors duration-300"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-semibold text-[var(--foreground)]/60 hover:text-white transition-colors duration-300"
                  >
                    <GithubIcon size={16} />
                    Source
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
