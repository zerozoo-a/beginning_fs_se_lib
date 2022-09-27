import { objectAssign } from "../objectAssign";
import { partial } from "../partial";
import { f } from "../index";

let obj = { foo: "bar", bar: "foo" };
const partial_json = f.partial(JSON.stringify, undefined, null, 2);

const res2 = partial_json(obj);
const res3 = partial_json({ bar: "foo", foo: "bar" });
const res4 = partial_json({ ab: "c", de: "f" });
console.log("res2 >", res2);
console.log("res3 >", res3);
console.log("res4 >", res4);
