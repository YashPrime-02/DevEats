import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./App.css";
import { CartProvider } from "./context/CartContext";
import { AuthProvider } from "./context/AuthContext";

/* ===============================
   APPLY THEME BEFORE REACT LOADS
================================ */

// read saved theme
const savedTheme = localStorage.getItem("theme");

// apply class BEFORE React renders
if (savedTheme === "dark") {
  document.body.classList.add("dark");
} else {
  document.body.classList.remove("dark");
}

/* ===============================
   RENDER APP
================================ */

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </AuthProvider>
  </React.StrictMode>
);