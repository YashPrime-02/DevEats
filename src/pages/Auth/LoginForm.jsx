import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { loginUser } from "../../Services/authService";
import { useAuth } from "../../context/AuthContext";

export default function LoginForm() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await loginUser(form);
      login(res.token);

      // 🔥 redirect based on role
      const decoded = JSON.parse(atob(res.token.split(".")[1]));
      navigate(decoded.role === "admin" ? "/admin" : "/");
    } catch (err) {
      setError(err.message || "Login failed");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Email"
        type="email"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        required
      />
      <input
        placeholder="Password"
        type="password"
        onChange={(e) => setForm({ ...form, password: e.target.value })}
        required
      />

      {error && <p className="error">{error}</p>}
      <button className="btn_red">Login</button>
    </form>
  );
}
