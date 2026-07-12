import { useState } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar({ darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className={`sticky top-0 backdrop-blur-md z-50 border-b transition-colors ${
        darkMode
          ? "bg-slate-900/70 border-slate-800 text-white"
          : "bg-white/70 border-gray-200 text-gray-900"
      }`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <a
          href="#"
          className="text-lg font-bold tracking-tight hover:opacity-80 transition"
        >
          Abdoul Karim Ba
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-secondary hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle dark mode"
            className="flex h-9 w-9 items-center justify-center rounded-full border
                       border-gray-300 dark:border-slate-700 text-secondary
                       transition-all duration-300 hover:border-accent hover:text-accent
                       hover:rotate-12"
          >
            {darkMode ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            className="flex h-9 w-9 items-center justify-center rounded-full border
                       border-gray-300 dark:border-slate-700 text-secondary md:hidden"
          >
            {menuOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div
          className={`md:hidden border-t px-6 py-4 flex flex-col gap-4 text-sm font-medium ${
            darkMode ? "border-slate-800" : "border-gray-200"
          }`}
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-secondary hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
