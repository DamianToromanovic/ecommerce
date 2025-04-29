import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <Link href={`${product.category}/${product.id}`}>
      <div className="border p-4 rounded-lg hover:shadow-md transition cursor-pointer">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover rounded-md mb-4"
        />
        <h2 className="text-lg font-bold">{product.name}</h2>
        <p className="text-gray-600">{product.price} €</p>
      </div>
    </Link>
  );
}
