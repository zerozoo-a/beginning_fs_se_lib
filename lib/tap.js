"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tap = tap;

/**
 * @example
 * tap("hello")((v)=>console.log(v)) // hello
 * */
function tap(value) {
  return function (f) {
    typeof f === "function" && f(value);
  };
}