import { useState } from "react";
import { registerUser } from "../../Services/authService";
import {
  isSafeText,
  validateEmail,
  validatePassword,
} from "../../utils/Validators";

export default function SignupForm({ onSuccess }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    // Name
    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    } else if (!isSafeText(form.name)) {
      newErrors.name = "Name contains invalid characters";
    }

    // Email
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(form.email)) {
      newErrors.email = "Invalid email address";
    } else if (!isSafeText(form.email)) {
      newErrors.email = "Email contains invalid characters";
    }

    // Password
    if (!form.password.trim()) {
      newErrors.password = "Password is required";
    } else if (!validatePassword(form.password)) {
      newErrors.password = "Password must be at least 8 characters";
    } else if (!isSafeText(form.password)) {
      newErrors.password = "Password contains invalid characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess("");

    if (!validateForm()) return;

    setLoading(true);
    try {
      await registerUser(form);
      setSuccess("Account created! Redirecting to login...");

      setTimeout(() => onSuccess(), 1200);
    } catch (err) {
      setErrors({ form: err.message || "Signup failed" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Name"
        value={form.name}
        onChange={(e) =>
          setForm({ ...form, name: e.target.value })
        }
      />
      {errors.name && <p className="error">{errors.name}</p>}

      <input
        placeholder="Email"
        type="email"
        value={form.email}
        onChange={(e) =>
          setForm({ ...form, email: e.target.value })
        }
      />
      {errors.email && <p className="error">{errors.email}</p>}

      <input
        placeholder="Password"
        type="password"
        value={form.password}
        onChange={(e) =>
          setForm({ ...form, password: e.target.value })
        }
      />
      {errors.password && (
        <p className="error">{errors.password}</p>
      )}

      {errors.form && <p className="error">{errors.form}</p>}
      {success && <p className="success">{success}</p>}

      <button className="order-now" disabled={loading}>
        {loading ? "Creating..." : "Create Account"}
      </button>
    </form>
  );
}
