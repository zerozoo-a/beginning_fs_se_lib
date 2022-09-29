import { curry } from "./curry";

function _map(f, iter) {
  let result = [];

  for (const a of iter) {
    result.push(f(a));
  }
  return result;
}

export const map = curry(_map);
