import { createContext, useState } from "react";

export const CartContext = createContext();

export function ShoppingCartProvider({ children }) {
  const [cart, setCart] = useState([]);

  function removeCart(id) {
    setCart((currItems) => {
      currItems.find((item) => item.id === id);
      return currItems.filter((item) => item.id !== id);
    });
  }

  return (
    <CartContext.Provider value={[cart, setCart, removeCart]}>
      {children}
    </CartContext.Provider>
  );
}