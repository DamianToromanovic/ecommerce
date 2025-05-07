"use client";
import { notFound } from "next/navigation";
import products from "../../../lib/flatProducts.js";

import ImageGallery from "../../../components/ImageGallery.js";
import { useCartStore } from "@/app/store/cartStore.js";
import ProductTabs from "../../../components/ProductTabs.js";
import { useState } from "react";
import { use } from "react";

export default function ProductDetailPage({ params }) {
  const { category, subcategory, id } = use(params);
  const { addToCart, increaseQuantity, decreaseQuantity } = useCartStore();
  const [added, setAdded] = useState();
  const [quantity, setQuantity] = useState(1);

  const handleAdd = () => {
    addToCart({ ...product, quantity });
    setAdded(true);
    setTimeout(() => setAdded(false), 450);
  };

  const product = products.find(
    (p) =>
      p.id === id && p.category === category && p.subcategory === subcategory
  );

  if (!product) {
    notFound();
  }

  return (
    <>
      <div className="w-1/2 mx-auto bg-orange-100 border border-orange-300 text-center  py-2 mb-4 rounded-sm mt-4">
        <span className="text-sm text-orange-700 font-medium">
          Sparen Sie jetzt 5% mit dem Code:
          <span className="font-bold">hsk5</span>
        </span>
      </div>

      <main className="w-full lg:flex lg:flex-col lg:justify-center px-8 mx-auto">
        <div className="flex flex-col lg:flex-row lg:justify-center gap-8">
          <div className="w-full max-w-screen-lg mx-auto flex flex-col lg:flex-row gap-8 px-4 mt-6">
            <ImageGallery images={product.images} />
          </div>

          <div className="w-full  rounded-lg p-6 space-y-5">
            <h2 className="text-3xl font-bold text-blue-700 ">
              {product.name}
            </h2>

            <p className="text-gray-600 text-sm  mb-1 ">
              {product.description}
            </p>

            <p className="text-sm text-gray-400 line-through mb-2">
              {product.oldPrice ? `${product.oldPrice} €` : ""}{" "}
            </p>

            <p className="text-2xl text-blue-600  font-bold mb-6">
              {product.price} €
            </p>

            <p className="text-gray-600 text-sm  mb-3 ">
              alle Preise inkl. 19% MwSt.
            </p>

            <p className="text-gray-600 text-sm  mb-2 font-semibold ">
              Versandkostenfrei innerhalb Deutschlands
            </p>

            <div className="flex items-center gap-2 mb-4">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="px-2 py-1 border cursor-pointer"
              >
                -
              </button>
              <span>{quantity}</span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="px-2 py-1 border cursor-pointer"
              >
                +
              </button>
            </div>
            <div className="flex flex-col gap-4 max-w-3xs">
              <button
                onClick={handleAdd}
                className={`px-4 py-2 rounded w-full transition cursor-pointer 
    ${added ? "bg-green-600" : "bg-blue-700 hover:bg-blue-800"} 
    text-white`}
              >
                {added ? "✔ Hinzugefügt" : "In den Warenkorb"}
              </button>

              <div className="grid grid-cols-2 gap-2">
                <button className="flex items-center justify-center gap-2  py-2 border rounded-md text-gray-700 bg-gray-300 shadow-sm hover:bg-gray-100 transition cursor-pointer">
                  <span>Artikel merken</span>
                </button>

                <button className="flex items-center justify-center gap-2   py-2 border rounded-md text-gray-700 shadow-sm hover:bg-gray-100 bg-gray-300 transition cursor-pointer">
                  <span>Fragen zum Produkt</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <ProductTabs />
      </main>
    </>
  );
}
