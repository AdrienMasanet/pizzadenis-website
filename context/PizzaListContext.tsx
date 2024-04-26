import Pizza from "@/interfaces/Pizza";
import PizzaListFilters from "@/interfaces/PizzaListFilters";
import pizzas from "@/data/pizzas";
import { createContext, useState, useEffect } from "react";

export const PizzaListContext = createContext<{
  allPizzaList: Pizza[];
  filteredPizzaList: Pizza[];
  pizzaListFilters: PizzaListFilters;
}>({
  allPizzaList: [],
  filteredPizzaList: [],
  pizzaListFilters: {
    name: "",
    base: "all",
    vegetarianOnly: false,
    containsMeat: false,
    containsSeaFood: false,
  },
});
export const PizzaListUpdateContext = createContext({
  setPizzaListFilters: (pizzaListFilters: PizzaListFilters) => {},
});

export const PizzaListProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [allPizzaList, setAllPizzaList] = useState<Pizza[]>(pizzas);
  const [pizzaListFilters, setPizzaListFilters] = useState<PizzaListFilters>({
    name: "",
    base: "all",
    vegetarianOnly: false,
    containsMeat: false,
    containsSeaFood: false,
  });
  const [filteredPizzaList, setFilteredPizzaList] =
    useState<Pizza[]>(allPizzaList);

  // Filter all existing pizzas based on the current filters when they change
  useEffect(() => {
    setFilteredPizzaList(
      allPizzaList.filter((pizza) => {
        if (
          pizzaListFilters.name &&
          !pizza.name
            .toLowerCase()
            .includes(pizzaListFilters.name.toLowerCase())
        ) {
          return false;
        }
        if (
          pizzaListFilters.base &&
          pizzaListFilters.base != "all" &&
          !pizza.base.name
            .toLowerCase()
            .includes(pizzaListFilters.base.toLowerCase())
        ) {
          return false;
        }
        if (
          pizzaListFilters.vegetarianOnly &&
          !pizza.ingredients.every(
            (ingredient) => !ingredient.isMeat && !ingredient.isSeafood,
          )
        ) {
          return false;
        }
        if (
          pizzaListFilters.containsMeat &&
          !pizza.ingredients.some((ingredient) => ingredient.isMeat)
        ) {
          return false;
        }
        if (
          pizzaListFilters.containsSeaFood &&
          !pizza.ingredients.some((ingredient) => ingredient.isSeafood)
        ) {
          return false;
        }
        return true;
      }),
    );
  }, [allPizzaList, pizzaListFilters]);

  return (
    <PizzaListContext.Provider
      value={{ allPizzaList, pizzaListFilters, filteredPizzaList }}
    >
      <PizzaListUpdateContext.Provider value={{ setPizzaListFilters }}>
        {children}
      </PizzaListUpdateContext.Provider>
    </PizzaListContext.Provider>
  );
};
