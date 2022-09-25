"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.map = map;

require("core-js/modules/web.dom-collections.iterator.js");

function map(array, f) {
  let result = [];

  for (const a of array) {
    result.push(f(a));
  }

  return result;
}