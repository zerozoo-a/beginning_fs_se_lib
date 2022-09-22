import {L} from "../Lazy/index.js";
import {unless} from "../unless";
import {forEach} from "../forEach";
import {times} from "../times";

const k = L.times(5,console.log)
console.log(k.next());
console.log(k.next());
console.log(k.next());

times(5,console.log)

forEach([1,2,3,4,5],(n)=>{
  unless(n % 2, ()=>console.log('number is even',n))
})

