"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.concatAll = concatAll;

require("core-js/modules/web.dom-collections.iterator.js");

function concatAll(array) {
  let result = [];

  for (const a of array) {
    Array.isArray(a) ? result.push.apply(result, a) : result.push(a);
  }

  return result;
}