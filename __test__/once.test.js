import { once } from "../lib/once";
test("if function has been executed ", () => {
  const fn = jest
    .fn()
    .mockImplementationOnce(() => "1")
    .mockImplementationOnce(() => "2");
  const result = once(fn);

  expect(result()).toBe("1");
  expect(result()).toBe(undefined);
});
