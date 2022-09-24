/**
 *
 * 원하는 인자를 취하도록 변환하는 함수.
 *
 * unary는 하나의 인자만을 받아 넘겨받은 함수에 함수값을 넣어준다.
 *
 * @example
 * [1,2,3].map(parseInt) // => [1, NaN, NaN]
 * [1,2,3].map(unary(parseInt) // => [1, 2, 3]
 *  */
export function unary(f) {
  return typeof f === "function" && f.length === 1 ? f : (arg) => f(arg);
}
