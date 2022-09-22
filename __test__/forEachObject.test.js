import { forEachObject } from "../src/forEachObject";

test("HOC_forEachObject run n times", () => {
  const fn = jest.fn();

  forEachObject({ a: "A", b: "B" }, fn);
  expect(fn).toHaveBeenCalled();
  expect(fn).toHaveBeenCalledTimes(2);
});
