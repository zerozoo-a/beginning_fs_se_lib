import { every } from "../lib/every";

test("every take array and callback fn then define every element of array is true or false", () => {
  const testArray = [0, 1];
  const fn = jest
    .fn()
    .mockImplementationOnce(false)
    .mockImplementationOnce(true);

  every(testArray, fn);
  expect(fn).toHaveBeenCalledTimes(1);
  expect(fn).toHaveBeenCalled();
});
