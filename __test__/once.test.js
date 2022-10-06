import { once } from "../src/once";

describe("once", () => {
  test("function should work only once", () => {
    const fn = jest
      .fn()
      .mockImplementationOnce(() => "1")
      .mockImplementationOnce(() => "2");
    const result = once(fn);

    expect(result()).toBe("1");
    expect(result()).toBe(undefined);
  });
});
