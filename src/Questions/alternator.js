function alternator(f1, f2) {
  let curr = true;
  return () => {
    curr ? (f1(), (curr = false)) : (f2(), (curr = true));
  };
}

const l = console.log;
const a = () => l("1");
const b = () => l("2");

const k = alternator(a, b);
for (let i = 0; i < 15; i++) {
  k();
}
