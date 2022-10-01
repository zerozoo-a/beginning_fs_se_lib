const Container = function (value) {
  this.value = value;
};
Container.of = function (value) {
  return new Container(value);
};
Container.prototype.map = function (f) {
  return Container.of(f(this.value));
};

export { Container };
