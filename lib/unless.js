"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unless = unless;

function unless(predicate, f) {
  if (!predicate) {
    f();
  }
}