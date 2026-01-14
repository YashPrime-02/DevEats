import { useEffect, useRef, useState } from "react";
import "../../styles/About.css";

export default function About() {
  const timelineRef = useRef(null);
  const itemRefs = useRef([]);
  const [progress, setProgress] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;

      const timelineRect = timelineRef.current.getBoundingClientRect();
      const timelineTop = timelineRect.top + window.scrollY;
      const timelineHeight = timelineRef.current.scrollHeight;
      const scrollY = window.scrollY + window.innerHeight / 2;

      const scrolled = scrollY - timelineTop;
      const percent = scrolled / timelineHeight;
      const clamped = Math.min(Math.max(percent, 0), 1);

      setProgress(clamped);

      itemRefs.current.forEach((item, index) => {
        if (!item) return;
        const rect = item.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.55 && rect.bottom > 0) {
          setActiveIndex(index);
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className="about"
      aria-labelledby="about-heading"
      aria-describedby="about-description"
    >
      {/* ================= HEADER ================= */}
      <div className="about__header">
        <h2 id="about-heading" className="about__title">
          About{" "}
          <span
            className="about__brand"
            aria-live="polite"
            aria-label="YOMATO in multiple languages"
          >
            <span>YOMATO</span>
            <span>योमाटो</span>
            <span>யோமாடோ</span>
            <span>ヨマト</span>
            <span>요마토</span>
            <span>YOMATO</span>
          </span>
        </h2>

        <p className="about__subtitle">
          Built for speed. Designed for reliability. Powered by technology.
        </p>

        <p id="about-description" className="about__description">
          YOMATO is a technology-driven food delivery platform designed to
          remove friction from everyday dining. From intelligent restaurant
          discovery to precision-driven logistics, we focus on delivering
          consistency, transparency, and trust at every step of the journey.
        </p>
      </div>

      {/* ================= TIMELINE ================= */}
      <div
        className="timeline"
        ref={timelineRef}
        role="list"
        aria-label="Company growth timeline"
      >
        <div className="timeline__line" aria-hidden="true" />

        {/* Moving progress indicator */}
        <span
          className="timeline__ball"
          aria-hidden="true"
          style={{
            top: `${progress * 100}%`,
            transform: "translate(-50%, -50%)",
          }}
        />

        {[
          {
            title: "2019 — The Vision",
            text: "YOMATO was conceived to solve a fundamental problem: food delivery should be predictable, transparent, and reliable. We began by designing systems that prioritize accuracy over speed alone.",
          },
          {
            title: "2020 — First Launch",
            text: "Our first launch focused on a curated restaurant network and controlled delivery zones, ensuring quality experiences rather than uncontrolled expansion.",
          },
          {
            title: "2021 — Expansion & Trust",
            text: "As demand grew, we expanded into multiple cities while strengthening vendor onboarding, delivery partner training, and customer support systems.",
          },
          {
            title: "2022 — Smart Infrastructure",
            text: "We introduced real-time order tracking, intelligent routing algorithms, and automated issue resolution to reduce delays and increase delivery accuracy.",
          },
          {
            title: "2023 — Customer-First Platform",
            text: "With millions of successful deliveries, YOMATO evolved into a platform trusted for consistency, data-driven operations, and user-centric design.",
          },
        ].map((item, index) => (
          <article
            key={index}
            ref={(el) => (itemRefs.current[index] = el)}
            className={`timeline__item ${
              activeIndex === index ? "active" : ""
            }`}
            role="listitem"
            tabIndex={0}
            aria-current={activeIndex === index ? "true" : "false"}
            aria-label={item.title}
          >
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
