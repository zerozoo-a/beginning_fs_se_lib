"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports.every = every;

require("core-js/modules/web.dom-collections.iterator.js");

/**
 * predicate 함수의 값이 false인 경우 result의 값이 false로 변경되어
 * 다음 predicate 함수의 값이 true일지라도 result의 값이 false이기 때문에 전체를 검사하는 것과 같다.
 *  */
function every(array, predicate) {
  let result = true;

  for (const a of array) {
    result = result && predicate(a);
  }

  return result;
}
