import { notFound } from "next/navigation";
import CategorySidebar from "../components/CategorySidebar.js";
import categories from "../lib/categories.js";
import Link from "next/link";
import ProductGrid from "../components/ProductGrid.js";
import products from "../lib/flatProducts.js";

export default function BadarmaturenPage({ params }) {
  const { category } = params;

  const categoryObj = categories.find((c) => c.slug === category);

  const currentCategory = categories.find((cat) => cat.slug === category);
  if (!currentCategory) return notFound();
  const categoryProducts = products.filter(
    (product) => product.category === category
  );
  console.log("category param:", category);
  console.log("currentCategory:", currentCategory);

  return (
    <div className="px-8 py-8">
      <div className="flex justify-center mb-8">
        <img
          src="/images/hero/hero1.jpeg"
          alt={`${category} Banner`}
          className="w-[80%] h-[350px] object-cover rounded-md"
        />
      </div>

      <div className="flex px-8">
        <CategorySidebar activeCategory={category} />

        <main className="flex-1 px-8">
          <h2 className="text-3xl font-bold mb-8 text-blue-700 text-center">
            {category.name}
          </h2>

          <div className="grid gap-8 mt-10 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {categoryObj.subcategories.map((sub) => (
              <Link
                key={sub.slug}
                href={`/${category}/${sub.slug}`}
                className="flex flex-col items-center bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition"
              >
                <img
                  src={sub.image}
                  alt={sub.name}
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
                <p className="text-center text-base font-semibold text-blue-900">
                  {sub.name} →
                </p>
              </Link>
            ))}
          </div>
          <ProductGrid products={categoryProducts} />
        </main>
      </div>
    </div>
  );
}
