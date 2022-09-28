import { curry } from "./curry";
import { concatAll } from "./concatAll";
import { partial } from "./partial";
import { zip } from "./zip";
import { identity } from "./identity";
import { every } from "./every";
import { reduce } from "./reduce";
import { take } from "./Lazy/take";
import { times, timesReturn } from "./times";
import { filter } from "./filter";
import { objectAssign } from "./objectAssign";
import { factorial } from "./memoize";
import { memoize } from "./memoize";
import { unary } from "./unary";
import { unless } from "./unless";
import { forEach } from "./forEach";
import { forEachObject } from "./forEachObject";
import { compose } from "./compose";
import { map } from "./map";

const f = {
  map,
  curry,
  concatAll,
  compose,
  forEach,
  partial,
  zip,
  identity,
  every,
  reduce,
  take,
  times,
  timesReturn,
  filter,
  objectAssign,
  factorial,
  memoize,
  unary,
  unless,
  forEachObject,
};
export { f };
