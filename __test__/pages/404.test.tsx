import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import Error404Page from "@/pages/404";
import FooterMock from "@/mocks/components/FooterMock";

describe("page | Error404Page", () => {
  beforeEach(() => {
    render(
      <>
        <Error404Page />
        <FooterMock />
      </>
    );

    const footerElement: HTMLDivElement = document.querySelector("footer") as HTMLDivElement;
    const footerElementHeight: number = parseInt(footerElement.style.height);
    Object.defineProperty(HTMLElement.prototype, "offsetHeight", { configurable: true, value: footerElementHeight });
  });

  it("should render the h1 title", () => {
    const title = screen.getByRole("heading", { level: 1 });

    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent("Oups...");
  });

  it("should render the h2 subtitle", () => {
    const subtitle = screen.getByRole("heading", { level: 2 });

    expect(subtitle).toBeInTheDocument();
    expect(subtitle).toHaveTextContent("Il semblerait que cette page n'existe pas !");
  });

  it("should render the image with correct alt attribute", () => {
    const image = screen.getByAltText("Boîte à pizza vide");
    expect(image).toBeInTheDocument();
  });

  it("should set the min-height of main based on footer height", async () => {
    const mainElement = screen.getByRole("main");

    await waitFor(() => {
      expect(window.getComputedStyle(mainElement).getPropertyValue("min-height")).toEqual("calc(100vh - 100px)");
    });
  });
});
