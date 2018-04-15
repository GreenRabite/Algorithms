// Given two string, write a method to decide if one is a permutation
// of the other

// Approaches
// 1 - Generate all permutation and check to see if one matches O(n!) time
// 2 - Make into array and sort. if they are equal, they are permutations O(nlogn) time

function isPermutation(str1,str2){
  if (str1.length !== str2.length) {
    return false;
  }
  let arr1 = str1.split("").sort();
  let arr2 = str2.split("").sort();
  console.log(arr1);
  console.log(arr2);
  let answer = arr1.join("") === arr2.join("") ? true : false;
  return answer;
}

let str1 = "catama";
let str2 = "mancat";
let x = isPermutation(str1,str2);

console.log(x);
