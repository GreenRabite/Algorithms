// Given a sorted (increasing order) array with unique integer elements
// write an algorithm to create a binary search tree with minimal height

function createBinaryTree(arr){
  if (arr.length === 1) {
    return new Node(arr[0]);
  }
  let mid = Math.floor(arr.length / 2);
  let node = new Node(arr[mid]);
  node.left = createBinaryTree(arr.slice(0,mid));
  node.right = createBinaryTree(arr.slice(mid,arr.length));
  return node;
}

function Node(value){
  this.value = value;
  this.left = null;
  this.right = null;
}

let arr = [1,2,3,4,5,6]; //3
let arr2 = [1,2,3,4,5]; //2

let x = createBinaryTree(arr);
let y = createBinaryTree(arr2);

console.log(x);
// console.log(y);
