"use client";
import Link from "next/link.js";
import CheckoutForm from "../components/CheckoutForm.js";
import CheckoutSummary from "../components/CheckoutSummary.js";

export default function CheckoutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-200 px-4 py-16 flex flex-col items-center">
      {/* Gutscheincode section */}
      <div className="w-full max-w-4xl  rounded-xl shadow-lg p-6 mb-6 text-center">
        <h2 className="text-3xl font-bold text-blue-700 mb-2">
          Gutscheincode einlösen
        </h2>
        <p className="text-gray-600 text-sm mb-4">
          Ihre Rabatt wartet auf Sie! Geben Sie unter Ihren Gutscheincode ein.
        </p>
        <div className="flex justify-center gap-2">
          <input
            type="text"
            placeholder="Code eingeben"
            className="border border-gray-300 px-4 py-2 rounded w-64"
          ></input>
          <button className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded cursor-pointer">
            Einlösen
          </button>
        </div>
      </div>

      {/* Checkout section */}
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-5xl w-full bg-white rounded-xl shadow-lg overflow-hidden">
        {/* left side */}
        <div className="bg-white p-8">
          <h2 className="text-2xl font-semibold mb-6 text-blue-700 font-serif text-center">
            Lieferdetails
          </h2>
          <CheckoutForm />
        </div>

        {/* Right side summary */}
        <div className="bg-blue-500 p-8 text-white">
          <CheckoutSummary />
          <Link href={"/thank-you"}>
            <button className="mt-30 w-full bg-white text-blue-700 hover:bg-blue-100 font-bold py-2 px-4 rounded cursor-pointer">
              Zur Kasse
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
