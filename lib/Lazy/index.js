"use strict";

require("core-js/modules/es.promise.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.L = void 0;

var _fibo = require("./fibo");

var _take = require("./take");

var _times = require("./times");

var _every = require("./every.js");

const L = {
  fibo: _fibo.fibo,
  take: _take.take,
  times: _times.times,
  every: _every.every
};
exports.L = L;