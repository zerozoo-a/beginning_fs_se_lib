export function concatAll(array) {
  let result = [];

  for (const a of array) {
    Array.isArray(a) ? result.push.apply(result, a) : result.push(a);
  }

  return result;
}
