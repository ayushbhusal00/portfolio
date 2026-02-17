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
      colors: {
        // Custom text color tokens
        "text-base": "var(--text-base)",
        "text-subtle": "var(--text-subtle, #fafafa70)",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        // Custom base and border tokens
        "bg-base": "var(--bg-base)",
        "bg-subtle": "var(--bg-subtle)",
        "border-base": "var(--border-base)",

        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        rotateBg: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        rotateBg: "rotateBg 18s linear infinite",
      },
    },
    boxShadow: {
      "elevation-card-rest":
        "0 1px 2px rgba(0,0,0,0.08), 0 0 0 1px rgba(0,0,0,0.04)",
      "elevation-card-hover":
        "0 4px 12px rgba(0,0,0,0.12), 0 0 0 1px rgba(0,0,0,0.06)",
    },
  },
  plugins: [require("tailwindcss-animate")],
  darkMode: ["class", "class"],
};
export default config;
