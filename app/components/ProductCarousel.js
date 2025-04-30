"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import categories from "../lib/products";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function ProductCarousel() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const featuredProducts = [];

    categories.forEach((category) => {
      category.subcategories.forEach((subcategory) => {
        if (subcategory.products.length > 0) {
          featuredProducts.push(subcategory.products[0]);
        }
      });
    });

    setProducts(featuredProducts);
  }, []);

  return (
    <section className="py-10 px-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10">
        Unsere Empfehlungen
      </h2>

      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-lg transition">
              <div className="relative w-full h-64">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold mb-2 group-hover:text-accent transition">
                  {product.name}
                </h3>
                <p className="text-gray-500 text-sm mb-4">
                  {product.description}
                </p>
                <p className="text-xl font-bold text-primary">
                  {product.price.toFixed(2)} €
                </p>
                <Link
                  href={`/produkte/${product.id}`}
                  className="mt-4 inline-block bg-primary text-white px-4 py-2 rounded hover:bg-primary/90 transition"
                >
                  Details ansehen
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
