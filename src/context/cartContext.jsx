import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);

  function addItem(item) {
    setItems((currentItems) => {
      const existingItem = currentItems.find(
        (cartItem) => cartItem.id === item.id,
      );
      if (existingItem) {
        return currentItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, amount: cartItem.amount + item.amount }
            : cartItem,
        );
      }
      return [...currentItems, item];
    });
  }

  function removeItem(id) {
    setItems((currentItems) => {
      const existingItem = currentItems.find((item) => item.id === id);
      if (!existingItem) return currentItems;
      if (existingItem.amount === 1)
        return currentItems.filter((item) => item.id !== id);
      return currentItems.map((item) =>
        item.id === id ? { ...item, amount: item.amount - 1 } : item,
      );
    });
  }

  const cartContext = {
    items,
    addItem,
    removeItem,
    totalAmount: items.reduce(
      (total, item) => total + item.price * item.amount,
      0,
    ),
    totalItems: items.reduce((total, item) => total + item.amount, 0),
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
