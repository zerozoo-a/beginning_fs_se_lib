"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.factorial = factorial;
exports.memoize = memoize;

/**
 * @example
 * const memoizedFactorial = memoize(factorial);
 * console.log("memozied", memoizedFactorial(5));
 * */
function memoize(f) {
  const lookupTable = {};
  return function (arg) {
    return lookupTable[arg] || (lookupTable[arg] = f(arg));
  };
}

function factorial(n) {
  if (n === 0) {
    return 1;
  }

  return n * factorial(n - 1);
}