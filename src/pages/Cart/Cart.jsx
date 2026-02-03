import "../../styles/Cart.css";
import { Link } from "react-router-dom";
import Empty_Cart from "../../assets/cart/empty-cart.webp";
import { useCart } from "../../context/CartContext";
import { removeCartItem } from "../../Services/cartService";

export default function Cart() {
  const { cart, loading, reloadCart } = useCart();

  const handleRemove = async (id) => {
    await removeCartItem(id);
    await reloadCart();
  };

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const itemCount = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const deliveryFee = total > 0 ? 40 : 0;
  const grandTotal = total + deliveryFee;

  if (loading) {
    return <p style={{ textAlign: "center" }}>Loading cart...</p>;
  }

  return (
    <section className="cart">
      <div className="cart__container">
        <h2 className="cart__title">Your Cart</h2>

        {cart.length === 0 ? (
          <div className="cart__empty">
            <img src={Empty_Cart} alt="Empty cart" />
            <p>Your cart is empty</p>
            <Link to="/menu" className="order-now">
              Explore Menu
            </Link>
          </div>
        ) : (
          <>
            <ul className="cart__list">
              {cart.map((item) => (
                <li className="cart__item" key={item.id}>
                  <img src={item.image_url} alt={item.name} />

                  <div className="cart__details">
                    <h3>{item.name}</h3>
                    <p>₹{item.price}</p>
                    <p>Qty: {item.quantity}</p>
                  </div>

                  <button
                    className="cart__remove"
                    onClick={() => handleRemove(item.id)}
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

              <Link to="/thank-you" className="order-now cart__checkout">
                Proceed to Checkout
              </Link>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
