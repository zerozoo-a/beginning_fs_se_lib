"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.filter = filter;

require("core-js/modules/web.dom-collections.iterator.js");

function filter(array, f) {
  let result = [];

  for (const a of array) {
    f(a) && result.push(a);
  }

  return result;
}