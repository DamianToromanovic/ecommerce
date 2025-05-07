"use client";

import Image from "next/image";
import Link from "next/link";

const topCategories = [
  {
    title: "Badmöbel-Sets",
    image: "/images/products/Bad-Set Modern1.jpg",
    link: "badmoebel/badmoebel-sets",
  },
  {
    title: "Waschtische mit Unterschrank",
    image: "/images/products/waschtisch2.jpg",
    link: "/badmoebel/waschtische",
  },
  {
    title: "Spiegelschränke",
    image: "/images/products/spiegelschrank1.jpg",
    link: "/badmoebel/spiegelschraenke",
  },
  {
    title: "Duschkabinen",
    image: "/images/products/duschkabine1.jpg",
    link: "/badmoebel/duschkabinen",
  },
  {
    title: "Duschwannen",
    image: "/images/products/duschwanne1.jpg",
    link: "/badmoebel/duschwannen",
  },
  {
    title: "Badewannen",
    image: "/images/products/badewann1.jpg",
    link: "/badmoebel/badewannen",
  },
];

export default function TopCategories() {
  return (
    <section className="py-5 px-6 max-w-7xl mx-auto">
      <h2 className="flex items-center gap-4 text-2xl font-bold text-center justify-center mb-10">
        <span>Top- Kategories </span>
        <span className="flex-1 h-px bg-gray-300"></span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
        {topCategories.map((category, index) => (
          <Link href={category.link} key={index} className="group block">
            <div className="overflow-hidden rounded-xl shadow-lg bg-gray-300 transition transform group-hover:scale-105">
              <div className="relative h-48 w-full">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover rounded-t-xl"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="bg-gray-200 font-medium  py-2 rounded-xl font-serif ">
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
