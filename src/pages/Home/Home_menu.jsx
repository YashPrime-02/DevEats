import "../../styles/Home_menu.css";
import { useState, useEffect } from "react";

import burger_1 from "../../assets/menu/burger-11.jpg";
// import burger_2 from "../../assets/menu/burger-12.jpg";
// import burger_3 from "../../assets/menu/burger-13.jpg";
// import burger_4 from "../../assets/menu/burger-14.jpg";
// import burger_5 from "../../assets/menu/burger-15.jpg";
// import burger_6 from "../../assets/menu/burger-16.jpg";
// import burger_7 from "../../assets/menu/burger-17.jpg";
// import burger_8 from "../../assets/menu/burger-18.jpg";

// ❌ Static menu removed – API will provide menu now

// const menuData = [
//   {
//     image: burger_1,
//     rating: "★★★★★",
//     title: "Butter Chicken Burger",
//     desc: "Creamy butter chicken patty with onion, lettuce and makhani sauce",
//     price: "179.00",
//     type: "non-veg",
//     category: "burger",
//   },
//   {
//     image: burger_2,
//     rating: "★★★★★",
//     title: "Paneer Tikka Burger",
//     desc: "Grilled paneer tikka with mint mayo and fresh veggies",
//     price: "159.00",
//     type: "veg",
//     category: "burger",
//   },
//   {
//     image: burger_3,
//     rating: "★★★★★",
//     title: "Chicken Tandoori Burger",
//     desc: "Smoky tandoori chicken with onions and spicy mayo",
//     price: "189.00",
//     type: "non-veg",
//     category: "burger",
//   },
//   {
//     image: burger_4,
//     rating: "★★★★☆",
//     title: "Aloo Tikki Burger",
//     desc: "Crispy aloo tikki with tomato, onion and desi chutneys",
//     price: "129.00",
//     type: "veg",
//     category: "burger",
//   },
//   {
//     image: burger_5,
//     rating: "★★★★★",
//     title: "Cheese Burst Paneer Burger",
//     desc: "Paneer patty filled with molten cheese and creamy sauce",
//     price: "189.00",
//     type: "veg",
//     category: "burger",
//   },
//   {
//     image: burger_6,
//     rating: "★★★★☆",
//     title: "Peri Peri Chicken Burger",
//     desc: "Spicy peri peri grilled chicken with lettuce and mayo",
//     price: "199.00",
//     type: "non-veg",
//     category: "burger",
//   },
//   {
//     image: burger_7,
//     rating: "★★★★★",
//     title: "Mushroom Masala Burger",
//     desc: "Indian spiced mushroom patty with garlic aioli",
//     price: "169.00",
//     type: "veg",
//     category: "burger",
//   },
//   {
//     image: burger_8,
//     rating: "★★★★☆",
//     title: "BBQ Chicken Keema Burger",
//     desc: "Minced chicken patty glazed with BBQ sauce",
//     price: "209.00",
//     type: "non-veg",
//     category: "burger",
//   },
//   {
//     image: burger_1,
//     rating: "★★★★☆",
//     title: "Veg Maharaja Burger",
//     desc: "Double veg patty with cheese, lettuce and special sauce",
//     price: "179.00",
//     type: "veg",
//     category: "burger",
//   },
// ];

import { fetchBurgers } from "../../Services/menuService";

export default function Home_menu() {
  // ✅ Menu from API
  const [menu, setMenu] = useState([]);

  // ✅ Loading + error for UX
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [foodFilter, setFoodFilter] = useState("all");

  useEffect(() => {
    async function loadMenu() {
      try {
        const apiData = await fetchBurgers();

        // 🔁 Transform API shape → UI shape
        const formattedData = apiData.map((item) => ({
          id: item.id, // unique key (VERY IMPORTANT)
          image: item.img, // API uses img
          title: item.name, // API uses name
          desc: item.dsc, // API uses dsc
          price: item.price,
          rating: item.rate === 5 ? "★★★★★" : "★★★★☆",
          type: "non-veg", // API doesn’t provide veg/non-veg
        }));

        setMenu(formattedData);
      } catch (err) {
        setError("Unable to load menu");
      } finally {
        setLoading(false);
      }
    }

    loadMenu();
  }, []);

  // 🔁 Filter now works on API menu
  const filteredMenu =
    foodFilter === "all"
      ? menu
      : menu.filter((item) => item.type === foodFilter);

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

  const handleAddToCart = (item) => {
    setCart((prev) => {
      // ✅ Use id, NOT title (titles can repeat)
      const existing = prev.find((i) => i.id === item.id);

      if (existing) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, qty: i.qty + 1 } : i
        );
      }

      return [...prev, { ...item, qty: 1 }];
    });

    setAddedIndex(item.id); // use stable id

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
        {/* <div className="food-filter">
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
        </div> */}

        {loading && <p>Loading menu...</p>}
        {error && <p>{error}</p>}
        {!loading && !error && (
          <div className="food-grid">
            {filteredMenu.map((item) => (
              <article className="food-card" key={item.id}>
                <div className="food-card__image">
                  <img
                    src={item.image}
                    alt={item.title}
                    onError={(e) => {
                      e.currentTarget.src = burger_1; // fallback when API image breaks
                    }}
                  />{" "}
                  <button
                    className="food-card__cta"
                    onClick={() => handleAddToCart(item)}
                  >
                    {addedIndex === item.id ? "Added" : "Add to Cart"}
                  </button>
                </div>

                <div className="food-card__body">
                  <div className="food-card__rating">{item.rating}</div>

                  {/* <span
                    className={`food-tag ${
                      item.type === "veg" ? "veg" : "non-veg"
                    }`}
                  >
                    {item.type === "veg" ? "VEG" : "NON-VEG"}
                  </span> */}

                  <h3 className="food-card__title">{item.title}</h3>
                  <p className="food-card__desc">{item.desc}</p>
                  <span className="food-card__price">₹{item.price}</span>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
