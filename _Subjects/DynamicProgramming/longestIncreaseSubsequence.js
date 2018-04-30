// Let us discuss Longest Increasing Subsequence (LIS) problem as an
// example problem that can be solved using Dynamic Programming.
// The Longest Increasing Subsequence (LIS) problem is to find the length
// of the longest subsequence of a given sequence such that all elements
// of the subsequence are sorted in increasing order. For example, the
// length of LIS for {10, 22, 9, 33, 21, 50, 41, 60, 80} is 6 and LIS is
// {10, 22, 33, 50, 60, 80}.
//
// Input  : arr[] = {3, 10, 2, 1, 20}
// Output : Length of LIS = 3
// The longest increasing subsequence is 3, 10, 20
//
// Input  : arr[] = {3, 2}
// Output : Length of LIS = 1
// The longest increasing subsequences are {3} and {2}
//
// Input : arr[] = {50, 3, 10, 7, 40, 80}
// Output : Length of LIS = 4
// The longest increasing subsequence is {3, 7, 40, 80}


//recursive solution
let max;

function _lis(arr, size){
  if (arr.length <= 1) {
    return arr.length;
  }
  let maxEndHere = 1;
  for (let i = 1; i < size; i++) {
    let res = _lis(arr,i);
    if (arr[i-1] < arr[size-1] && res+1 > maxEndHere) {
      maxEndHere  = res + 1;
    }
  }
  max = Math.max(max, maxEndHere);
  return maxEndHere;
}

function lis(arr){
  max = 1;
  _lis(arr,arr.length);
  return max;
}

// let arr = [10 , 22 , 9 , 33 , 21 , 50 , 41 , 60];
// let x = lis(arr);
// console.log(`The longest increasing subsequence is ${x}. Uses recursion`);

//DP - overlapping substructure - tabulation method
function lis2(arr){
  let result = [];
  if (arr.length === 0) {return 0;}
  for (let i = 0; i < arr.length; i++) {
    result.push(1);
  }
  // set up the tabulation table
  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      // Save the result to LIS if it is greater then the previous + 1 (incrementing)
      if (arr[i] > arr[j] && result[j] + 1 > result[i]) {
        result[i] = result[j] + 1;
      }
    }
  }
  return Math.max(...result);
}

let arr = [10 , 22 , 9 , 33 , 21 , 50 , 41 , 60];
let x = lis2(arr);
// console.log(x);
console.log(`The longest increasing subsequence is ${x}. Uses DP - Overlapping Substructures`);
