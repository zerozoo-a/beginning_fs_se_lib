"use strict";

require("core-js/modules/es.array.reduce.js");

require("core-js/modules/es.promise.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.f = void 0;

var _curry = require("./curry");

var _concatAll = require("./concatAll");

var _partial = require("./partial");

var _zip = require("./zip");

var _identity = require("./identity");

var _every = require("./every");

var _reduce = require("./reduce");

var _take = require("./Lazy/take");

var _times = require("./times");

var _filter = require("./filter");

var _objectAssign = require("./objectAssign");

var _memoize = require("./memoize");

var _unary = require("./unary");

var _unless = require("./unless");

var _forEach = require("./forEach");

var _forEachObject = require("./forEachObject");

var _compose = require("./compose");

var _map = require("./map");

const f = {
  map: _map.map,
  curry: _curry.curry,
  concatAll: _concatAll.concatAll,
  compose: _compose.compose,
  forEach: _forEach.forEach,
  partial: _partial.partial,
  zip: _zip.zip,
  identity: _identity.identity,
  every: _every.every,
  reduce: _reduce.reduce,
  take: _take.take,
  times: _times.times,
  timesReturn: _times.timesReturn,
  filter: _filter.filter,
  objectAssign: _objectAssign.objectAssign,
  factorial: _memoize.factorial,
  memoize: _memoize.memoize,
  unary: _unary.unary,
  unless: _unless.unless,
  forEachObject: _forEachObject.forEachObject
};
exports.f = f;