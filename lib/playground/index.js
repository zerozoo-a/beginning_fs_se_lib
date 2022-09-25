"use strict";

var _objectAssign = require("../objectAssign");

const a = {
  greet: "hello"
};
const b = {
  say: "yes!"
};
const ab = (0, _objectAssign.objectAssign)(a, b);
console.log("ab", ab);