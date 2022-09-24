import { unless } from "../lib/unless";

test("unless function will execute callback function when predicate is false", () => {
  const fn = jest.fn().mockImplementation(() => "good for you!");
  const fail_fn = jest.fn();
  unless(false, fn);
  expect(fn).toHaveBeenCalled();
  expect(fn).toHaveBeenCalledTimes(1);

  unless(true, fail_fn);
  expect(fail_fn).toHaveBeenCalledTimes(0);
});
