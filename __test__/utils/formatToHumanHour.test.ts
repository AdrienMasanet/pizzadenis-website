import formatToHumanHour from "@/utils/formatToHumanHour";

describe("utils | formatToHumanHour", () => {
  it("should return a string", () => {
    expect(typeof formatToHumanHour(21.52)).toBe("string");
  });

  it("should format 12.45 to 12:45", () => {
    expect(formatToHumanHour(12.45)).toBe("12:45");
  });

  it("should format 9.3 to 09:30 by adding a leading zero", () => {
    expect(formatToHumanHour(9.3)).toBe("09:30");
  });

  it("should format 18.0 to 18:00 by adding trailing zeros even if the number is an integer", () => {
    expect(formatToHumanHour(18)).toBe("18:00");
  });

  it("should format 14.37241 to 14:37 by rounding the number to the nearest integer below", () => {
    expect(formatToHumanHour(14.37241)).toBe("14:37");
  });

  it("should format 14.37641 to 14:38 by rounding the number to the nearest integer above", () => {
    expect(formatToHumanHour(14.37641)).toBe("14:38");
  });
});
