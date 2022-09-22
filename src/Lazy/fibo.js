function* fibo(){
  let first = 0;
  let second = 1;
  while(true){
    let cur = first;
    yield cur;

    first = second;
    second += cur;
  }
}

export {fibo}
