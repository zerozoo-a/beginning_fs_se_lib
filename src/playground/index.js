import { objectAssign } from "../objectAssign";

const a = { greet: "hello" };
const b = { say: "yes!" };

const ab = objectAssign(a, b);
console.log("ab", ab);
