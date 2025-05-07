"use client";
import { useState, useEffect } from "react";

export default function ImageGallery({ images = [] }) {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  useEffect(() => {
    setSelectedImage(images[0]);
  }, [images]);

  return (
    <div className="flex flex-col gap-6 ">
      <div className="flex justify-center items-center w-full ">
        <img
          src={selectedImage}
          alt="Selected"
          className="w-full max-w-[800px] h-auto object-cover rounded shadow"
        />
      </div>

      <div className="flex  gap-2  overflow-x-auto ">
        {images.slice(0, 5).map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Thumbnail ${index + 1}`}
            onClick={() => setSelectedImage(img)}
            className={`cursor-pointer w-20 h-20 object-cover rounded-md border-2 ${
              selectedImage === img ? "border-blue-600" : "border-transparent"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
