import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { useContext } from "react";
import { PizzaListProvider, PizzaListContext, PizzaListUpdateContext } from "@/context/PizzaListContext";
import pizzasMock from "@/mocks/data/pizzasMock";

// Mock the pizzas data
jest.mock("@/data/pizzas", () => {
  return jest.requireActual("@/mocks/data/pizzasMock");
});

const TestComponent = () => {
  const { allPizzaList, filteredPizzaList, pizzaListFilters } = useContext(PizzaListContext);
  const { setPizzaListFilters } = useContext(PizzaListUpdateContext);

  return (
    <>
      <div data-testid="allPizzaListCount">{allPizzaList.length}</div>
      <div data-testid="filteredPizzaListCount">{filteredPizzaList.length}</div>
      <div data-testid="pizzaListFilters">{JSON.stringify(pizzaListFilters)}</div>
      <button data-testid="filterButton-search" onClick={() => setPizzaListFilters({ ...pizzaListFilters, name: "pr" })}></button>
      <button data-testid="filterButton-allBases" onClick={() => setPizzaListFilters({ ...pizzaListFilters, base: "all" })}></button>
      <button data-testid="filterButton-tomatoBase" onClick={() => setPizzaListFilters({ ...pizzaListFilters, base: "Base tomate" })}></button>
      <button data-testid="filterButton-creamBase" onClick={() => setPizzaListFilters({ ...pizzaListFilters, base: "Base crème fraîche" })}></button>
      <button data-testid="filterButton-vegetarianOnly" onClick={() => setPizzaListFilters({ ...pizzaListFilters, vegetarianOnly: true })}></button>
      <button data-testid="filterButton-containsMeat" onClick={() => setPizzaListFilters({ ...pizzaListFilters, containsMeat: true })}></button>
      <button data-testid="filterButton-containsSeaFood" onClick={() => setPizzaListFilters({ ...pizzaListFilters, containsSeaFood: true })}></button>
    </>
  );
};

