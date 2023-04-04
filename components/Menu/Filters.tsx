import usePizzaList from "@/hooks/usePizzaList";
import { useEffect, useRef } from "react";

const Filters = () => {
  const { pizzaListFilters, setPizzaListFilters } = usePizzaList();
  const nameInput = useRef<HTMLInputElement>(null);
  const baseInput = useRef<HTMLSelectElement>(null);
  const vegetarianOnlyInput = useRef<HTMLInputElement>(null);
  const containsMeatInput = useRef<HTMLInputElement>(null);
  const containsSeaFoodInput = useRef<HTMLInputElement>(null);

  // Retrieve the current filters state from the context if they has been set previously
  useEffect(() => {
    nameInput.current!.value = pizzaListFilters.name || "";
    baseInput.current!.value = pizzaListFilters.base || "all";
    vegetarianOnlyInput.current!.checked = pizzaListFilters.vegetarianOnly || false;
    containsMeatInput.current!.checked = pizzaListFilters.containsMeat || false;
    containsSeaFoodInput.current!.checked = pizzaListFilters.containsSeaFood || false;
  }, [pizzaListFilters]);

  return (
    <div className="w-full my-8 px-4 py-2 flex flex-row gap-2 items-center flex-wrap justify-evenly md:justify-between bg-white rounded-lg border border-black/20 shadow-md">
      <input ref={nameInput} className="w-full md:w-auto px-2 py-1 rounded-lg border border-black/20 shadow-md" type="text" placeholder="Recherche" onChange={() => setPizzaListFilters({ ...pizzaListFilters, name: nameInput.current!.value })} />
      <select ref={baseInput} defaultValue={"all"} className="w-full md:w-auto px-2 py-1 rounded-lg border border-black/20 shadow-md" name="base" onChange={() => setPizzaListFilters({ ...pizzaListFilters, base: baseInput.current!.value })} data-testid="base-select">
        <option value="all">Toutes les bases</option>
        <option value="Base tomate">Base tomate</option>
        <option value="Base crème fraîche">Base crème fraîche</option>
      </select>
      <div className="px-2 py-1 select-none cursor-pointer rounded-lg border border-black/20 shadow-md">
        <input
          ref={vegetarianOnlyInput}
          className="mr-2"
          type="checkbox"
          name="vegetarian"
          id="vegetarian"
          onChange={(e) => {
            setPizzaListFilters({ ...pizzaListFilters, containsMeat: false, containsSeaFood: false, vegetarianOnly: vegetarianOnlyInput.current!.checked });
          }}
        />
        <label className="cursor-pointer" htmlFor="vegetarian">
          Végétarienne
        </label>
      </div>
      <div className="px-2 py-1 select-none cursor-pointer rounded-lg border border-black/20 shadow-md">
        <input
          ref={containsMeatInput}
          className="mr-2"
          type="checkbox"
          name="containsMeat"
          id="containsMeat"
          onChange={(e) => {
            setPizzaListFilters({ ...pizzaListFilters, vegetarianOnly: false, containsMeat: containsMeatInput.current!.checked });
          }}
        />
        <label className="cursor-pointer" htmlFor="containsMeat">
          Avec viande
        </label>
      </div>
      <div className="px-2 py-1 select-none cursor-pointer rounded-lg border border-black/20 shadow-md">
        <input
          ref={containsSeaFoodInput}
          className="mr-2"
          type="checkbox"
          name="containsSeafood"
          id="containsSeafood"
          onChange={(e) => {
            setPizzaListFilters({ ...pizzaListFilters, vegetarianOnly: false, containsSeaFood: containsSeaFoodInput.current!.checked });
          }}
        />
        <label className="cursor-pointer" htmlFor="containsSeafood">
          Avec fruits de mer
        </label>
      </div>
    </div>
  );
};

export default Filters;
