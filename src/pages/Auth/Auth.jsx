import { useState } from "react";
import LoginForm from "./LoginForm.jsx";
import SignupForm from "./SignupForm.jsx";
import "../../styles/auth.css"; 


export default function Auth() {
const [mode, setMode] = useState("login");
console.log("API URL:", import.meta.env.VITE_API_URL);

  return (
    <section className="auth-page">
      <div className="auth-card">
        {/* Toggle */}
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

        {/* Forms */}
        {mode === "login" ? <LoginForm /> : <SignupForm />}
      </div>
    </section>
  );
}
