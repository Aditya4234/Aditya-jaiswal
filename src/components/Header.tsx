"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Moon, Sun, Download } from "lucide-react";
import { useState, useEffect } from "react";
import { useTheme } from "./ThemeProvider";

const navItems = [
  "home",
  "about",
  "skills",
  "projects",
  "testimonials",
  "contact",
];

export default function Header() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navItems.map((id) => document.getElementById(id));
      const scrollPos = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPos) {
          setActive(navItems[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-[var(--background)]/80 border-b border-[var(--border)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <nav className="flex items-center justify-between h-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <Link href="#home" className="flex items-center gap-3">
              <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-purple-500 shadow-lg shadow-purple-500/30">
                <Image
                  src="/image/image.png"
                  alt="Profile"
                  fill
                  className="object-cover"
                />
              </div>

              <h1 className="text-xl font-bold">
                <span className="text-[var(--foreground)]">Aditya</span>{" "}
                <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Jaiswal
                </span>
              </h1>
            </Link>
          </motion.div>

          <ul className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <Link
                  href={`#${item}`}
                  onClick={() => setActive(item)}
                  className={`capitalize text-sm font-medium transition-all duration-300 ${
                    active === item
                      ? "text-purple-400"
                      : "text-[var(--foreground)]/60 hover:text-[var(--foreground)]"
                  }`}
                >
                  {item}

                  {active === item && (
                    <motion.div
                      layoutId="underline"
                      className="absolute left-0 -bottom-2 h-[2px] w-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                    />
                  )}
                </Link>
              </motion.li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <motion.a
              href="/resume.pdf"
              target="_blank"
              whileHover={{ scale: 1.05 }}
              className="hidden md:flex px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white text-sm font-semibold items-center gap-2 shadow-lg shadow-purple-500/30"
            >
              <Download size={14} />
              Resume
            </motion.a>

            <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 rounded-full border border-[var(--border)] bg-[var(--card)] flex items-center justify-center text-[var(--foreground)] hover:bg-[var(--card-hover)] transition-all"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Moon size={16} /> : <Sun size={16} />}
            </motion.button>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-[var(--foreground)]"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden mt-2 bg-[var(--card)] backdrop-blur-xl border border-[var(--border)] rounded-2xl p-6 shadow-xl"
            >
              <ul className="flex flex-col gap-5">
                {navItems.map((item) => (
                  <li key={item}>
                    <Link
                      href={`#${item}`}
                      onClick={() => {
                        setActive(item);
                        setMenuOpen(false);
                      }}
                      className={`capitalize text-lg transition-all ${
                        active === item
                          ? "text-purple-400"
                          : "text-[var(--foreground)]/60"
                      }`}
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>

              <a
                href="/resume.pdf"
                target="_blank"
                className="mt-6 w-full block text-center py-3 rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-semibold"
              >
                Download Resume
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
