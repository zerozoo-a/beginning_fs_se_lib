"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sortBy = sortBy;

function sortBy(property) {
  return function (a, b) {
    return a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0;
  };
}