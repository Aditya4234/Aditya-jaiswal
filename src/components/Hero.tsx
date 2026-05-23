"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Download, ChevronDown } from "lucide-react";
import { useEffect, useState, useRef } from "react";

const roles = [
  "Frontend Developer",
  "UI/UX Enthusiast",
  "React Specialist",
  "Next.js Expert",
];

function Typewriter({ words }: { words: string[] }) {
  const [displayText, setDisplayText] = useState("");
  const indexRef = useRef(0);
  const charIndexRef = useRef(0);
  const deletingRef = useRef(false);

  useEffect(() => {
    const current = words[indexRef.current];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deletingRef.current && charIndexRef.current < current.length) {
      timeout = setTimeout(() => {
        charIndexRef.current += 1;
        setDisplayText(current.slice(0, charIndexRef.current));
      }, 80);
    } else if (!deletingRef.current && charIndexRef.current === current.length) {
      timeout = setTimeout(() => {
        deletingRef.current = true;
      }, 1500);
    } else if (deletingRef.current && charIndexRef.current > 0) {
      timeout = setTimeout(() => {
        charIndexRef.current -= 1;
        setDisplayText(current.slice(0, charIndexRef.current));
      }, 40);
    } else if (deletingRef.current && charIndexRef.current === 0) {
      deletingRef.current = false;
      indexRef.current = (indexRef.current + 1) % words.length;
    }

    return () => clearTimeout(timeout);
  }, [displayText, words]);

  return (
    <span>
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
}

export default function Hero() {
  return (
    <main
      id="home"
      className="relative min-h-screen bg-[var(--background)] text-[var(--foreground)] overflow-hidden flex items-center"
    >
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl" />

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-24 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/20 bg-purple-500/10 text-sm text-purple-400 mb-6"
          >

          </motion.div>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Aditya Jaiswal
            </span>
          </h1>

          <h2 className="mt-6 text-2xl md:text-3xl font-semibold text-[var(--foreground)]/70 h-10">
            <Typewriter words={roles} />
          </h2>

          <p className="mt-6 text-[var(--foreground)]/60 text-lg leading-8 max-w-2xl">
            I craft modern, responsive, and high-performance web applications
            with pixel-perfect UI/UX using cutting-edge frontend technologies.
          </p>

          <div className="mt-10 flex flex-wrap gap-5">
            <Link
              href="#projects"
              className="group px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-semibold flex items-center gap-2 hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg shadow-purple-500/30"
            >
              View Projects
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>

            <a
              href="/resume.pdf"
              target="_blank"
              className="group px-8 py-4 rounded-2xl border border-[var(--border)] bg-[var(--card)] backdrop-blur-md text-[var(--foreground)] font-semibold flex items-center gap-2 hover:bg-[var(--card-hover)] active:scale-95 transition-all duration-300"
            >
              <Download size={18} />
              Resume
            </a>
          </div>

          <div className="mt-10 flex items-center gap-5">
            <motion.a
              href="https://github.com/adityajaiswal8899"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              className="w-12 h-12 rounded-full border border-[var(--border)] bg-[var(--card)] flex items-center justify-center hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white hover:border-transparent transition-all duration-300"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width={20} height={20}>
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/aditya-jaiswal-a81a49331"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              className="w-12 h-12 rounded-full border border-[var(--border)] bg-[var(--card)] flex items-center justify-center hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 hover:text-white hover:border-transparent transition-all duration-300"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width={20} height={20}>
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative flex justify-center"
        >
          <div className="absolute w-[350px] h-[350px] bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-3xl opacity-30 animate-pulse-glow" />

          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="relative w-[320px] h-[420px] md:w-[400px] md:h-[500px] rounded-[40px] overflow-hidden border border-[var(--border)] bg-[var(--card)] shadow-2xl shadow-purple-500/20"
          >
            <Image
              src="/image/image.png"
              alt="Aditya Jaiswal"
              fill
              className="object-cover hover:scale-105 transition-all duration-700"
              priority
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)]/70 via-transparent to-transparent" />

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl border border-[var(--border)] bg-[var(--card)] backdrop-blur-lg"
            >
              <h3 className="text-xl font-bold text-[var(--foreground)]">
                Frontend Developer
              </h3>
              <p className="text-sm text-[var(--foreground)]/60 mt-1">
                Building modern &amp; premium web experiences.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown size={24} className="text-purple-500/60" />
        </motion.div>
      </motion.div>
    </main>
  );
}
