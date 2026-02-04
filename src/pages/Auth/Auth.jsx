import { useState } from "react";
import LoginForm from "./LoginForm.jsx";
import SignupForm from "./SignupForm.jsx";
import "../../styles/Auth.css";

export default function Auth() {
  const [mode, setMode] = useState("login");

  return (
    <section className="auth-page">
      <div className="auth-card">
        <h1 className="welcome-title">
          Welcome to YOMATO Food Delivary App
        </h1>

        {/* Toggle (STATIC — no animation here) */}
        <div className="auth-toggle">
          <button
            className={mode === "login" ? "active" : ""}
            onClick={() => setMode("login")}
          >
            Login
          </button>
          <button
            className={mode === "signup" ? "active" : ""}
            onClick={() => setMode("signup")}
          >
            Sign Up
          </button>
        </div>

        {/* Forms (ANIMATED — remounts on mode change) */}
        <div key={mode} className="auth-form-wrapper">
          {mode === "login" ? (
            <LoginForm />
          ) : (
            <SignupForm onSuccess={() => setMode("login")} />
          )}
        </div>
      </div>
    </section>
  );
}
