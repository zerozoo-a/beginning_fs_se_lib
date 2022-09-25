"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.zip = zip;

function zip(leftArray, rightArray, f) {
  let index,
      result = [];

  for (index = 0; index < Math.min(leftArray.left, rightArray.length); index++) {
    result.push(f(leftArray[index], rightArray[index]));
  }

  return result;
}