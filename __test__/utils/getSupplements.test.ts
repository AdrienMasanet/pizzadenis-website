import getSupplements from "@/utils/getSupplements";
import * as allIngredients from "@/data/ingredients";
import Ingredient from "@/interfaces/Ingredient";

// Mock the ingredients data
jest.mock("@/data/ingredients", () => {
  return {
    tomato: { name: "Tomate", priceAsSupplement: 1 },
    cheese: { name: "Fromage", isOptional: true, priceAsSupplement: 1 },
    chicken: { name: "Poulet", isMeat: true, priceAsSupplement: 1.5 },
    tuna: { name: "Thon", isSeaFood: true, priceAsSupplement: 1.5 },
    salmon: { name: "Saumon", isSeaFood: true, priceAsSupplement: null },
  };
});

describe("utils | getSupplements", () => {
  it("should return an object", () => {
    expect(typeof getSupplements()).toBe("object");
  });

  it("should return the correct supplements object structure", () => {
    const supplements = getSupplements();
    const expectedSupplements = {
      "1": [
        { name: "Tomate", priceAsSupplement: 1 },
        { name: "Fromage", isOptional: true, priceAsSupplement: 1 },
      ],
      "1.5": [
        { name: "Poulet", isMeat: true, priceAsSupplement: 1.5 },
        { name: "Thon", isSeaFood: true, priceAsSupplement: 1.5 },
      ],
    };

    expect(supplements).toEqual(expectedSupplements);
  });

  it("should exclude ingredients without a priceAsSupplement", () => {
    const supplements = getSupplements();
    const hasSalmon = supplements["1.5"].some(
      (ingredient: Ingredient) => ingredient.name === "Saumon",
    );

    expect(hasSalmon).toBe(false);
  });
});
