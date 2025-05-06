import ProductCard from "./ProductCard";

export default function ProductGrid({ products }) {
  return (
    <>
      <h2 className="text-2xl font-bold text-center text-orange-800 mt-12 mb-6 font-serif">
        Unsere Bestseller
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}
