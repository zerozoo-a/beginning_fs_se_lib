/**
 * @example
 * const memoizedFactorial = memoize(factorial);
 * console.log("memozied", memoizedFactorial(5));
 * */
export function memoize(f) {
  const lookupTable = {};

  return function (arg) {
    return lookupTable[arg] || (lookupTable[arg] = f(arg));
  };
}

export function factorial(n) {
  if (n === 0) {
    return 1;
  }

  return n * factorial(n - 1);
}
