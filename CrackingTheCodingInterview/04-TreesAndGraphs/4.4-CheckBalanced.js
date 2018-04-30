// Implement a function to check if a binary tree is balanced. FOr the
// purposes of this question, a balanced tree is defined to be a tree such
// that the heights of the two subtrees  of any node never differ by more
// than one

// Have helper function that checks for height of tree
// Get the max from the left and right part of subtree
// return absolute value of the two tree heights subtract from each other
// Run time of O(nlogn)

//Improvement with checking the tree is balanced at get height, return error if it isnt
// run time of O(H) where H is height of tree

function checkBalanced(root,level=0){
  if (root === null) {return true;}
  let left = getHeight(node.left);
  let right = getHeight(node.right);
  return Math.abs(left - right) <= 1;
}

function getHeight(node){
  if (node === null) { return -1;}
  return Math.max(getHeight(node.left),getHeight(node.right)) + 1;
}

function Node(val){
  this.val = val;
  this.left = null;
  this.right = null;
}

let node = new Node(0);
node.left = new Node(1);
node.right = new Node(2);

node.left.left = new Node(3);
node.left.right = new Node(4);
node.right.left = new Node(5);

let x = checkBalanced(node);

console.log(x);
