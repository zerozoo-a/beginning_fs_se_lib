function unless(predicate,f){
  if(!predicate){
    f()
  }
}

export {unless}
