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
    title: "Butter Chicken Burger",
    desc: "Creamy butter chicken patty with onion, lettuce and makhani sauce",
    price: "₹179.00",
    type: "non-veg",
    category: "burger",
  },
  {
    image: burger_2,
    rating: "★★★★★",
    title: "Paneer Tikka Burger",
    desc: "Grilled paneer tikka with mint mayo and fresh veggies",
    price: "₹159.00",
    type: "veg",
    category: "burger",
  },
  {
    image: burger_3,
    rating: "★★★★★",
    title: "Chicken Tandoori Burger",
    desc: "Smoky tandoori chicken with onions and spicy mayo",
    price: "₹189.00",
    type: "non-veg",
    category: "burger",
  },
  {
    image: burger_4,
    rating: "★★★★☆",
    title: "Aloo Tikki Burger",
    desc: "Crispy aloo tikki with tomato, onion and desi chutneys",
    price: "₹129.00",
    type: "veg",
    category: "burger",
  },
  {
    image: burger_5,
    rating: "★★★★★",
    title: "Cheese Burst Paneer Burger",
    desc: "Paneer patty filled with molten cheese and creamy sauce",
    price: "₹189.00",
    type: "veg",
    category: "burger",
  },
  {
    image: burger_6,
    rating: "★★★★☆",
    title: "Peri Peri Chicken Burger",
    desc: "Spicy peri peri grilled chicken with lettuce and mayo",
    price: "₹199.00",
    type: "non-veg",
    category: "burger",
  },
  {
    image: burger_7,
    rating: "★★★★★",
    title: "Mushroom Masala Burger",
    desc: "Indian spiced mushroom patty with garlic aioli",
    price: "₹169.00",
    type: "veg",
    category: "burger",
  },
  {
    image: burger_8,
    rating: "★★★★☆",
    title: "BBQ Chicken Keema Burger",
    desc: "Minced chicken patty glazed with BBQ sauce",
    price: "₹209.00",
    type: "non-veg",
    category: "burger",
  },
  {
    image: burger_1,
    rating: "★★★★☆",
    title: "Veg Maharaja Burger",
    desc: "Double veg patty with cheese, lettuce and special sauce",
    price: "₹179.00",
    type: "veg",
    category: "burger",
  },
];

export default function Home_menu() {
  const [foodFilter, setFoodFilter] = useState("all");
  const filteredMenu =
    foodFilter === "all"
      ? menuData
      : menuData.filter((item) => item.type === foodFilter);

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
        <div className="food-filter">
          <button
            className={`food-filter__btn ${
              foodFilter === "all" ? "active" : ""
            }`}
            onClick={() => setFoodFilter("all")}
          >
            All
          </button>

          <button
            className={`food-filter__btn veg ${
              foodFilter === "veg" ? "active" : ""
            }`}
            onClick={() => setFoodFilter("veg")}
          >
            Veg
          </button>

          <button
            className={`food-filter__btn non-veg ${
              foodFilter === "non-veg" ? "active" : ""
            }`}
            onClick={() => setFoodFilter("non-veg")}
          >
            Non-Veg
          </button>
        </div>
        <div className="food-grid">
          {filteredMenu.map((item, index) => (
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

                <span
                  className={`food-tag ${
                    item.type === "veg" ? "veg" : "non-veg"
                  }`}
                >
                  {item.type === "veg" ? "VEG" : "NON-VEG"}
                </span>

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
