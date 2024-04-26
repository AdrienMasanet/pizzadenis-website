import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import LocationMap from "@/components/LocationMap/LocationMap";

// Mock the Mapbox library
jest.mock("mapbox-gl", () => ({
  Map: jest.fn(() => ({
    on: jest.fn(),
    remove: jest.fn(),
  })),
}));

describe("components | LocationMap", () => {
  beforeEach(() => {
    render(<LocationMap />);
  });

  it("should render marker which means the map is loaded", () => {
    const marker = screen.getByAltText("Marqueur de carte avec le logo de Pizza Denis");
    expect(marker).toBeInTheDocument();
  });

  it("should open Google Maps link for Pizza Denis in a new tab when clicking on the marker", () => {
    const windowOpenSpy = jest.spyOn(window, "open").mockImplementation(() => null);
    const marker = screen.getByAltText("Marqueur de carte avec le logo de Pizza Denis");

    fireEvent.click(marker);

    expect(windowOpenSpy).toHaveBeenCalledWith(process.env.NEXT_PUBLIC_GOOGLE_MAPS_LINK, "_blank");

    windowOpenSpy.mockRestore();
  });
});
