import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0E1117",
        foreground: "#F0EDE8",
        gold: {
          DEFAULT: "#C9A96E",
          light: "#DEC08C",
          dark: "#A88348",
        },
        botanical: {
          DEFAULT: "#5C7A5E",
          light: "#7A9E7C",
          dark: "#3E5540",
        },
        parchment: {
          DEFAULT: "#F0EDE8",
          dim: "#C8C4BC",
          muted: "#8A8580",
        },
        surface: {
          DEFAULT: "#161B22",
          raised: "#1E252F",
          high: "#252D38",
        },
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-jost)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-2xl": ["clamp(3.5rem, 8vw, 7rem)", { lineHeight: "0.95", letterSpacing: "-0.02em" }],
        "display-xl": ["clamp(2.5rem, 6vw, 5rem)", { lineHeight: "1", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(2rem, 4vw, 3.5rem)", { lineHeight: "1.05", letterSpacing: "-0.015em" }],
        "display-md": ["clamp(1.5rem, 3vw, 2.5rem)", { lineHeight: "1.1", letterSpacing: "-0.01em" }],
      },
      spacing: {
        "section": "clamp(5rem, 10vw, 9rem)",
      },
      animation: {
        "fade-up": "fadeUp 0.8s ease forwards",
        "shimmer": "shimmer 2s linear infinite",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          from: { backgroundPosition: "-200% 0" },
          to: { backgroundPosition: "200% 0" },
        },
      },
      borderColor: {
        DEFAULT: "rgba(201, 169, 110, 0.2)",
      },
    },
  },
  plugins: [],
};

export default config;
