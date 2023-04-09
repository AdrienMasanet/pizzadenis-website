interface Ingredient {
  name: string;
  isMeat?: boolean;
  isSeafood?: boolean;
  isOptional?: boolean;
  priceAsSupplement?: number;
}

export default Ingredient;
