// Given a string, write a function to check if it is a permutation of
// a palindrome. A palindrome is a word or phrase that is the same forwards and backwards.
// A permutation is a rearrangement of letter. The palindrome does not
// need to be limited to just dictionary words

//Approach
// We can push charactes into hash map counter. If all even or all even and just
// one odd, then it can be palindrome

function palindromePerm(str){
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      continue;
    }
    if (obj[str[i].toLowerCase()] !== undefined) {
      obj[str[i].toLowerCase()] += 1;
    }else {
      obj[str[i].toLowerCase()] = 1;
    }
  }
  let odd = 0;
  for(let key in obj){
    if (obj[key] % 2 === 1) {
      odd += 1;
    }
  }
  if (odd > 1) {
    return false;
  }else {
    return true;
  }
}

let str = "Tact Coa";
// True since permutations will be "taco cat", "atco cta"
let x = palindromePerm(str);
console.log(x);
