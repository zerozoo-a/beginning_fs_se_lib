import { forEach } from "../lib/forEach";

test("forEach run callback function n times", () => {
  const fn = jest.fn();
  forEach([1, 2], fn);
  expect(fn).toHaveBeenCalled();
  expect(fn).toHaveBeenCalledTimes(2);
});
