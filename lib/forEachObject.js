"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.forEachObject = forEachObject;

function forEachObject(obj, f) {
  for (const property in obj) {
    if (obj.hasOwnProperty(property)) {
      f(property, obj[property]);
    }
  }
}