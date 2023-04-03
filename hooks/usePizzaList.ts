import { useContext } from "react";
import { PizzaListContext, PizzaListUpdateContext } from "@/context/PizzaListContext";

const usePizzaList = () => {
  const { allPizzaList, pizzaListFilters, filteredPizzaList } = useContext(PizzaListContext);
  const { setPizzaListFilters } = useContext(PizzaListUpdateContext);

  return { allPizzaList, filteredPizzaList, pizzaListFilters, setPizzaListFilters };
};

export default usePizzaList;
