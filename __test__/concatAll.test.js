import { concatAll } from "../src/concatAll";

test("concatAll function should flatten 2d array", () => {
  let a = [1, [2, 3]];

  const result = concatAll(a); // expected result is [1, 2, 3]
  console.log("result >>>", result);
  expect(result).toEqual([1, 2, 3]);
});
