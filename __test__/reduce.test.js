import { reduce } from "../src/reduce";

test("reduce should scale down Array to value", () => {
  const a = [1, 2, 3];

  const result = reduce(a, (a, b) => a + b);

  expect(result).toEqual(6);
});
