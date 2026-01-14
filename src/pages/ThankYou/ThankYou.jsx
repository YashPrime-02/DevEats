import "../../styles/StatusPages.css";
import { Link } from "react-router-dom";

export default function ThankYou() {
  return (
    <section
      className="status-page"
      role="status"
      aria-labelledby="thankyou-heading"
    >
      <div className="status-page__card">
        <span className="status-page__icon" aria-hidden="true">✓</span>

        <h1 id="thankyou-heading" className="status-page__title">
          Thank You for Your Purchase
        </h1>

        <p className="status-page__subtitle">
          Your order has been successfully placed.
        </p>

        <p className="status-page__text">
          We’re preparing your food with care and precision. You’ll receive
          updates as your order progresses, from preparation to delivery.
        </p>

        <div className="status-page__actions">
          <Link to="/menu" className="status-page__btn primary">
            Order More Food
          </Link>
          <Link to="/" className="status-page__btn secondary">
            Go to Home
          </Link>
        </div>
      </div>
    </section>
  );
}
