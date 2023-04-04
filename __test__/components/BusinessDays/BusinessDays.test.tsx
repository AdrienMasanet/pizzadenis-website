import BusinessDays from "@/components/BusinessDays/BusinessDays";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

// Mock the businessdays data
jest.mock("@/data/businessDays", () => {
  return jest.requireActual("@/mocks/data/businessDaysMock");
});

describe("components | BusinessDayItem", () => {
  beforeEach(() => {
    render(<BusinessDays />);
  });

  it("should render 7 days", () => {
    expect(screen.getAllByRole("row")).toHaveLength(7);
  });
});
