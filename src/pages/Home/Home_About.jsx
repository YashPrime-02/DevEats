import "../../styles/Home_About.css";
import Pizza from '../../assets/about/pizza.png';
import Salad from '../../assets/about/salad.png';
import Bike from '../../assets/about/delivery-bike.png';

export default function About() {
  return (
    <>
      <section className="features">
       

        <div className="features__content">
          <div className="features__grid">
            <div className="feature">
              <div className="feature__icon"><img src={Pizza} alt="Pizza" /></div>
              <h3 className="feature__title">ORIGINAL</h3>
              <p className="feature__text">
                Made with our original recipes and signature sauces, delivering
                the classic taste that customers love every single time.
              </p>
            </div>

            <div className="feature">
              <div  className="feature__icon"><img src={Salad} alt="Salad" /></div>
              <h3  className="feature__title">QUALITY FOODS</h3>
              <p  className="feature__text">
                We use fresh, high-quality ingredients sourced daily to ensure
                consistent flavor, safety, and premium food standards.
              </p>
            </div>

            <div  className="feature">
              <div  className="feature__icon"><img src={Bike} alt="Bike" /></div>
              <h3  className="feature__title">FASTEST DELIVERY</h3>
              <p  className="feature__text">
                Our optimized delivery system ensures your food reaches you hot,
                fresh, and right on time without compromise.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section  className="menu-section">
        <div  className="menu-container">
          <div  className="menu-header">
            <h2  className="menu-title">
              Delicious meals, delivered fresh to your doorstep
            </h2>

            <p  className="menu-subtitle">
              From handcrafted burgers to chef-special combos, enjoy
              restaurant-quality food made with fresh ingredients and delivered
              fast, hot, and hassle-free.
            </p>

            <button  className="order-now">Explore Full Menu</button>
          </div>

          <div  className="menu-carousel">
            <div  className="menu-track">
              <article  className="menu-card">
                <h3  className="card-title">Rohit Sharma</h3>
                <p  className="card-text">
                  The food arrived hot and fresh, exactly as promised. The
                  flavors were spot on and the portion sizes were generous.
                  Easily one of the best ordering experiences I’ve had.
                </p>
              </article>

              <article  className="menu-card">
                <h3  className="card-title">Ananya Verma</h3>
                <p  className="card-text">
                  I loved how quick the delivery was. The packaging was neat,
                  and every item tasted amazing. This has become my go-to place
                  for weekend meals.
                </p>
              </article>

              <article  className="menu-card">
                <h3  className="card-title">Karan Mehta</h3>
                <p  className="card-text">
                  Consistent quality every single time. From burgers to sides,
                  everything feels freshly prepared. Highly recommend it for
                  family orders.
                </p>
              </article>

              <article  className="menu-card">
                <h3  className="card-title">Priya Nair</h3>
                <p  className="card-text">
                  The menu has a great variety and the taste never disappoints.
                  Delivery was faster than expected and the food was still
                  perfectly warm.
                </p>
              </article>

              <article  className="menu-card">
                <h3  className="card-title">Amit Kulkarni</h3>
                <p  className="card-text">
                  Excellent service and amazing flavors. You can really tell
                  they use fresh ingredients. Worth every rupee.
                </p>
              </article>

              <article  className="menu-card">
                <h3  className="card-title">Sneha Patel</h3>
                <p  className="card-text">
                  Ordering was smooth and hassle-free. The food quality and
                  taste were outstanding. Perfect for late-night cravings.
                </p>
              </article>

              <article  className="menu-card">
                <h3  className="card-title">Rahul Singh</h3>
                <p  className="card-text">
                  Great portions, great taste, and on-time delivery. This place
                  has never let me down, even during peak hours.
                </p>
              </article>

              <article  className="menu-card">
                <h3  className="card-title">Neha Gupta</h3>
                <p  className="card-text">
                  The food feels premium and well-prepared. Everything from
                  packaging to flavor shows attention to detail. Highly
                  recommended.
                </p>
              </article>

              <article  className="menu-card">
                <h3  className="card-title">Arjun Malhotra</h3>
                <p  className="card-text">
                  Fast delivery, excellent taste, and reliable service. It’s my
                  first choice whenever I’m ordering food online.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
