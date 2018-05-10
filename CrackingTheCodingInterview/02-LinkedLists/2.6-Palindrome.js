// Implement a function to check if a linked list is a palindrome

// Approach: iterate once and store value in an array. Ensure it isnt a cycle.
// Once node.next === null, stop. check array if reverse is equal

function Node(val){
  this.val = val;
  this.next = null;
}

function isPalindrome(node){
  const result = [];
  while (node !== null) {
    result.push(node.val);
    node = node.next;
  }
  return result.join("") === result.slice().reverse().join("");
}

let a1 = new Node(1);
let a2 = new Node(2);
let a3 = new Node(2);
let a4 = new Node(2);

a1.next = a2;
a2.next = a3;
a3.next = a4;

let x = isPalindrome(a1);
console.log(x);
