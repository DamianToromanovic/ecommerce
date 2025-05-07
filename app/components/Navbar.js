"use client";

import Link from "next/link";
import { useCartStore } from "../store/cartStore.js";
import SearchBar from "./SearchBar.js";
import categories from "../lib/categories.js";
import Image from "next/image.js";

export default function Navbar() {
  const { getTotalQuantity } = useCartStore();

  return (
    <header className="w-full shadow">
      <div className="bg-gray-100 px-4 py-4 sm:px-8">
        <div className="flex sm:flex-row justify-between items-center gap-4 w-full">
          <Link
            href="/"
            className="flex flex-col text-blue-700 hover:opacity-80"
          >
            <Image
              src="/logo/BadeWelt Logo.png"
              alt="Badezimmer-Welt Logo"
              width={140}
              height={50}
              className="object-contain h-46 w-auto"
              priority
            />
          </Link>

          <SearchBar />

          <div className="flex justify-end gap-4 text-2xl text-gray-600">
            <span className="cursor-pointer hover:text-blue-600" title="Profil">
              👤
            </span>
            <span
              className="cursor-pointer hover:text-blue-600"
              title="Merkliste"
            >
              ❤️
            </span>
            <Link href="/cart" className="relative" title="Warenkorb">
              <span className="cursor-pointer hover:text-blue-600">🛒</span>
              {getTotalQuantity() > 0 && (
                <span className="absolute top-0 left-4 bg-blue-100 border-2 border-blue-600 text-blue-600 text-xs px-2 py-0.5 rounded-full font-medium">
                  {getTotalQuantity()}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>

      <nav className="flex overflow-x-auto justify-center gap-4 sm:gap-10 bg-gray-200 py-3 text-md font-semibold">
        {categories.map((c, i) => (
          <Link
            className="hover:text-blue-600 transition-colors"
            key={i}
            href={`/${c.slug}`}
          >
            {c.title}
          </Link>
        ))}
      </nav>

      <div className="bg-orange-500 text-white text-center py-2 text-sm font-semibold flex flex-wrap justify-center items-center gap-4">
        <span>% SALE - Badmöbel zusätzlich rabattiert</span>
        <button className="bg-white text-orange-600 px-3 py-1 rounded-md text-xs hover:bg-orange-100 transition">
          Jetzt sparen
        </button>
      </div>
    </header>
  );
}
