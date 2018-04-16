// Given a binary tree, design an algorithm whcih creates a linked list
// of all the nodes at each depth

function linkedList(node, arr, level = 1){
  if (node === null) {
    return;
  }
  if (arr[level-1] !== undefined) {
    arr[level -1].value.push(node);
  }else {
    arr.push(new LinkedList(level));
    arr[level -1].value.push(node);
  }
  linkedList(node.left, arr, level +1);
  linkedList(node.right, arr, level +1);
}

function wrapper(node){
  let arr = [new LinkedList(1)];
  linkedList(node,arr);
  console.log("level one is",arr[0]);
  console.log("level two is",arr[1]);
  console.log("level three is",arr[2]);
  console.log("level four is",arr[3]);
  return arr;
}

function Node(value){
  this.value = value;
  this.left = null;
  this.right = null;
}

function LinkedList(level){
  this.level = level;
  this.value = [];
  this.next = null;
}

// Tree - [0, 1, 2, 3, 4, 5]

let node = new Node(0);
node.left = new Node(1);
node.right = new Node(2);

node.left.left = new Node(3);
node.left.right = new Node(4);
node.right.left = new Node(5);

let x = wrapper(node);

console.log(x);
