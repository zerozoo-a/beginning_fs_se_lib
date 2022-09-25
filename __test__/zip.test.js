import { zip } from "../src/zip";

test("zip function should combine two array with apply function", () => {
  const a = [1, 2, 3];
  const b = [4, 5, 6];
  const result = zip(a, b, (a, b) => a + b);
  expect(result).toEqual([5, 7, 9]);
});
