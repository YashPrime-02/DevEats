const API = import.meta.env.VITE_API_URL;

if (!API) {
  throw new Error("VITE_API_URL is not defined");
}

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

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Order failed");
  }

  return data;
}

// 📜 Fetch order history
export async function fetchOrders() {
  const res = await fetch(`${API}/api/orders`, {
    headers: getAuthHeaders(),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Failed to fetch orders");
  }

  return data;
}

// 🔍 Fetch order by ID
export async function fetchOrderById(id) {
  const res = await fetch(`${API}/api/orders/${id}`, {
    headers: getAuthHeaders(),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Failed to load order");
  }

  return data;
}
