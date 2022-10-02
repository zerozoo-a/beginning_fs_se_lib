export function Maybe(value) {
  this.value = value;
}

/**
 * const a = Maybe.of(1)
 * // => Maybe {
 * value: 1,
 * isNothing: [Function],
 * map: [Function],
 * join: [Function]
 * }
 *  */

Maybe.of = function (value) {
  return new Maybe(value);
};

Maybe.prototype.isNothing = function () {
  return this.value === null || this.value === undefined;
};

Maybe.prototype.map = function (f) {
  return this.isNothing() ? Maybe.of(null) : Maybe.of(f(this.value));
};

/**
 * const a = Maybe.of(Maybe.of(1))
 * const b = a.join() // => Maybe { value: 5 }
 * */
Maybe.prototype.join = function () {
  return this.isNothing() ? Maybe.of(null) : this.value;
};
