// Assume you have a method isSubstring which checks if one word is a substring
// of another. Given two strings, s1 and s2, write code to check if s2 is a
// rotation of s1 using only one call to isSubstring (eg waterbootle is a
// rotation of erbottlewat)

function stringRotation(s1,s2){
  return s1.concat(s1).includes(s2);
}

let s1 = "waterbottle";
let s2 = "erbottleat";
let x = stringRotation(s1,s2);
console.log(x);
