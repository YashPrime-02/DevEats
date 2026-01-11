import React from "react";
import Burger from "../../assets/hero/hero-2.png";
import "../../styles/Hero.css";
import Hero from "../../assets/hero/hero-1.jpg";

export default function Section1() {
  return (
    <section className="hero" style={{ backgroundImage: `url(${Hero})` }}>
      {" "}
      <div className="hero__container">
        <div className="hero__grid">
          {/* LEFT – IMAGE */}
          <div className="hero__media">
            <div className="hero__image-wrapper">
              <img
                src={Burger}
                alt="New Burger With Onion"
                className="hero__image"
              />

              {/* Price Badge */}
              <div className="hero__price-badge">
                <span>ONLY</span>
                <strong>$6.99</strong>
              </div>
            </div>
          </div>

          {/* RIGHT – CONTENT */}
          <div className="hero__content">
            <h1>
              NEW <br />
              <span>BURGER</span>
            </h1>

            <h3>WITH ONION</h3>

            <p>
              Juicy beef patty layered with fresh lettuce, melted cheese, and
              crispy onion rings for the perfect bite.
            </p>

            <a href="/order" className="order-now">
              Order Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
