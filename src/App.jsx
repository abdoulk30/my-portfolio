import { useEffect, useState } from "react"

import AOS from "aos"
import "aos/dist/aos.css"

import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Contact from "./components/Contact"

export default function App() {
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true
    })
  }, [])

  return (
    <div className={darkMode ? "bg-slate-900 text-white min-h-screen" : "bg-gray-100 text-black min-h-screen"}>

      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <Hero />

      <About />

      <Projects />

      <Skills />

      <Contact />

    </div>
  )
}