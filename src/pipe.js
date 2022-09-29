import { go } from "./go";

export function pipe(f, ...fns) {
  return (...as) => {
    return Array.isArray(as[0])
      ? go(f(...as[0]), ...fns)
      : go(f(...as), ...fns);
  };
}
