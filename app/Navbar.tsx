"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <nav className="flex justify-between items-center p-4 border-b dark:border-gray-700">
      <h1 className="text-xl font-bold">My Portfolio</h1>
      <label className="ui-switch">
        <input
          type="checkbox"
          checked={darkMode}
          onChange={() => setDarkMode(!darkMode)}
        />
        <div className="slider">
          <div className="circle"></div>
        </div>
      </label>
    </nav>
  );
} 