import Link from "next/link";

export default function ProductCard({ product }) {
  const imageUrl = product.image;
  console.log(product);

  return (
    <Link href={`/${product.category}/${product.subcategory}/${product.id}`}>
      <div className="rounded-md hover:shadow-xl border-transparent border bg-white relative mt-6 transition cursor-pointer p-3  hover:border-t-2 hover:border-blue-500">
        {/* product image */}
        <img
          src={imageUrl}
          alt={product.name}
          className="w-full h-56 object-contain mb-3 mt-4"
        />

        {/* product name + description */}
        <div className=" text-center space-y-2">
          <h2 className="text-base font-semibold text-gray-800 font-serif">
            {product.name}
          </h2>
          <p className="text-xs text-gray-500">{product.description}</p>

          {/* size section */}
          <div className="flex justify-center gap-4 text-xs text-gray-700 my-2">
            <span>
              <b>B</b>
              {product.width}
            </span>

            <span>
              <b>T</b>
              {product.depth}
            </span>
          </div>

          {/* price section */}

          <div className="text-center mt-2">
            {product.oldPrice && (
              <p className="line-through text-gray-400  text-sm">
                {product.oldPrice.toFixed(2)} €{" "}
              </p>
            )}
          </div>
          <p className="text-blue-600 font-bold ">ab {product.price} €</p>
        </div>

        {/* Discount badge */}
        {product.discount && (
          <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-1.5 py-0.5 rounded">
            -{product.discount}%
          </div>
        )}

        {/* Bottom gray bar */}
        <div className="w-full text-center text-sm text-gray-600 bg-gray-100 py-2 border-t mt-2">
          Weitere Varianten
        </div>
      </div>
    </Link>
  );
}
