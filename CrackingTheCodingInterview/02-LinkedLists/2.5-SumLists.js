// You have two numbers represented by a linked list, where each node contains
// a single digit. The digits are stored in reverse order, such that the 1's
// digit is at the head of the list. Write a function that adds the two
// numbers and returns the sum as a linked list
//
// Example
// Input: ( 7-> 1 -> 6) + (5-> 9 ->2) 617 + 295
// Output: 2 -> 1 -> 9 = 912
//

function Node(val){
  this.val = val;
  this.next = null;
}

function sumLists(nodeA, nodeB){
  const arrA = [];
  const arrB = [];
  while (nodeA !== null) {
    arrA.push(nodeA.val);
    nodeA = nodeA.next;
  }
  while (nodeB !== null) {
    arrB.push(nodeB.val);
    nodeB = nodeB.next;
  }
  let carry=0;
  const result = [];
  console.log(arrA);
  console.log(arrB);
  let value;
  while (arrA.length > 0 && arrB.length > 0) {
    if (carry === 0) {
      value = arrA.shift() + arrB.shift();
    }else{
      value = arrA.shift() + arrB.shift() + carry;
      carry--;
    }
    if (value >= 10) {
      value = value % 10;
      carry ++;
    }
    result.unshift(value);
  }
  while (arrA.length > 0) {
    if (carry === 0) {
      value = arrA.shift();
    }else{
      value = arrA.shift() +  carry;
      carry--;
    }
    result.unshift(value);
  }
  while (arrB.length > 0) {
    if (carry === 0) {
      value = arrB.pop();
    }else{
      value = arrB.pop() +  carry;
      carry--;
    }
    result.unshift(value);
  }
  let newRoot = new Node(result[result.length-1]);
  let sum = newRoot;
  newRoot.next = sum;
  for (let i = result.length-2; i >= 0; i--) {
    sum.next = new Node(result[i]);
    sum = sum.next;
  }
  return newRoot;
}
// Example
// Input: ( 7-> 1 -> 6) + (5-> 9 ->2) 617 + 295
// Output: 2 -> 1 -> 9 = 912

//1234 && 567

let a1 = new Node(1);
let a2 = new Node(2);
let a3 = new Node(3);
let a4 = new Node(4);
let b1 = new Node(5);
let b2 = new Node(6);
let b3 = new Node(7);

a1.next = a2;
a2.next = a3;
a3.next = a4;
b1.next = b2;
b2.next = b3;

let x = sumLists(a1,b1);
console.log(x);

console.log(x.next);
console.log(x.next.next);
