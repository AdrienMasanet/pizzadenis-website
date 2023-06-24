import { render, screen, act } from "@testing-library/react";
import "@testing-library/jest-dom";
import CurrentlyOpen from "@/components/CurrentlyOpen/CurrentlyOpen";
import useCurrentlyOpen from "@/hooks/useCurrentlyOpen";

// Mock the useCurrentlyOpen hook
jest.mock("@/hooks/useCurrentlyOpen");
const mockedUseCurrentlyOpen = useCurrentlyOpen as jest.Mock;

describe("components | CurrentlyOpen", () => {
  beforeEach(() => {
    // Clear all instances and calls to the mock
    mockedUseCurrentlyOpen.mockClear();
  });

  it("should render the component with the correct message", () => {
    // Set up the mock implementation for the hook
    mockedUseCurrentlyOpen.mockImplementation(() => [true, "Currently open!"]);

    const renderedComponent = render(<CurrentlyOpen />);

    expect(screen.getByText("Currently open!")).toBeInTheDocument();
    expect(renderedComponent).toMatchSnapshot();
  });

  it("should update the opening status and message every 10 seconds", () => {
    // Use fake timers to control the setInterval function
    jest.useFakeTimers();

    mockedUseCurrentlyOpen.mockImplementation(() => [true, "Currently open!"]);

    render(<CurrentlyOpen />);

    // Move the timer forward by 20 seconds
    act(() => {
      jest.advanceTimersByTime(1000 * 10);
    });

    // Check if the useCurrentlyOpen hook was called twice (initial render and after 20 seconds)
    expect(mockedUseCurrentlyOpen).toHaveBeenCalledTimes(2);

    // Restore the real timers
    jest.useRealTimers();
  });

  it("should apply the 'neon-borders' class when the store is open", () => {
    mockedUseCurrentlyOpen.mockImplementation(() => [true, "Currently open!"]);

    render(<CurrentlyOpen />);

    const divElement = screen.getByTestId("container");
    expect(divElement).toHaveClass("neon-borders");
  });

  it("should not apply the 'neon-borders' class when the store is closed", () => {
    mockedUseCurrentlyOpen.mockImplementation(() => [false, "Currently closed!"]);

    render(<CurrentlyOpen />);

    const divElement = screen.getByTestId("container");
    expect(divElement).not.toHaveClass("neon-borders");
  });
});
