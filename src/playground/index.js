import { every } from "../Lazy/every.js";

const a = [1, 2, 3];
const b = [true, false, false, true];
const predicate = (a) => a > 0;

const res = every(b, (a) => true && a);
const rr = [...res];
console.log("rr", rr);
