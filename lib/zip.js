"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.zip = zip;

function zip(leftArray, rightArray, f) {
  if (!Array.isArray(leftArray) || !Array.isArray(rightArray) || !(typeof f === "function")) {
    throw new Error("arguments type error");
  }

  let index,
      result = [];

  for (index = 0; index < Math.min(leftArray.length, rightArray.length); index++) {
    result.push(f(leftArray[index], rightArray[index]));
  }

  return result;
}