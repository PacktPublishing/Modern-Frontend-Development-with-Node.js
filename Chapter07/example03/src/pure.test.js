import test from 'ava';
import { pickSmallestNumber } from "./pure.js";

test("check if undefined is returned for no input", (t) => {
  const result = pickSmallestNumber();
  t.is(result, undefined);
});

test("check if a single value is the smallest number", (t) => {
  const result = pickSmallestNumber(20);
  t.is(result, 20);
});

test("check if 1 is smaller than 5", (t) => {
  const result = pickSmallestNumber(5, 1);
  t.is(result, 1);
});

test("check if -1 is smaller than 0 but larger than -5", (t) => {
  const result = pickSmallestNumber(-1, -5, 0);
  t.is(result, -5);
});
