function Nothing(value) {
  this.value = value;
}

Nothing.of = function (value) {
  return new Nothing(value);
};

Nothing.prototype.map = function (f) {
  return this;
};

function Some(value) {
  this.value = value;
}

Some.of = function (value) {
  return new Some(value);
};

Some.prototype.map = function (f) {
  return Some.of(f(this.value));
};

export const Either = {
  Some,
  Nothing,
};
