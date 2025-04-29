"use client";

import CategorySidebar from "../components/CategorySidebar";
import ProductGrid from "../components/ProductGrid.js";
import products from "../lib/flatProducts.js";
import categories from "../lib/categories";
import Link from "next/link";

export default function BadmoebelPage() {
  const badmoebelCategory = categories.find((cat) => cat.slug === "badmoebel");
  const badmoebelProducts = products.filter(
    (product) => product.category === "duschen"
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

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {badmoebelCategory.subcategories.map((sub) => (
              <Link
                key={sub.slug}
                href={`/produkte/badmoebel/${sub.slug}`}
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
          <ProductGrid products={badmoebelProducts} />
        </main>
      </div>
    </div>
  );
}

