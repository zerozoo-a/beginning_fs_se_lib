export function Maybe(value) {
  this.value = value;
}
Maybe.of = function (value) {
  return new Maybe(value);
};

Maybe.prototype.isNothing = function () {
  return this.value === null || this.value === undefined;
};

Maybe.prototype.map = function (f) {
  return this.isNothing() ? Maybe.of(null) : Maybe.of(f(this.value));
};
