import React from "react";
import "../../styles/Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        {/* Brand */}
        <div className="footer__brand">
          <Link to="/" className="footer__brand-link">
            <h3>YOMATO Food Delivery</h3>
          </Link>

          <p>Cravings delivered at your doorstep.</p>

          <div className="footer__social">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>

            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <i className="fa-brands fa-facebook-f"></i>
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <i className="fa-brands fa-x-twitter"></i>
            </a>
          </div>
        </div>

        {/* Links */}
        <div className="footer__links">
          <h4>Explore</h4>
          <a href="/">Home</a>
          <Link to="/menu">Explore Full Menu</Link>
          <a href="/offers">Offers</a>
          <a href="/contact">Contact</a>
        </div>

        {/* Map */}
        <div className="footer__map">
          <h4>Visit Us</h4>

          <iframe
            title="Burger King Lucknow"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.527635699026!2d80.94876837537102!3d26.85063517668653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd3a6e0c9b3b%3A0x2f0c2b14dfda5b6c!2sBurger%20King!5e0!3m2!1sen!2sin!4v1700000000000"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          <a
            className="footer__map-link"
            href="https://www.google.com/maps/place/Burger+King/@26.8506351,80.9487684,17z"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open in Google Maps →
          </a>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="footer__bottom-container">
          {/* Left links */}
          <div className="footer__legal">
            <a href="/privacy">Privacy Policy</a>
            <span></span>
            <a href="/terms">Terms & Conditions</a>
            <span></span>
            <a href="/faq">FAQ</a>
          </div>

          {/* Right copyright */}
          <div className="footer__copyright">
            © {new Date().getFullYear()} YOMATO Food Delivery. All rights
            reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
