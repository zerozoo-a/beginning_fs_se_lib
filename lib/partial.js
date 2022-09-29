"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.partial = partial;

require("core-js/modules/web.dom-collections.iterator.js");

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
function partial(f) {
  for (var _len = arguments.length, partialArgs = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    partialArgs[_key - 1] = arguments[_key];
  }

  let args = partialArgs;
  return function () {
    let arg = 0;
    let argsCopy = [...partialArgs];

    for (let i = 0; i < args.length && arg < arguments.length; i++) {
      if (args[i] === undefined) {
        var _arg;

        argsCopy[i] = (_arg = arg++, _arg < 0 || arguments.length <= _arg ? undefined : arguments[_arg]);
      }
    }

    return f.apply(null, argsCopy);
  };
}