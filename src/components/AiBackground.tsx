"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "./ThemeProvider";

export default function AiBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const draw = () => {
      time += 0.003;
      resize();

      const w = canvas.width;
      const h = canvas.height;
      const isDark = theme === "dark";

      const c1 = isDark ? "rgba(59,130,246," : "rgba(59,130,246,";
      const c2 = isDark ? "rgba(168,85,247," : "rgba(168,85,247,";
      const c3 = isDark ? "rgba(6,182,212," : "rgba(6,182,212,";

      ctx.clearRect(0, 0, w, h);

      const gridSize = 60;
      ctx.strokeStyle = isDark ? "rgba(255,255,255,0.02)" : "rgba(0,0,0,0.03)";
      ctx.lineWidth = 0.5;

      for (let x = 0; x <= w; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }
      for (let y = 0; y <= h; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }

      const orbs = [
        { x: w * 0.2, y: h * 0.3, r: 300, c: c1, speed: 0.5 },
        { x: w * 0.8, y: h * 0.6, r: 350, c: c2, speed: 0.7 },
        { x: w * 0.5, y: h * 0.8, r: 250, c: c3, speed: 0.4 },
        { x: w * 0.1, y: h * 0.7, r: 200, c: c2, speed: 0.6 },
        { x: w * 0.9, y: h * 0.2, r: 280, c: c1, speed: 0.3 },
      ];

      orbs.forEach((orb, i) => {
        const offsetX = Math.sin(time * orb.speed + i) * 60;
        const offsetY = Math.cos(time * orb.speed * 0.7 + i * 1.5) * 40;
        const gradient = ctx.createRadialGradient(
          orb.x + offsetX, orb.y + offsetY, 0,
          orb.x + offsetX, orb.y + offsetY, orb.r
        );
        gradient.addColorStop(0, orb.c + "0.08)");
        gradient.addColorStop(0.5, orb.c + "0.04)");
        gradient.addColorStop(1, orb.c + "0)");
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, w, h);
      });

      if (isDark) {
        const dataGrad = ctx.createLinearGradient(0, 0, w, h);
        dataGrad.addColorStop(0, "rgba(59,130,246,0.01)");
        dataGrad.addColorStop(0.5, "rgba(168,85,247,0.01)");
        dataGrad.addColorStop(1, "rgba(6,182,212,0.01)");
        ctx.fillStyle = dataGrad;
        ctx.fillRect(0, 0, w, h);
      }

      animationId = requestAnimationFrame(draw);
    };

    draw();
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
    />
  );
}
