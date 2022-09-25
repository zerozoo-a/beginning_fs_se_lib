import { curry } from "../src/curry";

test("curry should currying function", () => {
  function sum(a, b, c) {
    return a + b + c;
  }

  const curriedSum = curry(sum);
  expect(curriedSum(1)(2)(3)).toEqual(6);

  function noArgs() {
    return true;
  }
  expect(() => curry(noArgs)).toThrowError();
  expect(() => curry(1)).toThrowError();
});
