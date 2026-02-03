import { useState } from "react";
import { registerUser } from "../../Services/authService";

export default function SignupForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await registerUser(form);
    setSuccess("Account created! Please login.");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Name" onChange={(e) => setForm({ ...form, name: e.target.value })} required />
      <input placeholder="Email" type="email" onChange={(e) => setForm({ ...form, email: e.target.value })} required />
      <input placeholder="Password" type="password" onChange={(e) => setForm({ ...form, password: e.target.value })} required />

      {success && <p className="success">{success}</p>}

      <button className="order-now">Create Account</button>
    </form>
  );
}
