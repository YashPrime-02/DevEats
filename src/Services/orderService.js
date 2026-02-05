// src/Services/orderService.js
const API = import.meta.env.VITE_API_URL || "http://localhost:3000";

const getAuthHeaders = () => {
  const token = localStorage.getItem("token");
  if (!token) throw new Error("Not authenticated");

  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
};

// 🧾 Place order
export async function placeOrder() {
  const res = await fetch(`${API}/api/orders/place`, {
    method: "POST",
    headers: getAuthHeaders(),
  });

  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.message || "Order failed");
  }

  return res.json();
}

// 📜 Fetch order history
export async function fetchOrders() {
  const res = await fetch(`${API}/api/orders`, {
    headers: getAuthHeaders(),
  });

  if (!res.ok) throw new Error("Failed to fetch orders");
  return res.json();
}

// 🔍 Fetch order by ID
export async function fetchOrderById(id) {
  const res = await fetch(`${API}/api/orders/${id}`, {
    headers: getAuthHeaders(),
  });

  if (!res.ok) throw new Error("Failed to load order");
  return res.json();
}

