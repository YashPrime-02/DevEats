const API = import.meta.env.VITE_API_URL || "http://localhost:3000";

const getAuthHeaders = () => {
  const token = localStorage.getItem("token");
  if (!token) throw new Error("Not authenticated");

  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
};

// 🔹 Fetch cart from DB
export async function fetchCart() {
  const res = await fetch(`${API}/api/cart`, {
    headers: getAuthHeaders(),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Failed to fetch cart");
  }

  return data;
}

// 🔹 Add item to cart (DB)
export async function addToCart(item) {
  const res = await fetch(`${API}/api/cart/add`, {
    method: "POST",
    headers: getAuthHeaders(),
    body: JSON.stringify(item),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Failed to add to cart");
  }

  return data;
}

// 🔹 Remove item (DB)
export async function removeCartItem(id) {
  const res = await fetch(`${API}/api/cart/${id}`, {
    method: "DELETE",
    headers: getAuthHeaders(),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Failed to remove item");
  }

  return data;
}
