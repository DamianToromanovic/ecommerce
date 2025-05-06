"use client";
import Image from "next/image";

export default function BrandLogos() {
  const brands = [
    "/images/brands/villeroy-boch.png",
    "/images/brands/duravit.jpg",
    "/images/brands/vitra.jpg",
    "/images/brands/grohe.png",
    "/images/brands/laguna.png",
    "/images/brands/laufen.png",
    "/images/brands/nordholm.jpg",
  ];
  return (
    <div className="py-1">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-center items-center gap-6 px-4">
        {brands.map((src, index) => (
          <div key={index} className="w-28 h-16  transition">
            <Image
              src={src}
              alt={`Brand ${index + 1}`}
              width={512}
              height={64}
              className="object-contain"
            ></Image>
          </div>
        ))}
      </div>
      <div className="max-w-6xl mx-auto mt-4 px-4">
        <p className="text-right text-sm text-blue-600 cursor-pointer hover:underline">
          Unsere Marken →
        </p>
      </div>
    </div>
  );
}
