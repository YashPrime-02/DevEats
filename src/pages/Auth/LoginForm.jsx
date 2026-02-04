import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { loginUser } from "../../Services/authService";
import { useAuth } from "../../context/AuthContext";
import { validateEmail, isSafeText } from "../../utils/Validators";

export default function LoginForm() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(form.email)) {
      newErrors.email = "Invalid email format";
    } else if (!isSafeText(form.email)) {
      newErrors.email = "Invalid characters detected";
    }

    if (!form.password.trim()) {
      newErrors.password = "Password is required";
    } else if (!isSafeText(form.password)) {
      newErrors.password = "Invalid characters detected";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const res = await loginUser(form);
      login(res.token);

      const decoded = JSON.parse(atob(res.token.split(".")[1]));
      navigate(decoded.role === "admin" ? "/admin" : "/");
    } catch (err) {
      setErrors({ form: err.message || "Login failed" });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Email"
        type="email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      {errors.email && <p className="error">{errors.email}</p>}

      {/* Password field with monkey toggle */}
      <div className="password-field">
        <input
          placeholder="Password"
          type={showPassword ? "text" : "password"}
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <button
          type="button"
          className={`monkey-toggle ${showPassword ? "peek" : "hide"}`}
          aria-label={showPassword ? "Hide password" : "Show password"}
          onClick={() => setShowPassword((v) => !v)}
        >
          {showPassword ? "🐵" : "🙈"}
        </button>
      </div>

      {errors.password && <p className="error">{errors.password}</p>}
      {errors.form && <p className="error">{errors.form}</p>}

      <button className="btn_red">Login</button>
    </form>
  );
}
