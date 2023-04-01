import formatToEuroString from "@/utils/formatToEuroString";
import Pizza from "@/interfaces/Pizza";
import Ingredient from "@/interfaces/Ingredient";
import IngredientItem from "./IngredientItem";
import Image from "next/image";

type PizzaMenuItemProps = {
  pizza: Pizza;
};

const PizzaMenuItem = ({ pizza }: PizzaMenuItemProps) => {
  return (
    <div className="relative flex flex-col gap-28 justify-between w-auto p-4 font-roastchicken uppercase rounded-lg border border-black/20 overflow-hidden shadow-md">
      <h3 className="relative z-10 flex flex-row justify-between items-center">
        <p className="rounded m-0 bg-stone-50/70 px-2 py-1 text-xl shadow-sm border border-black/50">{pizza.name}</p>
        <p className="rounded m-0 bg-stone-50/70 px-2 py-1 float-right shadow-sm border border-black/50">
          {pizza.priceSmall && formatToEuroString(pizza.priceSmall)} {pizza.priceBig && "• " + formatToEuroString(pizza.priceBig)}
        </p>
      </h3>
      <div className="relative z-10 flex flex-wrap">
        {pizza.ingredients.map((ingredient: Ingredient, index: number) => (
          <IngredientItem key={index} ingredient={ingredient} />
        ))}
      </div>
      <Image className="object-cover opacity-90" src={`/images/pizzas/${pizza.name.toLowerCase()}.jpeg`} fill alt={`Image de la pizza ${pizza.name}`} />
    </div>
  );
};

export default PizzaMenuItem;
