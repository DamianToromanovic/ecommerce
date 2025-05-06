import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useCartStore = create(
  persist(
    (set, get) => ({
      cart: [],

      addToCart: (item) => {
        const cart = get().cart;
        const existing = cart.find((i) => i.id === item.id);

        if (existing) {
          const updated = cart.map((i) =>
            i.id === item.id
              ? { ...i, quantity: i.quantity + item.quantity }
              : i
          );
          set({ cart: updated });
        } else {
          set({ cart: [...cart, { ...item, quantity: item.quantity || 1 }] });
        }
      },

      decreaseQuantity: (itemId) => {
        const cart = get().cart;
        const existing = cart.find((i) => i.id === itemId);
        if (!existing) return;
        if (existing && existing.quantity > 1) {
          const updated = cart.map((i) =>
            i.id === itemId ? { ...i, quantity: i.quantity - 1 } : i
          );
          set({ cart: updated });
        } else if (existing.quantity === 1) {
          const updated = cart.filter((i) => i.id !== itemId);
          set({ cart: updated });
        }
      },
      increaseQuantity: (itemId) => {
        const cart = get().cart;
        const existing = cart.find((i) => i.id === itemId);
        if (!existing) return;

        const updated = cart.map((i) =>
          i.id === itemId ? { ...i, quantity: i.quantity + 1 } : i
        );

        set({ cart: updated });
      },

      removeFromCart: (itemId) => {
        const cart = get().cart;
        const updated = cart.filter((i) => i.id !== itemId);
        set({ cart: updated });
      },
      getTotalPrice: () => {
        const cart = get().cart;
        const allPrices = cart.map((i) => i.price * i.quantity);
        const total = allPrices.reduce(
          (sum, currentVal) => sum + currentVal,
          0
        );
        return total;
      },

      getTotalQuantity: () => {
        const cart = get().cart;
        return cart.reduce((sum, item) => sum + item.quantity, 0);
      },
      clearCart: () => {
        const arr = [];
        const cart = get().cart;
        set({ cart: arr });
      },
    }),
    {
      name: "cartStorage",
    }
  )
);
