/**
 * curried함수는 인자를 배열로 받음.
 * e.g. curried(1,2) // => curried([1,2])
 *
 * func.length가 가리키는 것은 curry 할 함수의 인자를 받을 수 있는 총 갯수
 *
 * args는 배열로 취급되기 때문에 배열의 길이가 함수가 받을 수 있는 인자의 길이를 넘어선다면
 * 가변인자 함수 취급하여 apply를 통해 인자를 넣어준다.
 *
 * func가 받아드릴 수 있는 것 보다 더 적은 양의 인자가 들어오게 된다면
 * 클로저를 통해 args와 새로 받은 args2를 concat하여 나머지 인자들을 받게 된다.
 *
 * 여기서 주의 할 점은
 *
 *
 * @example
 *
 * function sum(a, b, c) {
 *   return a + b + c;
 * }
 *
 * let curriedSum = curry(sum);
 *
 * const a = curriedSum(1);
 * a가 받은 값은 분명히 else문에 나오는 return function (...args2){ ... } 이다.
 *
 * 하지만 js 클로저에 의해 curried 함수 자체가 기억되어 인자를 받아드리는 것은 curried 함수에서 부터 받아드리게 된다.
 *
 * @example
 * export function curry(func) {
 *   return function curried(...args) {
 *     console.log("args", args);
 *     if (args.length >= func.length) {
 *       return func.apply(this, args);
 *     } else {
 *       console.log("here?");
 *       return function (...args2) {
 *         return curried.apply(this, args.concat(args2));
 *       };
 *     }
 *   };
 * }
 *
 * function sum(a, b, c) {
 *   return a + b + c;
 * }
 *
 * const curriedSum = curry(sum);
 * const a = curriedSum(1);
 * const b = a(2);
 * console.log("b", b);
 * */
export function curry(f) {
  if (typeof f !== "function") {
    throw new Error("No function provided");
  }
  if (f.length === 0) {
    throw new Error("arguments is no needed");
  }

  return function curried(...args) {
    if (args.length >= f.length) {
      return f.apply(this, args);
    } else {
      return function (...args2) {
        return curried.apply(this, args.concat(args2));
      };
    }
  };
}
