export function forEachObject(obj, f) {
  for (const property in obj) {
    if (obj.hasOwnProperty(property)) {
      f(property, obj[property]);
    }
  }
}
