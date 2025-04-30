import rawData from "./products.js";
const allProducts = [];

rawData.forEach((category) => {
  category.subcategories.forEach((subcategory) => {
    subcategory.products.forEach((product) => {
      allProducts.push({
        ...product,
        category: category.id || category.slug,
        subcategory: subcategory.id || subcategory.slug,
      });
    });
  });
});

// Wir gehen die verschachtelte Produktstruktur durch:
// 1. Jede Hauptkategorie (z. B. "Duschen", "Baden") wird durchlaufen.
// 2. Innerhalb jeder Kategorie werden alle Subkategorien (z. B. "Duschkabinen", "Badewannen") durchlaufen.
// 3. Innerhalb jeder Subkategorie werden die einzelnen Produkte durchlaufen.
// 4. Jedes Produkt wird in eine flache Liste (allProducts) eingefügt und bekommt zusätzlich:
//    - den Slug oder die ID der Hauptkategorie (als product.category)
//    - den Slug oder die ID der Subkategorie (als product.subcategory)
// Dadurch entsteht eine flache Produktliste, die leichter zu filtern, zu verlinken und anzuzeigen ist.

export default allProducts;
