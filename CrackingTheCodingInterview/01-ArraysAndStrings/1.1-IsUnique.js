//Implement an algorithm to determine if a string has all unique characters.
// What if you cannot use additional data structures?

// Used a hash map. time is O(str.length) ~ O(n) space is 0(n)
function isUnique(str){
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    if (obj[str[i]] !== undefined) {
      return false;
    }else {
      obj[str[i]] = true;
    }
  }
  return true;
}

//IF I can't use any data structures, I can do a nested loop which is 0(str.length) ~ O(n^2) time O(1) space
function isUnique2(str){
  for (let i = 0; i < str.length; i++) {
    for (let j = i+1; j < str.length; j++) {
      if (i === j) {
        continue;
      }
      if (str[i] === str[j]) {
        return false;
      }
    }
  }
  return true;
}

let str= "dog";
let x = isUnique(str);
let y = isUnique2(str);

console.log(x);
console.log(y);
