import { objectAssign } from "../src/objectAssign";

test("objectAssign function should mix object with another one", () => {
  const a = { a: "AAkey", c: "ACkey" };
  const b = { b: "BBkey", c: "BCkey" };

  const result = objectAssign(a, b);
  expect(result).toEqual({ a: "AAkey", b: "BBkey", c: "BCkey" });
});
