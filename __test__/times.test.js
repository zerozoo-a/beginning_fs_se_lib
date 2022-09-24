import { times } from "../lib/times";

test("times run callback function n times", () => {
  const callback = jest.fn();
  times(2, callback);
  expect(callback).toHaveBeenCalledTimes(2);
  expect(callback).toHaveBeenCalled();
});
