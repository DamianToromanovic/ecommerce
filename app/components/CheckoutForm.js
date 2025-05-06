"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CheckoutForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    payment: "paypal",
  });
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    //  später echte Validierung/API ???
    router.push("/thank-you");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Name"
        required
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        className="w-full border px-4 py-2 rounded"
      />
      <input
        type="email"
        placeholder="E-Mail"
        required
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        className="w-full border px-4 py-2 rounded"
      />
      <input
        type="text"
        placeholder="Adresse"
        required
        value={form.address}
        onChange={(e) => setForm({ ...form, address: e.target.value })}
        className="w-full border px-4 py-2 rounded"
      />

      <select
        value={form.payment}
        onChange={(e) => setForm({ ...form, payment: e.target.value })}
        className="w-full border px-4 py-2 rounded"
      >
        <option value="paypal">PayPal</option>
        <option value="vorkasse">Vorkasse</option>
        <option value="karte">Kreditkarte</option>
      </select>

      <button
        type="submit"
        className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded w-full"
      >
        Jetzt bestellen
      </button>
    </form>
  );
}
