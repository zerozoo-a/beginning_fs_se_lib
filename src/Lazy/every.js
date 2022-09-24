function* every(array, predicate) {
  for (const a of array) {
    if (predicate(a)) {
      yield true;
    } else {
      yield false;
      break;
    }
  }
}

export { every };
