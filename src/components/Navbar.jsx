export default function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav className="sticky top-0 bg-slate-900/80 backdrop-blur border-b border-gray-700 z-50">

      <div className="max-w-6xl mx-auto flex justify-between items-center p-5">

        <h1 className="text-xl font-semibold">
          Abdoul Karim Ba
        </h1>

        <div className="flex gap-6 text-sm">
          <a href="#about" className="hover:text-gray-400">About</a>
          <a href="#projects" className="hover:text-gray-400">Projects</a>
          <a href="#skills" className="hover:text-gray-400">Skills</a>
          <a href="#contact" className="hover:text-gray-400">Contact</a>
        </div>

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="border px-3 py-1 rounded-lg hover:bg-white hover:text-black transition"
        >
          Toggle
        </button>

      </div>

    </nav>
  )
}