function* times(n=0,f){
  let i = 0;
  while(i < n){
    ++i;
    yield f(i);
  }
}

export {times}
