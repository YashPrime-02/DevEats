import "../../styles/Disclaimer.css";

export default function Disclaimer() {
  return (
    <section className="disclaimer-page">
      <div className="disclaimer-card">
        <h1>Educational Use Disclaimer</h1>

        <p>
          This application is a <strong>learning-focused project</strong>{" "}
          developed to practice frontend and backend development concepts.
        </p>

        <p>
          Certain UI patterns, workflows, or features may be inspired by
          publicly available applications and references. This project does{" "}
          <strong>not</strong> intend to copy, replicate, or impersonate any
          real-world brand, product, or service.
        </p>

        <div className="disclaimer-points">
          <div>• No commercial intent</div>
          <div>• No revenue generation</div>
          <div>• No real user data misuse</div>
          <div>• Built purely for educational purposes</div>
        </div>

        <p className="disclaimer-note">
          All trademarks, brand names, and logos (if any resemblance exists)
          belong to their respective owners.
        </p>

        <p className="disclaimer-note">
          If you are a rights holder and have concerns, this project can be
          modified or removed upon request.
        </p>
      </div>
    </section>
  );
}
