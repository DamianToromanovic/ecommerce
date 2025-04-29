import Link from "next/link";
import categories from "../lib/categories.js"; // passe den Pfad an je nach deinem Projekt

export default function ProductCard({ product }) {
  const category = categories.find((cat) => cat.slug === product.category);
  const subcategory = category?.subcategories.find(
    (sub) => sub.slug === product.subcategory
  );

  const imageUrl = subcategory?.image || "/images/products/default.jpg";

  return (
    <Link href={`/produkte/${product.category}/${product.id}`}>
      <div className="border p-4 rounded-lg hover:shadow-md transition cursor-pointer">
        <img
          src={imageUrl}
          alt={product.name}
          className="w-full h-48 object-cover rounded-md mb-4"
        />
        <h2 className="text-lg font-bold">{product.name}</h2>
        <p className="text-gray-600">{product.price} €</p>
      </div>
    </Link>
  );
}
