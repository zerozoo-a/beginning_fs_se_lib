"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.every = every;

require("core-js/modules/web.dom-collections.iterator.js");

function* every(array, predicate) {
  for (const a of array) {
    if (predicate(a)) {
      yield true;
    } else {
      yield false;
      break;
    }
  }
}