"use client";

import CategorySidebar from "../components/CategorySidebar";
import ProductGrid from "../components/ProductGrid.js";
import products from "../lib/flatProducts.js";
import categories from "../lib/categories";
import Link from "next/link";

export default function BadmoebelPage() {
  const badmoebelCategory = categories.find((cat) => cat.slug === "badmoebel");
  const badmoebelProducts = products.filter(
    (product) => product.category === "badmoebel"
  );

  return (
    <div className="px-8 py-8">
      <div className="flex justify-center mb-8">
        <img
          src="/images/hero/hero1.jpeg"
          alt="Badmöbel Banner"
          className="w-[80%] h-[350px] object-cover rounded-md"
        />
      </div>

      <div className="flex px-8">
        <CategorySidebar activeCategory="badmoebel" />

        <main className="flex-1 px-8">
          <h2 className="text-3xl font-bold mb-8 text-blue-700 text-center">
            Badmöbel
          </h2>

          <div className="grid gap-8 mt-10 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {badmoebelCategory.subcategories.map((sub) => (
              <Link
                key={sub.slug}
                href={`/produkte/badmoebel/${sub.slug}`}
                className="flex flex-col items-center bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition"
              >
                <img
                  src={sub.image}
                  alt={sub.name}
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
                <p className="text-center text-base font-semibold text-blue-900">
                  {sub.name} →
                </p>
              </Link>
            ))}
          </div>
          <ProductGrid products={badmoebelProducts} />
        </main>
      </div>
    </div>
  );
}
