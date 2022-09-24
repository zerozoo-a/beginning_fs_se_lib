import { unless } from "../src/unless";

test("unless function will execute callback function when predicate is false", () => {
  const fn = jest.fn().mockImplementation(() => "good for you!");
  unless(false, fn);

  expect(fn).toHaveBeenCalled();
  expect(fn).toHaveBeenCalledTimes(1);
});
