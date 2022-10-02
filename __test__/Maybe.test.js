import { Maybe } from "../src/Maybe";

describe("Maybe is Functor", () => {
  test("Maybe 객체를 new Method로 생성할 수 있다.", () => {
    const a1 = new Maybe(1);
    expect(a1.value).toBe(1);
  });

  test("Maybe 객체를 of Method로 생성할 수 있다.", () => {
    const a2 = Maybe.of(2);
    expect(a2.value).toBe(2);
  });

  test("Maybe 객체를 map으로 정의할 수 있다.", () => {
    const a3 = Maybe.of(3).map((_) => "change");
    expect(a3.value).toBe("change");
  });

  test("Maybe 객체는 nullable한 값에 아무 mapping을 하지 않고 Maybe { value: null }을 반환한다.", () => {
    const a4 = Maybe.of(null).map((_) => "_");
    expect(a4.value).not.toBe(undefined);
    expect(a4.value).not.toBe("_");
    expect(a4.value).toBeNull();
  });

  test("Maybe 객체는 isNothing Method를 통해 Maybe 객체의 value가 nullable 한지 판단한다.", () => {
    const a5 = Maybe.of(null);
    expect(a5.isNothing()).toBeTruthy();
  });

  test("Maybe 객체는 nullable한 객체를 받을 경우 map을 무시한다.", () => {
    const a6 = Maybe.of(null);
    a6.map((_) => true);
    expect(a6.isNothing()).toBeTruthy();
    expect(a6.value).toBeNull();
  });

  test("Maybe 객체의 join 함수는 현재의 값이 nullable 하지 않은 경우 값을 반환한다.", () => {
    const a7 = Maybe.of("A");
    const a7_1 = Maybe.of(null);
    expect(a7.join()).toBe("A");
    expect(a7_1.join().value).toBeNull();
  });

  test("Maybe 객체의 join 함수는 중첩된 Maybe 객체에서 값을 꺼내올 수 있다.", () => {
    const a8 = Maybe.of(Maybe.of("a"));
    expect(a8.join().join()).toBe("a");
  });

  test("Maybe 객체의 join Method는 중첩 단계보다 많은 join은 에러를 발생시킨다.", () => {
    const a9 = Maybe.of("A");
    expect(() => a9.join().join()).toThrow();
  });
});
