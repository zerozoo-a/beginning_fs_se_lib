"use strict";

require("core-js/modules/es.array.reduce.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.compose = compose;

require("core-js/modules/es.array.reverse.js");

var _reduce = require("./reduce");

/**
 * @param ...fns 함수들을 배열 형태로 받습니다.
 * reverse 함수를 이용하여 입력받은 배열을 재배치합니다.
 *
 * v는 compose가 받는 단일 인자입니다. 해당 인자를 reduce의 initialValue로 넘겨줍니다.
 *
 * 첫 루프에서 reduce는 v를 acc라는 인자로써 받게 됩니다. 그 다음은 배열에서 함수를 꺼내와 함수에 (v = acc)를 넣어주겠군요
 *
 * */
function compose() {
  for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }

  return function (v) {
    if (arguments.length !== 1) {
      throw new Error("arguments can only available one argument");
    }

    return (0, _reduce.reduce)(fns.reverse(), (acc, f) => f(acc), v);
  };
}