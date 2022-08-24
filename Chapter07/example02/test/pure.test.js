import { equal } from "assert";
import { pickSmallestNumber } from "../src/pure";

it("check if undefined is returned for no input", () => {
  const result = pickSmallestNumber();
  equal(result, undefined);
});

it("check if a single value is the smallest number", () => {
  const result = pickSmallestNumber(20);
  equal(result, 20);
});

it("check if 1 is smaller than 5", () => {
  const result = pickSmallestNumber(5, 1);
  equal(result, 1);
});

it("check if -1 is smaller than 0 but larger than -5", () => {
  const result = pickSmallestNumber(-1, -5, 0);
  equal(result, -5);
});
