import { notFound } from "next/navigation";
import CategorySidebar from "../components/CategorySidebar.js";
import categories from "../lib/categories.js";
import Link from "next/link";
import ProductGrid from "../components/ProductGrid.js";
import products from "../lib/flatProducts.js";

export default function CategoryPage({ params }) {
  const { category } = params;

  const categoryObj = categories.find((c) => c.slug === category);

  const currentCategory = categories.find((cat) => cat.slug === category);
  if (!currentCategory) return notFound();
  const categoryProducts = products.filter(
    (product) => product.category === category
  );

  return (
    <div className="px-8 py-8 max-w-screen-xl mx-auto">
      <div className="flex justify-center mb-8">
        <img
          src="/images/hero/hero5.avif"
          alt={`${category} Banner`}
          className="w-full max-w-[1200px] h-[350px] object-cover rounded-md shadow-xl"
        />
      </div>

      <div className="flex gap-8 ">
        <CategorySidebar activeCategory={category} />

        <main className="flex-1 ">
          <div className="text-center mb-10 max-w-[800px] mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-blue-700 text-center">
              {category.name}
            </h2>

            <p className="text-gray-600 leading-relaxed max-w-[800px]">
              Hier finden Sie Badmöbel und Zubehör von Markenherstellern zu
              fairen Preisen. Vom einzelnen Badschrank oder Spiegel bis zum
              kompletten Badmöbel-Set finden Sie in unserem Online-Shop alles
              für Ihr Badezimmer.Mithilfe der folgenden Übersicht können Sie
              Ihre Suche bereits grob eingrenzen. Natürlich stehen wir Ihnen bei
              Fragen zum Thema Badezimmermöbel sowie bei allen anderen Fragen
              rund um das Thema Bad gerne auch telefonisch zur Seite.
            </p>
          </div>

          <div className="grid gap-8 mt-10 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {categoryObj.subcategories.map((sub) => (
              <Link
                key={sub.slug}
                href={`/${category}/${sub.slug}`}
                className="relative block group shadow-md rounded-md px-2 overflow-hidden transition"
              >
                <img
                  src={sub.image}
                  alt={sub.name}
                  className="w-full h-40 object-cover"
                />
                <p className="absolute bottom-0 w-full bg-gray-200 text-gray-800 text-center text-sm py-2 group-hover:bg-gray-300 transition font-serif">
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
