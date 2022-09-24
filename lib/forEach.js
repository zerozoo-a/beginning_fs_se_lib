"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.forEach = forEach;

require("core-js/modules/web.dom-collections.iterator.js");

function forEach(array, fn) {
  for (const e of array) {
    fn(e);
  }
}