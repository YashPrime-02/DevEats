import { useState, useEffect } from "react";
import "../../styles/Cart.css";
import { Link } from "react-router-dom";
import Empty_Cart from "../../assets/cart/empty-cart.webp";

export default function Cart() {
  const [cart, setCart] = useState(() => {
    return JSON.parse(localStorage.getItem("cart")) || [];
  });

  // Persist cart
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    window.dispatchEvent(new Event("cartUpdated"));
  }, [cart]);

  // Increase quantity
  const increaseQty = (index) => {
    setCart((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  // Decrease quantity
  const decreaseQty = (index) => {
    setCart((prev) =>
      prev
        .map((item, i) => (i === index ? { ...item, qty: item.qty - 1 } : item))
        .filter((item) => item.qty > 0)
    );
  };

  // Remove item
  const removeItem = (index) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const itemCount = cart.reduce((sum, item) => sum + item.qty, 0);
  const deliveryFee = total > 0 ? 40 : 0;
  const grandTotal = total + deliveryFee;

  return (
    <section className="cart">
      <div className="cart__container">
        <h2 className="cart__title">Your Cart</h2>

        {cart.length === 0 ? (
          <div className="cart__empty">
            <img src={Empty_Cart} alt="Empty cart" aria-hidden="true" />
            <p className="paragraph-cart">Your cart is empty</p>
            <Link to="/menu" className="order-now">
              Explore Full Menu
            </Link>
          </div>
        ) : (
          <>
            <ul className="cart__list">
              {cart.map((item, index) => (
                <li className="cart__item" key={index}>
                  <img src={item.image} alt={item.title} />

                  <div className="cart__details">
                    <h3>{item.title}</h3>

                    <span
                      className={`cart__tag ${
                        item.type === "veg" ? "veg" : "non-veg"
                      }`}
                    >
                      {item.type.toUpperCase()}
                    </span>

                    <p>₹{item.price}</p>

                    <div className="cart__qty">
                      <button
                        onClick={() => decreaseQty(index)}
                        aria-label="Decrease quantity"
                      >
                        −
                      </button>
                      <span>{item.qty}</span>
                      <button
                        onClick={() => increaseQty(index)}
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <button
                    className="cart__remove"
                    aria-label="Remove item"
                    onClick={() => removeItem(index)}
                  >
                    ✕
                  </button>
                </li>
              ))}
            </ul>

            <div className="cart__summary">
              <div className="cart__row">
                <span>Items ({itemCount})</span>
                <span>₹{total}</span>
              </div>

              <div className="cart__row">
                <span>Delivery</span>
                <span>₹{deliveryFee}</span>
              </div>

              <div className="cart__row total">
                <strong>Total</strong>
                <strong>₹{grandTotal}</strong>
              </div>

              <button className="order-now cart__checkout">
                Proceed to Checkout
              </button>

              <Link to="/" className="order-now cart__checkout">
                Go Back
              </Link>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
