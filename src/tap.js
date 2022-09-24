/**
 * @example
 * tap("hello")((v)=>console.log(v)) // hello
 * */
export function tap(value) {
  return function (f) {
    typeof f === "function" && f(value);
  };
}
