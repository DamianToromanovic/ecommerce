"use client";
import { notFound } from "next/navigation";
import products from "../../../lib/flatProducts.js";

import ImageGallery from "../../../components/ImageGallery.js";
import { useCartStore } from "@/app/store/cartStore.js";
import ProductTabs from "../../../components/ProductTabs.js";

export default function ProductDetailPage({ params }) {
  const { category, subcategory, id } = params;
  const { addToCart } = useCartStore();
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

      <div className="w-full md:w-[53%] px-8 mx-auto">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex flex-col md:flex-row gap-8 px-8 mx-auto max-w-[1200px] mt-6">
            <ImageGallery images={product.images} />
          </div>

          <div className="w-full md:w-[50%] rounded-lg p-6 space-y-5">
            <h1 className="text-3xl font-bold text-blue-700 ">
              {product.name}
            </h1>

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

            <div className="flex items-center gap-2 mb-4 ">
              <button className="px-2 py-1 border cursor-pointer">-</button>
              <span>1</span>
              <button className="px-2 py-1 border cursor-pointer">+</button>
            </div>

            <button
              onClick={() => addToCart(product)}
              className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800 transition w-full cursor-pointer"
            >
              In den Warenkorb
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
        <ProductTabs />
      </div>
    </>
  );
}
