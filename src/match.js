import { curry } from "./curry";

/** expr를 받고, str를 받아 match 함수를 실행합니다. */
const match = curry((expr, str) => {
  return str.match(expr);
});

/** hasNumber 함수는 regexp를 통해 match 함수에 값을 넣어놓은 상태의 함수를 생성*/
const hasNumber = match(/[0-9]+/);

/** predicate 함수로 Array를 filter 합니다. */
const filter = curry(function (predicate, ary) {
  return ary.filter(predicate);
});

/** 이제 fundNumbersInArray는 배열만 받게 되면 작동하는 함수가 된다. */
const findNumbersInArray = filter(hasNumber);
