// Write an algorithm such taht if an element in an MxN matrix is 0, its entire
// roow nad column are set to 0


//First approach - iterate through array, tagging the rows and columns
// where it is equal to zero in a set
function zeroMatrix(arr){
  const row = {};
  const column = {};
  for (let r = 0; r < arr.length; r++) {
    for (let c = 0; c < arr[0].length; c++) {
      if (arr[r][c] === 0) {
        row[r] = true;
        column[c] = true;
      }
    }
  }

  for (let r = 0; r < arr.length; r++) {
    if (row[r] === true) {
      for (let c = 0; c < arr[0].length; c++) {
        arr[r][c] = 0;
      }
    }
  }
  for (let c = 0; c < arr[0].length; c++) {
    if (column[c] === true) {
      for (let r = 0; r < arr.length; r++) {
        arr[r][c] = 0;
      }
    }
  }
  return arr;
}

let arr = [
  [1,0,1],
  [0,1,0],
  [1,1,1]
];

let x = zeroMatrix(arr);
console.log(x);
