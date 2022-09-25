export function filter(array, f) {
  let result = [];

  for (const a of array) {
    f(a) && result.push(a);
  }
  return result;
}
