const {log:l} = console;
/** downward fashion */
function fact(n) {
  switch(n){
    case Number.isNaN(Number(n)):
      throw new Error('argument is not a number');
    case 0 >= n:
      throw new Error('argument is smaller than 0');
    case n !== Math.floor(n):
      throw new Error('argument is smaller than 0');
    default:
      const innerFact = (n) => n ===0 ? 1: n * fact(n-1)
      return innerFact(n);
  }
}

function upward_fact(n,m=1){

  switch(n){
    case Number.isNaN(Number(n)):
      throw new Error('argument is not a number');
    case 0 >= n:
      throw new Error('argument is smaller than 0');
    case n !== Math.floor(n):
      throw new Error('argument is smaller than 0');
    default:
      const innerFact = () => n === m ? n : m * upward_fact(n, m+1)
      return innerFact(n);
  }
}

l(fact(5))

l(upward_fact(5))
