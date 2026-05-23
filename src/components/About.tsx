"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { Code2, Palette, Zap } from "lucide-react";
import Reveal from "./Reveal";

function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLHeadingElement>(null);
  const counted = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !counted.current) {
          counted.current = true;
          const duration = 2000;
          const steps = 40;
          const stepTime = duration / steps;
          const increment = value / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, stepTime);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <h4 ref={ref} className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
      {count}{suffix}
    </h4>
  );
}

const stats = [
  { value: 2, suffix: "+", label: "Years Experience" },
  { value: 20, suffix: "+", label: "Projects Done" },
  { value: 10, suffix: "+", label: "Happy Clients" },
  { value: 99, suffix: "%", label: "Client Satisfaction" },
];

const highlights = [
  { icon: Code2, label: "Clean Code", desc: "Well-structured, maintainable code" },
  { icon: Palette, label: "Beautiful UI", desc: "Pixel-perfect responsive designs" },
  { icon: Zap, label: "Performance", desc: "Optimized for speed & SEO" },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-[var(--background)] text-[var(--foreground)] overflow-hidden">
      <div className="absolute top-40 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold">
              About{" "}
              <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Me
              </span>
            </h2>
            <div className="mt-4 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto" />
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <Reveal direction="left">
            <div className="relative flex justify-center">
              <div className="absolute w-[300px] h-[300px] bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-3xl opacity-20 animate-pulse-glow" />
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative w-[300px] h-[360px] md:w-[360px] md:h-[420px] rounded-[30px] overflow-hidden border border-[var(--border)] bg-[var(--card)] shadow-2xl shadow-purple-500/20"
              >
                <Image
                  src="/image/image%202.png"
                  alt="About"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
          </Reveal>

          <Reveal direction="right">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                Frontend Developer <span className="text-gradient">&amp; Designer</span>
              </h3>
              <p className="text-[var(--foreground)]/60 text-lg leading-8 mb-6">
                I am a passionate frontend developer specializing in building
                modern, responsive, and high-performance web applications. With a
                keen eye for design and a commitment to clean code, I create
                seamless user experiences that bring ideas to life.
              </p>
              <p className="text-[var(--foreground)]/60 text-lg leading-8 mb-8">
                I love working with cutting-edge technologies like React,
                Next.js, and Tailwind CSS to build applications that are both
                beautiful and performant.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-10">
                {stats.map((stat) => (
                  <motion.div
                    key={stat.label}
                    whileHover={{ scale: 1.05, y: -4 }}
                    className="p-5 rounded-2xl border border-[var(--border)] bg-[var(--card)] backdrop-blur-md"
                  >
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                    <p className="text-[var(--foreground)]/60 text-sm mt-1">{stat.label}</p>
                  </motion.div>
                ))}
              </div>

              <div className="grid grid-cols-3 gap-4">
                {highlights.map((item) => (
                  <div key={item.label} className="text-center p-4 rounded-xl border border-[var(--border)] bg-[var(--card)]">
                    <item.icon size={24} className="mx-auto text-purple-500 mb-2" />
                    <h4 className="font-semibold text-sm">{item.label}</h4>
                    <p className="text-xs text-[var(--foreground)]/50 mt-1">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
