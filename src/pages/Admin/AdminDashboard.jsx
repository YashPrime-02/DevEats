import { useEffect, useState } from "react";
import "../../styles/AdminDashboard.css";

const API = import.meta.env.VITE_API_URL || "http://localhost:3000";

export default function AdminDashboard() {
  const [users, setUsers] = useState([]);
  const [orders, setOrders] = useState([]);
  const [revenue, setRevenue] = useState(0);
  const [error, setError] = useState("");

  const token = localStorage.getItem("token");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const headers = {
        Authorization: `Bearer ${token}`,
      };

      const [usersRes, ordersRes, revenueRes] = await Promise.all([
        fetch(`${API}/api/admin/users`, { headers }),
        fetch(`${API}/api/admin/orders`, { headers }),
        fetch(`${API}/api/admin/revenue`, { headers }),
      ]);

      // 🚨 Handle auth failure
      if (!usersRes.ok) {
        throw new Error("Unauthorized or session expired");
      }

      setUsers(await usersRes.json());
      setOrders(await ordersRes.json());

      const rev = await revenueRes.json();
      setRevenue(rev.revenue || 0);
    } catch (err) {
      console.error("Admin dashboard error:", err);
      setError("Failed to load admin data");
    }
  };

  return (
    <div className="admin">
      <h1>Admin Dashboard</h1>

      {error && <p className="error">{error}</p>}

      {/* Stats */}
      <div className="admin-stats">
        <div className="card">
          <h3>Users</h3>
          <p>{users.length}</p>
        </div>
        <div className="card">
          <h3>Orders</h3>
          <p>{orders.length}</p>
        </div>
        <div className="card">
          <h3>Revenue</h3>
          <p>₹ {revenue}</p>
        </div>
      </div>

      {/* Users */}
      <section>
        <h2>Users</h2>
        <table>
          <thead>
            <tr>
              <th>Email</th>
              <th>Role</th>
              <th>Joined</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u.id}>
                <td>{u.email}</td>
                <td className={u.role === "admin" ? "admin-role" : ""}>
                  {u.role}
                </td>
                <td>{new Date(u.created_at).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Orders */}
      <section>
        <h2>Orders</h2>
        <table>
          <thead>
            <tr>
              <th>User</th>
              <th>Total</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((o) => (
              <tr key={o.id}>
                <td>{o.email}</td>
                <td>₹ {o.total_amount}</td>
                <td>{o.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}
