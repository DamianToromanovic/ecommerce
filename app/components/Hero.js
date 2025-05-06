"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const images = [
  "/images/hero/hero4.jpg",
  "/images/hero/hero2.jpg",
  "/images/hero/hero1.jpeg",
  "/images/hero/hero3.jpg",
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full flex justify-center p-6">
      <div className="relative w-full  h-[400px] sm:h-[450px] md:h-[500px] overflow-hidden  shadow-lg ">
        <Image
          src={images[current]}
          alt="Hero Image"
          fill
          className="object-cover w-full h-full transition-all duration-700"
          priority
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center rounded-lg">
          <h1 className="text-3xl  tracking-wide drop-shadow-md sm:text-5xl text-background font-bold text-center">
            Willkommen bei <br className="sm:hidden" /> Badezimmer-Welt
          </h1>
        </div>
      </div>
    </section>
  );
}
