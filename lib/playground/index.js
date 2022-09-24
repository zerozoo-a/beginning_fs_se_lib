"use strict";

require("core-js/modules/web.dom-collections.iterator.js");

var _every = require("../Lazy/every.js");

var _some = require("../some.js");

const a = [1, 2, 3];
const b = [true, false, false, true];

const predicate = a => a > 0;

const res = (0, _every.every)(b, a => true && a);
const rr = [...res];
console.log("rr", rr);
const aa = (0, _some.some)(b, a => a);
console.log("aa", aa);