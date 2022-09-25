export function reduce(array, f, initialValue) {
  let accumulator;

  initialValue != undefined
    ? (accumulator = initialValue)
    : (accumulator = array[0]);

  if (initialValue === undefined) {
    for (let i = 1; i < array.length; i++) {
      accumulator = f(accumulator, array[i]);
    }
  } else {
    for (const a of array) {
      accumulator = f(accumulator, a);
    }
  }

  return accumulator;
}
