import PromoImage from "../../assets/promotion/pro.png";
import "../../styles/Parallax.css";

export default function Parallax() {
  return (
    <>
      <section className="story-section">
        <div className="story-image">
          <img src={PromoImage} alt="People enjoying burgers" />
        </div>

        {/* RIGHT CONTENT */}
        <div className="story-content">
          <h2 className="story-title">
            NOTHING BRINGS PEOPLE TOGETHER LIKE A GOOD BURGER
          </h2>

          <p className="story-text">
            Crafted with passion and served fresh, our burgers are more than
            just meals — they’re moments shared with friends, family, and good
            vibes. Every bite is designed to bring people closer.
          </p>

          <ul className="story-list">
            <li>Fresh ingredients sourced daily for unbeatable taste</li>
            <li>Perfectly grilled patties with bold Indian flavors</li>
            <li>Made to order, served hot, and delivered fast</li>
          </ul>
        </div>
      </section>

       {/* {Background Parallax Effect} */}
       <section className="Parallax-bg"></section>

    </>
  );
}
