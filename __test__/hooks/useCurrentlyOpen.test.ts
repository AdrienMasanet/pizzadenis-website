import useCurrentlyOpen from "@/hooks/useCurrentlyOpen";

jest.mock("@/data/businessDays", () => {
  return jest.requireActual("@/mocks/data/businessDaysMock");
});

describe("useCurrentlyOpen", () => {
  it("should return correct opening status and message", () => {
    const testCases = [
      {
        // Sunday 5 march 16h29 to test the opening at XXh message
        date: new Date("2023-03-05T16:29:00"),
        expected: [false, "Nous ouvrons à 18:00h !"],
      },
      {
        // Sunday 5 march 16h30 to test the soon opening message
        date: new Date("2023-03-05T16:30:00"),
        expected: [false, "Nous ouvrons bientôt !"],
      },
      {
        // Sunday 5 march 17h29 to test the soon opening message
        date: new Date("2023-03-05T17:29:00"),
        expected: [false, "Nous ouvrons bientôt !"],
      },
      {
        // Sunday 5 march 17h30 to test the very soon opening message
        date: new Date("2023-03-05T17:30:00"),
        expected: [false, "Nous ouvrons très bientôt !"],
      },
      {
        // Sunday 5 march 17h59 to test the very soon opening message
        date: new Date("2023-03-05T17:59:00"),
        expected: [false, "Nous ouvrons très bientôt !"],
      },
      {
        // Sunday 5 march 18h00 to test the open message
        date: new Date("2023-03-05T18:00:00"),
        expected: [true, "Nous sommes ouverts !"],
      },
      {
        // Sunday 5 march 18h47 to test the open message
        date: new Date("2023-03-05T18:47:00"),
        expected: [true, "Nous sommes ouverts !"],
      },
      {
        // Sunday 5 march 19h30 to test the open message
        date: new Date("2023-03-05T19:30:00"),
        expected: [true, "Nous sommes ouverts !"],
      },
      {
        // Sunday 5 march 19h59 to test the open message
        date: new Date("2023-03-05T19:59:00"),
        expected: [true, "Nous sommes ouverts !"],
      },
      {
        // Sunday 5 march 20h00 to test the closing soon message
        date: new Date("2023-03-05T20:00:00"),
        expected: [true, "Nous fermons bientôt (dans 60 minutes) !"],
      },
      {
        // Sunday 5 march 20h29 to test the closing soon message
        date: new Date("2023-03-05T20:29:00"),
        expected: [true, "Nous fermons bientôt (dans 31 minutes) !"],
      },
      {
        // Sunday 5 march 20h30 to test the closing very soon message
        date: new Date("2023-03-05T20:30:00"),
        expected: [true, "Attention, nous fermons très bientôt (dans 30 minutes) !"],
      },
      {
        // Sunday 5 march 20h59 to test the closing very soon message
        date: new Date("2023-03-05T20:59:00"),
        expected: [true, "Attention, nous fermons très bientôt (dans 1 minutes) !"],
      },
      {
        // Sunday 5 march 21h00 to test the closed message on a business day
        date: new Date("2023-03-05T21:00:00"),
        expected: [false, "Nous sommes fermés... Rendez-vous dès mardi à 18:00h !"],
      },
      {
        // Tuesday 7 march 22h45 to test the closed message on a business day but with 2 days off after
        date: new Date("2023-03-07T22:45:00"),
        expected: [false, "Nous sommes fermés... Rendez-vous dès vendredi à 18:00h !"],
      },
      {
        // Wednesday 8 march 09h13 to test the closed message on a day off morning
        date: new Date("2023-03-08T09:13:00"),
        expected: [false, "Nous sommes fermés... Rendez-vous dès vendredi à 18:00h !"],
      },
      {
        // Thursday 9 march 16h46 to test the closed message on a day off morning but with a business day after
        date: new Date("2023-03-09T16:46:00"),
        expected: [false, "Nous sommes fermés... Rendez-vous dès demain à 18:00h !"],
      },
    ];

    testCases.forEach(({ date, expected }) => {
      expect(useCurrentlyOpen(date)).toEqual(expected);
    });
  });

  it("should always return an array containing a boolean and a string", () => {
    const date = new Date("2023-03-05T18:00:00");
    const result = useCurrentlyOpen(date);

    expect(result).toHaveLength(2);
    expect(typeof result[0]).toBe("boolean");
    expect(typeof result[1]).toBe("string");
  });

  it("should use the first businessDays[] array element as the next day if the current day is the last array element of businessDays[]", () => {
    const date = new Date("2023-03-04T23:17:00");
    const result = useCurrentlyOpen(date);

    expect(result).toEqual([false, "Nous sommes fermés... Rendez-vous dès demain à 18:00h !"]);
  });
});
