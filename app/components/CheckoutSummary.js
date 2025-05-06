"use client";
import { useCartStore } from "../store/cartStore";

export default function CheckoutSummary() {
  const { cart, getTotalPrice } = useCartStore();

  return (
    <div className="border rounded-lg p-4 shadow">
      <h2 className="text-xl font-bold mb-4">Bestellung</h2>
      {cart.map((item, i) => (
        <div key={i} className="flex justify-between text-sm mb-2">
          <span>
            {item.name} x{item.quantity}
          </span>
          <span>{(item.price * item.quantity).toFixed(2)} €</span>
        </div>
      ))}
      <div className="flex justify-between font-bold pt-4 border-t mt-4">
        <span>Gesamt</span>
        <span>{getTotalPrice().toFixed(2)} €</span>
      </div>
    </div>
  );
}
