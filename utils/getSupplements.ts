import * as allIngredients from "@/data/ingredients";
import Ingredient from "@/interfaces/Ingredient";

/**
 * Returns all ingredients in an array of objects that contains a price as key and all the corresponding supplements that have this price as value
 * @returns {object[]} The supplements
 */
export default function getSupplements(): Record<string, Ingredient[]> {
  const supplements: Record<string, Ingredient[]> = {};

  for (const ingredient of Object.values(allIngredients) as Ingredient[]) {
    // Only process ingredients that have a price as supplement
    if (ingredient.priceAsSupplement) {
      const price = ingredient.priceAsSupplement.toString();
      if (!supplements[price]) {
        supplements[price] = [];
      }
      supplements[price].push(ingredient);
    }
  }

  return supplements;
}
