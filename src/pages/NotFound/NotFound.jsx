import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "../../styles/StatusPages.css";

export default function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/", { replace: true }); // ✅ Redirect to home after 10s
    }, 10000);

    return () => clearTimeout(timer); 
  }, [navigate]);

  return (
    <section
      className="status-page"
      role="alert"
      aria-labelledby="notfound-heading"
      aria-describedby="notfound-description"
    >
      <div className="status-page__card">
        <span className="status-page__icon error" aria-hidden="true">
          404
        </span>

        <h1 id="notfound-heading" className="status-page__title">
          Page Not Found
        </h1>

        <p
          id="notfound-description"
          className="status-page__subtitle"
        >
          The page you’re trying to reach doesn’t exist.
        </p>

        <p className="status-page__text">
          It may have been moved, renamed, or the link could be incorrect.
          You’ll be redirected to the home page automatically in{" "}
          <strong>10 seconds</strong>.
        </p>

        {/* <div className="status-page__actions">
          <Link to="/" className="status-page__btn primary">
            Go to Home Now
          </Link>

          <Link to="/menu" className="status-page__btn secondary">
            Explore Menu
          </Link>
        </div> */}
      </div>
    </section>
  );
}
