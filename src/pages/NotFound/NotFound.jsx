import { Link } from "react-router-dom";
import "../../styles/StatusPages.css";

export default function NotFound() {
  return (
    <section
      className="status-page"
      role="alert"
      aria-labelledby="notfound-heading"
    >
      <div className="status-page__card">
        <span className="status-page__icon error" aria-hidden="true">
          404
        </span>

        <h1 id="notfound-heading" className="status-page__title">
          We couldn’t find this page
        </h1>

        <p className="status-page__subtitle">
          The link you followed may be outdated or incorrect.
        </p>

        <p className="status-page__text">
          We’re sorry for the inconvenience. The page you’re trying to reach
          may have been moved, renamed, or is no longer available.  
          Please use one of the options below to continue browsing YOMATO.
        </p>

        <div className="status-page__actions">
          <Link to="/" className="status-page__btn primary">
            Return to Home
          </Link>

          <Link to="/menu" className="status-page__btn secondary">
            View Our Menu
          </Link>
        </div>
      </div>
    </section>
  );
}
