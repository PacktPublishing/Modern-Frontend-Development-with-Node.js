import { pickSmallestNumber } from "./pure";

it("check if undefined is returned for no input", () => {
  const result = pickSmallestNumber();
  expect(result).toBeUndefined();
});

it("check if a single value is the smallest number", () => {
  const result = pickSmallestNumber(20);
  expect(result).toBe(20);
});

it("check if 1 is smaller than 5", () => {
  const result = pickSmallestNumber(5, 1);
  expect(result).toBe(1);
});

it("check if -1 is smaller than 0 but larger than -5", () => {
  const result = pickSmallestNumber(-1, -5, 0);
  expect(result).toBe(-5);
});
