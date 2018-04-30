// Implement a function to check if a binary tree is a binary search tree

function isValidBST(root, min = null, max = null){
  if (root === null) { return true;}
  if ((min !== null && root <= min) || (max !== null && root > max) ) {
    return false;
  }
  if (!isValidBST(root.left,min,root) || !isValidBST(root.right,root,max)) {
    return false;
  }
  return true;
}

function Node(val){
  this.val = val;
  this.left = null;
  this.right = null;
}

let node = new Node(5);
node.left = new Node(1);
node.right = new Node(8);

node.left.left = new Node(0);
node.left.right = new Node(4);
node.right.left = new Node(6);

let x = isValidBST(node);

console.log(x);
