import "../../styles/LegalPages.css";

export default function Terms() {
  return (
    <section className="legal">
      <div className="legal__container">
        <header className="legal__header">
          <h1>Terms & Conditions</h1>
          <p>Please read these terms carefully</p>
        </header>

        <div className="legal__content">
          <section>
            <h2>1. Service Usage</h2>
            <p>
              By accessing DevEats, you agree to use our platform only for lawful
              food ordering purposes.
            </p>
          </section>

          <section>
            <h2>2. Orders & Payments</h2>
            <p>
              All orders placed are subject to availability and confirmation.
              Prices may change without prior notice.
            </p>
          </section>

          <section>
            <h2>3. Cancellations & Refunds</h2>
            <p>
              Once an order is confirmed, cancellation may not be possible.
              Refunds are processed as per our refund policy.
            </p>
          </section>

          <section>
            <h2>4. Liability</h2>
            <p>
              DevEats shall not be held responsible for delays caused by external
              factors beyond our control.
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}
