import "../../styles/Brand.css";
import Brand1 from "../../assets/brands/brand-11.png";
import Brand2 from "../../assets/brands/brand-12.png";
import Brand3 from "../../assets/brands/brand-13.png";
import Brand4 from "../../assets/brands/brand-14.png";
import Brand5 from "../../assets/brands/brand-15.png";
import Brand6 from "../../assets/brands/brand-16.png";
import Brand7 from "../../assets/brands/brand-17.png";

const brands = [Brand1, Brand2, Brand3, Brand4, Brand5, Brand6, Brand7];

export default function Brand() {
  return (
    <section className="brand">
      <div className="brand__container">
        <h2 className="brand__title">Brands That Trust Us</h2>

        <div className="brand__carousel">
          <div className="brand__track">
            {[...brands, ...brands].map((logo, index) => (
              <div className="brand__item" key={index}>
                <img src={logo} alt="Partner brand logo" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
