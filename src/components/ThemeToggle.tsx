"use client";
import { useEffect, useState } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

const ThemeToggle = () => {
  const [theme, setTheme] = useState("lemonade");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "lemonade";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "lemonade" ? "night" : "lemonade";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <button
      className="btn btn-sm btn-circle btn-primary"
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      {theme === "lemonade" ? (
        <MoonIcon className="h-5 w-5" />
      ) : (
        <SunIcon className="h-5 w-5" />
      )}
    </button>
  );
};

export default ThemeToggle;
