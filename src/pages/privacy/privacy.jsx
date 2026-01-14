import "../../styles/LegalPages.css";

export default function Privacy() {
  return (
    <section className="legal">
      <div className="legal__container">
        <header className="legal__header">
          <h1>Privacy Policy</h1>
          <p>Last updated: January 2026</p>
        </header>

        <div className="legal__content">
          <section>
            <h2>1. Information We Collect</h2>
            <p>
              We collect personal information such as name, email address,
              contact number, and delivery details when you place an order or
              contact us.
            </p>
          </section>

          <section>
            <h2>2. How We Use Your Data</h2>
            <ul>
              <li>To process food orders</li>
              <li>To improve our services</li>
              <li>To communicate updates and offers</li>
            </ul>
          </section>

          <section>
            <h2>3. Data Security</h2>
            <p>
              We use industry-standard security measures to protect your
              personal information from unauthorized access.
            </p>
          </section>

          <section>
            <h2>4. Third-Party Services</h2>
            <p>
              We may share limited data with payment gateways and delivery
              partners strictly for order fulfillment.
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}
