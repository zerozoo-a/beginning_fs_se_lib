export function objectAssign(target, source) {
  let to = {};

  for (let i = 0; i < arguments.length; i++) {
    let from = arguments[i];
    let keys = Object.keys(from);
    for (let j = 0; j < keys.length; j++) {
      to[keys[j]] = from[keys[j]];
    }
  }
  return to;
}
