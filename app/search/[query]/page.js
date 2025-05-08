import ProductGrid from "../../components/ProductGrid.js";
import products from "../../lib/flatProducts.js";
import CategorySidebar from "../../components/CategorySidebar.js";

export default function Page({ params }) {
  const { query } = params;

  const matchingProducts = products.filter((p) =>
    p.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="px-8 py-8 max-w-screen-xl mx-auto">
      <div className="flex justify-center mb-8">
        <img
          src="/images/hero/hero1.jpeg"
          alt={`Banner`}
          className="w-full max-w-[1200px] h-[350px] object-cover rounded-md shadow-xl"
        />
      </div>

      <div className="flex gap-8">
        <CategorySidebar />

        <section className="flex-1 px-8">
          <h2 className="text-3xl font-bold mb-8 text-blue-700 text-center">
            Folgende Ergebnisse wurden gefunden
          </h2>

          {matchingProducts.length === 0 ? (
            <p className="text-center text-gray-600">
              Leider keine passenden Produkte gefunden.
            </p>
          ) : (
            <ProductGrid products={matchingProducts} />
          )}
        </section>
      </div>
    </div>
  );
}
