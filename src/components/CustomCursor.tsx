"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [hovered, setHovered] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const cursorXSpring = useSpring(cursorX, { stiffness: 500, damping: 28 });
  const cursorYSpring = useSpring(cursorY, { stiffness: 500, damping: 28 });

  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);
  const dotXSpring = useSpring(dotX, { stiffness: 800, damping: 50 });
  const dotYSpring = useSpring(dotY, { stiffness: 800, damping: 50 });

  const handleHoverStart = useCallback(() => setHovered(true), []);
  const handleHoverEnd = useCallback(() => setHovered(false), []);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
      dotX.set(e.clientX - 4);
      dotY.set(e.clientY - 4);
    };

    const onMouseEnter = () => setVisible(true);
    const onMouseLeave = () => setVisible(false);
    const onMouseDown = () => setClicked(true);
    const onMouseUp = () => setClicked(false);

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseenter", onMouseEnter);
    window.addEventListener("mouseleave", onMouseLeave);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);

    const attachHoverListeners = () => {
      document.querySelectorAll("a, button, input, textarea, [role='button']").forEach((el) => {
        el.addEventListener("mouseenter", handleHoverStart);
        el.addEventListener("mouseleave", handleHoverEnd);
      });
    };

    attachHoverListeners();
    const observer = new MutationObserver(attachHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseenter", onMouseEnter);
      window.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.querySelectorAll("a, button, input, textarea, [role='button']").forEach((el) => {
        el.removeEventListener("mouseenter", handleHoverStart);
        el.removeEventListener("mouseleave", handleHoverEnd);
      });
      observer.disconnect();
    };
  }, [handleHoverStart, handleHoverEnd]);

  if (typeof window === "undefined") return null;

  return (
    <>
      <motion.div
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          opacity: visible ? 1 : 0,
          scale: hovered ? 1.5 : clicked ? 0.8 : 1,
        }}
        className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[9999] rounded-full border border-purple-500/50 transition-all duration-150"
      />
      <motion.div
        style={{
          x: dotXSpring,
          y: dotYSpring,
          opacity: visible ? 1 : 0,
        }}
        className="fixed top-0 left-0 w-2 h-2 pointer-events-none z-[9999] rounded-full bg-purple-500"
      />
    </>
  );
}
