// LCS Problem Statement: Given two sequences, find the length of longest
// subsequence present in both of them. A subsequence is a sequence that
// appears in the same relative order, but not necessarily contiguous. For
// example, “abc”, “abg”, “bdf”, “aeg”, ‘”acefg”, .. etc are subsequences
// of “abcdefg”. So a string of length n has 2^n different possible subsequences.
//
// It is a classic computer science problem, the basis of diff (a file
//   comparison program that outputs the differences between two files),
//   and has applications in bioinformatics.
//
// Examples:
// LCS for input Sequences “ABCDGH” and “AEDFHR” is “ADH” of length 3.
// LCS for input Sequences “AGGTAB” and “GXTXAYB” is “GTAB” of length 4.

//Optimal Substructure

function lcs(str1, str2, loc1=str1.length, loc2=str2.length){
  if (loc1 === 0 || loc2 === 0) {
    return 0;
  }else if (str1[loc1 - 1] === str2[loc2 - 1]) {
    return 1 + lcs(str1, str2, loc1 - 1, loc2 - 1 );
  }else {
    return Math.max(lcs(str1, str2, loc1, loc2 - 1), lcs(str1, str2, loc1 -1, loc2));
  }
}

// let str1 = "AGGTAB";
// let str2 = "GXTXAYB";
// let x = lcs(str1, str2);
// console.log(x);

//Overlapping Using Memoization
function lcs2(str1,str2,dp,loc1=str1.length -1, loc2 = str2.length-1){
    console.log(dp);
    if (loc1 +1 === 0 || loc2 +1 === 0) {
      dp[loc1 +1][loc2+1] = 0;
      return dp[loc1+1][loc2+1];
    }else if (str1[loc1] === str2[loc2]) {
      dp[loc1][loc2] = 1 + lcs2(str1, str2, dp, loc1 - 1, loc2 - 1);
      return dp[loc1][loc2];
    }else {
      dp[loc1][loc2] = Math.max(lcs2(str1,str2,dp,loc1,loc2-1),lcs2(str1,str2,dp,loc1-1,loc2));
      return dp[loc1][loc2];
    }
}

function lcs_wrapper(str1,str2){
  let dp = [];
  for (let i = 0; i < str1.length; i++) {
    let temp = [];
    for (let j = 0; j < str2.length; j++) {
      temp.push(null);
    }
    dp.push(temp);
  }
  return lcs2(str1,str2,dp);
}

let str1 = "AGGTAB";
let str2 = "GXTXAYB";
let x = lcs_wrapper(str1,str2);
console.log(x);
