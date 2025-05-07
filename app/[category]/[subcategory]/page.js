import { notFound } from "next/navigation";
import CategorySidebar from "../../components/CategorySidebar.js";
import categories from "../../lib/categories.js";

import ProductGrid from "../../components/ProductGrid.js";
import products from "../../lib/flatProducts.js";

export default function subcategoryPage({ params }) {
  const { category, subcategory } = params;

  const subcategoryObj = categories.find((c) =>
    c.subcategories.find((c) => c === subcategory)
  );

  const currentCategory = categories.find((cat) => cat.slug === category);
  if (!currentCategory) return notFound();
  const subcategoryProducts = products.filter(
    (product) => product.subcategory === subcategory
  );

  return (
    <div className="px-8 py-8 max-w-screen-xl mx-auto">
      <div className="flex justify-center mb-8">
        <img
          src="/images/hero/hero1.jpeg"
          alt={`${subcategory} Banner`}
          className="w-[95%] h-[350px] object-cover rounded-md"
        />
      </div>

      <div className="flex px-8">
        <CategorySidebar activeCategory={category} />

        <main className="flex-1 px-8">
          <h2 className="text-3xl font-bold mb-8 text-blue-700 text-center">
            {subcategory.name}
          </h2>

          <ProductGrid products={subcategoryProducts} />
        </main>
      </div>
    </div>
  );
}
