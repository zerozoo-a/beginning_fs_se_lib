import { map } from "../src/map";
test("projecting function map should return changed array", () => {
  const a = [1, 2, 3];
  expect(map(a, (a) => a + 1)).toEqual([2, 3, 4]);
});
