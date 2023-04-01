import { useContext } from "react";
import { PizzaListContext, PizzaListUpdateContext } from "@/context/PizzaListContext";

const usePizzaList = () => {
  const { allPizzaList, pizzaListFilters, filteredPizzaList } = useContext(PizzaListContext);
  const { setFilteredPizzaList, setPizzaListFilters } = useContext(PizzaListUpdateContext);

  return { allPizzaList, filteredPizzaList, pizzaListFilters, setFilteredPizzaList, setPizzaListFilters };
};

export default usePizzaList;
