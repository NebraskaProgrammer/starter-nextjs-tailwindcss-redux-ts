import { classNames } from "utils/classNames";

describe("Utility classNames", () => {
  it("processes strings correctly", () => {
    expect(classNames("a", "b", "c")).toBe("a b c");
    expect(classNames("a")).toBe("a");
    expect(classNames("a b c")).toBe("a b c");
    expect(classNames("a b c", "d")).toBe("a b c d");
  });
});
