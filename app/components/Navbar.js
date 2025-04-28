"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-primary text-background px-6 py-4 flex justify-between items-center">
      {/* Logo */}
      <div className="text-2xl font-bold">BadezimmerShop</div>

      {/* Navigation Links */}
      <div className="flex gap-6 text-sm font-semibold">
        <Link href="/home" className="hover:text-accent transition-colors">
          Home
        </Link>
        <Link href="/produkte" className="hover:text-accent transition-colors">
          Produkte
        </Link>
        <Link href="/kontakt" className="hover:text-accent transition-colors">
          Kontakt
        </Link>
        <Link href="/warenkorb" className="hover:text-accent transition-colors">
          Warenkorb
        </Link>
        <Link href="/login" className="hover:text-accent transition-colors">
          Login
        </Link>
      </div>
    </nav>
  );
}
