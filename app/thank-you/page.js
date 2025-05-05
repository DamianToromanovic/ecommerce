"use client";

import Link from "next/link";
import { useCartStore } from "../store/cartStore.js";
import { useEffect } from "react";

export default function ThankYouPage() {
  const { clearCart } = useCartStore();

  useEffect(() => {
    clearCart();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4">
      <h1 className="text-4xl font-bold text-green-600 mb-4">
        🎉 Vielen Dank für deine Bestellung!
      </h1>
      <p className="text-lg text-gray-700 mb-6">
        Deine Bestellung wurde erfolgreich aufgegeben. Wir senden dir in Kürze
        eine Bestätigung per E-Mail.
      </p>

      <Link
        href="/"
        className="inline-block mt-4 px-6 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition"
      >
        Zur Startseite
      </Link>
    </div>
  );
}
