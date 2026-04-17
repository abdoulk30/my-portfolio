export default function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav
      className={`sticky top-0 backdrop-blur z-50 border-b transition-colors ${
        darkMode
          ? "bg-slate-900/80 border-gray-700 text-white"
          : "bg-white/80 border-gray-200 text-gray-900"
      }`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center p-5">

        <h1 className="text-xl font-semibold">
          Abdoul Karim Ba
        </h1>

        <div className="flex gap-6 text-sm">
          <a href="#about" className="hover:opacity-60">About</a>
          <a href="#projects" className="hover:opacity-60">Projects</a>
          <a href="#skills" className="hover:opacity-60">Skills</a>
          <a href="#contact" className="hover:opacity-60">Contact</a>
        </div>

        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`px-3 py-1 rounded-lg border transition ${
            darkMode
              ? "border-gray-600 hover:bg-white hover:text-black"
              : "border-gray-300 hover:bg-black hover:text-white"
          }`}
        >
          Toggle
        </button>

      </div>
    </nav>
  )
}