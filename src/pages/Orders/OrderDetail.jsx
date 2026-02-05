import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchOrderById } from "../../Services/orderService";

export default function OrderDetail() {
  const { id } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchOrderById(id)
      .then(setItems)
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p style={{ padding: 40 }}>Loading order...</p>;

  const order = items[0];

  return (
    <section style={{ padding: "40px", maxWidth: "900px", margin: "0 auto" }}>
      <h2>Order #{order.id}</h2>
      <p>Status: {order.status}</p>
      <p>Date: {new Date(order.created_at).toLocaleDateString()}</p>

      <ul style={{ marginTop: "20px" }}>
        {items.map((item, idx) => (
          <li
            key={idx}
            style={{
              display: "flex",
              gap: "16px",
              borderBottom: "1px solid #eee",
              padding: "12px 0",
            }}
          >
            <img
              src={item.image_url}
              alt={item.name}
              width={80}
              height={80}
            />
            <div>
              <h4>{item.name}</h4>
              <p>₹{item.price} × {item.quantity}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
