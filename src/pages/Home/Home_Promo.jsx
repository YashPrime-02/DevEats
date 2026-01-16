import "../../styles/Home_Promo.css";
import friesImg from "../../assets/menu/ads-1.jpg";
import burgerImg from "../../assets/menu/ads-2.jpg";

export default function Home_Promo() {
  return (
    <section className="promo">
      <div className="promo__container">
        <div className="promo__card">
          <img src={friesImg} alt="Cheese Fries" />
          <div className="promo__content">
            <h3>GET YOUR FAVOURITE</h3>
            <h2>CHEESE FRIES</h2>
            
          </div>
        </div>

        <div className="promo__card">
          <img src={burgerImg} alt="Chicken Burger" />
          <div className="promo__content">
            <h3>GET YOUR FAVOURITE</h3>
            <h2>CHEESE BURGERS</h2>
            
          </div>
        </div>
      </div>
    </section>
  );
}
