function* take(length, iterable){
  const iterator = iterable[Symbol.iterator]()
  let cur = null;
  while (length-- > 0 && (cur = iterator.next()).done === false) {
    yield cur.value;
  }
}
export {take}
