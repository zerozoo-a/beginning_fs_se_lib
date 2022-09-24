import { every } from "../Lazy/every.js";
import { some } from "../some.js";

const a = [1, 2, 3];
const b = [true, false, false, true];
const predicate = (a) => a > 0;

const res = every(b, (a) => true && a);
const rr = [...res];
console.log("rr", rr);

const aa = some(b, (a) => a);
console.log("aa", aa);
