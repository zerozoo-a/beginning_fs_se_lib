import { reduce } from "./reduce";
import { pipe1 } from "./pipe1";

export function go(a, ...iter) {
  return reduce(pipe1, a, iter);
}
