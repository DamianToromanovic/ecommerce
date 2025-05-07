"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function ImageGallery({ images = [] }) {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  useEffect(() => {
    setSelectedImage(images[0]);
  }, [images]);

  return (
    <div className="flex flex-col gap-6 ">
      <div className="flex justify-center items-center w-full ">
        <div className="w-full max-w-[800px] relative aspect-[4/3]">
          <Image
            src={selectedImage}
            alt={`Produktbild Ansicht`}
            fill
            className="object-cover rounded shadow"
            sizes="(max-width: 800px) 100vw, 800px"
            priority
          />
        </div>
      </div>

      <div className="flex gap-2 overflow-x-auto">
        {images.slice(0, 5).map((img, index) => (
          <button
            key={index}
            className="relative w-20 h-20 cursor-pointer rounded-md border-2 overflow-hidden"
            onClick={() => setSelectedImage(img)}
          >
            <Image
              src={img}
              alt={`Thumbnail ${index + 1}`}
              fill
              className={`object-cover ${
                selectedImage === img ? "border-blue-600" : "border-transparent"
              }`}
              sizes="80px"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
