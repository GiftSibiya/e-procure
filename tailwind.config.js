/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        surface: {
          base: "#060d1f",
          primary: "#0d1629",
          secondary: "#112240",
          elevated: "#1a2d48",
        },
        border: {
          subtle: "#1e3a5f",
          default: "#2d4f78",
          accent: "#3d6b9e",
        },
        accent: {
          jade: "#06d6a0",
          "jade-light": "#2ee8b8",
          amber: "#f59e0b",
          "amber-light": "#fbbf24",
          sky: "#38bdf8",
        },
        status: {
          active: "#22c55e",
          pending: "#f59e0b",
          closed: "#64748b",
          error: "#f87171",
        },
        content: {
          primary: "#e8f0fe",
          secondary: "#94a3b8",
          muted: "#4a6080",
          inverse: "#060d1f",
        },
      },
      fontFamily: {
        display: ["Syne", "sans-serif"],
        body: ["DM Sans", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      animation: {
        "fade-up": "fadeUp 0.5s ease-out forwards",
        "fade-in": "fadeIn 0.4s ease-out forwards",
        "slide-in": "slideIn 0.4s ease-out forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideIn: {
          "0%": { opacity: "0", transform: "translateX(-16px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};
