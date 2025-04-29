"use client";

import CategorySidebar from "../components/CategorySidebar";
import categories from "../lib/categories";
import Link from "next/link";

export default function BadmoebelPage() {
  const badmoebelCategory = categories.find((cat) => cat.slug === "badmoebel");

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

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10">
            {badmoebelCategory.subcategories.map((sub) => (
              <Link
                key={sub.slug}
                href={`/produkte/badmoebel/${sub.slug}`}
                className="flex flex-col items-center shadow-md rounded-b-md p-2 hover:shadow-lg transition"
              >
                <img
                  src={`/images/products/${sub.slug}.jpg`} // Bild nach slug benennen
                  alt={sub.name}
                  className="w-[170px] h-[120px] object-cover rounded-md mb-3"
                />
                <p className="text-sm text-center text-blue-900 font-bold">
                  {sub.name} ➡️
                </p>
              </Link>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

