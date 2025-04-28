"use client";

import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    title: "Badmöbel-Sets",
    image: "/images/kategorien/badmoebel.jpg",
    link: "/produkte/badmoebel-sets",
  },
  {
    title: "Waschtisch mit Unterschrank",
    image: "/images/kategorien/waschtisch.jpg",
    link: "/produkte/waschtische",
  },
  {
    title: "Duschen",
    image: "/images/kategorien/duschen.jpg",
    link: "/produkte/duschen",
  },
  {
    title: "Badewannen",
    image: "/images/kategorien/badewannen.jpg",
    link: "/produkte/badewannen",
  },
];

export default function TopCategories() {
  return (
    <section className="py-10 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10">Top Kategorien</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <Link href={category.link} key={index} className="group block">
            <div className="overflow-hidden rounded-xl shadow-lg bg-background transition transform group-hover:scale-105">
              <div className="relative h-48 w-full">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover rounded-t-xl"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-sm font-semibold group-hover:text-accent transition">
                  {category.title}
                </h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
