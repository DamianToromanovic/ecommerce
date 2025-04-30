"use client";

import Link from "next/link";

import SearchBar from "./SearchBar.js";

export default function Navbar() {
  return (
    <nav className="w-full">
      <div className="flex justify-between items-center bg-gray-100 px-8 py-4">
        <Link href="/" className="flex flex-col text-blue-700 hover:opacity-80">
          <div>
            <span className="text-2xl font-bold">Badezimmer-Welt</span>
            <p className="text-xs text-gray-600 mt-1">wir lieben Bäder</p>
          </div>
        </Link>

        <SearchBar />

        <div className="flex gap-6 text-2xl text-gray-600">
          <span className="cursor-pointer hover:text-blue-600">👤</span>
          <span className="cursor-pointer hover:text-blue-600">❤️</span>
          <span className="cursor-pointer hover:text-blue-600">🛒</span>
        </div>
      </div>

      <div className="flex justify-center gap-10 bg-gray-200 py-3 shadow-md text-md font-semibold">
        <Link
          href="/badmoebel"
          className="hover:text-blue-600 transition-colors"
        >
          BADMÖBEL{" "}
        </Link>
        <Link href="/duschen" className="hover:text-blue-600 transition-colors">
          DUSCHEN
        </Link>
        <Link href="/baden" className="hover:text-blue-600 transition-colors">
          BADEN
        </Link>
        <Link
          href="/badheizkoerper"
          className="hover:text-blue-600 transition-colors"
        >
          BADHEIZKÖRPER{" "}
        </Link>
        <Link
          href="/badkeramik"
          className="hover:text-blue-600 transition-colors"
        >
          BADKERAMIK
        </Link>
        <Link
          href="/badarmaturen"
          className="hover:text-blue-600 transition-colors"
        >
          BADARMATUREN
        </Link>
        <Link
          href="/zubehoer"
          className="hover:text-blue-600 transition-colors"
        >
          ZUBEHÖR{" "}
        </Link>
      </div>

      <div className="bg-orange-500 text-white text-center py-2 text-sm font-semibold flex justify-center items-center gap-4">
        <span>% SALE - Badmöbel zusätzlich rabattiert</span>
        <button className="bg-white text-orange-600 px-3 py-1 rounded-md text-xs hover:bg-orange-100 transition">
          Jetzt sparen
        </button>
      </div>
    </nav>
  );
}
