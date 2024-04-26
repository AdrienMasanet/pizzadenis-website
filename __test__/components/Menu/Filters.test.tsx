import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Filters from "@/components/Menu/Filters";
import { PizzaListContext } from "@/context/PizzaListContext";
import { PizzaListProvider } from "@/context/PizzaListContext";

describe("components | Filters", () => {
  const renderFilters = () => {
    return render(
      <PizzaListProvider>
        <Filters />
      </PizzaListProvider>,
    );
  };

  it("should render all the filters correctly", () => {
    renderFilters();

    expect(screen.getByPlaceholderText("Recherche")).toBeInTheDocument();
    expect(screen.getByText("Toutes les bases")).toBeInTheDocument();
    expect(screen.getByLabelText("Végétarienne")).toBeInTheDocument();
    expect(screen.getByLabelText("Avec viande")).toBeInTheDocument();
    expect(screen.getByLabelText("Avec fruits de mer")).toBeInTheDocument();
  });

  it("should update filters state when input values change", () => {
    renderFilters();

    fireEvent.change(screen.getByPlaceholderText("Recherche"), {
      target: { value: "Royale" },
    });
    fireEvent.change(screen.getByLabelText("Avec viande"), {
      target: { checked: true },
    });

    expect((screen.getByPlaceholderText("Recherche") as HTMLInputElement).value).toBe("Royale");
    expect((screen.getByLabelText("Avec viande") as HTMLInputElement).checked).toBe(true);
  });

  it("should uncheck 'Avec viande' and 'Avec fruits de mer' when 'Végétarienne' is checked", () => {
    renderFilters();

    fireEvent.click(screen.getByLabelText("Avec viande"));
    fireEvent.click(screen.getByLabelText("Avec fruits de mer"));
    fireEvent.click(screen.getByLabelText("Végétarienne"));

    expect((screen.getByLabelText("Avec viande") as HTMLInputElement).checked).toBe(false);
    expect((screen.getByLabelText("Avec fruits de mer") as HTMLInputElement).checked).toBe(false);
  });

  it("should uncheck 'Végétarienne' when either 'Avec viande' or 'Avec fruits de mer' is checked", () => {
    renderFilters();

    fireEvent.click(screen.getByLabelText("Végétarienne"));
    fireEvent.click(screen.getByLabelText("Avec viande"));

    expect((screen.getByLabelText("Végétarienne") as HTMLInputElement).checked).toBe(false);
  });

  it("should update filters state when select value changes", () => {
    renderFilters();

    fireEvent.change(screen.getByTestId("base-select"), {
      target: { value: "Base tomate" },
    });

    expect((screen.getByTestId("base-select") as HTMLSelectElement).value).toBe("Base tomate");
  });

  it("should set the select value based on pizzaListFilters", () => {
    render(
      <PizzaListContext.Provider
        value={{
          allPizzaList: [],
          filteredPizzaList: [],
          pizzaListFilters: {
            name: "Roy",
            base: "all",
            vegetarianOnly: false,
            containsMeat: true,
            containsSeaFood: true,
          },
        }}
      >
        <Filters />
      </PizzaListContext.Provider>,
    );

    expect((screen.getByPlaceholderText("Recherche") as HTMLInputElement).value).toBe("Roy");
    expect((screen.getByTestId("base-select") as HTMLSelectElement).value).toBe("all");
    expect((screen.getByLabelText("Végétarienne") as HTMLInputElement).checked).toBe(false);
    expect((screen.getByLabelText("Avec viande") as HTMLInputElement).checked).toBe(true);
    expect((screen.getByLabelText("Avec fruits de mer") as HTMLInputElement).checked).toBe(true);
  });

  it("should use defined default values in the component mount if no value is provided in the context", () => {
    render(
      <PizzaListContext.Provider
        value={{
          allPizzaList: [],
          filteredPizzaList: [],
          pizzaListFilters: {} as any,
        }}
      >
        <Filters />
      </PizzaListContext.Provider>,
    );

    expect((screen.getByPlaceholderText("Recherche") as HTMLInputElement).value).toBe("");
    expect((screen.getByTestId("base-select") as HTMLSelectElement).value).toBe("all");
    expect((screen.getByLabelText("Végétarienne") as HTMLInputElement).checked).toBe(false);
    expect((screen.getByLabelText("Avec viande") as HTMLInputElement).checked).toBe(false);
    expect((screen.getByLabelText("Avec fruits de mer") as HTMLInputElement).checked).toBe(false);
  });
});
