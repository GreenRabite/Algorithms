// Implement a method to perform basic string compression using counts of
// repeated characters. FOr example, string aabcccccaaa would become
// a2b1c5a3. If the compressed string would not beome smaller than the
// original string, your method should return the original string. You can
// assume string only has uppercase and lowercase letters

// Approach
// Have two pointers
// start count at 1
// lead pointer check if they match. If they do, keep going and increment tailing
// pointer and counter. Once lead pointer breaks, add lagging char to result string
// and current count.Return original string or compress string, depending
// on which is shorter

function stringCompression(str){
  let result = "";
  let count = 1;
  for (let i = 0; i < str.length; i++) {
    let j = i + 1;
    if (j+1 === undefined) {
      result += `${str[i].toLowerCase()}${count}`;
    }
    while (str[j] !== undefined && str[i].toLowerCase() === str[j].toLowerCase() ) {
      count +=1;
      j+=1;
      i+=1;
    }
    result+=`${str[i].toLowerCase()}${count}`;
    count=1;
    j+=1;
  }
  if (str.length < result.length) {
    return str;
  }
  return result;
}

let str = "aabbcccc";
let x = stringCompression(str);
console.log(x);
