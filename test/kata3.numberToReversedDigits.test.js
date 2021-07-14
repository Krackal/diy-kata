const { numberToReversedDigits } = require("../src");

describe("numberToReversedDigits", () => {
  test("returns a reversed array of the number's digits", () => {
    expect(numberToReversedDigits(12345)).toEqual([5, 4, 3, 2, 1 ]);
  });
  test("returns a reversed array of the number's digits", () => {
    expect(numberToReversedDigits(98765)).toEqual([5, 6, 7, 8, 9 ]);
});
});
