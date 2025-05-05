"use client";
import Link from "next/link.js";
import CheckoutForm from "../components/CheckoutForm.js";
import CheckoutSummary from "../components/CheckoutSummary.js";

export default function CheckoutPage() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <Link href={"/thank-you"}>
        <button className="text-3xl font-bold mb-6">Zur Kasse</button>
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <CheckoutForm />
        <CheckoutSummary />
      </div>
    </div>
  );
}
