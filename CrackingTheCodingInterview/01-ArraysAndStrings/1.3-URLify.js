// Write a method to replace all spaces in a string with %20. You may
// assume that the string has sufficient space at the end to hold the additional
// characters, and that you are given the true length of string.

const urlify = (str,k=13) => {
  let wordArr = str.split(" ");
  wordArr = wordArr.filter((e)=>(e));
  let newStr = wordArr.join("%20");
  return newStr;
};

let str = "Mr John Smith  ";
let x = urlify(str,13);
console.log(x);
