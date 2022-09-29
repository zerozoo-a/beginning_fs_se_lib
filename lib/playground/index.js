"use strict";

var _objectAssign = require("../objectAssign");

var _partial = require("../partial");

var _index = require("../index");

// n이 5 이상이고 foo만 가져오시오. // expect: [ "bar_6", "bar_7", "bar_8", "bar_9" ]
const objFact = n => ({
  foo: "bar_".concat(n),
  bar: "foo_".concat(n),
  n: n
});

const a = _index.f.timesReturn(10, objFact);

console.log("a?", a);

const compA = _index.f.partial(_index.f.filter, undefined, obj => obj.n > 5);

const compB = _index.f.partial(_index.f.map, undefined, obj => obj.foo);

const res = _index.f.compose(compB, compA)(a); // console.log("res ?", res); // [ "bar_6", "bar_7", "bar_8", "bar_9" ]