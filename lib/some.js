"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.some = some;

require("core-js/modules/web.dom-collections.iterator.js");

function some(array, predicate) {
  let result = false;

  for (const a of array) {
    if (predicate(a)) {
      result = true;
      break;
    }
  }

  return result;
}