"use client";
import products from "../lib/flatProducts.js";
import Link from "next/link.js";
import { useState } from "react";

export default function SearchBar() {
  const [searchedTerm, setSearchedTerm] = useState("");
  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(searchedTerm)
  );
  const filteredCategories = products.filter((p) =>
    p.category.toLowerCase().includes(searchedTerm)
  );
  const filteredSubcategories = products.filter((p) =>
    p.subcategory.toLowerCase().includes(searchedTerm)
  );
  const allFilteredCategories = [
    ...filteredSubcategories,
    ...filteredCategories,
  ];
  console.log("hier", allFilteredCategories);

  return (
    <div className="relative felx items-center">
      <input
        value={searchedTerm}
        onChange={(e) => setSearchedTerm(e.target.value)}
        type="text"
        placeholder="Suchbegriff"
        className="border border-gray-300 px-3 py-1 roundded-1-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      ></input>
      <button className="bg-blue-600 text-white px-4 py-1 rounded-r-md hover:bg-blue-700">
        🔍
      </button>
      {searchedTerm && (
        <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 w-full min-w-3xl max-w-5xl bg-white border border-gray-300 shadow-lg rounded-xl p-6 flex gap-8 z-50">
          <div className="w-1/3">
            <h3 className="text-sm font-semibold text-gray-600 mb-3">
              Kategorien passend zu deiner Suche
            </h3>
            <ul className="space-y-2">
              {allFilteredCategories.slice(0, 6).map((cat, index) => (
                <li
                  key={index}
                  className="cursor-pointer text-sm text-blue-700 hover:underline"
                >
                  {cat.name}
                </li>
              ))}
            </ul>
          </div>

          <div className="w-2/3">
            <h3 className="text-sm font-semibold text-gray-600 mb-3">
              Produkttreffer
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {filteredProducts.slice(0, 4).map((p) => (
                <Link href={p.id}>
                  <div
                    key={p.id}
                    className="flex items-center gap-4 border rounded-md p-3 hover:shadow cursor-pointer"
                  >
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div>
                      <p className="text-sm font-medium text-gray-800">
                        {p.name}
                      </p>
                      <p className="text-xs text-gray-500">
                        €{p.price.toFixed(2)}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="text-right mt-4">
              <button className="text-sm text-blue-600 hover:underline">
                Alle Ergebnisse anzeigen
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
