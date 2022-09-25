export function map(array, f) {
  let result = [];

  for (const a of array) {
    result.push(f(a));
  }
  return result;
}
