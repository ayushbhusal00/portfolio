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
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        lime: {
          "200": "#d9f99d",
          "500": "#84cc16",
        },
        purple: {
          "200": "#e9d5ff",
          "500": "#a855f7",
        },
        blue: {
          "200": "#bfdbfe",
          "500": "#3b82f6",
        },
        rose: {
          "200": "#fecdd3",
          "500": "#f43f5e",
        },
        red: {
          "200": "#fecaca",
          "500": "#ef4444",
        },
        amber: {
          "200": "#fef3c7",
          "500": "#f59e0b",
        },
        emerald: {
          "200": "#10b981",
          "500": "#10b981",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
