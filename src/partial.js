/**
 * partial(setTimeout, undefined, 1000) (1)
 *
 * partial 함수가 반환하는 함수는 setTimeout에 필요한 인자를 추가적으로 받는다.
 * 내부의 반복문은 나중에 fullArguments를 통해 건네어 받은 인자를 (1)에서
 * 부분적용 했던 함수의 인자 중 undefined를 찾아 바꾸어 준다 아래와 같이.
 *
 * ```js
 * args = [setTimeout, undefined, 1000];
 * // 반복문을 돌며 undefined를 -> 적절한 인자로 변경
 * args = [setTimeout, ()=>console.log('hello'), 1000];
 *
 * f.apply(null, args) // => 필요한 인자가 모두 채워졌으므로 이제 함수 실행!
 * ```
 * */
export function partial(f, ...partialArgs) {
  let args = partialArgs;

  return function (...fullArguments) {
    let arg = 0;
    let argsCopy = [...partialArgs];

    for (let i = 0; i < args.length && arg < fullArguments.length; i++) {
      if (args[i] === undefined) {
        argsCopy[i] = fullArguments[arg++];
      }
    }

    return f.apply(null, argsCopy);
  };
}
