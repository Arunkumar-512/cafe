"use client";

import { motion } from "framer-motion";
import useTheme from "@/app/hooks/useTheme";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle Theme"
      className={`
        relative w-14 h-7 rounded-full px-1 flex items-center
        transition-colors duration-500
        ${isDark ? "bg-[#2c2c2e]" : "bg-[#e5e5ea]"}
      `}
    >
      {/* Glow background */}
      <motion.div
        className="absolute inset-0 rounded-full"
        animate={{
          backgroundColor: isDark
            ? "rgba(250, 204, 21, 0.25)"
            : "rgba(251, 146, 60, 0.25)",
        }}
        transition={{ duration: 0.5 }}
      />

      {/* Toggle Knob */}
      <motion.div
        className="relative z-10 w-6 h-6 rounded-full bg-white shadow-md flex items-center justify-center"
        animate={{ x: isDark ? 26 : 0 }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
        }}
      >
        {/* ICON (NO ANIMATION ON d!) */}
        {isDark ? (
          // 🌙 Moon
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path
              d="M21 12.79A9 9 0 1111.21 3c0 .28 0 .56.03.83A7 7 0 0021 12.79z"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : (
          // ☀️ Sun
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 4V2M12 22v-2M4 12H2m20 0h-2M5 5l-1.5-1.5M20.5 20.5 19 19M5 19l-1.5 1.5M20.5 3.5 19 5M12 8a4 4 0 100 8 4 4 0 000-8z"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </motion.div>
    </button>
  );
}