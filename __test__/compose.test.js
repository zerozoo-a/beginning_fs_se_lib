import { compose } from "../src/compose";

test("compose function should compose the functions", () => {
  const add2 = (a) => 2 + a;
  const square = (a) => a * a;

  expect(compose(square, add2)(1)).toEqual(9);
  expect(() => compose(square, add2)(1, 3)).toThrow(
    "arguments can only available one argument"
  );
});
