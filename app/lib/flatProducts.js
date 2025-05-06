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

export default allProducts;
