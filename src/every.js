export function every(array, f) {
  let result = true;
  for (let i = 0; i < array.length; i++) {
    result = result && f(array[i]);
  }
  return result;
}
