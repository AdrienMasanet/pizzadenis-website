import Pizza from "@/interfaces/Pizza";
import PizzaMenuItem from "./PizzaMenuItem";

type MenuProps = {
  pizzas: Pizza[];
};

const Menu = ({ pizzas }: MenuProps) => {
  return (
    <div className="">
      <p className="text-center text-xs white-outline my-5">{pizzas.length < 1 ? "Pas de pizza trouvée avec ces filtres de recherche" : pizzas.length + " pizzas"}</p>
      <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {pizzas.map((pizza, index) => (
          <PizzaMenuItem pizza={pizza} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Menu;
