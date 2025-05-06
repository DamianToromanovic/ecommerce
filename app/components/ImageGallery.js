"use client";
import { useState, useEffect } from "react";

export default function ImageGallery({ images = [] }) {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  useEffect(() => {
    setSelectedImage(images[0]);
  }, [images]);

  return (
    <div className="flex gap-4">
      <div className="flex flex-col gap-2">
        {images.slice(0, 5).map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Thumbnail ${index + 1}`}
            onClick={() => setSelectedImage(img)}
            className="w-full h-20 object-cover rounded-md mb-2"
          ></img>
        ))}
      </div>

      <div>
        <img
          src={selectedImage}
          alt="Selected"
          className="w-[500px] h-[400px] object-cover rounded shadow"
        ></img>
      </div>
    </div>
  );
}
