import formatToEuroString from "@/utils/formatToEuroString";

describe("utils | formatToEuroString", () => {
  it("should return a string", () => {
    expect(typeof formatToEuroString(100)).toBe("string");
  });

  it("should return a string with euro currency", () => {
    expect(formatToEuroString(100)).toEqual("100,00\xa0€"); // \xa0 is a non-breaking space used in euro currency formatting
  });
});
