"use client";
import { notFound } from "next/navigation";
import products from "../../../lib/flatProducts.js";
import ImageGallery from "../../../components/ImageGallery.js";
import { useCartStore } from "@/app/store/cartStore.js";
import ProductTabs from "../../../components/ProductTabs.js";
import { useState } from "react";
export default function ProductDetailPage({ params }) {
  const { category, subcategory, id } = params;
  const { addToCart, increaseQuantity, decreaseQuantity } = useCartStore();
  const [added, setAdded] = useState();
  const [quantity, setQuantity] = useState(1);
  const handleAdd = () => {
    addToCart({ ...product, quantity });
    setAdded(true);
    setTimeout(() => setAdded(false), 450);
  };

  const decrease = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    } else return;
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
      <div className="w-full mx-auto bg-orange-100 border border-orange-300 text-center  py-2 mb-4 rounded-sm mt-1">
        <span className="text-sm text-orange-700 font-medium">
          Sparen Sie jetzt 5% mit dem Code:
          <span className="font-bold">hsk5</span>
        </span>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 px-4 md:px-8 max-w-6xl mx-auto">
        <div className="w-full lg:w-[50%]">
          <ImageGallery images={product.images} />
        </div>

        <div className="w-full lg:w-[50%] rounded-lg p-6 space-y-5">
          <h1 className="text-3xl text-center font-bold text-blue-700 font-serif ">
            {product.name}
          </h1>
          <p className="text-gray-600 text-sm  mb-1 ">{product.description}</p>
          <div className="flex justify-center">
            <div className="text-center ">
              {product.oldPrice && (
                <p className="text-sm text-gray-400 line-through mt-2">
                  {product.oldPrice} €
                </p>
              )}
              <p className="text-2xl text-blue-600 font-bold mt-2 ">
                {product.price} €
              </p>
              <p className="text-gray-600 text-sm mb-2 font-semibold">
                Alle Preise inkl. 19% MwSt.
              </p>
              <p className="text-gray-600 text-sm mt-4 font-semibold ">
                Versandkostenfrei innerhalb Deutschlands
              </p>
            </div>
          </div>

          <div className="flex justify-center items-center gap-2 mt-4">
            <button
              onClick={decrease}
              className="px-2 py-1 border cursor-pointer"
            >
              -
            </button>
            <span>{quantity}</span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="px-2 py-1 border cursor-pointer"
            >
              +
            </button>
          </div>

          <button
            onClick={handleAdd}
            className={`px-4 py-2 rounded w-full transition cursor-pointer
    ${added ? "bg-green-600" : "bg-blue-700 hover:bg-blue-800"}
    text-white`}
          >
            {added ? "Hinzugefügt" : "In den Warenkorb"}
          </button>

          <div className="grid grid-cols-2 gap-2 mt-4">
            <button className="flex items-center justify-center gap-2  py-2 border rounded-md text-gray-700 bg-gray-300 shadow-sm hover:bg-gray-200 transition cursor-pointer">
              <span>Artikel merken</span>
            </button>
            <button className="flex items-center justify-center gap-2  py-2 border rounded-md text-gray-700 bg-gray-300 shadow-sm hover:bg-gray-200 transition cursor-pointer">
              <span>Fragen zum Produkt</span>
            </button>
          </div>
        </div>
      </div>

      <div className="mt-10 px-4">
        <ProductTabs />
      </div>
    </>
  );
}
