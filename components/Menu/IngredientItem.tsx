import Ingredient from "@/interfaces/Ingredient";

type IngredientItemProps = {
  ingredient: Ingredient;
};

const IngredientItem = ({ ingredient }: IngredientItemProps) => {
  return (
    <span
      className={`rounded m-1 bg-stone-50/70 px-2 py-1 text-sm shadow-md ${ingredient.isOptional ? "border-black border border-dashed" : ""}`}
      title={`${ingredient.isOptional ? "Ingrédient optionnel : vous pouvez demander à ne pas en mettre dans votre pizza !" : ""}`}
    >
      {ingredient.name}
    </span>
  );
};

export default IngredientItem;
