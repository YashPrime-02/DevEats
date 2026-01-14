// src/Services/menuService.js

const BASE_URL = import.meta.env.VITE_BASE_URL;
export async function fetchBurgers() {
  try {
    const response = await fetch(`${BASE_URL}/burgers`);

    if (!response.ok) {
      throw new Error("Failed to fetch burgers");
    }

    return await response.json();
  } catch (error) {
    console.error("Menu API Error:", error);

    throw error;
  }
}
