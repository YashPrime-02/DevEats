import { useEffect, useState } from "react";
import { fetchOrders } from "../../Services/orderService";
import { Link } from "react-router-dom";
import "../../styles/OrderHistory.css";

export default function OrderHistory() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchOrders()
      .then(setOrders)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="orderHistory__loading">Loading orders...</p>;

  return (
    <section className="orderHistory">
      <div className="orderDetail__actions">
              <Link to="/" className="orderDetail__backBtn">
                ← Back to Home
              </Link>
            </div>
      <h2 className="orderHistory__title">Your Orders</h2>

      {orders.length === 0 ? (
        <p className="orderHistory__empty">No orders yet</p>
      ) : (
        <ul className="orderHistory__list">
          {orders.map((o) => (
            <li className="orderHistory__card" key={o.id}>
              <div>
                <strong>Order #{o.id}</strong>
              </div>

              <div>Amount: ₹{o.total_amount}</div>
              <div>Status: {o.status}</div>

              <div>Date: {new Date(o.created_at).toLocaleDateString()}</div>

              <Link to={`/orders/${o.id}`} className="order-now orderHistory__btn">
                View Details
              </Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
