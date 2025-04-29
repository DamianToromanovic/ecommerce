"use client";

import CategorySidebar from "../components/CategorySidebar.js";
import ProductGrid from "../components/ProductGrid.js";
import categories from "../lib/categories.js";
import products from "../lib/flatProducts.js";
import Link from "next/link";

export default function DuschenPage() {
  const duschenCategory = categories.find((cat) => cat.slug === "duschen");

  const duschenProducts = products.filter(
    (product) => product.category === "duschen"
  );

  return (
    <div className="px-8 py-8">
      <div className="flex justify-center mb-8">
        <img
          src="/images/hero/hero1.jpeg"
          alt="Duschen Banner"
          className="w-[80%] h-[350px] object-cover rounded-md"
        />
      </div>

      <div className="flex px-8">
        <CategorySidebar activeCategory="duschen" />

        <main className="flex-1 px-8">
          <h2 className="text-3xl font-bold mb-8 text-blue-700 text-center">
            Duschen
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
            {duschenCategory.subcategories.map((sub) => (
              <Link
                key={sub.slug}
                href={`/produkte/duschen/${sub.slug}`}
                className="flex flex-col items-center hover:opacity-90"
              >
                <img
                  src={`/images/products/${sub.slug}.jpg`}
                  alt={sub.name}
                  className="w-[100px] h-[100px] object-contain mb-2 bg-white rounded shadow"
                />
                <p className="text-sm text-center">{sub.name} →</p>
              </Link>
            ))}
          </div>

          <ProductGrid products={duschenProducts} />
        </main>
      </div>
    </div>
  );
}
