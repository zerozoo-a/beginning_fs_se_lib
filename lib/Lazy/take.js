"use strict";

require("core-js/modules/es.promise.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.take = take;

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.symbol.description.js");

function* take(length, iterable) {
  const iterator = iterable[Symbol.iterator]();
  let cur = null;

  while (length-- > 0 && (cur = iterator.next()).done === false) {
    yield cur.value;
  }
}