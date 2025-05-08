"use client";
import { useState, useEffect } from "react";

export default function ImageGallery({ images = [] }) {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  useEffect(() => {
    setSelectedImage(images[0]);
  }, [images]);

  return (
    <div className="flex flex-col md:flex-row gap-4">
      <div className="flex  md:flex-col gap-2 justify-center md:justify-start">
        {images.slice(0, 5).map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Thumbnail ${index + 1}`}
            onClick={() => setSelectedImage(img)}
            className="w-full h-25 object-cover rounded-md border hover:ring-2 ring-blue-500 cursor-pointer "
          ></img>
        ))}
      </div>

      <div>
        <img
          src={selectedImage}
          alt="Selected"
          className=" w-full max:w-[500px] h-[420px] md:h-[480px ] object-cover rounded shadow"
        ></img>
      </div>
    </div>
  );
}
