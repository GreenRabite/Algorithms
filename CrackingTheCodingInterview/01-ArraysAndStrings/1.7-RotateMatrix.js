// Given an image represented by an NxN matrix, where each pixel in the image is
// 4 bytes, write a method to rotate the image by 90 degrees. Can you do this in
// place?
//
// arr = [
//   [1,2,3],
//   [4,5,6],
//   [7,8,9],
// ]
//  should equals
//  arr = [
//    [7,4,1],
//    [8,5,2],
//    [9,6,3]
//  ]

function rotateMatrix(arr){
  let n = arr.length;
  let result = [];
  for (let i = 0; i < n; i++) {
    let temp = [];
    for (let j = n-1; j >= 0; j--) {
      temp.push(arr[j][i]);
    }
    result.push(temp);
  }
  return result;
}

let arr = [
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
    [13,14,15,16]
];

let x = rotateMatrix(arr);
console.log(x);
