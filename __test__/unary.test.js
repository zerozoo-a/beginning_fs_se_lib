import { unary } from "../lib/unary.js";

test("unary return function that is only accept one args from another HOC", () => {
  const testing = ["1", "2"].map(unary(parseInt));
  expect(testing).toContain(1, 2);
});
