const { booleanToWord } = require("../src");

describe("booleanToWord", () => {
  it("returns the word YES when the boolean is true", () => {
    expect(booleanToWord(true)).toBe("YES");
  });
  it("returns the word NO when the boolean is false", () => {
    expect(booleanToWord(false)).toBe("NO");
});
});
