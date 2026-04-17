/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // ✅ ADD THIS
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 🎨 Custom light mode palette (SaaS style)
        primaryBg: "#f5f7fb",
        cardLight: "#ffffff",
        borderLight: "#e5e7eb",
        textPrimary: "#111827",
        textSecondary: "#6b7280",
      },
    },
  },
  plugins: [],
}