import { notFound } from "next/navigation";
import products from "@/lib/flatProducts";

export default function ProductDetailPage({ params }) {
  const { category, id } = params;

  // Das Produkt anhand der ID und Kategorie finden
  const product = products.find((p) => p.id === id && p.category === category);

  // Wenn das Produkt nicht existiert, zeige 404-Seite
  if (!product) {
    notFound();
  }

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Produktbild */}
        <img
          src={product.image}
          alt={product.name}
          className="w-full md:w-1/2 object-contain rounded-lg shadow-md"
        />

        {/* Produktdetails */}
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-blue-700 mb-4">
            {product.name}
          </h1>
          <p className="text-gray-600 mb-6">{product.description}</p>
          <p className="text-2xl font-semibold mb-6">{product.price} €</p>

          <button className="bg-blue-700 text-white px-6 py-3 rounded hover:bg-blue-800 transition">
            In den Warenkorb
          </button>
        </div>
      </div>
    </div>
  );
}
