import Ingredient from "@/interfaces/Ingredient";
import PizzaCategory from "@/interfaces/PizzaBase";

interface Pizza {
  name: string;
  priceSmall: number;
  priceBig: number;
  ingredients: Ingredient[];
  base: PizzaCategory;
}

export default Pizza;
