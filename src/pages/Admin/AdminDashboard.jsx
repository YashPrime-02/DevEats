import { useEffect, useState } from "react";
import "../../styles/AdminDashboard.css";
import { exportToExcel } from "../../utils/exportToExcel";

const API = import.meta.env.VITE_API_URL;

if (!API) {
  throw new Error("VITE_API_URL is not defined");
}

export default function AdminDashboard() {
  const [users, setUsers] = useState([]);
  const [orders, setOrders] = useState([]);
  const [contacts, setContacts] = useState([]);
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

      const [usersRes, ordersRes, revenueRes, contactsRes] = await Promise.all([
        fetch(`${API}/api/admin/users`, { headers }),
        fetch(`${API}/api/admin/orders`, { headers }),
        fetch(`${API}/api/admin/revenue`, { headers }),
        fetch(`${API}/api/admin/contacts`, { headers }),
      ]);

      if (!usersRes.ok) {
        throw new Error("Unauthorized or session expired");
      }

      setUsers(await usersRes.json());
      setOrders(await ordersRes.json());
      setContacts(await contactsRes.json());

      const rev = await revenueRes.json();
      setRevenue(rev.revenue || 0);
    } catch (err) {
      console.error("Admin dashboard error:", err);
      setError("Failed to load admin data");
    }
  };

  // ✅ Export helpers (clean data)
  const exportUsers = () => {
    const cleaned = users.map((u) => ({
      id: u.id,
      name: u.name,
      email: u.email,
      role: u.role,
      joined: new Date(u.created_at).toLocaleString(),
    }));

    exportToExcel(cleaned, "admin_users");
  };

  const exportOrders = () => {
    const cleaned = orders.map((o) => ({
      id: o.id,
      user: o.email,
      total: Number(o.total_amount),
      status: o.status,
      date: new Date(o.created_at).toLocaleString(),
    }));

    exportToExcel(cleaned, "admin_orders");
  };

  const exportContacts = () => {
    const cleaned = contacts.map((c) => ({
      id: c.id,
      name: c.name,
      email: c.email,
      message: c.message,
      date: new Date(c.created_at).toLocaleString(),
    }));

    exportToExcel(cleaned, "admin_contacts");
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

        <div className="card">
          <h3>Messages</h3>
          <p>{contacts.length}</p>
        </div>
      </div>

      {/* Users */}
      <section className="admin-section">
        <div className="admin-section-header">
          <h2>Users</h2>

          <button className="admin-export-btn" onClick={exportUsers}>
            Export Users (Excel)
          </button>
        </div>

        <div className="admin-table-wrap">
          <table className="admin-table">
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
        </div>
      </section>

      {/* Orders */}
      <section className="admin-section">
        <div className="admin-section-header">
          <h2>Orders</h2>

          <button className="admin-export-btn" onClick={exportOrders}>
            Export Orders (Excel)
          </button>
        </div>

        <div className="admin-table-wrap">
          <table className="admin-table">
            <thead>
              <tr>
                <th>User</th>
                <th>Total</th>
                <th>Status</th>
                <th>Date</th>
              </tr>
            </thead>

            <tbody>
              {orders.map((o) => (
                <tr key={o.id}>
                  <td>{o.email}</td>
                  <td>₹ {o.total_amount}</td>
                  <td>{o.status}</td>
                  <td>{new Date(o.created_at).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Contact Messages */}
      <section className="admin-section">
        <div className="admin-section-header">
          <h2>Contact Messages</h2>

          <button className="admin-export-btn" onClick={exportContacts}>
            Export Contacts (Excel)
          </button>
        </div>

        {contacts.length === 0 ? (
          <p className="admin-empty">No messages found.</p>
        ) : (
          <div className="admin-table-wrap">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Message</th>
                  <th>Date</th>
                </tr>
              </thead>

              <tbody>
                {contacts.map((c) => (
                  <tr key={c.id}>
                    <td>{c.id}</td>
                    <td>{c.name}</td>
                    <td>{c.email}</td>
                    <td className="admin-message">{c.message}</td>
                    <td>{new Date(c.created_at).toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </div>
  );
}
