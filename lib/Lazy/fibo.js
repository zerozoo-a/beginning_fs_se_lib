"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fibo = fibo;

function* fibo() {
  let first = 0;
  let second = 1;

  while (true) {
    let cur = first;
    first = second;
    second += cur;
    yield cur;
  }
}