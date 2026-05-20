"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Menu, X, Moon } from "lucide-react";
import { useState } from "react";

const navItems = [
  "home",
  "about",
  "skills",
  "projects",
  "contact",
];

export default function Header() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-white/10 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <nav className="flex items-center justify-between h-20">
          
          {/* Logo Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-purple-500 shadow-lg shadow-purple-500/30">
              <Image
                src="/profile.jpg"
                alt="Profile"
                fill
                className="object-cover"
              />
            </div>

            <h1 className="text-2xl font-bold">
              <span className="text-white">Aditya</span>{" "}
              <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Jaiswal
              </span>
            </h1>
          </motion.div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-10">
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
                      : "text-gray-300 hover:text-white"
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

          {/* Right Section */}
          <div className="flex items-center gap-4">
            
            {/* Resume Button */}
            <button className="hidden md:flex px-5 py-2 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white text-sm font-semibold hover:scale-105 transition-all duration-300 shadow-lg shadow-purple-500/30">
              Resume
            </button>

            {/* Theme Toggle */}
            <button className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white hover:bg-white/10 transition-all">
              <Moon size={18} />
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-white"
            >
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-4 bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6"
          >
            <ul className="flex flex-col gap-6">
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
                        : "text-gray-300"
                    }`}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>

            <button className="mt-6 w-full py-3 rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-semibold">
              Download Resume
            </button>
          </motion.div>
        )}
      </div>
    </header>
  );
}