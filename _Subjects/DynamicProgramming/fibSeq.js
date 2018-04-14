// Find the nth term in the Fibonacchi Sequence

// Using Recursion
// 0,1,1,2,3,5
function fibSeq(n){
  if (n <= 1) { return n; }
  return fibSeq(n-1) + fibSeq(n-2);
}

// console.log(`Using recursion gives you: ${fibSeq(9)}`);

//Using Dynamic Programming

function fibSeq2(n){
  // Set up store
  let store = [0, 1];
  // Set up my base cases
  if (n <= 1 ) {
    return n;
  }else {
    if (store[n-1] === undefined) {
      store[n-1] = fibSeq2(n-1);
    }
    if (store[n-2] === undefined) {
      store[n-2] = fibSeq2(n-2);
    }
    store[n] = store[n-2] + store[n-1];
  }
  return store[n];
}

// console.log(`Using dynamic programming gives you: ${fibSeq2(9)}`);
