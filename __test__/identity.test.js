import { identity } from "../src/identity";

test("identity sholud return argument", () => {
  expect(identity(0)).toEqual(0);
});
