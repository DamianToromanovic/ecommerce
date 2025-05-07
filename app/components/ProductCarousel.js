"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import categories from "../lib/products";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import allProducts from "../lib/flatProducts";
import { Navigation } from "swiper/modules";

export default function ProductCarousel() {
  const products = allProducts;

  return (
    // Parent wrapper made relative so arrows can be positioned absolutely inside it
    <section className=" relative py-10 px-6 max-w-7xl mx-auto">
      <h2 className="flex items-center gap-4 text-2xl font-bold text-center justify-center mb-10">
        <span>Unsere Empfehlungen </span>
        <span className="flex-1 h-px bg-gray-300"></span>
      </h2>

      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-lg transition duration-300">
              <div className="relative w-full h-64">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover w-full h-full "
                />
              </div>
              <div className="bg-gray-200 text-center py-2">
                <h3 className=" font-medium text-2xl text-center font-serif mb-2 group-hover-text-accent  ">
                  {product.name}
                </h3>
                <p className="text-gray-500 text-sm mb-4">
                  {product.description}
                </p>
                <p className="text-lg font-semibold text-primary text-blue-700">
                  {product.price.toFixed(2)} €
                </p>
                <Link
                  href={`/${product.category}/${product.subcategory}/${product.id}`}
                  className="mt-4 bg-gray-100 border rounded-2xl inline-block bg-primary  px-4 py-2 hover:bg-primary/90 transition"
                >
                  Details ansehen →
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* custom right-left arrow button */}
      <div className="custom-prev absolute top-1/2 left-2 -translate-y-1/2 z-10  text-black w-10 h-10 flex items-center justify-center rounded-md shadow-md cursor-pointer hover:bg-gray-200 ">
        ⬅️
      </div>
      <div className="custom-next absolute top-1/2 right-2 -translate-y-1/2 z-10  text-black w-10 h-10 flex items-center justify-center rounded-md shadow-md cursor-pointer hover:bg-gray-200 ">
        ➡️
      </div>
    </section>
  );
}
