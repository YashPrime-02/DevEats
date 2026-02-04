import { useState } from "react";
import "../../styles/FAQ.css";

const FAQ_DATA = [
  {
    question: "How do I place an order?",
    answer:
      "Browse the menu, add items to your cart, and proceed to checkout to place your order.",
  },
  {
    question: "What payment methods are accepted?",
    answer:
      "We accept UPI, credit cards, debit cards, and popular digital wallets.",
  },
  {
    question: "Can I cancel my order?",
    answer:
      "Orders can be cancelled only before preparation begins. Once prepared, cancellation may not be possible.",
  },
  {
    question: "How long does delivery take?",
    answer:
      "Delivery usually takes between 30–45 minutes depending on your location and order volume.",
  },
  {
    question: "How can I contact customer support?",
    answer:
      "You can reach us via the Contact page or email us at support@DevEats.com.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="legal">
      <div className="legal__container">
        <header className="legal__header">
          <h1>Frequently Asked Questions</h1>
          <p>Click on a question to view the answer</p>
        </header>

        <div className="legal__content">
          {FAQ_DATA.map((item, index) => (
            <div
              key={index}
              className={`faq-item ${
                activeIndex === index ? "active" : ""
              }`}
            >
              <button
                className="faq-question"
                onClick={() => toggleFAQ(index)}
                aria-expanded={activeIndex === index}
              >
                {item.question}
                <span className="faq-icon">⌄</span>
              </button>

              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
