import { useState } from "react";
import "../../styles/Contact.css";
import { submitContact } from "../../Services/contactService";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  // Validation rules
  const isNameValid = form.name.trim().length >= 3;
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);
  const isMessageValid = form.message.trim().length >= 10;

  const isFormValid = isNameValid && isEmailValid && isMessageValid;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleBlur = (e) => {
    setTouched({ ...touched, [e.target.name]: true });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormValid) return;

    try {
      setSubmitted(true);
      setError("");

      await submitContact(form);

      // ✅ Clear form after success
      setForm({ name: "", email: "", message: "" });
      setTouched({});
    } catch (err) {
      setError(err.message || "Failed to send message");
    } finally {
      setSubmitted(false);
    }
  };

  return (
    <section className="contact">
      <div className="contact__container">
        {/* HEADER */}
        <header className="contact__header">
          <h2>Contact Us</h2>
          <p>
            Have a question, feedback, or partnership inquiry? We’d love to hear
            from you.
          </p>
        </header>

        <div className="contact__grid">
          {/* FORM */}
          <form className="contact__form" onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                onBlur={handleBlur}
                aria-invalid={touched.name && !isNameValid}
                aria-describedby="name-error"
              />
              {touched.name && !isNameValid && (
                <span id="name-error" className="error">
                  Name must be at least 3 characters
                </span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                onBlur={handleBlur}
                aria-invalid={touched.email && !isEmailValid}
                aria-describedby="email-error"
              />
              {touched.email && !isEmailValid && (
                <span id="email-error" className="error">
                  Enter a valid email address
                </span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={form.message}
                onChange={handleChange}
                onBlur={handleBlur}
                aria-invalid={touched.message && !isMessageValid}
                aria-describedby="message-error"
              />
              {touched.message && !isMessageValid && (
                <span id="message-error" className="error">
                  Message must be at least 10 characters
                </span>
              )}
            </div>
  
              {error && <p className="error">{error}</p>}

            <button
              type="submit"
              className="order-now"
              disabled={!isFormValid || submitted}
              aria-disabled={!isFormValid || submitted}
            >
              {submitted ? "Message Sent ✓" : "Send Message"}
            </button>
          </form>

          {/* INFO */}
          <div className="contact__info">
            <h3>Reach Us</h3>

            <p>
              <strong>DevEats Food Delivery</strong>
            </p>
            <p>Email: support@DevEats.com</p>
            <p>Phone: +91 98765 43210</p>
            <p>Lucknow, India</p>
          </div>
        </div>
      </div>
    </section>
  );
}
