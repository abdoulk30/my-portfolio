/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // ✅ ADD THIS
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '"Plus Jakarta Sans"',
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
      },
      colors: {
        // 🎨 Custom light mode palette (SaaS style)
        primaryBg: "#f5f7fb",
        cardLight: "#ffffff",
        borderLight: "#e5e7eb",
        textPrimary: "#111827",
        textSecondary: "#6b7280",
        accent: {
          DEFAULT: "#6d5bff",
          light: "#8b7bff",
          dark: "#5645e0",
        },
      },
      keyframes: {
        blob: {
          "0%, 100%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(20px, -30px) scale(1.08)" },
          "66%": { transform: "translate(-15px, 15px) scale(0.94)" },
        },
        fadeIn: {
          from: { opacity: "0", transform: "translateY(12px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        blob: "blob 12s infinite ease-in-out",
        "fade-in": "fadeIn 0.7s ease-out forwards",
      },
    },
  },
  plugins: [],
}