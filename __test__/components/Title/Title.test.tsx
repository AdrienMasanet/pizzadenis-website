import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Title from "@/components/Title/Title";

describe("components | Title", () => {
  const testTitles: string[] = [
    "Hello World",
    "Test Title",
    "Title containing many spaces",
    "Title  with   irregular spac     ing",
  ];

  testTitles.forEach((text) => {
    it(`should render the title with correct colors for each character`, () => {
      render(<Title text={text} />);

      const title = screen.getByRole("heading", { level: 1 });

      expect(title).toBeInTheDocument();

      const letters = title.querySelectorAll("span");
      let colorIndex = 0;

      for (let i = 0; i < letters.length; i++) {
        const letter = letters[i];

        if (letter.textContent === " ") {
          continue;
        }

        colorIndex++;

        if (colorIndex % 2 === 0) {
          expect(letter).toHaveClass("text-red-800");
          expect(letter).not.toHaveClass("text-green-800");
        } else {
          expect(letter).toHaveClass("text-green-800");
          expect(letter).not.toHaveClass("text-red-800");
        }
      }
    });
  });
});
