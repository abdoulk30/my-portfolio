import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

export default function App() {

  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme === "dark" : true;
  });

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);


  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      // This updates the "bounce" area color in real-time
      root.style.backgroundColor = "#0f172a"; 
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      root.style.backgroundColor = "#f5f7fb";
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  useEffect(() => {
    // 1. Manually scroll to top
    window.scrollTo(0, 0);

    // 2. Tell the browser not to try and restore scroll position
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    
    // Optional: Reset it back to auto on unmount if you ever navigate away
    return () => {
      if ('scrollRestoration' in history) {
        history.scrollRestoration = 'auto';
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-primaryBg dark:bg-slate-900 transition-colors duration-300">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      
      <main className="text-gray-900 dark:text-white">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}