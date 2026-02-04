import { useEffect, useState } from "react";
import { fetchOrders } from "../../Services/orderService";

export default function OrderHistory() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders().then(setOrders);
  }, []);

  return (
    <section style={{ padding: "40px" }}>
      <h2>Your Orders</h2>

      {orders.length === 0 ? (
        <p>No orders yet</p>
      ) : (
        <ul>
          {orders.map((o) => (
            <li key={o.id}>
              <strong>Order #{o.id}</strong> — ₹{o.total_amount} —{" "}
              {new Date(o.created_at).toLocaleDateString()}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
