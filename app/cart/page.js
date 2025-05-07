"use client";

import { useCartStore } from "../store/cartStore.js";
import Link from "next/link";
import { useEffect } from "react";
export default function CartPage() {
  const {
    cart,
    addToCart,
    decreaseQuantity,
    removeFromCart,
    getTotalPrice,
    clearCart,
  } = useCartStore();
  useEffect(() => {
    setTimeout(() => {
      if (cart.length === 0)
        return (
          <div className="p-8">
            <h1 className="text-2xl font-bold mb-4">
              Dein Warenkorb ist leer 🛒
            </h1>
            <Link href="/">
              <span className="text-blue-600 underline">Zurück zum Shop</span>
            </Link>
          </div>
        );
    }, 1000);
  }, []);

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Dein Warenkorb</h1>

      {cart.map((item) => (
        <div key={item.id} className=" py-4 flex justify-between">
          <div>
            <h2 className="font-semibold">{item.name}</h2>
            <p className="text-sm text-gray-500">{item.price} €</p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => decreaseQuantity(item.id)}
              className="px-2 py-1 bg-gray-200 rounded"
            >
              -
            </button>
            <span>{item.quantity}</span>
            <button
              onClick={() => addToCart({ ...item, quantity: 1 })}
              className="px-2 py-1 bg-gray-200 rounded"
            >
              +
            </button>
            <button
              onClick={() => removeFromCart(item.id)}
              className="text-red-600 text-sm underline ml-2"
            >
              Entfernen
            </button>
          </div>
        </div>
      ))}

      <div className="flex justify-between items-center mt-6 font-semibold">
        <span>Gesamt:</span>
        <span>{getTotalPrice().toFixed(2)} €</span>
      </div>

      <div className="mt-6 flex justify-between">
        <button
          onClick={clearCart}
          className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
        >
          Warenkorb leeren
        </button>
        <Link href="/checkout">
          <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">
            Zur Kasse
          </button>
        </Link>
      </div>
    </div>
  );
}
