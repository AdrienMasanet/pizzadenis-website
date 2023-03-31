import BusinessDay from "@/interfaces/BusinessDay";
import BusinessDayItem from "@/components/BusinessDays/BusinessDayItem";
import { cleanup, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("components | BusinessDayItem", () => {
  beforeEach(() => {
    const businessDay: BusinessDay = {
      name: "dimanche",
      startHour: 18,
      endHour: 21.31,
    };

    render(
      <table>
        <BusinessDayItem businessDay={businessDay} />
      </table>
    );
  });

  it("should render business day name", () => {
    const businessDayName = screen.getByText("dimanche");
    const closedStatusText = screen.queryByText("Fermé");

    expect(businessDayName).toBeInTheDocument();
    expect(closedStatusText).not.toBeInTheDocument();
  });

  it("should format start hour", () => {
    const businessDayStartHour = screen.getByText("18:00");
    const closedStatusText = screen.queryByText("Fermé");

    expect(businessDayStartHour).toBeInTheDocument();
    expect(closedStatusText).not.toBeInTheDocument();
  });

  it("should format end hour", () => {
    const businessDayEndHour = screen.getByText("21:31");
    const closedStatusText = screen.queryByText("Fermé");

    expect(businessDayEndHour).toBeInTheDocument();
    expect(closedStatusText).not.toBeInTheDocument();
  });

  it('should render "Fermé" when day is off', () => {
    // Remove default render used for ordinary opening hours tests to avoid conflicts
    cleanup();

    // Create a new business day with dayOff set to true
    const closedDay = {
      name: "lundi",
      dayOff: true,
    };

    render(
      <table>
        <BusinessDayItem businessDay={closedDay} />
      </table>
    );

    const closedStatusText = screen.getByText("Fermé");
    const businessDayName = screen.queryByText("dimanche");
    const businessDayStartHour = screen.queryByText("18:00");
    const businessDayEndHour = screen.queryByText("21:31");

    expect(closedStatusText).toBeInTheDocument();
    expect(businessDayName).not.toBeInTheDocument();
    expect(businessDayStartHour).not.toBeInTheDocument();
    expect(businessDayEndHour).not.toBeInTheDocument();
  });
});
