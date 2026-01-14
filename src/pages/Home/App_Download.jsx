import "../../styles/App_Download.css";
import phoneMockup from "../../assets/shop/e-shop.png";
import appStore from "../../assets/shop/appstore.png";
import playstore from "../../assets/shop/googleplay.png";
export default function App_Download() {
  return (
    <>
      <section className="app-download">
        <div className="app-download__container">
          {/* LEFT CONTENT */}
          <div className="app-download__content">
            <h2>
              Download Mobile App and <br /> Save up to 20%
            </h2>

            <p>
              Aliquam a augue suscipit, luctus neque purus ipsum and neque dolor
              primis libero tempus, blandit varius.
            </p>

            <div className="app-download__buttons">
              <img src={appStore} alt="Download on App Store" />
              <img src={playstore} alt="Get it on Google Play" />
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="app-download__image">
            <img src={phoneMockup} alt="Food delivery mobile app" />
          </div>
        </div>
      </section>
    </>
  );
}
