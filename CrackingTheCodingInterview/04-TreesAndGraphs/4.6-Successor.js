// Write an algorithm to find the next node (in order successor) of a given node in a binary search
// Tree

function successor(node){
  if (node === null) { return null;}
  if (node.right !== null) {
    return leftMostChild(node);
  }else {
    let parent = node.parent;
    while (parent !== null && parent.left !== node) {
      node = parent;
      parent = node.parent;
    }
  }
  return node;
}

function leftMostChild(node){
  if (node === null) { return null;}
  while (node.left !== null) {
    node = node.left;
  }
  return node;
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

let x = successor(node);

console.log(x);
