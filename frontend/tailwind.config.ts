import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx}", // ✅ IMPORTANT (covers everything)
  ],

  theme: {
    extend: {
      colors: {
        /* 🌿 Brand */
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        accent: "var(--accent)",

        /* 🌍 Base */
        background: "var(--background)",
        foreground: "var(--foreground)",

        /* ✨ TEXT SYSTEM */
        heading: "var(--text-heading)",
        body: "var(--text-body)",
        muted: "var(--text-muted)",

        /* 🔥 Inverse */
        "heading-inverse": "var(--text-heading)",
        "body-inverse": "var(--text-body)",
        "muted-inverse": "var(--text-muted)",
      },

      fontFamily: {
        heading: ["var(--font-heading)", "cursive"],
        body: ["var(--font-body)", "sans-serif"],
      },

      borderRadius: {
        xl: "0.75rem",
        "2xl": "1rem",
      },

      boxShadow: {
        soft: "0 4px 20px rgba(0,0,0,0.05)",
        card: "0 8px 30px rgba(0,0,0,0.08)",
      },
    },
  },

  plugins: [],
};

export default config;