import { filter } from "../src/filter";

test("filter should filter array", () => {
  const a = [1, 0, 3, 0, 1];
  function predicate(a) {
    return a > 0;
  }

  const res = filter(a, predicate);
  expect(res).toEqual([1, 3, 1]);
});
