export function reduce(f, acc, iter) {
  if (!iter) {
    iter = acc[Symbol.iterator]();
    acc = iter.next().value;
  }
  console.log("iter", iter);

  for (const a of iter) {
    acc = f(acc, a);
  }

  return acc;
}
