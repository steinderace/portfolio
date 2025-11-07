"use client";

import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

export default function DarkModeButton() {
  const [darkMode, setDarkMode] = useState(false);

  // Load theme from local storage
  useEffect(() => {
    const isDark = localStorage.getItem("theme") === "dark";
    setDarkMode(isDark);

    if (isDark) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  // Toggle theme
  const toggleTheme = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setDarkMode(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle dark mode"
      className={`
        rounded-2xl border-2 px-2 py-2 transition-colors duration-500
        border-bg-primary-dark bg-bg-primary text-text-primary  /* Light mode */
        hover:bg-bg-primary-dark hover:text-text-primary-dark
        dark:border-bg-primary dark:bg-bg-primary-dark  /* Dark mode */
        dark:hover:bg-bg-primary dark:hover:border-bg-primary-dark
        flex items-center justify-center
      `}
    >
      {darkMode ? (
        <Sun className="w-5 h-5 text-text-primary-dark transition-colors duration-50 hover:text-text-primary" />
      ) : (
        <Moon className="w-5 h-5 text-text-primary transition-colors duration-50 hover:text-text-primary-dark" />
      )}
    </button>
  );
}
