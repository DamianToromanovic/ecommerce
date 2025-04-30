import categories from "./categories.js";

const allCategories = categories.flatMap((c) => c.subcategories);
