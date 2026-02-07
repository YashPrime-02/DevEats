import { useEffect, useState } from "react";

const API = import.meta.env.VITE_API_URL;

export default function AdminOrders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch(`${API}/api/admin/orders`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((r) => r.json())
      .then(setOrders);
  }, []);

  return (
    <section style={{ padding: "40px" }}>
      <h2>All Orders</h2>

      <table width="100%" style={{ marginTop: "20px" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>User</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
          {orders.map((o) => (
            <tr key={o.id}>
              <td>{o.id}</td>
              <td>{o.email}</td>
              <td>₹{o.total_amount}</td>
              <td>{o.status}</td>
              <td>{new Date(o.created_at).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
