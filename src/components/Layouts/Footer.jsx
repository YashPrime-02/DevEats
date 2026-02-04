import "../../styles/Footer.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

export default function Footer() {
  // Scroll state
  const [visible, setVisible] = useState(false);

  // Scroll to top
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Scroll listener
  const listenToScroll = () => {
    const minHeight = 250;
    const scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;

    setVisible(scrollTop > minHeight);
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", listenToScroll);
    };
  }, []);

  return (
    <>
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
            <Link to="/">Home</Link>
            <Link to="/menu">Explore Full Menu</Link>
            <Link to="/About">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/disclaimer">Disclaimer</Link>
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
              <Link to="/privacy">Privacy Policy</Link >
              <span></span>
              <Link to="/terms">Terms & Conditions</Link >
              <span></span>
              <Link to="/faq">FAQ</Link >
            </div>

            {/* Right copyright */}
            <div className="footer__copyright">
              © {new Date().getFullYear()} YOMATO Food Delivery. All rights
              reserved.
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll To Top  */}
      {visible && (
        <div className="scroll_top" onClick={scrollTop}>
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAACZ0lEQVR4nO2aS4sTQRSFb3Q0g7gNXedUQiu2m6zEKIIgCILgQhBcCKKigqALmZW4cuFuBEdX6s6dKxFhwNdfEfwDPohPRscnJYkUw0yn0hk7/bgf1Cp1q+p8RVfS3RFRFEVRFEVR8sNau5PkCwB9AO9JPoqiaLvUAZK7SL4m+dtvAN4ZY/ZIlQGwG8DbleE9CX1r7T6pIsaYvW6X1wrvSXCXxH6pEgAOkPw4KrzXPpM8JFXAWnuQ5Kcxwg/bFwCHpcwYY44AWMoQfng5fANwTMoIyaMAvmYN70swxhyXMkHyBIDlScN77Ye19oyUAQAnSX5fx/D/JJA8L0UGwAWSP/9D+GH7BeCyFBEAc26BgTuZ5TNfwpwUCZJXAnfwOYB7KQfeHQCLgWNdkyIA4Grgaf4kjuNZAAspfRa63e5mko8DJcxPO/z1wPCLSZI0BzWpAlyfXq+3CcDDQAk3phKe5KXABT4QkRlP2kgBA2ZcbeAcF/POv5Hkh4Cdv+/6+oVjCPg7jxsjYJ6+iGzILX2n09kRsKi7ItJYWTumAEfDjTVqvlwfqMRxPDvix87t1cJnFOBouDFT6paHZ0xuALiV5VDKKCD10AVwU/ImSZKmm9i723OPuc6OqptEgIPkOZJvBv2X3Bpy330f95XVbretBDKpgAENa23bzS1lA+sjoLxABUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFQAVABUjVgQpAvQWQnC/sy848MMacXkuAMeaUVB0AWwC8XEXAq1artVXqQBRF20g+c6+0Bn+memqMiaVuJEnSnOpbHUVRFEVRpM78ASH/BXoUyoTTAAAAAElFTkSuQmCC"
            alt="up"
          ></img>
        </div>
      )}
    </>
  );
}
