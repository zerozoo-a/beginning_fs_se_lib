/**
 * once 함수는 마치 singletone처럼 작동한다.
 *
 * once 함수를 통해 f 함수를 받은 객체는 클로져를 통해 done 변수를 참조하여 이전에 실행한 적이 있다면 undefined를
 * 아니면 실행을 해준다.
 * */

export function once(f) {
  let done = false;

  return function () {
    return done ? undefined : ((done = true), f.apply(this, arguments));
  };
}
