import { generateRandomBetween } from "./generateRandomBetween";

describe("generateRandomBetween", () => {
  it("should return a random number between min and max", () => {
    const min = 1;
    const max = 10;

    const result = generateRandomBetween(min, max);

    expect(result).toBeGreaterThanOrEqual(min);
    expect(result).toBeLessThanOrEqual(max);
  });

  it("should exclude the given number", () => {
    const min = 1;
    const max = 10;
    const exclude = 5;

    const result = generateRandomBetween(min, max, exclude);

    expect(result).not.toBe(exclude);
  });

  it("should return undefined if min and max are equal", () => {
    const min = 1;
    const max = 1;

    const result = generateRandomBetween(min, max);

    expect(result).toBeUndefined();
  });
});
