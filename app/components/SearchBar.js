"use client";
import products from "../lib/flatProducts.js";
import Link from "next/link.js";
import { useState } from "react";

export default function SearchBar() {
  const [searchedTerm, setSearchedTerm] = useState("");
  const [showResults, setShowResults] = useState(false);

  const filteredProducts = products
    .filter((p) => p.name.toLowerCase().includes(searchedTerm))
    .map((p) => ({
      type: "product",
      name: p.name,
      categorySlug: p.category,
      subcategorySlug: p.subcategory,
      id: p.id,
      image: p.image,
      price: p.price,
    }));

  const filteredCategories = products
    .filter((p) => p.category.toLowerCase().includes(searchedTerm))
    .map((p) => ({
      type: "category",
      name: p.category,
      slug: p.category,
    }));

  const filteredSubcategories = products
    .filter((p) => p.subcategory.toLowerCase().includes(searchedTerm))
    .map((p) => ({
      type: "subcategory",
      name: p.subcategory,
      slug: p.subcategory,
      categorySlug: p.category,
    }));

  const allFilteredCategories = [
    ...filteredSubcategories,
    ...filteredCategories,
  ].filter(
    (element, index, array) =>
      index ===
      array.findIndex((t) => t.slug === element.slug && t.type === element.type)
  );

  return (
    <div className="relative felx items-center">
      <input
        onFocus={() => setShowResults(true)}
        value={searchedTerm}
        onChange={(e) => {
          setSearchedTerm(e.target.value);
          setShowResults(true);
        }}
        onBlur={() => setTimeout(() => setShowResults(false), 200)}
        type="text"
        placeholder="Suchbegriff"
        className="border border-gray-300 px-3 py-1 roundded-1-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      ></input>
      <button className="bg-blue-600 text-white px-4 py-1 rounded-r-md hover:bg-blue-700">
        🔍
      </button>
      {searchedTerm && showResults && (
        <div
          onMouseEnter={() => setShowResults(true)}
          className="absolute top-full mt-2 left-1/2 -translate-x-1/2 w-full min-w-3xl max-w-5xl bg-white border border-gray-300 shadow-lg rounded-xl p-6 flex gap-8 z-50"
        >
          <div className="w-1/3">
            <h3 className="text-sm font-semibold text-gray-600 mb-3">
              Kategorien
            </h3>
            <ul className="space-y-2">
              {allFilteredCategories.length === 0 ? (
                <div>Keine Kategorien gefunden</div>
              ) : (
                allFilteredCategories.slice(0, 10).map((cat, index) => {
                  let href = "/";

                  if (cat.type === "category") {
                    href = `/${cat.slug}`;
                  } else if (cat.type === "subcategory") {
                    href = `/${cat.categorySlug}/${cat.slug}`;
                  }

                  return (
                    <Link key={index} href={href}>
                      <li className="cursor-pointer text-sm text-blue-700 hover:underline">
                        {cat.name}
                      </li>
                    </Link>
                  );
                })
              )}
            </ul>
          </div>

          <div className="w-2/3">
            <h3 className="text-sm font-semibold text-gray-600 mb-3">
              Produkttreffer
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {filteredProducts.length === 0 ? (
                <div>Keine Produkte gefunden</div>
              ) : (
                filteredProducts.slice(0, 4).map((p) => (
                  <Link
                    key={p.id}
                    href={`/${p.categorySlug}/${p.subcategorySlug}/${p.id}`}
                  >
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
                ))
              )}
            </div>

            <div className="text-right mt-4">
              <Link href={"/search"}>
                <button className="text-sm text-blue-600 hover:underline">
                  Alle Ergebnisse anzeigen
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
