import type { Config } from "tailwindcss";

const config: Config = {
  fontFamily: {
    manrope: ["var(--font-manrope)", "sans-serif"],
  },
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "from-lime-to-emerald":
          "linear-gradient(to bottom right, #bef264, #10b981)",
        "from-red-to-rose":
          "linear-gradient(to bottom right, #fecaca, #f43f5e)",
        "from-amber-to-red":
          "linear-gradient(to bottom right, #fde68a, #ef4444)",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        lime: {
          200: "#d9f99d",
          500: "#84cc16", // Example color
        },
        purple: {
          200: "#e9d5ff",
          500: "#a855f7",
        },
        blue: {
          200: "#bfdbfe",
          500: "#3b82f6",
        },
        rose: {
          200: "#fecdd3",
          500: "#f43f5e",
        },
        red: {
          200: "#fecaca",
          500: "#ef4444",
        },
        amber: {
          200: "#fef3c7",
          500: "#f59e0b",
        },
        emerald: {
          200: "#10b981",
          500: "#10b981",
        },
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
export default config;
