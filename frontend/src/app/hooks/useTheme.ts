"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

export default function useTheme() {
  const [theme, setTheme] = useState<Theme | null>(null); // 👈 start as null

  // ✅ Initialize theme (runs once)
  useEffect(() => {
    const saved = localStorage.getItem("theme") as Theme | null;

    const initialTheme =
      saved ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light");

    setTheme(initialTheme);
    document.documentElement.classList.toggle("dark", initialTheme === "dark");
  }, []);

  // ✅ Toggle theme safely
  const toggleTheme = () => {
    setTheme((prev) => {
      if (!prev) return "light";

      const newTheme = prev === "light" ? "dark" : "light";

      localStorage.setItem("theme", newTheme);
      document.documentElement.classList.toggle(
        "dark",
        newTheme === "dark"
      );

      return newTheme;
    });
  };

  return { theme, toggleTheme };
}