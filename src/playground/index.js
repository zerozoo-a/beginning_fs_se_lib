import { objectAssign } from "../objectAssign";
import { partial } from "../partial";
import { f } from "../index";

// n이 5 이상이고 foo만 가져오시오. // expect: [ "bar_6", "bar_7", "bar_8", "bar_9" ]

const objFact = (n) => ({ foo: `bar_${n}`, bar: `foo_${n}`, n: n });
const a = f.timesReturn(10, objFact);
console.log("a?", a);

const compA = f.partial(f.filter, undefined, (obj) => obj.n > 5);
const compB = f.partial(f.map, undefined, (obj) => obj.foo);
const res = f.compose(compB, compA)(a);
// console.log("res ?", res); // [ "bar_6", "bar_7", "bar_8", "bar_9" ]
