function times(n = 0, f) {
  for (let i = 0; i < n; i++) {
    f(i);
  }
}

function timesReturn(n = 0, f) {
  const result = [];
  for (let i = 0; i < n; i++) {
    result.push(f(i));
  }
  return result;
}
export { times, timesReturn };
