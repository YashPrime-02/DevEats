import "../../styles/Home_menu.css";
import { useState, useEffect } from "react";
import burger_1 from "../../assets/menu/burger-11.jpg";
import burger_2 from "../../assets/menu/burger-12.jpg";
import burger_3 from "../../assets/menu/burger-13.jpg";
import burger_4 from "../../assets/menu/burger-14.jpg";
import burger_5 from "../../assets/menu/burger-15.jpg";
import burger_6 from "../../assets/menu/burger-16.jpg";
import burger_7 from "../../assets/menu/burger-17.jpg";
import burger_8 from "../../assets/menu/burger-18.jpg";

const menuData = [
  {
    image: burger_1,
    rating: "★★★★★",
    title: "Crispy Chicken",
    desc: "Chicken breast, chilli sauce, tomatoes, pickles, coleslaw",
    price: "₹99.15",
  },
  {
    image: burger_2,
    rating: "★★★★★",
    title: "Ultimate Bacon Burger",
    desc: "Juicy beef patty layered with crispy bacon, cheddar cheese, caramelized onions and house sauce",
    price: "₹189.00",
  },
  {
    image: burger_3,
    rating: "★★★★★",
    title: "Crispy Chicken Burger",
    desc: "Crunchy fried chicken fillet with lettuce, pickles and spicy mayo in a toasted bun",
    price: "₹169.00",
  },
  {
    image: burger_4,
    rating: "★★★★☆",
    title: "Classic Veg Burger",
    desc: "Golden veg patty with fresh lettuce, tomatoes, onions and creamy mayo",
    price: "₹139.00",
  },
  {
    image: burger_5,
    rating: "★★★★★",
    title: "Double Cheese Burger",
    desc: "Two layers of melted cheese, beef patty, onions and signature burger sauce",
    price: "₹199.00",
  },
  {
    image: burger_6,
    rating: "★★★★☆",
    title: "Spicy Chicken Burger",
    desc: "Spicy grilled chicken with jalapeños, lettuce and fiery peri-peri sauce",
    price: "₹179.00",
  },
  {
    image: burger_7,
    rating: "★★★★★",
    title: "Mushroom Swiss Burger",
    desc: "Beef patty topped with sautéed mushrooms, swiss cheese and garlic aioli",
    price: "₹209.00",
  },
  {
    image: burger_8,
    rating: "★★★★☆",
    title: "BBQ Chicken Burger",
    desc: "Grilled chicken breast glazed with BBQ sauce, onions and cheddar cheese",
    price: "₹189.00",
  },
  {
    image: burger_1,
    rating: "★★★★☆",
    title: "Vegan Plant Burger",
    desc: "Plant-based patty with avocado, lettuce, tomato and dairy-free sauce",
    price: "₹179.00",
  },
];

export default function Home_menu() {
  // ✅ INITIALIZE FROM LOCALSTORAGE (KEY FIX)
  const [cart, setCart] = useState(() => {
    return JSON.parse(localStorage.getItem("cart")) || [];
  });

  const [addedIndex, setAddedIndex] = useState(null);

  // ✅ Persist cart + notify header
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    window.dispatchEvent(new Event("cartUpdated"));
  }, [cart]);

  const handleAddToCart = (item, index) => {
    setCart((prev) => [...prev, item]);
    setAddedIndex(index);

    setTimeout(() => setAddedIndex(null), 1000);
  };

  return (
    <section className="food-menu">
      <div className="food-menu__container">
        <div className="food-menu__header">
          <h2 className="food-menu__title">Check Our Wide Range of Menu</h2>
          <p className="food-menu__subtitle">
            From classic burgers to chef-crafted specialties, explore a variety
            of delicious meals made with fresh ingredients and bold flavors.
          </p>
        </div>

        <div className="food-grid">
          {menuData.map((item, index) => (
            <article className="food-card" key={index}>
              <div className="food-card__image">
                <img src={item.image} alt={item.title} />
                <button
                  className="food-card__cta"
                  onClick={() => handleAddToCart(item, index)}
                >
                  {addedIndex === index ? "Added" : "Add to Cart"}
                </button>
              </div>

              <div className="food-card__body">
                <div className="food-card__rating">{item.rating}</div>
                <h3 className="food-card__title">{item.title}</h3>
                <p className="food-card__desc">{item.desc}</p>
                <span className="food-card__price">{item.price}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
