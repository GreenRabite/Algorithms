// There are three types of edits that can be performed on strings
// insert a character, remove a chacter, replace a character. Given two
// strings, write a function to check if they are one edit or zero edits away

// example
// pale, ple = true
// pales, pale = true
// pale, bale = true
// pale, bake = false



function oneAway(str1,str2){
  let short = "";
  let long = "";
  let answer;
  if (str1.length === str2.length +1) {
    long = str1;
    short = str2;
    answer = insert(short,long);
    return answer;
  }else if (str2.length === str1.length +1) {
    short = str1;
    long = str2;
    answer = insert(short,long);
    return answer;
  }else if(str1.length === str2.length) {
    answer = replace(str1,str2);
    return answer;
  }else {
    return false;
  }
}

function insert(short,long){
  let shortArr = short.split("").sort();
  let longArr = long.split("").sort();
  let trigger = false;
  let j = 0;
  for (let i = 0; i < shortArr.length; i++) {
    if (longArr[j] !== shortArr[i]) {
      if (trigger === true) {
        return false;
      }
      trigger = true;
      j+=1;
    }
    j+=1;
  }
  return true;
}

function replace(str1,str2){
  let count = 0;
  let str1Hash = {};
  let str2Hash = {};
  for (let i = 0; i < str1.length; i++) {
    if (str1Hash[str1[i]] !== undefined) {
      str1Hash[str1[i]] += 1;
    }else {
      str1Hash[str1[i]] = 1;
    }
    if (str2Hash[str2[i]] !== undefined) {
      str2Hash[str2[i]] += 1;
    }else {
      str2Hash[str2[i]] = 1;
    }
  }
  let temp;
  console.log("str1Hash",str1Hash);
  console.log("str2Hash",str2Hash);
  for(let ch in str1Hash){
    if (str1Hash[ch] !== str2Hash[ch]) {
      count+=1;
      temp = ch;
    }
  }
  for(let ch in str2Hash){
    if (str1Hash[ch] !== str2Hash[ch]) {
      count+=1;
    }
  }
  console.log(count);
  if (count > 2) {
    return false;
  }
  return true;
}

let str1 = "pale";
let str2 = "leab";

let x = oneAway(str1,str2);
console.log(x);
