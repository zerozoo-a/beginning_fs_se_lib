import { objectAssign } from "../objectAssign";
import { partial } from "../partial";
import { f } from "../index";
const { log: l } = console;

const add = (a, b) => a + b;
const mult = (a, b) => a * b;

let double = (x) => x + x;
// l(f.Container.of(3).map(double).map(double).map(double).map(double));

l(f.Container.of(f.Container.of(3)));
