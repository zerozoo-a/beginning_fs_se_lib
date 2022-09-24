export function some(array, predicate) {
  let result = false;
  for (const a of array) {
    if (predicate(a)) {
      result = true;
      break;
    }
  }
  return result;
}
