"use client";

import Link from "next/link";
import categories from "../lib/categories.js";

export default function CategorySidebar({ activeCategory }) {
  return (
    <aside className="w-[250px] bg-gray-100 p-4 border-r border-gray-300 rounded-md">
      {categories.map((cat) => (
        <div key={cat.slug} className="mb-6">
          <Link href={`/${cat.slug}`}>
            <h2
              className={`text-lg font-bold mb-2 cursor-pointer ${
                cat.slug === activeCategory ? "text-blue-600" : ""
              }`}
            >
              {cat.title}
            </h2>
          </Link>

          {cat.slug === activeCategory && (
            <ul className="space-y-2 text-gray-700 text-sm">
              {cat.subcategories.map((sub) => (
                <li key={sub.slug} className="hover:underline cursor-pointer">
                  <Link href={`/${cat.slug}/${sub.slug}`}>{sub.name}</Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </aside>
  );
}
