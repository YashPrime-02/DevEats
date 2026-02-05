import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchOrderById } from "../../Services/orderService";
import "../../styles/Orders.css";
import { Link } from "react-router-dom";
import '../../styles/OrderHistory.css';



export default function OrderDetail() {
  const { id } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchOrderById(id)
      .then(setItems)
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p className="orderDetail__loading">Loading order...</p>;

  const order = items[0];

  const itemsTotal = items.reduce(
    (sum, item) => sum + Number(item.price) * Number(item.quantity),
    0,
  );

  const deliveryFee = itemsTotal > 0 ? 40 : 0;
  const grandTotal = itemsTotal + deliveryFee;

  return (
    <section className="orderDetail">
      <div className="orderDetail__container">
        <div className="orderDetail__header">
          <div>
            <h2 className="orderDetail__title">Order #{order.id}</h2>
            <p className="orderDetail__meta">
              Status: <span>{order.status}</span>
            </p>
            <p className="orderDetail__meta">
              Date:{" "}
              <span>{new Date(order.created_at).toLocaleDateString()}</span>
            </p>
            <div className="orderDetail__actions">
              <Link to="/orders" className="orderDetail__backBtn">
                ← Back to Orders
              </Link>
            </div>
          </div>

          <div className="orderDetail__summaryCard">
            <div className="orderDetail__row">
              <span>Items</span>
              <span>₹{itemsTotal.toFixed(2)}</span>
            </div>

            <div className="orderDetail__row">
              <span>Delivery</span>
              <span>₹{deliveryFee.toFixed(2)}</span>
            </div>

            <div className="orderDetail__row orderDetail__total">
              <strong>Total</strong>
              <strong>₹{grandTotal.toFixed(2)}</strong>
            </div>
          </div>
        </div>

        <ul className="orderDetail__list">
          {items.map((item, idx) => (
            <li className="orderDetail__item" key={idx}>
              <div className="orderDetail__imgWrap">
                <img src={item.image_url} alt={item.name} />
              </div>

              <div className="orderDetail__info">
                <h4 className="orderDetail__name">{item.name}</h4>
                <p className="orderDetail__priceLine">
                  ₹{item.price} × {item.quantity}
                </p>
              </div>

              <div className="orderDetail__lineTotal">
                ₹{(Number(item.price) * Number(item.quantity)).toFixed(2)}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
