import BusinessDay from "@/interfaces/BusinessDay";
import BusinessDays from "@/components/BusinessDays/BusinessDays";
import businessDaysMock from "@/mocks/data/businessDaysMock";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("components | BusinessDayItem", () => {
  beforeEach(() => {
    jest.mock("@/data/businessDays", () => businessDaysMock);

    render(<BusinessDays />);
  });

  it("should render 7 days", () => {
    expect(screen.getAllByRole("row")).toHaveLength(7);
  });
});
