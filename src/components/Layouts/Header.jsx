import React, { useState, useEffect } from "react";
import "../../styles/Header.css";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Load saved theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.body.classList.add("dark");
      setDarkMode(true);
    }
  }, []);

  // Toggle theme
  const toggleTheme = () => {
    document.body.classList.toggle("dark");
    const isDark = document.body.classList.contains("dark");
    setDarkMode(isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  };

  return (
    <header className="navbar">
      <div className="navbar__container">
        {/* Logo */}
        <div className="navbar__logo">YOMATO Food Delivery</div>

        {/* Right controls */}
        <div className="navbar__actions">
          {/* Theme toggle */}
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>

          {/* Hamburger */}
          <button
            className={`navbar__toggle ${open ? "active" : ""}`}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {/* Menu */}
        <nav className={`navbar__menu ${open ? "open" : ""}`}>
          <a href="/">Home</a>
          <a href="/menu">Menu</a>
          <a href="/offers">Offers</a>
          <a href="/contact">Contact</a>
          <a href="/order" className="order-now">
            Order Now
          </a>
        </nav>
      </div>
    </header>
  );
}
