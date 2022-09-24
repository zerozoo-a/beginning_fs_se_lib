"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.times = times;

function times() {
  let n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  let f = arguments.length > 1 ? arguments[1] : undefined;

  for (let i = 0; i < n; i++) {
    f(i);
  }
}