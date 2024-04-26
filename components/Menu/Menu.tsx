import Pizza from "@/interfaces/Pizza";
import PizzaMenuItem from "./PizzaMenuItem";

type MenuProps = {
  pizzas: Pizza[];
};

const Menu = ({ pizzas }: MenuProps) => {
  const getResultText = (pizzasLength: number): string => {
    if (pizzasLength < 1) {
      return "Pas de pizza trouvée avec ces filtres de recherche";
    } else if (pizzasLength === 1) {
      return pizzasLength + " pizza";
    } else {
      return pizzasLength + " pizzas";
    }
  };

  return (
    <div className="">
      <p className="text-center text-xs white-outline my-5">
        {getResultText(pizzas.length)}
      </p>
      <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {pizzas.map((pizza, index) => (
          <PizzaMenuItem pizza={pizza} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Menu;
