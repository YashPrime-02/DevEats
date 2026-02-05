import React, { useState, useEffect } from "react";
import "../../styles/Header.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useCart } from "../../context/CartContext";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const { user, logout } = useAuth();
  const { cart } = useCart();

  const cartCount = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  // Scroll effects
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      setScrollProgress((scrollTop / docHeight) * 100);
      setScrolled(scrollTop > 80);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Theme load
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.body.classList.add("dark");
      setDarkMode(true);
    }
  }, []);

  const toggleTheme = () => {
    document.body.classList.toggle("dark");
    const isDark = document.body.classList.contains("dark");
    setDarkMode(isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  };

  return (
    <>
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} />

      <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
        <div className="navbar__container">
          <Link to="/" className="navbar__logo">
            DevEats Food Delivery
          </Link>

          <div className="navbar__actions">
            <button className="theme-toggle" onClick={toggleTheme}>
              {darkMode ? "☀️" : "🌙"}
            </button>

            {!user ? (
              <Link to="/auth" className="btn_red">
                Login / Sign Up
              </Link>
            ) : (
              <>
                {user.role === "admin" && (
                  <Link to="/admin" className="btn_red">
                    Admin
                  </Link>
                )}
                <button className="btn_red" onClick={logout}>
                  Logout
                </button>
              </>
            )}

            <Link to="/cart">
              <button className="cart-button">
                🛒
                {cartCount > 0 && (
                  <span className="cart-badge">{cartCount}</span>
                )}
              </button>
            </Link>

            <button
              className={`navbar__toggle ${open ? "active" : ""}`}
              onClick={() => setOpen(!open)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>

          <nav className={`navbar__menu ${open ? "open" : ""}`}>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/orders">View Order History</Link>
            <Link to="/menu" className="order-now">
              Order Now
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
}