describe("context | PizzaListContext", () => {
  beforeEach(() => {
    render(
      <PizzaListProvider>
        <TestComponent />
      </PizzaListProvider>
    );
  });

  it("should provide all pizzas from data", () => {
    const allPizzaList = screen.getByTestId("allPizzaListCount");

    expect(parseInt(allPizzaList.textContent as string)).toBe(pizzasMock.length);
  });

  it("should provide an initially unfiltered pizza list", () => {
    const filteredPizzaList = screen.getByTestId("filteredPizzaListCount");

    expect(parseInt(filteredPizzaList.textContent as string)).toBe(pizzasMock.length);
  });

  it("should provide the default pizza list filters", () => {
    const pizzaListFilters = screen.getByTestId("pizzaListFilters");
    const expectedFilters = {
      name: "",
      base: "all",
      vegetarianOnly: false,
      containsMeat: false,
      containsSeaFood: false,
    };

    expect(JSON.parse(pizzaListFilters.textContent as string)).toEqual(expectedFilters);
  });

  it("should return prochutto and provencale pizzas when the name filter is set to 'pr'", async () => {
    // Get the count of pizzas with seafood in the mock data
    const expectedFilteredPizzaList = pizzasMock.filter((pizza) => pizza.name.toLowerCase().includes("pr"));
    const expectedFilteredPizzaListCount = expectedFilteredPizzaList.length;

    // Simulate a click on the update filters button
    const updateFiltersButton = screen.getByTestId("filterButton-search");
    fireEvent.click(updateFiltersButton);

    // Wait for the React state to update after the simulated click
    await waitFor(() => {
      const filteredPizzaList = screen.getByTestId("filteredPizzaListCount");
      expect(parseInt(filteredPizzaList.textContent as string)).toBe(expectedFilteredPizzaListCount);
    });
  });

  it("should return all pizzas when the base filter is set to 'all'", async () => {
    // Get the count of pizzas with seafood in the mock data
    const expectedFilteredPizzaList = pizzasMock;
    const expectedFilteredPizzaListCount = expectedFilteredPizzaList.length;

    // Simulate a click on the update filters button
    const updateFiltersButton = screen.getByTestId("filterButton-allBases");
    fireEvent.click(updateFiltersButton);

    // Wait for the React state to update after the simulated click
    await waitFor(() => {
      const filteredPizzaList = screen.getByTestId("filteredPizzaListCount");
      expect(parseInt(filteredPizzaList.textContent as string)).toBe(expectedFilteredPizzaListCount);
    });
  });

  it("should return all pizzas with tomato base when the base filter is set to 'Base tomate'", async () => {
    // Get the count of pizzas with seafood in the mock data
    const expectedFilteredPizzaList = pizzasMock.filter((pizza) => pizza.base.name === "Base tomate");
    const expectedFilteredPizzaListCount = expectedFilteredPizzaList.length;

    // Simulate a click on the update filters button
    const updateFiltersButton = screen.getByTestId("filterButton-tomatoBase");
    fireEvent.click(updateFiltersButton);

    // Wait for the React state to update after the simulated click
    await waitFor(() => {
      const filteredPizzaList = screen.getByTestId("filteredPizzaListCount");
      expect(parseInt(filteredPizzaList.textContent as string)).toBe(expectedFilteredPizzaListCount);
    });
  });

  it("should return all pizzas with cream base when the base filter is set to 'Base crème'", async () => {
    // Get the count of pizzas with seafood in the mock data
    const expectedFilteredPizzaList = pizzasMock.filter((pizza) => pizza.base.name === "Base crème fraîche");
    const expectedFilteredPizzaListCount = expectedFilteredPizzaList.length;

    // Simulate a click on the update filters button
    const updateFiltersButton = screen.getByTestId("filterButton-creamBase");
    fireEvent.click(updateFiltersButton);

    // Wait for the React state to update after the simulated click
    await waitFor(() => {
      const filteredPizzaList = screen.getByTestId("filteredPizzaListCount");
      expect(parseInt(filteredPizzaList.textContent as string)).toBe(expectedFilteredPizzaListCount);
    });
  });

  it("should only return vegetarian pizzas when the vegetarianOnly filter is set to true", async () => {
    // Get the count of vegetarian pizzas in the mock data
    const expectedFilteredPizzaList = pizzasMock.filter((pizza) => !pizza.ingredients.some((ingredient) => ingredient.isMeat || ingredient.isSeafood));
    const expectedFilteredPizzaListCount = expectedFilteredPizzaList.length;

    // Simulate a click on the update filters button
    const updateFiltersButton = screen.getByTestId("filterButton-vegetarianOnly");
    fireEvent.click(updateFiltersButton);

    // Wait for the React state to update after the simulated click
    await waitFor(() => {
      const filteredPizzaList = screen.getByTestId("filteredPizzaListCount");
      expect(parseInt(filteredPizzaList.textContent as string)).toBe(expectedFilteredPizzaListCount);
    });
  });

  it("should only return pizzas with meat when the containsMeat filter is set to true", async () => {
    // Get the count of pizzas with meat in the mock data
    const expectedFilteredPizzaList = pizzasMock.filter((pizza) => pizza.ingredients.some((ingredient) => ingredient.isMeat));
    const expectedFilteredPizzaListCount = expectedFilteredPizzaList.length;

    // Simulate a click on the update filters button
    const updateFiltersButton = screen.getByTestId("filterButton-containsMeat");
    fireEvent.click(updateFiltersButton);

    // Wait for the React state to update after the simulated click
    await waitFor(() => {
      const filteredPizzaList = screen.getByTestId("filteredPizzaListCount");
      expect(parseInt(filteredPizzaList.textContent as string)).toBe(expectedFilteredPizzaListCount);
    });
  });

  it("should only return pizzas with seafood when the containsSeaFood filter is set to true", async () => {
    // Get the count of pizzas with seafood in the mock data
    const expectedFilteredPizzaList = pizzasMock.filter((pizza) => pizza.ingredients.some((ingredient) => ingredient.isSeafood));
    const expectedFilteredPizzaListCount = expectedFilteredPizzaList.length;

    // Simulate a click on the update filters button
    const updateFiltersButton = screen.getByTestId("filterButton-containsSeaFood");
    fireEvent.click(updateFiltersButton);

    // Wait for the React state to update after the simulated click
    await waitFor(() => {
      const filteredPizzaList = screen.getByTestId("filteredPizzaListCount");
      expect(parseInt(filteredPizzaList.textContent as string)).toBe(expectedFilteredPizzaListCount);
    });
  });
});
