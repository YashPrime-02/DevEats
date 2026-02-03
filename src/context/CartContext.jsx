import { createContext, useContext, useEffect, useState } from "react";
import { fetchCart } from "../Services/cartService";
import { useAuth } from "./AuthContext";

const CartContext = createContext();

export function CartProvider({ children }) {
  const { user } = useAuth();
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadCart = async () => {
    if (!user) {
      setCart([]);
      return;
    }

    try {
      setLoading(true);
      const data = await fetchCart();
      setCart(data);
    } catch (err) {
      console.error("Cart load failed:", err.message);
      setCart([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadCart();
  }, [user]);

  return (
    <CartContext.Provider
      value={{
        cart,
        loading,
        reloadCart: loadCart, // 🔥 REQUIRED
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
